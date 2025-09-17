// import { useState, useCallback } from 'react';
// import { UserContext, CoachingSession, APIResponse, AgentResponse } from '@/lib/types/productivity';

// interface UseCoachingOptions {
//   onSuccess?: (session: CoachingSession) => void;
//   onError?: (error: string) => void;
// }

// export function useCoaching(options: UseCoachingOptions = {}) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentSession, setCurrentSession] = useState<CoachingSession | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const callCoachingAPI = useCallback(async (
//     action: string,
//     userContext: UserContext,
//     additionalData?: { sessionId?: string; question?: string }
//   ): Promise<APIResponse> => {
//     const response = await fetch('/api/coaching', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         action,
//         userContext,
//         ...additionalData,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   }, []);

//   const runFullSession = useCallback(async (userContext: UserContext) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await callCoachingAPI('full_session', userContext);
      
//       if (response.success && response.data) {
//         setCurrentSession(response.data);
//         options.onSuccess?.(response.data);
//         return response.data;
//       } else {
//         throw new Error(response.error || 'Failed to run coaching session');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
//       setError(errorMessage);
//       options.onError?.(errorMessage);
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   }, [callCoachingAPI, options]);

//   const runSchedulerOnly = useCallback(async (userContext: UserContext) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await callCoachingAPI('schedule_only', userContext);
      
//       if (response.success && response.data) {
//         return response.data.scheduleResponse;
//       } else {
//         throw new Error(response.error || 'Failed to generate schedule');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
//       setError(errorMessage);
//       options.onError?.(errorMessage);
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   }, [callCoachingAPI, options]);

//   const runMentorOnly = useCallback(async (userContext: UserContext) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await callCoachingAPI('mentor_only', userContext);
      
//       if (response.success && response.data) {
//         return response.data.mentorResponse;
//       } else {
//         throw new Error(response.error || 'Failed to get mentoring advice');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
//       setError(errorMessage);
//       options.onError?.(errorMessage);
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   }, [callCoachingAPI, options]);

//   const askFollowUp = useCallback(async (
//     userContext: UserContext,
//     question: string,
//     sessionId?: string
//   ) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await callCoachingAPI('follow_up', userContext, {
//         sessionId: sessionId || currentSession?.id,
//         question,
//       });
      
//       if (response.success && response.data) {
//         return response.data as AgentResponse;
//       } else {
//         throw new Error(response.error || 'Failed to get follow-up response');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
//       setError(errorMessage);
//       options.onError?.(errorMessage);
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   }, [callCoachingAPI, currentSession, options]);

//   const clearSession = useCallback(() => {
//     setCurrentSession(null);
//     setError(null);
//   }, []);

//   return {
//     isLoading,
//     currentSession,
//     error,
//     runFullSession,
//     runSchedulerOnly,
//     runMentorOnly,
//     askFollowUp,
//     clearSession,
//   };
// }

import { useState, useCallback } from 'react';
import { UserContext, CoachingSession, APIResponse, AgentResponse } from '@/lib/types/productivity';

interface UseCoachingOptions {
  onSuccess?: (session: CoachingSession) => void;
  onError?: (error: string) => void;
}

export function useCoaching(options: UseCoachingOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSession, setCurrentSession] = useState<CoachingSession | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Unified fetch helper to your coaching API endpoint
  const callCoachingAPI = useCallback(
    async (
      action: 'full_session' | 'schedule_only' | 'mentor_only' | 'follow_up',
      userContext: UserContext,
      additionalData?: { sessionId?: string; question?: string }
    ): Promise<APIResponse> => {
      const response = await fetch('/api/coaching', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, userContext, ...additionalData }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    []
  );

  const runFullSession = useCallback(
    async (userContext: UserContext) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await callCoachingAPI('full_session', userContext);
        if (res.success && res.data) {
          setCurrentSession(res.data as CoachingSession);
          options.onSuccess?.(res.data as CoachingSession);
          return res.data as CoachingSession;
        } else {
          throw new Error(res.error || 'Failed to run coaching session');
        }
      } catch (err: any) {
        const message = err.message || 'Unknown error';
        setError(message);
        options.onError?.(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [callCoachingAPI, options]
  );

  const runSchedulerOnly = useCallback(
    async (userContext: UserContext) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await callCoachingAPI('schedule_only', userContext);
        if (res.success && res.data) {
          return (res.data as any).scheduleResponse as AgentResponse;
        } else {
          throw new Error(res.error || 'Failed to generate schedule');
        }
      } catch (err: any) {
        const message = err.message || 'Unknown error';
        setError(message);
        options.onError?.(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [callCoachingAPI, options]
  );

  const runMentorOnly = useCallback(
    async (userContext: UserContext) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await callCoachingAPI('mentor_only', userContext);
        if (res.success && res.data) {
          return (res.data as any).mentorResponse as AgentResponse;
        } else {
          throw new Error(res.error || 'Failed to get mentoring advice');
        }
      } catch (err: any) {
        const message = err.message || 'Unknown error';
        setError(message);
        options.onError?.(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [callCoachingAPI, options]
  );

  const askFollowUp = useCallback(
    async (userContext: UserContext, question: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await callCoachingAPI('follow_up', userContext, {
          sessionId: currentSession?.id,
          question,
        });
        if (res.success && res.data) {
          return res.data as AgentResponse;
        } else {
          throw new Error(res.error || 'Failed to get follow-up response');
        }
      } catch (err: any) {
        const message = err.message || 'Unknown error';
        setError(message);
        options.onError?.(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [callCoachingAPI, currentSession, options]
  );

  const clearSession = useCallback(() => {
    setCurrentSession(null);
    setError(null);
  }, []);

  return {
    isLoading,
    currentSession,
    error,
    runFullSession,
    runSchedulerOnly,
    runMentorOnly,
    askFollowUp,
    clearSession,
  };
}
