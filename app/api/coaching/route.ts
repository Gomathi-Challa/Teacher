import { NextRequest, NextResponse } from 'next/server';
import { productivityCoach } from '@/lib/services/productivity-coach';
import { UserContext, CoachingSession } from '@/lib/types/productivity';

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body = await req.json();
    const { userContext, action, sessionId, question } = body;

    if (!userContext) {
      return NextResponse.json(
        productivityCoach.createAPIResponse(null, new Error('User context is required')),
        { status: 400 }
      );
    }

    let result: CoachingSession | any;

    switch (action) {
      case 'full_session':
        result = await productivityCoach.runFullCoachingSession(userContext as UserContext);
        break;
        
      case 'schedule_only':
        const scheduleResponse = await productivityCoach.runSchedulerAgent(userContext as UserContext);
        result = { scheduleResponse };
        break;
        
      case 'mentor_only':
        const mentorResponse = await productivityCoach.runMentorAgent(userContext as UserContext);
        result = { mentorResponse };
        break;
        
      case 'follow_up':
        if (!sessionId || !question) {
          return NextResponse.json(
            productivityCoach.createAPIResponse(null, new Error('Session ID and question are required for follow-up')),
            { status: 400 }
          );
        }
        // In a real app, you'd fetch the previous session from your database
        // For now, we'll create a basic session structure
        const mockPreviousSession: CoachingSession = {
          id: sessionId,
          timestamp: new Date().toISOString(),
          userContext: userContext as UserContext
        };
        
        result = await productivityCoach.handleFollowUpQuestion(
          userContext as UserContext,
          mockPreviousSession,
          question
        );
        break;
        
      default:
        return NextResponse.json(
          productivityCoach.createAPIResponse(null, new Error('Invalid action')),
          { status: 400 }
        );
    }

    const endTime = Date.now();
    const response = productivityCoach.createAPIResponse(result);
    response.processingTimeMs = endTime - startTime;

    return NextResponse.json(response);

  } catch (error) {
    const endTime = Date.now();
    console.error('Coaching API error:', error);
    
    const response = productivityCoach.createAPIResponse(
      null, 
      error instanceof Error ? error : new Error('Unknown error occurred')
    );
    response.processingTimeMs = endTime - startTime;

    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Productivity Coach API',
    endpoints: {
      POST: {
        '/api/coaching': {
          description: 'Main coaching endpoint',
          actions: [
            'full_session - Run both scheduler and mentor agents',
            'schedule_only - Run only the scheduler agent',
            'mentor_only - Run only the mentor agent',
            'follow_up - Ask follow-up questions'
          ],
          requiredFields: ['userContext'],
          optionalFields: ['action', 'sessionId', 'question']
        }
      }
    }
  });
}