// Types for the productivity coach system

export enum AgentType {
  SCHEDULER = 'scheduler',
  MENTOR = 'mentor'
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export enum EnergyLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export interface WeekGoal {
  id?: string;
  goal: string;
  deadline: string;
  priority: Priority;
  progress?: number; // 0-100
}

export interface UserContext {
  goals(goals: any): unknown;
  currentMood: string;
  energyLevel: EnergyLevel;
  availableHours: number;
  distractions: string[];
  preferredWorkStyle: string;
  currentChallenges: string;
  weekGoals: WeekGoal[];
  timezone?: string;
  preferredStartTime?: string;
}

export interface ScheduleBlock {
  startTime: string;
  endTime: string;
  task: string;
  priority: Priority;
  breakAfter: boolean;
  reasoning?: string;
}

export interface AgentResponse {
  content: string;
  timestamp: string;
  processingTimeMs: number;
}

export interface CoachingSession {
  id: string;
  userId?: string;
  timestamp: string;
  userContext: UserContext;
  scheduleResponse?: AgentResponse;
  mentorResponse?: AgentResponse;
  followUpQuestions?: string[];
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errorCode?: string;
  timestamp: string;
  processingTimeMs: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  agentType?: AgentType;
  metadata?: {
    userContext?: UserContext;
    sessionId?: string;
  };
}