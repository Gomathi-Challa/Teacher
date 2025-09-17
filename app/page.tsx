// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Button } from '@/components/ui/button';
// // // // Badge component
// // // type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
// // //     variant?: 'outline' | 'default';
// // // };
// // // export function Badge({ variant = 'default', className = '', ...props }: BadgeProps) {
// // //     const base =
// // //         'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
// // //     const variants = {
// // //         default: 'bg-blue-100 text-blue-800',
// // //         outline: 'border border-blue-300 text-blue-800 bg-transparent',
// // //     };
// // //     return (
// // //         <span className={`${base} ${variants[variant]} ${className}`} {...props} />
// // //     );
// // // }

// // // // Alert component
// // // type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
// // //     variant?: 'destructive' | 'default';
// // // };
// // // export function Alert({ variant = 'default', className = '', children, ...props }: AlertProps) {
// // //     const base =
// // //         'w-full rounded-lg border p-4 text-sm flex items-start gap-2';
// // //     const variants = {
// // //         default: 'bg-gray-50 border-gray-200 text-gray-900',
// // //         destructive: 'bg-red-50 border-red-200 text-red-900',
// // //     };
// // //     return (
// // //         <div className={`${base} ${variants[variant]} ${className}`} {...props}>
// // //             {children}
// // //         </div>
// // //     );
// // // }

// // // export function AlertDescription({ children }: { children: React.ReactNode }) {
// // //     return <div className="flex-1">{children}</div>;
// // // }
// // // import { ArrowLeft, Brain, Calendar, Target, Zap } from 'lucide-react';
// // // import { ContextForm } from '@/components/coaching/context-form';
// // // import {CoachingResults } from '@/components/coaching/coaching-results';
// // // import { useCoaching } from '@/hooks/use-coaching';
// // // import { UserContext, CoachingSession } from '@/lib/types/productivity';

// // // type ViewState = 'welcome' | 'form' | 'results';

// // // export default function CoachingPage() {
// // //   const [currentView, setCurrentView] = useState<ViewState>('welcome');
// // //   const [currentContext, setCurrentContext] = useState<UserContext | null>(null);

// // //   const {
// // //     isLoading,
// // //     currentSession,
// // //     error,
// // //     runFullSession,
// // //     askFollowUp,
// // //     clearSession,
// // //   } = useCoaching({
// // //     onSuccess: (session: CoachingSession) => {
// // //       setCurrentView('results');
// // //     },
// // //     onError: (error: string) => {
// // //       console.error('Coaching error:', error);
// // //     }
// // //   });

// // //   const handleStartCoaching = () => {
// // //     setCurrentView('form');
// // //     clearSession();
// // //   };

// // //   const handleFormSubmit = async (context: UserContext) => {
// // //     setCurrentContext(context);
// // //     await runFullSession(context);
// // //   };

// // //   const handleBackToWelcome = () => {
// // //     setCurrentView('welcome');
// // //     setCurrentContext(null);
// // //     clearSession();
// // //   };

// // //   const handleFollowUp = async (question: string) => {
// // //     if (!currentContext) throw new Error('No context available');
// // //     return await askFollowUp(currentContext, question);
// // //   };

// // //   const renderWelcome = () => (
// // //     <div className="max-w-4xl mx-auto space-y-8">
// // //       <div className="text-center space-y-4">
// // //         <div className="flex justify-center">
// // //           <div className="p-4 bg-blue-100 rounded-full">
// // //             <Brain className="h-12 w-12 text-blue-600" />
// // //           </div>
// // //         </div>
// // //         <h1 className="text-4xl font-bold tracking-tight">AI Productivity Coach</h1>
// // //         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // //           Get a personalized daily schedule and expert mentoring to achieve your goals faster than ever before.
// // //         </p>
// // //       </div>

// // //       <div className="grid md:grid-cols-3 gap-6">
// // //         <Card className="text-center">
// // //           <CardHeader>
// // //             <Calendar className="h-8 w-8 mx-auto text-blue-600" />
// // //             <CardTitle>Smart Scheduling</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <p className="text-sm text-muted-foreground">
// // //               Get an optimized daily schedule based on your energy levels, goals, and scientific productivity principles.
// // //             </p>
// // //           </CardContent>
// // //         </Card>

// // //         <Card className="text-center">
// // //           <CardHeader>
// // //             <Target className="h-8 w-8 mx-auto text-green-600" />
// // //             <CardTitle>Goal-Driven Planning</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <p className="text-sm text-muted-foreground">
// // //               Break down your weekly goals into actionable daily tasks with clear priorities and deadlines.
// // //             </p>
// // //           </CardContent>
// // //         </Card>

// // //         <Card className="text-center">
// // //           <CardHeader>
// // //             <Zap className="h-8 w-8 mx-auto text-purple-600" />
// // //             <CardTitle>AI Mentoring</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <p className="text-sm text-muted-foreground">
// // //               Receive personalized guidance, accountability, and motivation from your AI mentor throughout the day.
// // //             </p>
// // //           </CardContent>
// // //         </Card>
// // //       </div>

// // //       <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
// // //         <CardHeader>
// // //           <CardTitle>How It Works</CardTitle>
// // //         </CardHeader>
// // //         <CardContent className="space-y-4">
// // //           <div className="grid md:grid-cols-2 gap-6">
// // //             <div>
// // //               <h4 className="font-semibold mb-2">🎯 Two Specialized AI Agents</h4>
// // //               <ul className="text-sm text-muted-foreground space-y-1">
// // //                 <li>• <strong>Smart Scheduler:</strong> Creates optimized daily schedules</li>
// // //                 <li>• <strong>AI Mentor:</strong> Provides guidance and accountability</li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h4 className="font-semibold mb-2">⚡ Science-Based Approach</h4>
// // //               <ul className="text-sm text-muted-foreground space-y-1">
// // //                 <li>• Circadian rhythm optimization</li>
// // //                 <li>• Energy level management</li>
// // //                 <li>• Context switching minimization</li>
// // //                 <li>• Strategic break placement</li>
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         </CardContent>
// // //       </Card>

// // //       <div className="text-center">
// // //         <Button size="lg" onClick={handleStartCoaching} className="px-8">
// // //           Start Your Coaching Session
// // //         </Button>
// // //         <p className="text-sm text-muted-foreground mt-2">
// // //           Takes 2-3 minutes to set up • Completely personalized
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );

// // //   const renderForm = () => (
// // //     <div className="max-w-2xl mx-auto space-y-6">
// // //       <div className="flex items-center gap-4">
// // //         <Button variant="ghost" onClick={handleBackToWelcome}>
// // //           <ArrowLeft className="h-4 w-4 mr-2" />
// // //           Back
// // //         </Button>
// // //         <div>
// // //           <h1 className="text-2xl font-bold">Set Up Your Coaching Session</h1>
// // //           <p className="text-muted-foreground">
// // //             Tell us about your current situation and goals
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {error && (
// // //         <Alert variant="destructive">
// // //           <AlertDescription>{error}</AlertDescription>
// // //         </Alert>
// // //       )}

// // //       <ContextForm onSubmit={handleFormSubmit} isLoading={isLoading} />
// // //     </div>
// // //   );

// // //   const renderResults = () => (
// // //     <div className="max-w-6xl mx-auto space-y-6">
// // //       <div className="flex items-center justify-between">
// // //         <div className="flex items-center gap-4">
// // //           <Button variant="ghost" onClick={handleBackToWelcome}>
// // //             <ArrowLeft className="h-4 w-4 mr-2" />
// // //             New Session
// // //           </Button>
// // //           <div>
// // //             <h1 className="text-2xl font-bold">Your Productivity Plan</h1>
// // //             <p className="text-muted-foreground">
// // //               Personalized schedule and guidance for maximum productivity
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2">
// // //           <Badge variant="outline">
// // //             Session ID: {currentSession?.id.slice(-8)}
// // //           </Badge>
// // //           {currentContext && (
// // //             <Badge variant="outline">
// // //               {currentContext.energyLevel} energy
// // //             </Badge>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {error && (
// // //         <Alert variant="destructive">
// // //           <AlertDescription>{error}</AlertDescription>
// // //         </Alert>
// // //       )}

// // //       {currentSession && (
// // //         <CoachingResults 
// // //           session={currentSession} 
// // //           onFollowUp={handleFollowUp}
// // //           isFollowUpLoading={isLoading}
// // //         />
// // //       )}
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // //       <div className="container mx-auto px-4 py-8">
// // //         {currentView === 'welcome' && renderWelcome()}
// // //         {currentView === 'form' && renderForm()}
// // //         {currentView === 'results' && renderResults()}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import React, { useState } from 'react';
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // // import { Badge } from '@/components/ui/badge';
// // // import { Alert, AlertDescription } from '@/components/ui/alert';
// // import { ArrowLeft, Brain, Calendar, Target, Zap } from 'lucide-react';
// // import { ContextForm } from '@/components/coaching/context-form';
// // import { CoachingResults } from '@/components/coaching/coaching-results';
// // import { useCoaching } from '@/hooks/use-coaching';
// // import { UserContext, CoachingSession } from '@/lib/types/productivity';

// // type ViewState = 'welcome' | 'form' | 'results';

// // // Badge component
// // type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
// //     variant?: 'outline' | 'default';
// // };
// // export function Badge({ variant = 'default', className = '', ...props }: BadgeProps) {
// //     const base =
// //         'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
// //     const variants = {
// //         default: 'bg-blue-100 text-blue-800',
// //         outline: 'border border-blue-300 text-blue-800 bg-transparent',
// //     };
// //     return (
// //         <span className={`${base} ${variants[variant]} ${className}`} {...props} />
// //     );
// // }

// // // Alert component
// // type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
// //     variant?: 'destructive' | 'default';
// // };
// // export function Alert({ variant = 'default', className = '', children, ...props }: AlertProps) {
// //     const base =
// //         'w-full rounded-lg border p-4 text-sm flex items-start gap-2';
// //     const variants = {
// //         default: 'bg-gray-50 border-gray-200 text-gray-900',
// //         destructive: 'bg-red-50 border-red-200 text-red-900',
// //     };
// //     return (
// //         <div className={`${base} ${variants[variant]} ${className}`} {...props}>
// //             {children}
// //         </div>
// //     );
// // }


// // export default function CoachingPage() {
// //   const [currentView, setCurrentView] = useState<ViewState>('welcome');
// //   const [currentContext, setCurrentContext] = useState<UserContext | null>(null);

// //   const {
// //     isLoading,
// //     currentSession,
// //     error,
// //     runFullSession,
// //     askFollowUp,
// //     clearSession,
// //   } = useCoaching({
// //     onSuccess: (session: CoachingSession) => {
// //       setCurrentView('results');
// //     },
// //     onError: (error: string) => {
// //       console.error('Coaching error:', error);
// //     }
// //   });

// //   const handleStartCoaching = () => {
// //     setCurrentView('form');
// //     clearSession();
// //   };

// //   const handleFormSubmit = async (context: UserContext) => {
// //     setCurrentContext(context);
// //     await runFullSession(context);
// //   };

// //   const handleBackToWelcome = () => {
// //     setCurrentView('welcome');
// //     setCurrentContext(null);
// //     clearSession();
// //   };

// //   const handleFollowUp = async (question: string) => {
// //     if (!currentContext) throw new Error('No context available');
// //     return await askFollowUp(currentContext, question);
// //   };

// //   const renderWelcome = () => (
// //     <div className="max-w-4xl mx-auto space-y-8">
// //       <div className="text-center space-y-4">
// //         <div className="flex justify-center">
// //           <div className="p-4 bg-blue-100 rounded-full">
// //             <Brain className="h-12 w-12 text-blue-600" />
// //           </div>
// //         </div>
// //         <h1 className="text-4xl font-bold tracking-tight">AI Productivity Coach</h1>
// //         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //           Get a personalized daily schedule and expert mentoring to achieve your goals faster than ever before.
// //         </p>
// //       </div>

// //       <div className="grid md:grid-cols-3 gap-6">
// //         <Card className="text-center">
// //           <CardHeader>
// //             <Calendar className="h-8 w-8 mx-auto text-blue-600" />
// //             <CardTitle>Smart Scheduling</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <p className="text-sm text-muted-foreground">
// //               Get an optimized daily schedule based on your energy levels, goals, and scientific productivity principles.
// //             </p>
// //           </CardContent>
// //         </Card>

// //         <Card className="text-center">
// //           <CardHeader>
// //             <Target className="h-8 w-8 mx-auto text-green-600" />
// //             <CardTitle>Goal-Driven Planning</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <p className="text-sm text-muted-foreground">
// //               Break down your weekly goals into actionable daily tasks with clear priorities and deadlines.
// //             </p>
// //           </CardContent>
// //         </Card>

// //         <Card className="text-center">
// //           <CardHeader>
// //             <Zap className="h-8 w-8 mx-auto text-purple-600" />
// //             <CardTitle>AI Mentoring</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <p className="text-sm text-muted-foreground">
// //               Receive personalized guidance, accountability, and motivation from your AI mentor throughout the day.
// //             </p>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
// //         <CardHeader>
// //           <CardTitle>How It Works</CardTitle>
// //         </CardHeader>
// //         <CardContent className="space-y-4">
// //           <div className="grid md:grid-cols-2 gap-6">
// //             <div>
// //               <h4 className="font-semibold mb-2">🎯 Two Specialized AI Agents</h4>
// //               <ul className="text-sm text-muted-foreground space-y-1">
// //                 <li>• <strong>Smart Scheduler:</strong> Creates optimized daily schedules</li>
// //                 <li>• <strong>AI Mentor:</strong> Provides guidance and accountability</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-semibold mb-2">⚡ Science-Based Approach</h4>
// //               <ul className="text-sm text-muted-foreground space-y-1">
// //                 <li>• Circadian rhythm optimization</li>
// //                 <li>• Energy level management</li>
// //                 <li>• Context switching minimization</li>
// //                 <li>• Strategic break placement</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       <div className="text-center">
// //         <Button size="lg" onClick={handleStartCoaching} className="px-8">
// //           Start Your Coaching Session
// //         </Button>
// //         <p className="text-sm text-muted-foreground mt-2">
// //           Takes 2-3 minutes to set up • Completely personalized
// //         </p>
// //       </div>
// //     </div>
// //   );

// //   const renderForm = () => (
// //     <div className="max-w-2xl mx-auto space-y-6">
// //       <div className="flex items-center gap-4">
// //         <Button variant="ghost" onClick={handleBackToWelcome}>
// //           <ArrowLeft className="h-4 w-4 mr-2" />
// //           Back
// //         </Button>
// //         <div>
// //           <h1 className="text-2xl font-bold">Set Up Your Coaching Session</h1>
// //           <p className="text-muted-foreground">
// //             Tell us about your current situation and goals
// //           </p>
// //         </div>
// //       </div>

// //       {error && (
// //         <Alert variant="destructive">
// //           <CardDescription>{error}</CardDescription>
// //         </Alert>
// //       )}

// //       <ContextForm onSubmit={handleFormSubmit} isLoading={isLoading} />
// //     </div>
// //   );

// //   const renderResults = () => (
// //     <div className="max-w-6xl mx-auto space-y-6">
// //       <div className="flex items-center justify-between">
// //         <div className="flex items-center gap-4">
// //           <Button variant="ghost" onClick={handleBackToWelcome}>
// //             <ArrowLeft className="h-4 w-4 mr-2" />
// //             New Session
// //           </Button>
// //           <div>
// //             <h1 className="text-2xl font-bold">Your Productivity Plan</h1>
// //             <p className="text-muted-foreground">
// //               Personalized schedule and guidance for maximum productivity
// //             </p>
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <Badge variant="outline">
// //             Session ID: {currentSession?.id.slice(-8)}
// //           </Badge>
// //           {currentContext && (
// //             <Badge variant="outline">
// //               {currentContext.energyLevel} energy
// //             </Badge>
// //           )}
// //         </div>
// //       </div>

// //       {error && (
// //         <Alert variant="destructive">
// //           <CardDescription>{error}</CardDescription>
// //         </Alert>
// //       )}

// //       {currentSession && (
// //         <CoachingResults 
// //           session={currentSession} 
// //           onFollowUp={handleFollowUp}
// //           isFollowUpLoading={isLoading}
// //         />
// //       )}
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// //       <div className="container mx-auto px-4 py-8">
// //         {currentView === 'welcome' && renderWelcome()}
// //         {currentView === 'form' && renderForm()}
// //         {currentView === 'results' && renderResults()}
// //       </div>
// //     </div>
// //   );
// // }


// // ---------------------WORKING ui -------------------
// // 'use client';

// // import { useState } from 'react';

// // export default function HomePage() {
// //   const [count, setCount] = useState(0);
// //   const [showMessage, setShowMessage] = useState(false);

// //   return (
// //     <div style={{ 
// //       minHeight: '100vh', 
// //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //       padding: '20px',
// //       fontFamily: 'Arial, sans-serif'
// //     }}>
// //       <div style={{ 
// //         maxWidth: '800px', 
// //         margin: '0 auto',
// //         background: 'white',
// //         borderRadius: '10px',
// //         padding: '40px',
// //         boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
// //       }}>
        
// //         {/* Test if React is working */}
// //         <div style={{ textAlign: 'center', marginBottom: '30px' }}>
// //           <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>
// //             🤖 AI Productivity Coach
// //           </h1>
// //           <p style={{ fontSize: '1.1rem', color: '#666' }}>
// //             React Test: Counter = {count}
// //           </p>
// //           <button 
// //             onClick={() => setCount(count + 1)}
// //             style={{
// //               background: '#4CAF50',
// //               color: 'white',
// //               border: 'none',
// //               padding: '10px 20px',
// //               borderRadius: '5px',
// //               cursor: 'pointer',
// //               fontSize: '16px',
// //               margin: '10px'
// //             }}
// //           >
// //             Click me to test React!
// //           </button>
// //           <button 
// //             onClick={() => setShowMessage(!showMessage)}
// //             style={{
// //               background: '#2196F3',
// //               color: 'white',
// //               border: 'none',
// //               padding: '10px 20px',
// //               borderRadius: '5px',
// //               cursor: 'pointer',
// //               fontSize: '16px',
// //               margin: '10px'
// //             }}
// //           >
// //             Toggle Message
// //           </button>
// //         </div>

// //         {showMessage && (
// //           <div style={{
// //             background: '#e8f5e8',
// //             border: '1px solid #4CAF50',
// //             borderRadius: '5px',
// //             padding: '15px',
// //             marginBottom: '20px',
// //             textAlign: 'center'
// //           }}>
// //             ✅ React is working! This message appears/disappears when you click the button.
// //           </div>
// //         )}

// //         {/* Features Grid */}
// //         <div style={{ 
// //           display: 'grid', 
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
// //           gap: '20px',
// //           marginBottom: '30px'
// //         }}>
// //           <div style={{
// //             background: '#f8f9fa',
// //             padding: '20px',
// //             borderRadius: '8px',
// //             textAlign: 'center',
// //             border: '1px solid #dee2e6'
// //           }}>
// //             <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📅</div>
// //             <h3 style={{ color: '#333', marginBottom: '10px' }}>Smart Scheduling</h3>
// //             <p style={{ color: '#666', fontSize: '14px' }}>
// //               Get an optimized daily schedule based on your energy levels, goals, and scientific productivity principles.
// //             </p>
// //           </div>

// //           <div style={{
// //             background: '#f8f9fa',
// //             padding: '20px',
// //             borderRadius: '8px',
// //             textAlign: 'center',
// //             border: '1px solid #dee2e6'
// //           }}>
// //             <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎯</div>
// //             <h3 style={{ color: '#333', marginBottom: '10px' }}>Goal-Driven Planning</h3>
// //             <p style={{ color: '#666', fontSize: '14px' }}>
// //               Break down your weekly goals into actionable daily tasks with clear priorities and deadlines.
// //             </p>
// //           </div>

// //           <div style={{
// //             background: '#f8f9fa',
// //             padding: '20px',
// //             borderRadius: '8px',
// //             textAlign: 'center',
// //             border: '1px solid #dee2e6'
// //           }}>
// //             <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡</div>
// //             <h3 style={{ color: '#333', marginBottom: '10px' }}>AI Mentoring</h3>
// //             <p style={{ color: '#666', fontSize: '14px' }}>
// //               Receive personalized guidance, accountability, and motivation from your AI mentor throughout the day.
// //             </p>
// //           </div>
// //         </div>

// //         {/* CTA Button */}
// //         <div style={{ textAlign: 'center' }}>
// //           <button 
// //             onClick={() => alert('This will redirect to the coaching form!')}
// //             style={{
// //               background: 'linear-gradient(45deg, #667eea, #764ba2)',
// //               color: 'white',
// //               border: 'none',
// //               padding: '15px 30px',
// //               borderRadius: '25px',
// //               cursor: 'pointer',
// //               fontSize: '18px',
// //               fontWeight: 'bold',
// //               boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
// //               transition: 'transform 0.2s'
// //             }}
// //             onMouseOver={(e) => (e.target as HTMLButtonElement).style.transform = 'scale(1.05)'}
// //             onMouseOut={(e) => (e.target as HTMLButtonElement).style.transform = 'scale(1)'}
// //           >
// //             🚀 Start Your Coaching Session
// //           </button>

// //           <p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
// //             Takes 2-3 minutes to set up • Completely personalized
// //           </p>
// //         </div>

// //         {/* Debug Info */}
// //         <div style={{
// //           marginTop: '30px',
// //           padding: '15px',
// //           background: '#fff3cd',
// //           border: '1px solid #ffeaa7',
// //           borderRadius: '5px',
// //           fontSize: '14px'
// //         }}>
// //           <strong>🔧 Debug Info:</strong><br/>
// //           • If you can see this styled page with working buttons, React is functioning<br/>
// //           • If you see plain text, there's a build or configuration issue<br/>
// //           • Counter clicks: {count}<br/>
// //           • Current time: {new Date().toLocaleTimeString()}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // WORKING----------------------------------------
// // 'use client';

// // import React, { useState } from 'react';

// // // Simple Spinner component
// // function Spinner() {
// //   return (
// //     <div style={{
// //       width: '1.5rem',
// //       height: '1.5rem',
// //       border: '3px solid #ccc',
// //       borderTop: '3px solid #667eea',
// //       borderRadius: '50%',
// //       animation: 'spin 1s linear infinite'
// //     }} />
// //   );
// // }

// // // Spinner keyframes
// // const spinnerStyles = `
// // @keyframes spin { to { transform: rotate(360deg); } }
// // `;

// // interface Goal {
// //   id: string;
// //   title: string;
// //   deadline: string;
// //   priority: 'high' | 'medium' | 'low';
// //   completed?: boolean;
// // }

// // interface UserContext {
// //   currentSituation: string;
// //   energyLevel: 'high' | 'medium' | 'low';
// //   workStyle: 'focused' | 'structured' | 'flexible';
// //   challenges: string;
// //   goals: Goal[];
// //   preferences?: {
// //     workingHours?: string;
// //     breakFrequency?: string;
// //     distractionLevel?: string;
// //   };
// // }

// // // 1) Define Action union including follow_up
// // type Action =
// //   | 'full_session'
// //   | 'schedule_only'
// //   | 'mentor_only'
// //   | 'follow_up';

// // export default function HomePage() {
// //   // Test states
// //   const [count, setCount] = useState(0);
// //   const [showMessage, setShowMessage] = useState(false);

// //   // Coaching flow states
// //   const [userContext, setUserContext] = useState<UserContext>({
// //     currentSituation: '',
// //     energyLevel: 'medium',
// //     workStyle: 'focused',
// //     challenges: '',
// //     goals: [],
// //     preferences: {
// //       workingHours: '9-5',
// //       breakFrequency: 'normal',
// //       distractionLevel: 'medium'
// //     }
// //   });

// //   // 2) Use Action | null
// //   const [action, setAction] = useState<Action | null>(null);
// //   const [sessionId, setSessionId] = useState<string | null>(null);
// //   const [question, setQuestion] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [responseData, setResponseData] = useState<any>(null);
// //   const [error, setError] = useState<string | null>(null);

// //   // 3) callAPI accepts Action
// //   async function callAPI(act: Action) {
// //     setAction(act);
// //     setResponseData(null);
// //     setError(null);
// //     setIsLoading(true);

// //     const payload: any = {
// //       userContext,
// //       action: act
// //     };
// //     if (sessionId) payload.sessionId = sessionId;
// //     if (act === 'follow_up') payload.question = question;

// //     try {
// //       const res = await fetch('/api/coaching', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(payload),
// //       });
// //       const json = await res.json();
// //       if (!res.ok) throw new Error(json.error || 'API failure');
// //       setResponseData(json.data || json);
// //       if (json.data?.id) {
// //         setSessionId(json.data.id);
// //       }
// //     } catch (err: any) {
// //       setError(err.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   }

// //   return (
// //     <>
// //       <style dangerouslySetInnerHTML={{ __html: spinnerStyles }} />

// //       <div style={{
// //         minHeight: '100vh',
// //         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //         padding: '2rem',
// //         fontFamily: '"Segoe UI", sans-serif',
// //         color: '#333'
// //       }}>
// //         <div style={{
// //           maxWidth: '720px',
// //           margin: '0 auto',
// //           background: '#fff',
// //           borderRadius: '12px',
// //           padding: '2rem',
// //           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// //         }}>

// //           {/* React test + header */}
// //           <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
// //             <h1 style={{ fontSize: '2.5rem', margin: 0 }}>🤖 AI Productivity Coach</h1>
// //             <p style={{ color: '#555', marginTop: '0.5rem' }}>
// //               {showMessage ? '🎉 React is working!' : `Counter = ${count}`}
// //             </p>
// //             <button
// //               onClick={() => setCount(c => c + 1)}
// //               style={{
// //                 margin: '0 .5rem',
// //                 padding: '0.5rem 1rem',
// //                 border: 'none',
// //                 borderRadius: '6px',
// //                 background: '#28a745',
// //                 color: '#fff',
// //                 cursor: 'pointer'
// //               }}
// //             >
// //               +1
// //             </button>
// //             <button
// //               onClick={() => setShowMessage(m => !m)}
// //               style={{
// //                 margin: '0 .5rem',
// //                 padding: '0.5rem 1rem',
// //                 border: 'none',
// //                 borderRadius: '6px',
// //                 background: '#007bff',
// //                 color: '#fff',
// //                 cursor: 'pointer'
// //               }}
// //             >
// //               Toggle
// //             </button>
// //           </div>

// //           {/* Basic form for userContext.currentSituation */}
// //           <div style={{ marginBottom: '1.5rem' }}>
// //             <label style={{ fontWeight: 600 }}>What are you working on?</label>
// //             <textarea
// //               value={userContext.currentSituation}
// //               onChange={e =>
// //                 setUserContext(uc => ({ ...uc, currentSituation: e.target.value }))
// //               }
// //               rows={3}
// //               style={{
// //                 width: '100%',
// //                 padding: '0.75rem',
// //                 borderRadius: '6px',
// //                 border: '1px solid #ddd',
// //                 marginTop: '0.5rem'
// //               }}
// //             />
// //           </div>

// //           {/* Action buttons */}
// //           <div style={{
// //             display: 'flex',
// //             gap: '1rem',
// //             flexWrap: 'wrap',
// //             marginBottom: '1.5rem'
// //           }}>
// //             {(['full_session', 'schedule_only', 'mentor_only'] as Action[]).map(act => (
// //               <button
// //                 key={act}
// //                 disabled={!userContext.currentSituation.trim() || isLoading}
// //                 onClick={() => callAPI(act)}
// //                 style={{
// //                   flex: 1,
// //                   padding: '0.75rem',
// //                   border: 'none',
// //                   borderRadius: '8px',
// //                   cursor: isLoading ? 'default' : 'pointer',
// //                   background:
// //                     act === 'full_session'
// //                       ? 'linear-gradient(45deg,#667eea,#764ba2)'
// //                       : act === 'schedule_only'
// //                       ? '#17a2b8'
// //                       : '#6f42c1',
// //                   color: '#fff',
// //                   fontWeight: 600,
// //                   display: 'inline-flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center'
// //                 }}
// //               >
// //                 {isLoading && action === act ? <Spinner /> : act.replace('_', ' ')}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Follow‑up input */}
// //           {sessionId && (
// //             <div style={{ marginBottom: '1.5rem' }}>
// //               <label style={{ fontWeight: 600 }}>Ask a follow‑up question:</label>
// //               <div style={{
// //                 display: 'flex',
// //                 gap: '0.5rem',
// //                 marginTop: '0.5rem'
// //               }}>
// //                 <input
// //                   value={question}
// //                   onChange={e => setQuestion(e.target.value)}
// //                   style={{
// //                     flex: 1,
// //                     padding: '0.5rem',
// //                     border: '1px solid #ddd',
// //                     borderRadius: '6px'
// //                   }}
// //                   placeholder="e.g. How do I handle breaks?"
// //                 />
// //                 <button
// //                   disabled={!question.trim() || isLoading}
// //                   onClick={() => callAPI('follow_up')}
// //                   style={{
// //                     padding: '0.5rem 1rem',
// //                     background: '#fd7e14',
// //                     border: 'none',
// //                     borderRadius: '6px',
// //                     color: '#fff',
// //                     cursor: 'pointer'
// //                   }}
// //                 >
// //                   Ask
// //                 </button>
// //               </div>
// //             </div>
// //           )}

// //           {/* Error banner */}
// //           {error && (
// //             <div style={{
// //               background: '#f8d7da',
// //               color: '#721c24',
// //               padding: '0.75rem',
// //               borderRadius: '6px',
// //               marginBottom: '1rem'
// //             }}>
// //               {error}
// //             </div>
// //           )}

// //           {/* Response display */}
// //           {responseData && (
// //             <pre style={{
// //               background: '#f1f3f5',
// //               padding: '1rem',
// //               borderRadius: '6px',
// //               overflow: 'auto'
// //             }}>
// //               {JSON.stringify(responseData, null, 2)}
// //             </pre>
// //           )}

// //           {/* Debug footer */}
// //           <div style={{
// //             marginTop: '2rem',
// //             fontSize: '0.85rem',
// //             color: '#555'
// //           }}>
// //             Debug • Counter={count} • React OK? {showMessage ? 'Yes' : 'No'} • Time={new Date().toLocaleTimeString()}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

//  *******************final working ****************************

// pages/coaching.tsx
'use client';

import { useState, FormEvent } from 'react';

type EnergyLevel = 'high' | 'medium' | 'low';
type WorkStyle = 'focused' | 'structured' | 'flexible';

interface Goal {
  id: number;
  title: string;
  deadline?: string;
  priority?: number;
}

export default function CoachingPage() {
  const [currentSituation, setCurrentSituation] = useState('');
  const [challenges, setChallenges] = useState('');
  const [energyLevel, setEnergyLevel] = useState<EnergyLevel>('medium');
  const [workStyle, setWorkStyle] = useState<WorkStyle>('focused');
  const [goals, setGoals] = useState<Goal[]>([]);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const addGoal = () => {
    setGoals([...goals, { id: Date.now(), title: '' }]);
  };

  const updateGoal = (id: number, value: string) => {
    setGoals(goals.map(g => g.id === id ? { ...g, title: value } : g));
  };

  const removeGoal = (id: number) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const payload = {
      userContext: {
        currentSituation,
        challenges,
        energyLevel,
        workStyle,
        goals,
      },
      action: 'full_session'
    };

    try {
      const res = await fetch('/api/coaching', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || 'Unknown error');
      } else {
        setResponse(data.data);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '10px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>🧠 AI Productivity Coach</h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <textarea
            placeholder="Current situation..."
            value={currentSituation}
            onChange={e => setCurrentSituation(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />

          <textarea
            placeholder="Challenges you're facing..."
            value={challenges}
            onChange={e => setChallenges(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Energy Level:</label>
            {(['high', 'medium', 'low'] as EnergyLevel[]).map(level => (
              <label key={level} style={{ marginRight: '10px' }}>
                <input
                  type="radio"
                  value={level}
                  checked={energyLevel === level}
                  onChange={() => setEnergyLevel(level)}
                />{' '}
                {level}
              </label>
            ))}
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Work Style:</label>
            {(['focused', 'structured', 'flexible'] as WorkStyle[]).map(style => (
              <label key={style} style={{ marginRight: '10px' }}>
                <input
                  type="radio"
                  value={style}
                  checked={workStyle === style}
                  onChange={() => setWorkStyle(style)}
                />{' '}
                {style}
              </label>
            ))}
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Goals:</label>
            {goals.map(goal => (
              <div key={goal.id} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input
                  type="text"
                  value={goal.title}
                  onChange={(e) => updateGoal(goal.id, e.target.value)}
                  placeholder="Goal title..."
                  style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button
                  type="button"
                  onClick={() => removeGoal(goal.id)}
                  style={{
                    background: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addGoal}
              style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              + Add Goal
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              background: '#2196F3',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {loading ? 'Sending...' : '🚀 Start Coaching Session'}
          </button>
        </form>

        {error && (
          <div style={{ marginTop: '20px', color: 'red', textAlign: 'center' }}>
            ❌ {error}
          </div>
        )}

{response && (
  <>
    <pre style={{
      background: '#f4f4f4',
      padding: '20px',
      marginTop: '20px',
      borderRadius: '5px',
      overflowX: 'auto'
    }}>
      {JSON.stringify(response, null, 2)}
    </pre>

    {/* Pretty breakdown of response */}
    <div style={{
      background: '#fff',
      marginTop: '20px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>🔍 Response Summary</h2>

      <p><strong>🆔 Session ID:</strong> {response.id}</p>
      <p><strong>🕒 Timestamp:</strong> {response.timestamp}</p>

      {response.userContext && (
        <>
          <h3 style={{ marginTop: '15px' }}>🧠 User Context</h3>
          <p><strong>Situation:</strong> {response.userContext.currentSituation}</p>
          <p><strong>Challenges:</strong> {response.userContext.challenges}</p>
          <p><strong>Energy:</strong> {response.userContext.energyLevel}</p>
          <p><strong>Work Style:</strong> {response.userContext.workStyle}</p>
          {response.userContext.goals?.length > 0 && (
            <>
              <p><strong>Goals:</strong></p>
              <ul>
                {response.userContext.goals.map((goal: any) => (
                  <li key={goal.id}>🎯 {goal.title}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}

      {response.scheduleResponse && (
        <>
          <h3 style={{ marginTop: '15px' }}>📅 Schedule</h3>
          <p>{response.scheduleResponse.content}</p>
        </>
      )}

      {response.mentorResponse && (
        <>
          <h3 style={{ marginTop: '15px' }}>🧑‍🏫 Mentor Advice</h3>
          <p>{response.mentorResponse.content}</p>
        </>
      )}
    </div>
  </>
)}

      </div>
    </div>
  );
}

// 'use client';

// import { useState, useEffect, FormEvent } from 'react';
// import { extractDetailedBlocks, parseScheduleBlocks, ScheduleBlock } from '@/lib/productivity-utils';


// type ScheduleBlock = {
//   time: string;
//   task: string;
//   duration: string;
//   blockLabel: string;
//   completed: boolean;
// };

// type EnergyLevel = 'high' | 'medium' | 'low';
// type WorkStyle = 'focused' | 'structured' | 'flexible';

// interface Goal {
//   id: number;
//   title: string;
//   deadline?: string;
//   priority?: number;
// }

// export default function CoachingPage() {
//   // --- Existing state ---
//   const [currentSituation, setCurrentSituation] = useState('');
//   const [challenges, setChallenges] = useState('');
//   const [energyLevel, setEnergyLevel] = useState<EnergyLevel>('medium');
//   const [workStyle, setWorkStyle] = useState<WorkStyle>('focused');
//   const [goals, setGoals] = useState<Goal[]>([]);
//   const [response, setResponse] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const [schedule, setSchedule] = useState<ScheduleBlock[]>([]);


//   // --- New state for checklist ---
//   const [completed, setCompleted] = useState<Record<number, boolean>>({});
//   const [feedbacks, setFeedbacks] = useState<Record<number, string>>({});

//   const addGoal = () => {
//     setGoals([...goals, { id: Date.now(), title: '' }]);
//   };

//   const updateGoal = (id: number, value: string) => {
//     setGoals(goals.map(g => (g.id === id ? { ...g, title: value } : g)));
//   };

//   const removeGoal = (id: number) => {
//     setGoals(goals.filter(g => g.id !== id));
//     // cleanup checklist state
//     setCompleted(prev => { const c = { ...prev }; delete c[id]; return c; });
//     setFeedbacks(prev => { const f = { ...prev }; delete f[id]; return f; });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     const payload = {
//       userContext: {
//         currentSituation,
//         challenges,
//         energyLevel,
//         workStyle,
//         goals,
//       },
//       action: 'full_session',
//     };

//     try {
//       const res = await fetch('/api/coaching', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (!data.success) setError(data.error || 'Unknown error');
//       else setResponse(data.data);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         padding: '20px',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '1000px',
//           margin: '0 auto',
//           background: 'white',
//           borderRadius: '10px',
//           padding: '20px',
//           boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//           display: 'flex',
//           gap: '20px',
//         }}
//       >
//         {/* Left Column: Your existing form + response */}
//         <div style={{ flex: 2 }}>
//           <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>
//             🧠 AI Productivity Coach
//           </h1>

//           <form
//             onSubmit={handleSubmit}
//             style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
//           >
//             {/* ... all your existing inputs (textarea, radios, goals input, submit) ... */}
//             <textarea
//               placeholder="Current situation..."
//               value={currentSituation}
//               onChange={e => setCurrentSituation(e.target.value)}
//               style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
//               required
//             />
//             <textarea
//               placeholder="Challenges you're facing..."
//               value={challenges}
//               onChange={e => setChallenges(e.target.value)}
//               style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
//               required
//             />
//             <div>
//               <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
//                 Energy Level:
//               </label>
//               {(['high', 'medium', 'low'] as EnergyLevel[]).map(level => (
//                 <label key={level} style={{ marginRight: '10px' }}>
//                   <input
//                     type="radio"
//                     value={level}
//                     checked={energyLevel === level}
//                     onChange={() => setEnergyLevel(level)}
//                   />{' '}
//                   {level}
//                 </label>
//               ))}
//             </div>
//             <div>
//               <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
//                 Work Style:
//               </label>
//               {(['focused', 'structured', 'flexible'] as WorkStyle[]).map(style => (
//                 <label key={style} style={{ marginRight: '10px' }}>
//                   <input
//                     type="radio"
//                     value={style}
//                     checked={workStyle === style}
//                     onChange={() => setWorkStyle(style)}
//                   />{' '}
//                   {style}
//                 </label>
//               ))}
//             </div>
//             <div>
//               <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
//                 Goals:
//               </label>
//               {goals.map(goal => (
//                 <div key={goal.id} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                   <input
//                     type="text"
//                     value={goal.title}
//                     onChange={e => updateGoal(goal.id, e.target.value)}
//                     placeholder="Goal title..."
//                     style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeGoal(goal.id)}
//                     style={{
//                       background: '#e74c3c',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '5px',
//                       padding: '5px 10px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={addGoal}
//                 style={{
//                   background: '#4CAF50',
//                   color: 'white',
//                   border: 'none',
//                   padding: '10px 20px',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   marginTop: '10px',
//                 }}
//               >
//                 + Add Goal
//               </button>
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               style={{
//                 background: '#2196F3',
//                 color: 'white',
//                 padding: '12px',
//                 border: 'none',
//                 borderRadius: '8px',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 cursor: 'pointer',
//               }}
//             >
//               {loading ? 'Sending...' : '🚀 Start Coaching Session'}
//             </button>
//           </form>

//           {error && (
//             <div style={{ marginTop: '20px', color: 'red', textAlign: 'center' }}>
//               ❌ {error}
//             </div>
//           )}

//           {response && (
//             <>
//               <pre
//                 style={{
//                   background: '#f4f4f4',
//                   padding: '20px',
//                   marginTop: '20px',
//                   borderRadius: '5px',
//                   overflowX: 'auto',
//                 }}
//               >
//                 {JSON.stringify(response, null, 2)}
//               </pre>
//               <div
//                 style={{
//                   background: '#fff',
//                   marginTop: '20px',
//                   padding: '20px',
//                   borderRadius: '8px',
//                   boxShadow: '0 0 10px rgba(0,0,0,0.05)',
//                 }}
//               >
//                 {/* ... your existing pretty breakdown ... */}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Right Column: Goal Checklist */}
//         <div style={{ flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
//           <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>✅ Goal Checklist</h2>
//           {goals.length === 0 && <p>No goals added yet.</p>}
//           {goals.map(goal => (
//             <div
//               key={goal.id}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginBottom: '10px',
//                 gap: '10px',
//               }}
//             >
//               <input
//                 type="checkbox"
//                 checked={!!completed[goal.id]}
//                 onChange={e =>
//                   setCompleted(prev => ({
//                     ...prev,
//                     [goal.id]: e.target.checked,
//                   }))
//                 }
//               />
//               <span
//                 style={{
//                   textDecoration: completed[goal.id] ? 'line-through' : 'none',
//                   flex: 1,
//                 }}
//               >
//                 {goal.title}
//               </span>
//             </div>
//           ))}

//           {goals.map(goal => (
//             completed[goal.id] && (
//               <div key={`fb-${goal.id}`} style={{ marginBottom: '15px' }}>
//                 <label style={{ fontWeight: 'bold' }}>Feedback for "{goal.title}":</label>
//                 <textarea
//                   value={feedbacks[goal.id] || ''}
//                   onChange={e =>
//                     setFeedbacks(prev => ({
//                       ...prev,
//                       [goal.id]: e.target.value,
//                     }))
//                   }
//                   placeholder="How well did you finish this task?"
//                   style={{
//                     width: '100%',
//                     padding: '8px',
//                     borderRadius: '5px',
//                     border: '1px solid #ccc',
//                     marginTop: '5px',
//                   }}
//                   rows={2}
//                 />
//               </div>
//             )
//           ))}

//           {/* Summary of completion */}
//           {goals.length > 0 && (
//             <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#555' }}>
//               {Object.values(completed).filter(Boolean).length} of {goals.length} goals completed.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState, useEffect, FormEvent } from 'react';

// type ScheduleBlock = {
//   time: string;
//   task: string;
//   duration: string;
//   blockLabel: string;
//   completed: boolean;
// };

// type EnergyLevel = 'high' | 'medium' | 'low';
// type WorkStyle = 'focused' | 'structured' | 'flexible';

// interface Goal {
//   id: number;
//   title: string;
//   deadline?: string;
//   priority?: number;
// }

// interface SessionData {
//   currentSituation: string;
//   challenges: string;
//   energyLevel: EnergyLevel;
//   workStyle: WorkStyle;
//   goals: Goal[];
//   schedule: ScheduleBlock[];
//   completed: Record<number, boolean>;
//   feedbacks: Record<number, string>;
//   response: any;
//   timestamp: number;
// }

// export default function CoachingPage() {
//   // --- Existing state ---
//   const [currentSituation, setCurrentSituation] = useState('');
//   const [challenges, setChallenges] = useState('');
//   const [energyLevel, setEnergyLevel] = useState<EnergyLevel>('medium');
//   const [workStyle, setWorkStyle] = useState<WorkStyle>('focused');
//   const [goals, setGoals] = useState<Goal[]>([]);
//   const [response, setResponse] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Schedule state
//   const [schedule, setSchedule] = useState<ScheduleBlock[]>([]);
  

//   // Checklist state
//   const [completed, setCompleted] = useState<Record<number, boolean>>({});
//   const [feedbacks, setFeedbacks] = useState<Record<number, string>>({});

//   // Session management state
//   const [showLoadPrompt, setShowLoadPrompt] = useState(false);
//   const [sessionMessage, setSessionMessage] = useState<string | null>(null);
//   const [hasCheckedSession, setHasCheckedSession] = useState(false);

//   // Check for previous session on mount
//   useEffect(() => {
//     if (!hasCheckedSession) {
//       const savedSession = localStorage.getItem('coaching-session');
//       if (savedSession) {
//         setShowLoadPrompt(true);
//       }
//       setHasCheckedSession(true);
//     }
//   }, [hasCheckedSession]);

//   // Save session to localStorage
//   const saveSession = () => {
//     try {
//       const sessionData: SessionData = {
//         currentSituation,
//         challenges,
//         energyLevel,
//         workStyle,
//         goals,
//         schedule,
//         completed,
//         feedbacks,
//         response,
//         timestamp: Date.now()
//       };
//       localStorage.setItem('coaching-session', JSON.stringify(sessionData));
//       setSessionMessage('Session saved successfully! ✅');
//       setTimeout(() => setSessionMessage(null), 3000);
//     } catch (error) {
//       setSessionMessage('Failed to save session ❌');
//       setTimeout(() => setSessionMessage(null), 3000);
//     }
//   };

//   // Load session from localStorage
//   const loadPreviousSession = () => {
//     try {
//       const savedSession = localStorage.getItem('coaching-session');
//       if (savedSession) {
//         const sessionData: SessionData = JSON.parse(savedSession);
//         setCurrentSituation(sessionData.currentSituation || '');
//         setChallenges(sessionData.challenges || '');
//         setEnergyLevel(sessionData.energyLevel || 'medium');
//         setWorkStyle(sessionData.workStyle || 'focused');
//         setGoals(sessionData.goals || []);
//         setSchedule(sessionData.schedule || []);
//         setCompleted(sessionData.completed || {});
//         setFeedbacks(sessionData.feedbacks || {});
//         setResponse(sessionData.response || null);
//         setSessionMessage('Previous session loaded successfully! ✅');
//         setTimeout(() => setSessionMessage(null), 3000);
//       }
//     } catch (error) {
//       setSessionMessage('Failed to load previous session ❌');
//       setTimeout(() => setSessionMessage(null), 3000);
//     }
//     setShowLoadPrompt(false);
//   };

//   const declineLoadSession = () => {
//     setShowLoadPrompt(false);
//     setSessionMessage('Starting fresh session 🆕');
//     setTimeout(() => setSessionMessage(null), 3000);
//   };

//   // Improved helper functions for parsing schedule
// const extractDetailedBlocks = (fullText: string): string => {
//   try {
//     // More flexible pattern to extract the schedule content
//     const patterns = [
//       /⏰ DETAILED TIME BLOCKS:\s*(.+?)(?:🧠|$)/s,
//       /DETAILED TIME BLOCKS:\s*(.+?)(?:🧠|$)/s,
//       /TIME BLOCKS:\s*(.+?)(?:🧠|$)/s,
//       // Fallback: extract everything after any time-related header
//       /(?:SCHEDULE|TIME|BLOCKS).*?:\s*(.+?)(?:🧠|SCIENTIFIC|REASONING|$)/s
//     ];
    
//     for (const pattern of patterns) {
//       const match = fullText.match(pattern);
//       if (match && match[1].trim()) {
//         return match[1].trim();
//       }
//     }
    
//     // If no specific pattern matches, try to find time patterns directly
//     const lines = fullText.split('\n');
//     const timeLines = lines.filter(line => 
//       /\d{1,2}:\d{2}\s*(AM|PM).*?-.*?\d{1,2}:\d{2}\s*(AM|PM)/.test(line)
//     );
    
//     if (timeLines.length > 0) {
//       // Find the start and end indices of time-related content
//       const startIdx = lines.findIndex(line => timeLines.includes(line));
//       const endIdx = lines.findIndex((line, idx) => 
//         idx > startIdx && /🧠|SCIENTIFIC|REASONING|OPTIMIZATION|ENERGY|CONTINGENCY/.test(line)
//       );
      
//       const relevantLines = endIdx !== -1 ? lines.slice(startIdx, endIdx) : lines.slice(startIdx);
//       return relevantLines.join('\n');
//     }
    
//     return '';
//   } catch (error) {
//     console.error('Error extracting detailed blocks:', error);
//     return '';
//   }
// };

//   // const parseScheduleBlocks = (text: string): ScheduleBlock[] => {
//   //   if (!text || typeof text !== 'string') return [];
    
//   //   try {
//   //     const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
//   //     const blocks: ScheduleBlock[] = [];
//   //     let currentBlockLabel = '';
//   //     let currentDuration = '';

//   //     for (const line of lines) {
//   //       // Match block headers like "**Morning Routine (60 minutes)**"
//   //       if (line.startsWith('**') && line.endsWith('**')) {
//   //         const headerMatch = line.replace(/\*\*/g, '').match(/^(.+?)\s*\((.+?)\)/);
//   //         if (headerMatch) {
//   //           currentBlockLabel = headerMatch[1].trim();
//   //           currentDuration = headerMatch[2].trim();
//   //         } else {
//   //           currentBlockLabel = line.replace(/\*\*/g, '').trim();
//   //           currentDuration = '';
//   //         }
//   //       } 
//   //       // Match time ranges like "7:00 AM - 8:00 AM - Task description"
//   //       else if (/^\d{1,2}:\d{2}\s*(AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(AM|PM)/.test(line)) {
//   //         const timeMatch = line.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))\s*-\s*(.+)/);
//   //         if (timeMatch) {
//   //           const timeRange = timeMatch[1].trim();
//   //           const taskDescription = timeMatch[2].trim();
            
//   //           blocks.push({
//   //             time: timeRange,
//   //             task: taskDescription,
//   //             duration: currentDuration,
//   //             blockLabel: currentBlockLabel,
//   //             completed: false,
//   //           });
//   //         }
//   //       } 
//   //       // Match sub-tasks that start with "- "
//   //       else if (line.startsWith('- ') && blocks.length > 0) {
//   //         const lastBlock = blocks[blocks.length - 1];
//   //         if (lastBlock && lastBlock.task) {
//   //           lastBlock.task += '; ' + line.slice(2).trim();
//   //         }
//   //       }
//   //     }

//   //     return blocks;
//   //   } catch (error) {
//   //     console.error('Error parsing schedule blocks:', error);
//   //     return [];
//   //   }
//   // };

// const parseScheduleBlocks = (text: string): ScheduleBlock[] => {
//   if (!text || typeof text !== 'string') return [];

//   try {
//     const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
//     const blocks: ScheduleBlock[] = [];
//     let currentBlockLabel = 'General';
//     let currentDuration = '';

//     for (const line of lines) {
//       // **Header** lines
//       if (line.startsWith('**') && line.endsWith('**')) {
//         const headerContent = line.replace(/\*\*/g, '').trim();
//         const headerMatch = headerContent.match(/^(.+?)\s*\((.+?)\)$/);
//         if (headerMatch) {
//           currentBlockLabel = headerMatch[1].trim();
//           currentDuration = headerMatch[2].trim();
//         } else {
//           currentBlockLabel = headerContent;
//           currentDuration = '';
//         }
//       }
//       // Time-range lines (various patterns)
//       else if (/\d{1,2}:\d{2}\s*(?:AM|PM)/.test(line)) {
//         let timeMatch = line.match(
//           /^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))\s*-\s*(.+)$/
//         );
//         if (!timeMatch) {
//           timeMatch = line.match(
//             /^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))\s+(.+)$/
//           );
//         }
//         if (!timeMatch) {
//           const timePattern =
//             /^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))/;
//           const timeResult = line.match(timePattern);
//           if (timeResult) {
//             const timeRange = timeResult[1];
//             const rest = line
//               .replace(timePattern, '')
//               .replace(/^[-\s]+/, '')
//               .trim();
//             timeMatch = [line, timeRange, rest || 'Task not specified'];
//           }
//         }
//         if (timeMatch && timeMatch[1] && timeMatch[2]) {
//           blocks.push({
//             time: timeMatch[1].trim(),
//             task: timeMatch[2].trim(),
//             duration: currentDuration,
//             blockLabel: currentBlockLabel,
//             completed: false,
//           });
//         }
//       }
//       // Sub-tasks
//       else if (line.startsWith('- ') && blocks.length > 0) {
//         const last = blocks[blocks.length - 1];
//         last.task += '; ' + line.slice(2).trim();
//       }
//     }

//     // Guarantee all fields are strings
//     return blocks.map(b => ({
//       time: b.time || '',
//       task: b.task || 'Task not specified',
//       duration: b.duration || '',
//       blockLabel: b.blockLabel || 'General',
//       completed: b.completed,
//     }));
//   } catch (err) {
//     console.error('Error parsing schedule blocks:', err);
//     return [];
//   }
// };


//   // Schedule Table Component with improved error handling
//   const ScheduleTable = ({ 
//     schedule, 
//     setSchedule 
//   }: { 
//     schedule: ScheduleBlock[]; 
//     setSchedule: (v: ScheduleBlock[]) => void; 
//   }) => {
//     const toggleScheduleItem = (idx: number) => {
//       try {
//         if (idx >= 0 && idx < schedule.length) {
//           const updatedSchedule = [...schedule];
//           updatedSchedule[idx] = { ...updatedSchedule[idx], completed: !updatedSchedule[idx].completed };
//           setSchedule(updatedSchedule);
//         }
//       } catch (error) {
//         console.error('Error toggling schedule item:', error);
//       }
//     };

//     if (!schedule || !Array.isArray(schedule) || schedule.length === 0) {
//       return (
//         <div style={{ marginTop: '20px', padding: '20px', textAlign: 'center', color: '#666' }}>
//           <p>📅 No schedule available yet. Complete the coaching session to see your personalized schedule!</p>
//         </div>
//       );
//     }

//     return (
//       <div style={{ marginTop: '20px' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//           <h3 style={{ fontSize: '1.2rem', margin: 0 }}>📅 Your Daily Schedule</h3>
//           <button
//             onClick={saveSession}
//             style={{
//               background: '#27ae60',
//               color: 'white',
//               border: 'none',
//               padding: '8px 16px',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '12px',
//               fontWeight: 'bold'
//             }}
//           >
//             💾 Save Session
//           </button>
//         </div>
        
//         <table style={{ 
//           width: '100%', 
//           borderCollapse: 'collapse', 
//           border: '1px solid #ddd',
//           borderRadius: '8px',
//           overflow: 'hidden'
//         }}>
//           <thead>
//             <tr style={{ background: '#f8f9fa' }}>
//               <th style={{ padding: '12px 8px', textAlign: 'left', borderBottom: '1px solid #ddd', width: '50px' }}>✅</th>
//               <th style={{ padding: '12px 8px', textAlign: 'left', borderBottom: '1px solid #ddd', width: '150px' }}>Time</th>
//               <th style={{ padding: '12px 8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Task</th>
//               <th style={{ padding: '12px 8px', textAlign: 'left', borderBottom: '1px solid #ddd', width: '100px' }}>Duration</th>
//               <th style={{ padding: '12px 8px', textAlign: 'left', borderBottom: '1px solid #ddd', width: '120px' }}>Block</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedule.map((block, index) => (
//               <tr 
//                 key={`schedule-${index}`}
//                 style={{ 
//                   background: block.completed ? '#e8f5e8' : 'white',
//                   borderBottom: '1px solid #eee'
//                 }}
//               >
//                 <td style={{ padding: '8px', textAlign: 'center' }}>
//                   <input
//                     type="checkbox"
//                     checked={!!block.completed}
//                     onChange={() => toggleScheduleItem(index)}
//                     style={{ cursor: 'pointer' }}
//                   />
//                 </td>
//                 <td style={{ padding: '8px', fontSize: '14px', fontWeight: '500' }}>
//                   {block.time || 'No time specified'}
//                 </td>
//                 <td style={{ 
//                   padding: '8px', 
//                   fontSize: '14px',
//                   textDecoration: block.completed ? 'line-through' : 'none',
//                   color: block.completed ? '#666' : 'inherit'
//                 }}>
//                   {block.task || 'No task specified'}
//                 </td>
//                 <td style={{ 
//                   padding: '8px', 
//                   fontSize: '12px', 
//                   color: '#666',
//                   fontWeight: 'bold'
//                 }}>
//                   {block.duration || 'N/A'}
//                 </td>
//                 <td style={{ 
//                   padding: '8px', 
//                   fontSize: '12px', 
//                   color: '#666',
//                   fontWeight: 'bold'
//                 }}>
//                   {block.blockLabel || 'General'}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         <div style={{ marginTop: '10px', fontSize: '12px', color: '#666', textAlign: 'right' }}>
//           {schedule.filter(block => block.completed).length} of {schedule.length} tasks completed
//         </div>
//       </div>
//     );
//   };

//   // Goal management functions
//   const addGoal = () => {
//     setGoals([...goals, { id: Date.now(), title: '' }]);
//   };

//   const updateGoal = (id: number, value: string) => {
//     setGoals(goals.map(g => (g.id === id ? { ...g, title: value } : g)));
//   };

//   const removeGoal = (id: number) => {
//     setGoals(goals.filter(g => g.id !== id));
//     // Cleanup checklist state
//     setCompleted(prev => { 
//       const updated = { ...prev }; 
//       delete updated[id]; 
//       return updated; 
//     });
//     setFeedbacks(prev => { 
//       const updated = { ...prev }; 
//       delete updated[id]; 
//       return updated; 
//     });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     const payload = {
//       userContext: {
//         currentSituation,
//         challenges,
//         energyLevel,
//         workStyle,
//         goals,
//       },
//       action: 'full_session',
//     };

//     try {
//       const res = await fetch('/api/coaching', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
      
//       if (!data.success) {
//         setError(data.error || 'Unknown error');
//       } else {
//         setResponse(data.data);

//         // Parse and set structured schedule with improved error handling
//         try {
//           const rawText = data.data?.scheduleResponse?.content || '';
//           if (rawText) {
//             const detailsText = extractDetailedBlocks(rawText);
//             const structuredSchedule = parseScheduleBlocks(detailsText);
//             setSchedule(structuredSchedule);
            
//             // Auto-save session after successful response
//             setTimeout(() => {
//               saveSession();
//             }, 1000);
//           }
//         } catch (parseError) {
//           console.error('Error parsing schedule:', parseError);
//           setError('Schedule was generated but could not be parsed properly. Please check the raw response.');
//         }
//       }
//     } catch (err: any) {
//       setError(err.message || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const completedGoalsCount = Object.values(completed).filter(Boolean).length;

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '100vh',
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         padding: '20px',
//         fontFamily: 'Arial, sans-serif',
//         overflow: 'auto'
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: 'calc(100vh - 40px)',
//           background: 'white',
//           borderRadius: '10px',
//           padding: '20px',
//           boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//           display: 'flex',
//           gap: '20px',
//           overflow: 'hidden'
//         }}
//       >
//         {/* Left Column: Form and Schedule */}
//         <div style={{ 
//           flex: '2 1 600px', 
//           minWidth: '300px',
//           overflowY: 'auto',
//           paddingRight: '10px'
//         }}>
//           <h1 style={{ 
//             fontSize: '2rem', 
//             textAlign: 'center', 
//             marginBottom: '20px',
//             color: '#333' 
//           }}>
//             🧠 AI Productivity Coach
//           </h1>

//           {/* Load Previous Session Prompt */}
//           {showLoadPrompt && (
//             <div style={{
//               background: '#e3f2fd',
//               border: '1px solid #2196f3',
//               borderRadius: '8px',
//               padding: '15px',
//               marginBottom: '20px',
//               textAlign: 'center'
//             }}>
//               <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', color: '#1976d2' }}>
//                 📂 Previous session found! Would you like to load it?
//               </p>
//               <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//                 <button
//                   onClick={loadPreviousSession}
//                   style={{
//                     background: '#4caf50',
//                     color: 'white',
//                     border: 'none',
//                     padding: '10px 20px',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontWeight: 'bold'
//                   }}
//                 >
//                   ✅ Yes, Load Previous
//                 </button>
//                 <button
//                   onClick={declineLoadSession}
//                   style={{
//                     background: '#f44336',
//                     color: 'white',
//                     border: 'none',
//                     padding: '10px 20px',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontWeight: 'bold'
//                   }}
//                 >
//                   ❌ No, Start Fresh
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Session Message */}
//           {sessionMessage && (
//             <div style={{
//               background: sessionMessage.includes('✅') ? '#e8f5e8' : '#ffeaea',
//               border: `1px solid ${sessionMessage.includes('✅') ? '#4caf50' : '#f44336'}`,
//               borderRadius: '6px',
//               padding: '10px',
//               marginBottom: '15px',
//               textAlign: 'center',
//               fontWeight: 'bold'
//             }}>
//               {sessionMessage}
//             </div>
//           )}

//           {/* Session Management Buttons */}
//           <div style={{ 
//             display: 'flex', 
//             gap: '10px', 
//             marginBottom: '20px',
//             justifyContent: 'center'
//           }}>
//             <button
//               onClick={saveSession}
//               style={{
//                 background: '#2196f3',
//                 color: 'white',
//                 border: 'none',
//                 padding: '8px 16px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 'bold'
//               }}
//             >
//               💾 Save Current Session
//             </button>
//             <button
//               onClick={() => setShowLoadPrompt(true)}
//               style={{
//                 background: '#ff9800',
//                 color: 'white',
//                 border: 'none',
//                 padding: '8px 16px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 'bold'
//               }}
//             >
//               📂 Load Previous Session
//             </button>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
//           >
//             <textarea
//               placeholder="Describe your current situation..."
//               value={currentSituation}
//               onChange={e => setCurrentSituation(e.target.value)}
//               style={{ 
//                 padding: '12px', 
//                 fontSize: '16px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #ddd',
//                 minHeight: '80px',
//                 resize: 'vertical'
//               }}
//               required
//             />

//             <textarea
//               placeholder="What challenges are you facing?"
//               value={challenges}
//               onChange={e => setChallenges(e.target.value)}
//               style={{ 
//                 padding: '12px', 
//                 fontSize: '16px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #ddd',
//                 minHeight: '80px',
//                 resize: 'vertical'
//               }}
//               required
//             />

//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: 'bold', 
//                 marginBottom: '8px',
//                 color: '#333'
//               }}>
//                 Energy Level:
//               </label>
//               <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
//                 {(['high', 'medium', 'low'] as EnergyLevel[]).map(level => (
//                   <label key={level} style={{ 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     gap: '5px',
//                     cursor: 'pointer'
//                   }}>
//                     <input
//                       type="radio"
//                       value={level}
//                       checked={energyLevel === level}
//                       onChange={() => setEnergyLevel(level)}
//                       style={{ cursor: 'pointer' }}
//                     />
//                     <span style={{ textTransform: 'capitalize' }}>{level}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: 'bold', 
//                 marginBottom: '8px',
//                 color: '#333'
//               }}>
//                 Work Style:
//               </label>
//               <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
//                 {(['focused', 'structured', 'flexible'] as WorkStyle[]).map(style => (
//                   <label key={style} style={{ 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     gap: '5px',
//                     cursor: 'pointer'
//                   }}>
//                     <input
//                       type="radio"
//                       value={style}
//                       checked={workStyle === style}
//                       onChange={() => setWorkStyle(style)}
//                       style={{ cursor: 'pointer' }}
//                     />
//                     <span style={{ textTransform: 'capitalize' }}>{style}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: 'bold', 
//                 marginBottom: '10px',
//                 color: '#333'
//               }}>
//                 Goals:
//               </label>
//               {goals.map(goal => (
//                 <div key={goal.id} style={{ 
//                   display: 'flex', 
//                   gap: '10px', 
//                   marginBottom: '10px',
//                   alignItems: 'center'
//                 }}>
//                   <input
//                     type="text"
//                     value={goal.title}
//                     onChange={e => updateGoal(goal.id, e.target.value)}
//                     placeholder="Enter your goal..."
//                     style={{ 
//                       flex: 1, 
//                       padding: '10px', 
//                       borderRadius: '6px', 
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeGoal(goal.id)}
//                     style={{
//                       background: '#e74c3c',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '6px',
//                       padding: '8px 12px',
//                       cursor: 'pointer',
//                       fontSize: '12px',
//                       fontWeight: 'bold'
//                     }}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={addGoal}
//                 style={{
//                   background: '#27ae60',
//                   color: 'white',
//                   border: 'none',
//                   padding: '10px 20px',
//                   borderRadius: '6px',
//                   cursor: 'pointer',
//                   marginTop: '10px',
//                   fontSize: '14px',
//                   fontWeight: 'bold'
//                 }}
//               >
//                 + Add Goal
//               </button>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               style={{
//                 background: loading ? '#95a5a6' : '#3498db',
//                 color: 'white',
//                 padding: '15px',
//                 border: 'none',
//                 borderRadius: '8px',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 cursor: loading ? 'not-allowed' : 'pointer',
//                 transition: 'background-color 0.3s ease'
//               }}
//             >
//               {loading ? 'Processing...' : '🚀 Start Coaching Session'}
//             </button>
//           </form>

//           {error && (
//             <div style={{ 
//               marginTop: '20px', 
//               color: '#e74c3c', 
//               textAlign: 'center',
//               padding: '10px',
//               background: '#ffeaea',
//               borderRadius: '6px',
//               border: '1px solid #e74c3c'
//             }}>
//               ❌ {error}
//             </div>
//           )}

//           {/* Schedule Table */}
//           <ScheduleTable schedule={schedule} setSchedule={setSchedule} />

//           {/* Response Display */}
//           {response && (
//             <div style={{ marginTop: '20px' }}>
//               <details style={{ marginBottom: '10px' }}>
//                 <summary style={{ 
//                   cursor: 'pointer', 
//                   fontWeight: 'bold',
//                   padding: '5px 0'
//                 }}>
//                   📊 View Raw Response Data
//                 </summary>
//                 <pre
//                   style={{
//                     background: '#f8f9fa',
//                     padding: '15px',
//                     marginTop: '10px',
//                     borderRadius: '6px',
//                     overflowX: 'auto',
//                     fontSize: '12px',
//                     border: '1px solid #e9ecef'
//                   }}
//                 >
//                   {JSON.stringify(response, null, 2)}
//                 </pre>
//               </details>
//             </div>
//           )}
//         </div>

//         {/* Right Column: Goal Checklist */}
//         <div style={{ 
//           flex: '1 1 300px', 
//           minWidth: '250px',
//           borderLeft: '1px solid #eee', 
//           paddingLeft: '20px',
//           overflowY: 'auto'
//         }}>
//           <h2 style={{ 
//             fontSize: '1.5rem', 
//             marginBottom: '15px',
//             color: '#333'
//           }}>
//             ✅ Goal Checklist
//           </h2>
          
//           {goals.length === 0 ? (
//             <p style={{ color: '#666', fontStyle: 'italic' }}>
//               No goals added yet. Add some goals to track your progress!
//             </p>
//           ) : (
//             <>
//               {goals.map(goal => (
//                 <div
//                   key={goal.id}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     marginBottom: '12px',
//                     gap: '10px',
//                     padding: '8px',
//                     borderRadius: '6px',
//                     background: completed[goal.id] ? '#e8f5e8' : '#f8f9fa'
//                   }}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={!!completed[goal.id]}
//                     onChange={e =>
//                       setCompleted(prev => ({
//                         ...prev,
//                         [goal.id]: e.target.checked,
//                       }))
//                     }
//                     style={{ 
//                       cursor: 'pointer',
//                       marginTop: '2px'
//                     }}
//                   />
//                   <span
//                     style={{
//                       textDecoration: completed[goal.id] ? 'line-through' : 'none',
//                       flex: 1,
//                       fontSize: '14px',
//                       color: completed[goal.id] ? '#666' : '#333'
//                     }}
//                   >
//                     {goal.title || 'Untitled Goal'}
//                   </span>
//                 </div>
//               ))}

//               {/* Feedback sections for completed goals */}
//               {goals.map(goal => (
//                 completed[goal.id] && (
//                   <div key={`feedback-${goal.id}`} style={{ 
//                     marginBottom: '15px',
//                     padding: '10px',
//                     background: '#f0f8ff',
//                     borderRadius: '6px',
//                     border: '1px solid #e3f2fd'
//                   }}>
//                     <label style={{ 
//                       fontWeight: 'bold', 
//                       display: 'block',
//                       marginBottom: '5px',
//                       fontSize: '13px',
//                       color: '#2c3e50'
//                     }}>
//                       💭 Feedback for "{goal.title}":
//                     </label>
//                     <textarea
//                       value={feedbacks[goal.id] || ''}
//                       onChange={e =>
//                         setFeedbacks(prev => ({
//                           ...prev,
//                           [goal.id]: e.target.value,
//                         }))
//                       }
//                       placeholder="How did this goal go? Any insights or reflections?"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         borderRadius: '4px',
//                         border: '1px solid #ddd',
//                         fontSize: '13px',
//                         resize: 'vertical',
//                         minHeight: '60px'
//                       }}
//                       rows={2}
//                     />
//                   </div>
//                 )
//               ))}

//               {/* Progress Summary */}
//               <div style={{ 
//                 marginTop: '20px', 
//                 padding: '15px',
//                 background: '#f8f9fa',
//                 borderRadius: '8px',
//                 border: '1px solid #e9ecef'
//               }}>
//                 <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>📈 Progress Summary</h4>
//                 <p style={{ 
//                   margin: '5px 0',
//                   fontSize: '14px',
//                   color: '#666'
//                 }}>
//                   <strong>{completedGoalsCount}</strong> of <strong>{goals.length}</strong> goals completed
//                 </p>
//                 <div style={{ 
//                   width: '100%', 
//                   height: '8px', 
//                   background: '#e9ecef', 
//                   borderRadius: '4px',
//                   overflow: 'hidden'
//                 }}>
//                   <div style={{ 
//                     width: `${goals.length > 0 ? (completedGoalsCount / goals.length) * 100 : 0}%`, 
//                     height: '100%', 
//                     background: '#27ae60',
//                     transition: 'width 0.3s ease'
//                   }} />
//                 </div>
//                 <p style={{ 
//                   margin: '8px 0 0 0',
//                   fontSize: '12px',
//                   color: '#7f8c8d'
//                 }}>
//                   {goals.length > 0 ? Math.round((completedGoalsCount / goals.length) * 100) : 0}% Complete
//                 </p>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }