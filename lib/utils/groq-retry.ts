// Utility for retry logic with exponential backoff (similar to Python version)

export class GroqError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'GroqError';
  }
}

export async function retryableGroqCall<T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error | null = null;
  
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error');
      
      // Don't retry validation errors
      if (error instanceof GroqError && error.code === "VALIDATION") {
        console.error(`Validation error (no retry): ${error.message}`);
        throw error;
      }
      
      if (i < attempts - 1) {
        const delay = delayMs * Math.pow(2, i); // Exponential backoff
        console.warn(`Attempt ${i + 1} failed, retrying in ${delay}ms: ${lastError.message}`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error(`All ${attempts} attempts failed`);
      }
    }
  }
  
  throw lastError || new GroqError("Unknown failure", "API");
}

// Rate limiting helper
export class GroqRateLimiter {
  private requests: number[] = [];
  private readonly maxRequests: number;
  private readonly timeWindow: number; // in milliseconds

  constructor(maxRequests: number = 30, timeWindowMinutes: number = 1) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindowMinutes * 60 * 1000;
  }

  async waitIfNeeded(): Promise<void> {
    const now = Date.now();
    
    // Remove old requests outside the time window
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = Math.min(...this.requests);
      const waitTime = this.timeWindow - (now - oldestRequest);
      
      if (waitTime > 0) {
        console.log(`Rate limit reached, waiting ${waitTime}ms`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
    
    this.requests.push(now);
  }
}