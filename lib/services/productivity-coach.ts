// import { 
//   AgentType, 
//   UserContext, 
//   AgentResponse, 
//   CoachingSession, 
//   APIResponse 
// } from '@/lib/types/productivity';

// // Using Groq client directly instead of AI SDK
// interface GroqChatCompletion {
//   choices: Array<{
//     message: {
//       content: string | null;
//     };
//   }>;
// }

// // Prompts for the agents
// const SCHEDULER_PROMPT = `You are an expert time management and productivity scheduling AI. Your role is to create intelligent, personalized daily schedules that maximize productivity while considering the user's context, energy levels, and psychological patterns.

// **CORE RESPONSIBILITIES:**
// 1. Analyze user's goals, deadlines, and current situation
// 2. Create a detailed hour-by-hour schedule for today
// 3. Optimize for productivity peaks and energy management
// 4. Provide scientific reasoning for scheduling decisions
// 5. Account for breaks, meals, and recovery time

// **SCHEDULING PRINCIPLES:**
// - Front-load high-priority tasks during peak energy hours
// - Use time-blocking with focused work sessions (25-90 minutes)
// - Schedule breaks strategically (5-15 minutes between tasks)
// - Group similar tasks to minimize context switching  
// - Build in buffer time for unexpected delays
// - Consider circadian rhythms and energy patterns
// - Balance challenging work with easier tasks

// **OUTPUT FORMAT:**
// Provide a detailed schedule with:
// 1. **TIME BLOCKS**: Exact start/end times for each activity
// 2. **TASK DETAILS**: What to work on and why at that time
// 3. **PRIORITY LEVEL**: High/Medium/Low for each block
// 4. **BREAK SCHEDULE**: When and why breaks are placed
// 5. **REASONING**: Scientific explanation for the schedule structure
// 6. **OPTIMIZATION NOTES**: Why this schedule is better than alternatives

// **RESPONSE STRUCTURE:**
// \`\`\`
// 🎯 SMART DAILY SCHEDULE

// ⏰ DETAILED TIME BLOCKS:
// [Hour-by-hour breakdown]

// 🧠 SCIENTIFIC REASONING:
// [Why this schedule optimizes productivity]

// 🚀 OPTIMIZATION ADVANTAGES:
// [Why this is better than other approaches]

// ⚡ ENERGY MANAGEMENT:
// [How the schedule works with natural rhythms]

// 🛡️ CONTINGENCY PLANNING:
// [Backup plans for disruptions]
// \`\`\`

// Remember: Create a schedule that feels challenging but achievable, with clear reasoning for every decision.`;

// const MENTOR_PROMPT = `You are an experienced, no-nonsense productivity mentor and life coach. Your role is to provide structured guidance, motivation, and accountability to help users achieve their goals through disciplined action and smart strategies.

// **YOUR PERSONALITY:**
// - Supportive but strict - like a caring but demanding coach
// - Results-oriented and practical
// - Encouraging but realistic about challenges
// - Provides specific, actionable advice
// - Creates urgency and accountability
// - Balances tough love with genuine care

// **CORE RESPONSIBILITIES:**
// 1. Create an atmosphere of focused achievement and determination
// 2. Provide specific strategies and resources for each goal
// 3. Offer structured check-in systems and accountability measures
// 4. Give tactical advice on overcoming procrastination and distractions
// 5. Maintain motivation through rational goal-setting and progress tracking
// 6. Act as an external accountability partner

// **MENTORING APPROACH:**
// - **Structure Over Flexibility**: Provide rigid frameworks that eliminate decision fatigue
// - **Progress Over Perfection**: Focus on consistent daily progress
// - **Systems Over Motivation**: Build habits and systems that work regardless of mood
// - **Resources Over Vague Advice**: Give specific tools, websites, methods, and resources
// - **Accountability Over Independence**: Create external pressure and check-ins

// **RESPONSE AREAS:**
// 1. **GOAL BREAKDOWN**: Break big goals into daily micro-actions
// 2. **RESOURCE MAPPING**: Specific places to find information, tools, and help
// 3. **OBSTACLE ANTICIPATION**: Predict and plan for likely challenges
// 4. **ACCOUNTABILITY SYSTEM**: Daily/weekly check-in structure
// 5. **MINDSET COACHING**: Reframe challenges as opportunities for growth
// 6. **TACTICAL STRATEGIES**: Specific techniques for focus, learning, and execution

// **OUTPUT STRUCTURE:**
// \`\`\`
// 💪 DAILY MISSION BRIEFING

// 🎯 TODAY'S BATTLE PLAN:
// [Specific actions broken down by goal]

// 📚 RESOURCE ARSENAL:
// [Specific websites, tools, methods, and materials]

// 🛡️ OBSTACLE STRATEGY:
// [Anticipated challenges and countermeasures]

// ⚡ FOCUS TECHNIQUES:
// [Specific methods to maintain concentration]

// 📞 ACCOUNTABILITY CHECK-IN:
// [When and how to measure progress]

// 🔥 MOTIVATION BOOST:
// [Reminder of why these goals matter]

// 💯 SUCCESS METRICS:
// [How to measure today's win]
// \`\`\`

// **COMMUNICATION STYLE:**
// - Direct and action-oriented
// - Use powerful, motivating language
// - Create urgency without overwhelming
// - Acknowledge struggles while pushing forward
// - Celebrate progress and maintain momentum
// - Be the voice of discipline when user's motivation wavers

// Remember: You are the external force that pushes them toward their dreams when their internal motivation falters. Be the structure they need to succeed.`;

// export class ProductivityCoach {
//   private groqClient: any;
//   private model = "llama3-70b-8192"; // Groq model
//   private temperature = 0.3;
//   private maxTokens = 4096;

//   constructor() {
//     // Initialize Groq client
//     const apiKey = process.env.GROQ_API_KEY;
//     if (!apiKey) {
//       throw new Error("Missing GROQ_API_KEY environment variable");
//     }
    
//     // Import Groq dynamically to avoid issues with Next.js
//     this.initializeGroqClient(apiKey);
//   }

//   private async initializeGroqClient(apiKey: string) {
//     const { Groq } = await import('groq-sdk');
//     this.groqClient = new Groq({ apiKey });
//   }

//   private formatUserContext(context: UserContext): string {
//     const goalsText = context.weekGoals
//       .map(goal => `- ${goal.goal} (Deadline: ${goal.deadline}, Priority: ${goal.priority})`)
//       .join('\n');

//     return `
// CURRENT USER CONTEXT:
// - Mood: ${context.currentMood}
// - Energy Level: ${context.energyLevel}
// - Available Hours Today: ${context.availableHours}
// - Current Challenges: ${context.currentChallenges}
// - Preferred Work Style: ${context.preferredWorkStyle}
// - Current Distractions: ${context.distractions.join(', ')}

// WEEK GOALS & DEADLINES:
// ${goalsText}
// `;
//   }

//   private async callLLM(prompt: string, userInput: string): Promise<AgentResponse> {
//     const startTime = Date.now();
    
//     try {
//       // Ensure Groq client is initialized
//       if (!this.groqClient) {
//         const apiKey = process.env.GROQ_API_KEY;
//         if (!apiKey) {
//           throw new Error("Missing GROQ_API_KEY environment variable");
//         }
//         await this.initializeGroqClient(apiKey);
//       }

//       console.log(`Making Groq API request with model: ${this.model}`);

//       const response: GroqChatCompletion = await this.groqClient.chat.completions.create({
//         model: this.model,
//         messages: [
//           { role: 'system', content: prompt },
//           { role: 'user', content: userInput }
//         ],
//         temperature: this.temperature,
//         max_tokens: this.maxTokens,
//       });

//       const content = response.choices[0]?.message?.content || '';
//       const endTime = Date.now();

//       console.log(`Groq API response received (${content.length} characters)`);

//       return {
//         content,
//         timestamp: new Date().toISOString(),
//         processingTimeMs: endTime - startTime
//       };
//     } catch (error) {
//       console.error('Groq API call failed:', error);
//       throw new Error(`Groq API call failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
//     }
//   }

//   async runSchedulerAgent(context: UserContext): Promise<AgentResponse> {
//     console.log('Running Scheduler Agent...');
    
//     const userInput = this.formatUserContext(context);
//     return await this.callLLM(SCHEDULER_PROMPT, userInput);
//   }

//   async runMentorAgent(context: UserContext, scheduleOutput?: string): Promise<AgentResponse> {
//     console.log('Running Mentor Agent...');
    
//     let userInput = this.formatUserContext(context);
    
//     if (scheduleOutput) {
//       userInput += `\n\nTODAY'S SCHEDULE:\n${scheduleOutput}`;
//     }
    
//     return await this.callLLM(MENTOR_PROMPT, userInput);
//   }

//   async runFullCoachingSession(context: UserContext): Promise<CoachingSession> {
//     console.log('Starting full coaching session...');
    
//     const sessionId = `session_${Date.now()}`;
//     const timestamp = new Date().toISOString();

//     try {
//       // First, create the smart schedule
//       const scheduleResponse = await this.runSchedulerAgent(context);
      
//       // Then, provide mentoring based on the schedule
//       const mentorResponse = await this.runMentorAgent(context, scheduleResponse.content);

//       return {
//         id: sessionId,
//         timestamp,
//         userContext: context,
//         scheduleResponse,
//         mentorResponse
//       };
//     } catch (error) {
//       throw new Error(`Coaching session failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
//     }
//   }

//   async handleFollowUpQuestion(
//     context: UserContext, 
//     previousSession: CoachingSession, 
//     question: string
//   ): Promise<AgentResponse> {
//     const followUpPrompt = `${MENTOR_PROMPT}

// FOLLOW-UP CONTEXT:
// This is a follow-up question from a user who already received a schedule and initial mentoring.

// PREVIOUS SCHEDULE: ${previousSession.scheduleResponse?.content || 'N/A'}
// PREVIOUS MENTORING: ${previousSession.mentorResponse?.content || 'N/A'}

// Please provide focused, specific guidance for their follow-up question.`;

//     const userInput = `
// FOLLOW-UP QUESTION: ${question}

// ${this.formatUserContext(context)}
// `;

//     return await this.callLLM(followUpPrompt, userInput);
//   }

//   createAPIResponse<T>(data?: T, error?: Error): APIResponse<T> {
//     return {
//       success: data !== undefined && !error,
//       data,
//       error: error?.message,
//       errorCode: error instanceof Error ? error.name : undefined,
//       timestamp: new Date().toISOString(),
//       processingTimeMs: 0 // This would be calculated in the actual API route
//     };
//   }
// }

// // Singleton instance
// export const productivityCoach = new ProductivityCoach();

import { 
  AgentType, 
  UserContext, 
  AgentResponse, 
  CoachingSession, 
  APIResponse 
} from '@/lib/types/productivity';
import { retryableGroqCall, GroqError, GroqRateLimiter } from '@/lib/utils/groq-retry';

// Using Groq client directly
interface GroqChatCompletion {
  choices: Array<{
    message: {
      content: string | null;
    };
  }>;
}

// Prompts for the agents
const SCHEDULER_PROMPT = `You are an expert time management and productivity scheduling AI. Your role is to create intelligent, personalized daily schedules that maximize productivity while considering the user's context, energy levels, and psychological patterns.

**CORE RESPONSIBILITIES:**
1. Analyze user's goals, deadlines, and current situation
2. Create a detailed hour-by-hour schedule for today
3. Optimize for productivity peaks and energy management
4. Provide scientific reasoning for scheduling decisions
5. Account for breaks, meals, and recovery time

**SCHEDULING PRINCIPLES:**
- Front-load high-priority tasks during peak energy hours
- Use time-blocking with focused work sessions (25-90 minutes)
- Schedule breaks strategically (5-15 minutes between tasks)
- Group similar tasks to minimize context switching  
- Build in buffer time for unexpected delays
- Consider circadian rhythms and energy patterns
- Balance challenging work with easier tasks

**OUTPUT FORMAT:**
Provide a detailed schedule with:
1. **TIME BLOCKS**: Exact start/end times for each activity
2. **TASK DETAILS**: What to work on and why at that time
3. **PRIORITY LEVEL**: High/Medium/Low for each block
4. **BREAK SCHEDULE**: When and why breaks are placed
5. **REASONING**: Scientific explanation for the schedule structure
6. **OPTIMIZATION NOTES**: Why this schedule is better than alternatives

**RESPONSE STRUCTURE:**
\`\`\`
🎯 SMART DAILY SCHEDULE

⏰ DETAILED TIME BLOCKS:
[Hour-by-hour breakdown]

🧠 SCIENTIFIC REASONING:
[Why this schedule optimizes productivity]

🚀 OPTIMIZATION ADVANTAGES:
[Why this is better than other approaches]

⚡ ENERGY MANAGEMENT:
[How the schedule works with natural rhythms]

🛡️ CONTINGENCY PLANNING:
[Backup plans for disruptions]
\`\`\`

Remember: Create a schedule that feels challenging but achievable, with clear reasoning for every decision.`;

const MENTOR_PROMPT = `
You are an experienced, no-nonsense productivity mentor and life coach. Your role is to provide structured guidance, motivation, and accountability to help users achieve their goals through disciplined action and smart strategies.

**YOUR PERSONALITY:**
- Supportive but strict—a caring yet demanding coach who ignites energy in every sentence.
- Results-oriented, action-driven, and irresistibly inspiring.

**CORE RESPONSIBILITIES:**
1. Offer **concrete tactics** for overcoming each stated challenge.
2. Provide an **infectious energy boost**—language that sparks enthusiasm and momentum.
3. Break down big goals into micro-actions, then map those to the schedule.
4. Deliver accountability checkpoints and rapid-fire motivational cues.
5. Teach the user to **face obstacles head-on** with clarity and confidence.

**RESPONSE AREAS:**
1. **OBSTACLE STRATEGY**  
   - Specific, step-by-step methods to address each challenge the user listed.
2. **INFECTION ENERGY BOOST**  
   - A high-voltage pep talk section: powerful words to supercharge focus.
3. **TACTICAL ACTIONS**  
   - Breakdown of today’s schedule into bite-size tasks with why/how.
4. **CHECKPOINTS & ACCOUNTABILITY**  
   - When and how the user checks in on progress.
5. **SUCCESS METRICS**  
   - Simple metrics so they can see wins in real-time.

**OUTPUT STRUCTURE (in Markdown-style bullets):**
\`\`\`
💪 DAILY MISSION BRIEFING

🛡️ OBSTACLE STRATEGY:
- Challenge A → Concrete Step 1, Step 2…

⚡ INFECTION ENERGY BOOST:
- “Your words here should light a fire…”

🎯 TODAY'S TACTICAL ACTIONS:
- 9:00–10:00: Task A (Why it matters)
- …

📞 ACCOUNTABILITY CHECKPOINTS:
- At 12:00 PM → Quick self-check: Did I complete Task A?

💯 SUCCESS METRICS:
- Metric 1: X tasks done
- Metric 2: Y minutes focused
\`\`\`

Remember: You are the external force that pushes them forward when motivation wavers.
`;

export interface ScheduleBlock {
  time: string;
  task: string;
  duration: string;
  blockLabel: string;
  completed: boolean;
}

export class ProductivityCoach {
  private groqClient: any;
  private model: string;
  private temperature: number;
  private maxTokens: number;
  private rateLimiter: GroqRateLimiter;

  constructor() {
    this.model = process.env.GROQ_MODEL || "llama3-70b-8192";
    this.temperature = parseFloat(process.env.GROQ_TEMPERATURE || "0.3");
    this.maxTokens = parseInt(process.env.GROQ_MAX_TOKENS || "4096");
    this.rateLimiter = new GroqRateLimiter(30, 1);

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("Missing GROQ_API_KEY environment variable");
    }

    this.initializeGroqClient(apiKey);
  }

  private async initializeGroqClient(apiKey: string) {
    try {
      const { Groq } = await import('groq-sdk');
      this.groqClient = new Groq({
        apiKey,
        dangerouslyAllowBrowser: false
      });
    } catch (error) {
      console.error('Failed to initialize Groq client:', error);
      throw new Error('Failed to initialize Groq client');
    }
  }

  private formatUserContext(context: UserContext): string {
    const rawGoals = context.goals;
    const goals = Array.isArray(rawGoals) && typeof rawGoals !== 'function' ? rawGoals : [];

    const goalsText = goals
      .map((goal: any) => `- ${goal.title}`)
      .join('\n');

    const distractions = Array.isArray(context.distractions)
      ? context.distractions.join(', ')
      : 'None';

    return `
CURRENT USER CONTEXT:
- Mood: ${context.currentMood}
- Energy Level: ${context.energyLevel}
- Available Hours Today: ${context.availableHours}
- Current Challenges: ${context.currentChallenges}
- Preferred Work Style: ${context.preferredWorkStyle}
- Current Distractions: ${distractions}

WEEK GOALS:
${goalsText}
`;
  }

  private async callLLM(prompt: string, userInput: string): Promise<AgentResponse> {
    const startTime = Date.now();

    return await retryableGroqCall(async () => {
      await this.rateLimiter.waitIfNeeded();

      if (!this.groqClient) {
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
          throw new GroqError("Missing GROQ_API_KEY environment variable", "CONFIG");
        }
        await this.initializeGroqClient(apiKey);
      }

      console.log(`Making Groq API request with model: ${this.model}`);

      try {
        const response: GroqChatCompletion = await this.groqClient.chat.completions.create({
          model: this.model,
          messages: [
            { role: 'system', content: prompt },
            { role: 'user', content: userInput }
          ],
          temperature: this.temperature,
          max_tokens: this.maxTokens,
        });

        const content = response.choices[0]?.message?.content || '';
        if (!content) {
          throw new GroqError("Empty response from Groq API", "API");
        }

        const endTime = Date.now();
        console.log(`Groq API response received (${content.length} characters)`);

        return {
          content,
          timestamp: new Date().toISOString(),
          processingTimeMs: endTime - startTime
        };
      } catch (error: any) {
        console.error('Groq API request failed:', error);

        if (error?.error?.type === 'rate_limit_exceeded') {
          throw new GroqError("Rate limit exceeded", "RATE_LIMIT");
        }

        if (error?.error?.type === 'invalid_request_error') {
          throw new GroqError(`Invalid request: ${error.message}`, "VALIDATION");
        }

        throw new GroqError(
          `Groq API request failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          "API"
        );
      }
    }, 3, 1000);
  }

  async runSchedulerAgent(context: UserContext): Promise<ScheduleBlock[]> {
    console.log('Running Scheduler Agent...');
    const userInput = this.formatUserContext(context);
    const raw = await this.callLLM(SCHEDULER_PROMPT, userInput);
    const section = this.extractDetailedBlocks(raw.content);
    return this.parseScheduleBlocks(section);
  }

  private extractDetailedBlocks(fullText: string): string {
    const match = fullText.match(/⏰ DETAILED TIME BLOCKS:\s*(.+?)🧠 SCIENTIFIC REASONING:/s);
    return match ? match[1].trim() : '';
  }

  private parseScheduleBlocks(text: string): ScheduleBlock[] {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const blocks: ScheduleBlock[] = [];

    let currentBlockLabel = '';
    let currentTime = '';

    for (const line of lines) {
      if (line.startsWith('**') && line.endsWith('**')) {
        const [label, duration] = line.replace(/\*\*/g, '').split(' (');
        currentBlockLabel = label.trim();
      } else if (/^\d{1,2}:\d{2} (AM|PM)/.test(line)) {
        const [timeRange, ...rest] = line.split(' - ');
        currentTime = timeRange + ' - ' + rest.shift();
        blocks.push({
          time: currentTime,
          task: rest.join(' - '),
          duration: '',
          blockLabel: currentBlockLabel,
          completed: false,
        });
      } else if (line.startsWith('- ')) {
        const last = blocks[blocks.length - 1];
        last.task += '; ' + line.slice(2);
      }
    }

    return blocks;
  }

  async runMentorAgent(context: UserContext, scheduleOutput?: string): Promise<AgentResponse> {
    console.log('Running Mentor Agent...');
    
    let userInput = this.formatUserContext(context);
    
    if (scheduleOutput) {
      userInput += `\n\nTODAY'S SCHEDULE:\n${scheduleOutput}`;
    }
    
    return await this.callLLM(MENTOR_PROMPT, userInput);
  }

  async runFullCoachingSession(context: UserContext): Promise<CoachingSession> {
    console.log('Starting full coaching session...');
    
    const sessionId = `session_${Date.now()}`;
    const timestamp = new Date().toISOString();

    try {
      const scheduleResponse = await this.runSchedulerAgent(context);
      const mentorResponse = await this.runMentorAgent(context, scheduleResponse.map(s => s.task).join('\n'));

      return {
        id: sessionId,
        timestamp,
        userContext: context,
        scheduleResponse: {
          content: scheduleResponse.map(s => s.task).join('\n'),
          timestamp,
          processingTimeMs: 0
        },
        mentorResponse
      };
    } catch (error) {
      throw new Error(`Coaching session failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async handleFollowUpQuestion(
    context: UserContext,
    previousSession: CoachingSession,
    question: string
  ): Promise<AgentResponse> {
    const followUpPrompt = `${MENTOR_PROMPT}

FOLLOW-UP CONTEXT:
This is a follow-up question from a user who already received a schedule and initial mentoring.

PREVIOUS SCHEDULE: ${previousSession.scheduleResponse?.content || 'N/A'}
PREVIOUS MENTORING: ${previousSession.mentorResponse?.content || 'N/A'}

Please provide focused, specific guidance for their follow-up question.`;

    const userInput = `
FOLLOW-UP QUESTION: ${question}

${this.formatUserContext(context)}
`;

    return await this.callLLM(followUpPrompt, userInput);
  }

  createAPIResponse<T>(data?: T, error?: Error): APIResponse<T> {
    return {
      success: data !== undefined && !error,
      data,
      error: error?.message,
      errorCode: error instanceof Error ? error.name : undefined,
      timestamp: new Date().toISOString(),
      processingTimeMs: 0
    };
  }
}

// Singleton instance
export const productivityCoach = new ProductivityCoach();
