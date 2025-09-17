// app/coaching/page.tsx
import {  
  UserContext, 
  AgentResponse, 
  CoachingSession, 
} from '@/lib/types/productivity';
// drop AgentType and APIResponse since they’re not used

// Prompts for the agents (unchanged)
const SCHEDULER_PROMPT = `…`;  // (your big scheduler prompt here)
const MENTOR_PROMPT    = `…`;  // (your big mentor prompt here)

interface GroqChatCompletion {
  choices: Array<{ message: { content: string | null } }>;
}

async function simpleRetry<T>(fn: () => Promise<T>, attempts = 3, delayMs = 1000): Promise<T> {
  let lastErr: any;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (i < attempts - 1) {
        await new Promise(r => setTimeout(r, delayMs));
      }
    }
  }
  throw lastErr;
}

export class ProductivityCoach {
  private groqClient: any;
  private model: string;
  private temperature: number;
  private maxTokens: number;

  constructor() {
    this.model       = process.env.GROQ_MODEL       || 'llama3-70b-8192';
    this.temperature = parseFloat(process.env.GROQ_TEMPERATURE || '0.3');
    this.maxTokens   = parseInt  (process.env.GROQ_MAX_TOKENS   || '4096', 10);

    const key = process.env.GROQ_API_KEY;
    if (!key) throw new Error('Missing GROQ_API_KEY');
    // don't await here—just start initialization
    this.initGroq(key);
  }

  private async initGroq(apiKey: string) {
    const { Groq } = await import('groq-sdk');
    this.groqClient = new Groq({ apiKey, dangerouslyAllowBrowser: false });
  }

  private formatUserContext(ctx: UserContext): string {
    const goals = ctx.weekGoals
      .map(g => `- ${g.goal} (by ${g.deadline}, ${g.priority})`)
      .join('\n');
    return `
USER CONTEXT:
Mood: ${ctx.currentMood}
Energy: ${ctx.energyLevel}
Hours available: ${ctx.availableHours}
Challenges: ${ctx.currentChallenges}
Work style: ${ctx.preferredWorkStyle}
Distractions: ${ctx.distractions.join(', ')}

WEEK GOALS:
${goals}
`;
  }

  private async callLLM(prompt: string, userInput: string): Promise<AgentResponse> {
    const start = Date.now();
    return simpleRetry(async () => {
      if (!this.groqClient) {
        // ensure client ready
        await this.initGroq(process.env.GROQ_API_KEY!);
      }
      const res: GroqChatCompletion = await this.groqClient.chat.completions.create({
        model: this.model,
        messages: [
          { role: 'system', content: prompt },
          { role: 'user',   content: userInput }
        ],
        temperature: this.temperature,
        max_tokens: this.maxTokens,
      });
      const text = res.choices[0]?.message?.content || '';
      if (!text) throw new Error('Empty Groq response');
      return {
        content: text,
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start
      };
    });
  }

  async runSchedulerAgent(ctx: UserContext): Promise<AgentResponse> {
    return this.callLLM(SCHEDULER_PROMPT, this.formatUserContext(ctx));
  }

  async runMentorAgent(ctx: UserContext, schedule?: string): Promise<AgentResponse> {
    let input = this.formatUserContext(ctx);
    if (schedule) input += `\n\nTODAY'S SCHEDULE:\n${schedule}`;
    return this.callLLM(MENTOR_PROMPT, input);
  }

  async runFullCoachingSession(ctx: UserContext): Promise<CoachingSession> {
    const sessionId = `session_${Date.now()}`;
    const ts = new Date().toISOString();
    const sched = await this.runSchedulerAgent(ctx);
    const mentor = await this.runMentorAgent(ctx, sched.content);
    return { id: sessionId, timestamp: ts, userContext: ctx, scheduleResponse: sched, mentorResponse: mentor };
  }

  async handleFollowUpQuestion(
    ctx: UserContext,
    prev: CoachingSession,
    question: string
  ): Promise<AgentResponse> {
    const followUpPrompt = `${MENTOR_PROMPT}

FOLLOW-UP:
Previous schedule: ${(prev.scheduleResponse?.content ?? '')}
Previous mentoring: ${(prev.mentorResponse?.content ?? '')}

Please answer: ${question}
`;
    return this.callLLM(followUpPrompt, this.formatUserContext(ctx));
  }
}

// Export a singleton
export const productivityCoach = new ProductivityCoach();
