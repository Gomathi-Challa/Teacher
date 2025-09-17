// // 'use client';

// // import React, { useState } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Textarea } from '@/components/ui/textarea';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Badge } from '@/components/ui/badge';
// // import { X, Plus } from 'lucide-react';
// // import { UserContext, EnergyLevel, Priority, WeekGoal } from '@/lib/types/productivity';

// // interface ContextFormProps {
// //   onSubmit: (context: UserContext) => void;
// //   isLoading?: boolean;
// //   initialData?: Partial<UserContext>;
// // }

// // export function ContextForm({ onSubmit, isLoading = false, initialData }: ContextFormProps) {
// //   const [formData, setFormData] = useState<UserContext>({
// //     currentMood: initialData?.currentMood || '',
// //     energyLevel: initialData?.energyLevel || EnergyLevel.MEDIUM,
// //     availableHours: initialData?.availableHours || 8,
// //     distractions: initialData?.distractions || [],
// //     preferredWorkStyle: initialData?.preferredWorkStyle || '',
// //     currentChallenges: initialData?.currentChallenges || '',
// //     weekGoals: initialData?.weekGoals || [],
// //   });

// //   const [newDistraction, setNewDistraction] = useState('');
// //   const [newGoal, setNewGoal] = useState<Partial<WeekGoal>>({
// //     goal: '',
// //     deadline: '',
// //     priority: Priority.MEDIUM,
// //   });

// //   const handleInputChange = (field: keyof UserContext, value: any) => {
// //     setFormData(prev => ({ ...prev, [field]: value }));
// //   };

// //   const addDistraction = () => {
// //     if (newDistraction.trim()) {
// //       handleInputChange('distractions', [...formData.distractions, newDistraction.trim()]);
// //       setNewDistraction('');
// //     }
// //   };

// //   const removeDistraction = (index: number) => {
// //     handleInputChange('distractions', formData.distractions.filter((_, i) => i !== index));
// //   };

// //   const addGoal = () => {
// //     if (newGoal.goal?.trim() && newGoal.deadline?.trim()) {
// //       const goal: WeekGoal = {
// //         id: `goal_${Date.now()}`,
// //         goal: newGoal.goal.trim(),
// //         deadline: newGoal.deadline.trim(),
// //         priority: newGoal.priority || Priority.MEDIUM,
// //       };
// //       handleInputChange('weekGoals', [...formData.weekGoals, goal]);
// //       setNewGoal({ goal: '', deadline: '', priority: Priority.MEDIUM });
// //     }
// //   };

// //   const removeGoal = (index: number) => {
// //     handleInputChange('weekGoals', formData.weekGoals.filter((_, i) => i !== index));
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     onSubmit(formData);
// //   };

// //   const canSubmit = formData.currentMood.trim() && 
// //                    formData.currentChallenges.trim() && 
// //                    formData.preferredWorkStyle.trim() &&
// //                    formData.weekGoals.length > 0;

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Current Context</CardTitle>
// //           <CardDescription>Tell us about your current situation</CardDescription>
// //         </CardHeader>
// //         <CardContent className="space-y-4">
// //           <div>
// //             <Label htmlFor="mood">How are you feeling right now?</Label>
// //             <Input
// //               id="mood"
// //               value={formData.currentMood}
// //               onChange={(e) => handleInputChange('currentMood', e.target.value)}
// //               placeholder="e.g., motivated, overwhelmed, focused, distracted"
// //               className="mt-1"
// //             />
// //           </div>
// //           <div>
// //             <Label htmlFor="energy">Current Energy Level</Label>
// //             <Select 
// //       <div className="flex justify-end">
// //         <Button 
// //           type="submit" 
// //           disabled={!canSubmit || isLoading}
// //           className="min-w-[120px]"
// //         >
// //           {isLoading ? 'Processing...' : 'Start Coaching Session'}
// //         </Button>
// //       </div>
// //     </form>
// //   );
// // }
// //             >
// //               <SelectTrigger className="mt-1">
// //                 <SelectValue />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 <SelectItem value={EnergyLevel.LOW}>Low</SelectItem>
// //                 <SelectItem value={EnergyLevel.MEDIUM}>Medium</SelectItem>
// //                 <SelectItem value={EnergyLevel.HIGH}>High</SelectItem>
// //               </SelectContent>
// //             </Select>
// //           </div>

// //           <div>
// //             <Label htmlFor="hours">Available Hours Today</Label>
// //             <Input
// //               id="hours"
// //               type="number"
// //               min="1"
// //               max="16"
// //               value={formData.availableHours}
// //               onChange={(e) => handleInputChange('availableHours', parseInt(e.target.value) || 8)}
// //               className="mt-1"
// //             />
// //           </div>

// //           <div>
// //             <Label htmlFor="challenges">Current Challenges</Label>
// //             <Textarea
// //               id="challenges"
// //               value={formData.currentChallenges}
// //               onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
// //               placeholder="e.g., procrastination, time management, focus issues"
// //               className="mt-1"
// //             />
// //           </div>

// //           <div>
// //             <Label htmlFor="workStyle">Preferred Work Style</Label>
// //             <Textarea
// //               id="workStyle"
// //               value={formData.preferredWorkStyle}
// //               onChange={(e) => handleInputChange('preferredWorkStyle', e.target.value)}
// //               placeholder="e.g., long focused blocks, short bursts with breaks, quiet environment"
// //               className="mt-1"
// //             />
// //           </div>
// //         </CardContent>
// //       </Card>

// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Distractions</CardTitle>
// //           <CardDescription>What tends to distract you?</CardDescription>
// //         </CardHeader>
// //         <CardContent className="space-y-4">
// //           <div className="flex gap-2">
// //             <Input
// //               value={newDistraction}
// //               onChange={(e) => setNewDistraction(e.target.value)}
// //               placeholder="e.g., social media, phone notifications"
// //               onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addDistraction())}
// //             />
// //             <Button type="button" onClick={addDistraction} size="sm">
// //               <Plus className="h-4 w-4" />
// //             </Button>
// //           </div>
// //           <div className="flex flex-wrap gap-2">
// //             {formData.distractions.map((distraction, index) => (
// //               <Badge key={index} variant="secondary" className="flex items-center gap-1">
// //                 {distraction}
// //                 <X 
// //                   className="h-3 w-3 cursor-pointer hover:text-red-500" 
// //                   onClick={() => removeDistraction(index)}
// //                 />
// //               </Badge>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>

// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Week Goals</CardTitle>
// //           <CardDescription>What do you want to accomplish this week?</CardDescription>
// //         </CardHeader>
// //         <CardContent className="space-y-4">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
// //             <Input
// //               value={newGoal.goal || ''}
// //               onChange={(e) => setNewGoal(prev => ({ ...prev, goal: e.target.value }))}
// //               placeholder="Goal description"
// //             />
// //             <Input
// //               value={newGoal.deadline || ''}
// //               onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
// //               placeholder="Deadline (e.g., Friday, Dec 15)"
// //             />
// //             <div className="flex gap-2">
// //               <Select 
// //                 value={newGoal.priority || Priority.MEDIUM} 
// //                 onValueChange={(value) => setNewGoal(prev => ({ ...prev, priority: value as Priority }))}
// //               >
// //                 <SelectTrigger>
// //                   <SelectValue />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value={Priority.LOW}>Low</SelectItem>
// //                   <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
// //                   <SelectItem value={Priority.HIGH}>High</SelectItem>
// //                 </SelectContent>
// //               </Select>
// //               <Button type="button" onClick={addGoal} size="sm">
// //                 <Plus className="h-4 w-4" />
// //               </Button>
// //             </div>
// //           </div>

// //           <div className="space-y-2">
// //             {formData.weekGoals.map((goal, index) => (
// //               <div key={goal.id || index} className="flex items-center justify-between p-3 border rounded-lg">
// //                 <div className="flex-1">
// //                   <div className="font-medium">{goal.goal}</div>
// //                   <div className="text-sm text-muted-foreground">
// //                     Due: {goal.deadline} • Priority: {goal.priority}
// //                   </div>
// //                 </div>
// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   size="sm"
// //                   onClick={() => removeGoal(index)}
// //                   className="text-red-500 hover:text-red-700"
// //                 >
// //                   <X className="h-4 w-4" />
// //                 </Button>
// //               </div>
// //             ))}
// //           </div>

// // components/coaching/CoachingResults.tsx
// // components/coaching/CoachingResults.tsx
// 'use client';

// import React, { useState } from 'react';
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Clock, Calendar, Target, MessageSquare, Loader2 } from 'lucide-react';
// import { CoachingSession, AgentResponse, Priority } from '@/lib/types/productivity';

// interface CoachingResultsProps {
//   session: CoachingSession;
//   onFollowUp: (question: string) => Promise<AgentResponse>;
//   isFollowUpLoading?: boolean;
// }

// export function CoachingResults({
//   session,
//   onFollowUp,
//   isFollowUpLoading = false,
// }: CoachingResultsProps) {
//   // simple view toggle instead of Tabs component
//   const [view, setView] = useState<'schedule' | 'mentoring'>('schedule');
//   const [question, setQuestion] = useState('');
//   const [responses, setResponses] = useState<AgentResponse[]>([]);

//   const submitFollowUp = async () => {
//     if (!question.trim()) return;
//     const resp = await onFollowUp(question);
//     setResponses(prev => [...prev, resp]);
//     setQuestion('');
//   };

//   const formatContent = (text: string) =>
//     text.split('\n').map((line, idx) => {
//       if (/^[🎯💪]/.test(line)) {
//         return (
//           <h3 key={idx} className="text-lg font-semibold mt-4 text-blue-600">
//             {line}
//           </h3>
//         );
//       }
//       if (line.trim().startsWith('-')) {
//         return (
//           <div key={idx} className="ml-4 mb-1 text-gray-700">
//             • {line.trim().slice(1).trim()}
//           </div>
//         );
//       }
//       if (!line.trim()) return <br key={idx} />;
//       return (
//         <p key={idx} className="mb-2 text-gray-800">
//           {line}
//         </p>
//       );
//     });

//   // fallback badge/pill
//   const Pill = ({ children }: { children: React.ReactNode }) => (
//     <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded-full">
//       {children}
//     </span>
//   );

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <Card>
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <div>
//               <CardTitle className="flex items-center gap-2">
//                 <Target className="h-5 w-5" />
//                 Session Results
//               </CardTitle>
//               <CardDescription>
//                 {new Date(session.timestamp).toLocaleString()}
//               </CardDescription>
//             </div>
//             <div className="flex gap-2">
//               <Pill>
//                 <Clock className="h-3 w-3 inline-block mr-1" />
//                 {session.userContext.availableHours}h
//               </Pill>
//               <Pill>
//                 <Calendar className="h-3 w-3 inline-block mr-1" />
//                 {session.userContext.weekGoals.length} goals
//               </Pill>
//             </div>
//           </div>
//         </CardHeader>
//       </Card>

//       {/* View Switch */}
//       <div className="flex gap-2">
//         <Button
//           variant={view === 'schedule' ? 'default' : 'ghost'}
//           onClick={() => setView('schedule')}
//         >
//           📋 Schedule
//         </Button>
//         <Button
//           variant={view === 'mentoring' ? 'default' : 'ghost'}
//           onClick={() => setView('mentoring')}
//         >
//           🚀 Mentoring
//         </Button>
//       </div>

//       {/* Content Panel */}
//       {view === 'schedule' && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Daily Schedule</CardTitle>
//             <CardDescription>
//               Energy: {session.userContext.energyLevel}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="h-64 overflow-auto border rounded p-4 font-mono text-sm whitespace-pre-wrap">
//               {session.scheduleResponse
//                 ? formatContent(session.scheduleResponse.content)
//                 : 'No schedule.'}
//             </div>
//             {session.scheduleResponse && (
//               <div className="mt-2 text-sm text-muted-foreground">
//                 Generated in {session.scheduleResponse.processingTimeMs} ms
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}

//       {view === 'mentoring' && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Mentoring</CardTitle>
//             <CardDescription>
//               Challenges: {session.userContext.currentChallenges}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="h-64 overflow-auto border rounded p-4 font-mono text-sm whitespace-pre-wrap">
//               {session.mentorResponse
//                 ? formatContent(session.mentorResponse.content)
//                 : 'No mentoring.'}
//             </div>
//             {session.mentorResponse && (
//               <div className="mt-2 text-sm text-muted-foreground">
//                 Generated in {session.mentorResponse.processingTimeMs} ms
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}

//       {/* Week Goals */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Week Goals</CardTitle>
//         </CardHeader>
//         <CardContent className="grid gap-3">
//           {session.userContext.weekGoals.map((g, i) => (
//             <div
//               key={g.id || i}
//               className="flex justify-between items-center p-3 border rounded-lg"
//             >
//               <div>
//                 <div className="font-medium">{g.goal}</div>
//                 <div className="text-sm text-muted-foreground">Due: {g.deadline}</div>
//               </div>
//               <Pill>
//                 {g.priority.charAt(0).toUpperCase() + g.priority.slice(1)}
//               </Pill>
//             </div>
//           ))}
//         </CardContent>
//       </Card>

//       {/* Follow‑up */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <MessageSquare className="h-5 w-5" /> Ask Follow‑up
//           </CardTitle>
//           <CardDescription>Get targeted advice</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex gap-2">
//             <Input
//               value={question}
//               onChange={e => setQuestion(e.target.value)}
//               placeholder="Type your question…"
//               onKeyDown={e => e.key === 'Enter' && submitFollowUp()}
//               disabled={isFollowUpLoading}
//             />
//             <Button onClick={submitFollowUp} disabled={!question.trim() || isFollowUpLoading}>
//               {isFollowUpLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Ask'}
//             </Button>
//           </div>
//           {responses.map((r, idx) => (
//             <Card key={idx} className="border-l-4 border-blue-500">
//               <CardContent>
//                 <div className="h-40 overflow-auto p-2 text-sm whitespace-pre-wrap">
//                   {formatContent(r.content)}
//                 </div>
//                 <div className="mt-2 text-xs text-muted-foreground">
//                   {new Date(r.timestamp).toLocaleString()}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </CardContent>
//       </Card>

//       {/* Quick Actions */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Quick Actions</CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-wrap gap-2">
//           {[
//             'Stay motivated',
//             'Adjust schedule',
//             'Handle interruptions',
//             'Find resources',
//           ].map((q, i) => (
//             <Button key={i} variant="outline" size="sm" onClick={() => setQuestion(q)}>
//               {q}
//             </Button>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// Badge implementation (minimal, for this usage)
function Badge({
  children,
  variant = "secondary",
  className = "",
  ...props
}: React.PropsWithChildren<{ variant?: "secondary" | "default"; className?: string }>) {
  const base =
    "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium";
  const color =
    variant === "secondary"
      ? "bg-gray-100 text-gray-700 border border-gray-200"
      : "bg-blue-100 text-blue-700";
  return (
    <span className={`${base} ${color} ${className}`} {...props}>
      {children}
    </span>
  );
}

// Tabs implementation (minimal, for this usage)
type TabsProps = React.PropsWithChildren<{ defaultValue: string; className?: string }>;
type TabsContextType = { value: string; setValue: (v: string) => void };
const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

function Tabs({ defaultValue, className, children }: TabsProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}

function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsTrigger must be used within Tabs');
  const isActive = ctx.value === value;
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-t ${isActive ? 'bg-white border-b-2 border-blue-500 font-semibold' : 'bg-gray-100 text-gray-500'}`}
      onClick={() => ctx.setValue(value)}
      aria-selected={isActive}
      tabIndex={0}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, children, className }: React.PropsWithChildren<{ value: string; className?: string }>) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsContent must be used within Tabs');
  if (ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
}

// ScrollArea implementation (minimal, for this usage)
function ScrollArea({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={className} style={{ overflowY: 'auto' }}>
      {children}
    </div>
  );
}
// import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, Clock, Target, MessageSquare, Loader2 } from 'lucide-react';
import { CoachingSession, AgentResponse } from '@/lib/types/productivity';

interface CoachingResultsProps {
  session: CoachingSession;
  onFollowUp: (question: string) => Promise<AgentResponse>;
  isFollowUpLoading?: boolean;
}

export function CoachingResults({ session, onFollowUp, isFollowUpLoading = false }: CoachingResultsProps) {
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const [followUpResponses, setFollowUpResponses] = useState<AgentResponse[]>([]);

  const handleFollowUp = async () => {
    if (!followUpQuestion.trim()) return;

    try {
      const response = await onFollowUp(followUpQuestion);
      setFollowUpResponses(prev => [...prev, response]);
      setFollowUpQuestion('');
    } catch (error) {
      console.error('Follow-up failed:', error);
    }
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.includes('🎯') || line.includes('💪')) {
        return (
          <h3 key={index} className="text-lg font-semibold mt-4 mb-2 text-blue-600">
            {line}
          </h3>
        );
      }
      if (line.includes('⏰') || line.includes('🧠') || line.includes('🚀') || 
          line.includes('⚡') || line.includes('🛡️') || line.includes('📚') ||
          line.includes('📞') || line.includes('🔥') || line.includes('💯')) {
        return (
          <h4 key={index} className="text-md font-medium mt-3 mb-1 text-green-600">
            {line}
          </h4>
        );
      }
      if (line.trim().startsWith('-')) {
        return (
          <div key={index} className="ml-4 mb-1 text-gray-700">
            {line}
          </div>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="mb-2 text-gray-800">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="space-y-6">
      {/* Session Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Coaching Session Results
              </CardTitle>
              <CardDescription>
                Generated on {new Date(session.timestamp).toLocaleString()}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs">
                <Clock className="h-3 w-3" />
                {session.userContext.availableHours}h available
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs">
                <Calendar className="h-3 w-3" />
                {session.userContext.weekGoals.length} goals
              </span>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Results */}
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="schedule">📋 Smart Schedule</TabsTrigger>
          <TabsTrigger value="mentoring">🚀 Mentoring & Guidance</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Optimized Daily Schedule</CardTitle>
              <CardDescription>
                Scientifically designed for your {session.userContext.energyLevel} energy level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full rounded border p-4">
                <div className="whitespace-pre-wrap font-mono text-sm">
                  {session.scheduleResponse ? formatContent(session.scheduleResponse.content) : 'No schedule generated'}
                </div>
              </ScrollArea>
              {session.scheduleResponse && (
                <div className="mt-4 text-sm text-muted-foreground">
                  Generated in {session.scheduleResponse.processingTimeMs}ms
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mentoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Mentoring & Strategy</CardTitle>
              <CardDescription>
                Tailored guidance for your current challenges: {session.userContext.currentChallenges}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full rounded border p-4">
                <div className="whitespace-pre-wrap font-mono text-sm">
                  {session.mentorResponse ? formatContent(session.mentorResponse.content) : 'No mentoring generated'}
                </div>
              </ScrollArea>
              {session.mentorResponse && (
                <div className="mt-4 text-sm text-muted-foreground">
                  Generated in {session.mentorResponse.processingTimeMs}ms
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Goals Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Your Week Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {session.userContext.weekGoals.map((goal, index) => (
              <div key={goal.id || index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{goal.goal}</div>
                  <div className="text-sm text-muted-foreground">Due: {goal.deadline}</div>
                </div>
                <span className={`inline-block px-2 py-0.5 rounded text-xs ${
                  goal.priority === 'high'
                    ? 'bg-red-100 text-red-700'
                    : goal.priority === 'medium'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {goal.priority}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Follow-up Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Ask Follow-up Questions
          </CardTitle>
          <CardDescription>
            Need clarification or additional guidance? Ask your AI mentor anything.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={followUpQuestion}
              onChange={(e) => setFollowUpQuestion(e.target.value)}
              placeholder="e.g., How do I handle interruptions during focused work blocks?"
              onKeyPress={(e) => e.key === 'Enter' && handleFollowUp()}
              disabled={isFollowUpLoading}
            />
            <Button 
              onClick={handleFollowUp} 
              disabled={!followUpQuestion.trim() || isFollowUpLoading}
            >
              {isFollowUpLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Ask'
              )}
            </Button>
          </div>

          {/* Follow-up Responses */}
          {followUpResponses.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Previous Follow-ups:</h4>
              {followUpResponses.map((response, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <ScrollArea className="h-[200px] w-full">
                      <div className="whitespace-pre-wrap text-sm">
                        {formatContent(response.content)}
                      </div>
                    </ScrollArea>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {new Date(response.timestamp).toLocaleString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setFollowUpQuestion("How can I stay motivated when I'm feeling overwhelmed?")}
            >
              Motivation Tips
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setFollowUpQuestion("What should I do if I fall behind schedule?")}
            >
              Schedule Adjustments
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setFollowUpQuestion("How do I handle unexpected interruptions?")}
            >
              Handle Interruptions
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setFollowUpQuestion("What are some good resources for my goals?")}
            >
              Find Resources
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}