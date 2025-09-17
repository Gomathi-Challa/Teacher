// 'use client';

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { X, Plus } from 'lucide-react';
// import { UserContext, EnergyLevel, Priority, WeekGoal } from '@/lib/types/productivity';

// interface ContextFormProps {
//   onSubmit: (context: UserContext) => void;
//   isLoading?: boolean;
//   initialData?: Partial<UserContext>;
// }

// export function ContextForm({ onSubmit, isLoading = false, initialData }: ContextFormProps) {
//   const [formData, setFormData] = useState<UserContext>({
//     currentMood: initialData?.currentMood || '',
//     energyLevel: initialData?.energyLevel || EnergyLevel.MEDIUM,
//     availableHours: initialData?.availableHours || 8,
//     distractions: initialData?.distractions || [],
//     preferredWorkStyle: initialData?.preferredWorkStyle || '',
//     currentChallenges: initialData?.currentChallenges || '',
//     weekGoals: initialData?.weekGoals || [],
//   });

//   const [newDistraction, setNewDistraction] = useState('');
//   const [newGoal, setNewGoal] = useState<Partial<WeekGoal>>({
//     goal: '',
//     deadline: '',
//     priority: Priority.MEDIUM,
//   });

//   const handleInputChange = (field: keyof UserContext, value: any) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const addDistraction = () => {
//     if (newDistraction.trim()) {
//       handleInputChange('distractions', [...formData.distractions, newDistraction.trim()]);
//       setNewDistraction('');
//     }
//   };

//   const removeDistraction = (index: number) => {
//     handleInputChange('distractions', formData.distractions.filter((_, i) => i !== index));
//   };

//   const addGoal = () => {
//     if (newGoal.goal?.trim() && newGoal.deadline?.trim()) {
//       const goal: WeekGoal = {
//         id: `goal_${Date.now()}`,
//         goal: newGoal.goal.trim(),
//         deadline: newGoal.deadline.trim(),
//         priority: newGoal.priority || Priority.MEDIUM,
//       };
//       handleInputChange('weekGoals', [...formData.weekGoals, goal]);
//       setNewGoal({ goal: '', deadline: '', priority: Priority.MEDIUM });
//     }
//   };

//   const removeGoal = (index: number) => {
//     handleInputChange('weekGoals', formData.weekGoals.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   const canSubmit = formData.currentMood.trim() && 
//                    formData.currentChallenges.trim() && 
//                    formData.preferredWorkStyle.trim() &&
//                    formData.weekGoals.length > 0;

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Current Context</CardTitle>
//           <CardDescription>Tell us about your current situation</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div>
//             <Label htmlFor="mood">How are you feeling right now?</Label>
//             <Input
//               id="mood"
//               value={formData.currentMood}
//               onChange={(e) => handleInputChange('currentMood', e.target.value)}
//               placeholder="e.g., motivated, overwhelmed, focused, distracted"
//               className="mt-1"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       <div className="flex justify-end">
//         <Button 
//           type="submit" 
//           disabled={!canSubmit || isLoading}
//           className="min-w-[120px]"
//         >
//           {isLoading ? 'Processing...' : 'Start Coaching Session'}
//         </Button>
//       </div>
//     </form>
//   );
// }>

//           <div>
//             <Label htmlFor="energy">Current Energy Level</Label>
//             <Select 
//               value={formData.energyLevel} 
//               onValueChange={(value) => handleInputChange('energyLevel', value as EnergyLevel)}
//             >
//               <SelectTrigger className="mt-1">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value={EnergyLevel.LOW}>Low</SelectItem>
//                 <SelectItem value={EnergyLevel.MEDIUM}>Medium</SelectItem>
//                 <SelectItem value={EnergyLevel.HIGH}>High</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Label htmlFor="hours">Available Hours Today</Label>
//             <Input
//               id="hours"
//               type="number"
//               min="1"
//               max="16"
//               value={formData.availableHours}
//               onChange={(e) => handleInputChange('availableHours', parseInt(e.target.value) || 8)}
//               className="mt-1"
//             />
//           </div>

//           <div>
//             <Label htmlFor="challenges">Current Challenges</Label>
//             <Textarea
//               id="challenges"
//               value={formData.currentChallenges}
//               onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
//               placeholder="e.g., procrastination, time management, focus issues"
//               className="mt-1"
//             />
//           </div>

//           <div>
//             <Label htmlFor="workStyle">Preferred Work Style</Label>
//             <Textarea
//               id="workStyle"
//               value={formData.preferredWorkStyle}
//               onChange={(e) => handleInputChange('preferredWorkStyle', e.target.value)}
//               placeholder="e.g., long focused blocks, short bursts with breaks, quiet environment"
//               className="mt-1"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Distractions</CardTitle>
//           <CardDescription>What tends to distract you?</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex gap-2">
//             <Input
//               value={newDistraction}
//               onChange={(e) => setNewDistraction(e.target.value)}
//               placeholder="e.g., social media, phone notifications"
//               onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addDistraction())}
//             />
//             <Button type="button" onClick={addDistraction} size="sm">
//               <Plus className="h-4 w-4" />
//             </Button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {formData.distractions.map((distraction, index) => (
//               <Badge key={index} variant="secondary" className="flex items-center gap-1">
//                 {distraction}
//                 <X 
//                   className="h-3 w-3 cursor-pointer hover:text-red-500" 
//                   onClick={() => removeDistraction(index)}
//                 />
//               </Badge>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Week Goals</CardTitle>
//           <CardDescription>What do you want to accomplish this week?</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             <Input
//               value={newGoal.goal || ''}
//               onChange={(e) => setNewGoal(prev => ({ ...prev, goal: e.target.value }))}
//               placeholder="Goal description"
//             />
//             <Input
//               value={newGoal.deadline || ''}
//               onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
//               placeholder="Deadline (e.g., Friday, Dec 15)"
//             />
//             <div className="flex gap-2">
//               <Select 
//                 value={newGoal.priority || Priority.MEDIUM} 
//                 onValueChange={(value) => setNewGoal(prev => ({ ...prev, priority: value as Priority }))}
//               >
//                 <SelectTrigger>
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value={Priority.LOW}>Low</SelectItem>
//                   <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
//                   <SelectItem value={Priority.HIGH}>High</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button type="button" onClick={addGoal} size="sm">
//                 <Plus className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           <div className="space-y-2">
//             {formData.weekGoals.map((goal, index) => (
//               <div key={goal.id || index} className="flex items-center justify-between p-3 border rounded-lg">
//                 <div className="flex-1">
//                   <div className="font-medium">{goal.goal}</div>
//                   <div className="text-sm text-muted-foreground">
//                     Due: {goal.deadline} • Priority: {goal.priority}
//                   </div>
//                 </div>
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => removeGoal(index)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//             ))}
//           </div

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// If Badge is not available, you can use a simple fallback implementation below:
const Badge = ({ children, className = '', variant = 'secondary' }: { children: React.ReactNode; className?: string; variant?: string }) => (
  <span className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 ${className}`}>{children}</span>
);
import { X, Plus } from 'lucide-react';
import { UserContext, EnergyLevel, Priority, WeekGoal } from '@/lib/types/productivity';

interface ContextFormProps {
  onSubmit: (context: UserContext) => void;
  isLoading?: boolean;
  initialData?: Partial<UserContext>;
}

export function ContextForm({
  onSubmit,
  isLoading = false,
  initialData,
}: ContextFormProps) {
  const [formData, setFormData] = useState<UserContext>({
    currentMood: initialData?.currentMood || '',
    energyLevel: initialData?.energyLevel || EnergyLevel.MEDIUM,
    availableHours: initialData?.availableHours || 8,
    distractions: initialData?.distractions || [],
    preferredWorkStyle: initialData?.preferredWorkStyle || '',
    currentChallenges: initialData?.currentChallenges || '',
    weekGoals: initialData?.weekGoals || [],
    timezone: initialData?.timezone || '',
    preferredStartTime: initialData?.preferredStartTime || '',
  });

  const [newDistraction, setNewDistraction] = useState<string>('');
  const [newGoal, setNewGoal] = useState<Partial<WeekGoal>>({
    goal: '',
    deadline: '',
    priority: Priority.MEDIUM,
  });

  const handleInputChange = <K extends keyof UserContext>(
    field: K,
    value: UserContext[K]
  ) => {
    setFormData(prev => ({ ...prev, [field]: value } as UserContext));
  };

  const addDistraction = () => {
    const trimmed = newDistraction.trim();
    if (trimmed) {
      handleInputChange('distractions', [
        ...formData.distractions,
        trimmed,
      ]);
      setNewDistraction('');
    }
  };

  const removeDistraction = (index: number) => {
    handleInputChange(
      'distractions',
      formData.distractions.filter((_, i) => i !== index)
    );
  };

  const addGoal = () => {
    if (
      newGoal.goal?.trim() &&
      newGoal.deadline?.trim() &&
      newGoal.priority
    ) {
      const goal: WeekGoal = {
        id: `goal_${Date.now()}`,
        goal: newGoal.goal.trim(),
        deadline: newGoal.deadline.trim(),
        priority: newGoal.priority,
      };
      handleInputChange('weekGoals', [
        ...formData.weekGoals,
        goal,
      ]);
      setNewGoal({ goal: '', deadline: '', priority: Priority.MEDIUM });
    }
  };

  const removeGoal = (index: number) => {
    handleInputChange(
      'weekGoals',
      formData.weekGoals.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const canSubmit =
    formData.currentMood.trim().length > 0 &&
    formData.currentChallenges.trim().length > 0 &&
    formData.preferredWorkStyle.trim().length > 0 &&
    formData.weekGoals.length > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Current Context */}
      <Card>
        <CardHeader>
          <CardTitle>Current Context</CardTitle>
          <CardDescription>
            Tell us about your current situation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="mood">How are you feeling?</Label>
            <Input
              id="mood"
              value={formData.currentMood}
              onChange={e =>
                handleInputChange('currentMood', e.target.value)
              }
              placeholder="e.g., motivated"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="energy">Energy Level</Label>
            <Select
              value={formData.energyLevel}
              onValueChange={(value: EnergyLevel) =>
                handleInputChange('energyLevel', value as EnergyLevel)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={EnergyLevel.LOW}>Low</SelectItem>
                <SelectItem value={EnergyLevel.MEDIUM}>
                  Medium
                </SelectItem>
                <SelectItem value={EnergyLevel.HIGH}>High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="hours">Available Hours</Label>
            <Input
              id="hours"
              type="number"
              min={1}
              max={24}
              value={formData.availableHours}
              onChange={e =>
                handleInputChange(
                  'availableHours',
                  parseInt(e.target.value) as number
                )
              }
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="challenges">Challenges</Label>
            <Textarea
              id="challenges"
              value={formData.currentChallenges}
              onChange={e =>
                handleInputChange(
                  'currentChallenges',
                  e.target.value
                )
              }
              placeholder="e.g., procrastination"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="workStyle">Work Style</Label>
            <Textarea
              id="workStyle"
              value={formData.preferredWorkStyle}
              onChange={e =>
                handleInputChange(
                  'preferredWorkStyle',
                  e.target.value
                )
              }
              placeholder="e.g., deep work"
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      {/* Distractions */}
      <Card>
        <CardHeader>
          <CardTitle>Distractions</CardTitle>
          <CardDescription>What distracts you?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newDistraction}
              onChange={e => setNewDistraction(e.target.value)}
              placeholder="e.g., social media"
              onKeyDown={e =>
                e.key === 'Enter' && (e.preventDefault(), addDistraction())
              }
            />
            <Button type="button" onClick={addDistraction} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.distractions.map((d, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {d}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-red-500"
                  onClick={() => removeDistraction(i)}
                />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Week Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Week Goals</CardTitle>
          <CardDescription>
            Accomplishments for this week
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Input
              placeholder="Goal"
              value={newGoal.goal || ''}
              onChange={e =>
                setNewGoal(prev => ({ ...prev, goal: e.target.value }))
              }
            />
            <Input
              placeholder="Deadline"
              value={newGoal.deadline || ''}
              onChange={e =>
                setNewGoal(prev => ({ ...prev, deadline: e.target.value }))
              }
            />
            <div className="flex gap-2">
              <Select
                value={newGoal.priority || Priority.MEDIUM}
                onValueChange={(value: Priority) =>
                  setNewGoal(prev => ({
                    ...prev,
                    priority: value as Priority,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Priority.LOW}>Low</SelectItem>
                  <SelectItem value={Priority.MEDIUM}>
                    Medium
                  </SelectItem>
                  <SelectItem value={Priority.HIGH}>High</SelectItem>
                </SelectContent>
              </Select>
              <Button type="button" onClick={addGoal} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            {formData.weekGoals.map((goal, idx) => (
              <div
                key={goal.id || idx}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="font-medium">{goal.goal}</div>
                  <div className="text-sm text-muted-foreground">
                    Due: {goal.deadline} • Priority: {goal.priority}
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeGoal(idx)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Submit */}
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={!canSubmit || isLoading}
          className="min-w-[120px]"
        >
          {isLoading ? 'Processing...' : 'Start Coaching Session'}
        </Button>
      </div>
    </form>
  );
}
