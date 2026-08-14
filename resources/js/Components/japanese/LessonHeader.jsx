import React from 'react';
import { Clock, Signal, Sparkles } from 'lucide-react';
import { Card } from '@/Components/ui/Card';

export default function LessonHeader({
    title,
    categoryTitle,
    estimatedTime,
    difficulty,
    progress,
    xpReward,
    completed,
}) {
    return (
        <div className="mb-6">
            <p className="text-sm text-brand-300 mb-2">{categoryTitle}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
                {title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                <Card className="p-4">
                    <p className="text-xs text-gray-400 mb-1">Lesson Progress</p>
                    <p className="text-2xl font-bold text-brand-300">{progress}%</p>
                    <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-brand-700 to-brand-300 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </Card>
                <Card className="p-4">
                    <p className="text-xs text-gray-400 mb-1 inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-300" /> Estimated Time
                    </p>
                    <p className="text-xl font-bold">{estimatedTime}</p>
                </Card>
                <Card className="p-4">
                    <p className="text-xs text-gray-400 mb-1 inline-flex items-center gap-1">
                        <Signal className="w-3.5 h-3.5 text-brand-300" /> Difficulty
                    </p>
                    <p className="text-xl font-bold">{difficulty}</p>
                </Card>
                <Card className="p-4">
                    <p className="text-xs text-gray-400 mb-1 inline-flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> XP Reward
                    </p>
                    <p className="text-xl font-bold">{completed ? 'Earned' : `+${xpReward}`}</p>
                </Card>
            </div>
        </div>
    );
}
