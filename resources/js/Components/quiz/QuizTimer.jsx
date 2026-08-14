import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Quiz Timer Component
 * Displays countdown timer for quiz questions
 */
export default function QuizTimer({ 
    timeLimit, 
    onTimeUp, 
    isPaused = false 
}) {
    const [timeLeft, setTimeLeft] = useState(timeLimit);
    const [isWarning, setIsWarning] = useState(false);

    useEffect(() => {
        setTimeLeft(timeLimit);
        setIsWarning(false);
    }, [timeLimit]);

    useEffect(() => {
        if (isPaused || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1;
                
                if (newTime <= 5) {
                    setIsWarning(true);
                }
                
                if (newTime <= 0) {
                    onTimeUp?.();
                    return 0;
                }
                
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isPaused, timeLimit, onTimeUp]);

    const percentage = (timeLeft / timeLimit) * 100;

    return (
        <div className="flex items-center gap-2">
            <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center border transition-colors',
                isWarning 
                    ? 'bg-red-500/20 border-red-500/30 text-red-300' 
                    : 'bg-white/5 border-white/10 text-gray-300'
            )}>
                <Clock className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                    <span className={cn(
                        'font-medium',
                        isWarning ? 'text-red-300' : 'text-gray-300'
                    )}>
                        {timeLeft}s
                    </span>
                    <span className="text-gray-500">{timeLimit}s</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className={cn(
                            'h-full rounded-full transition-all duration-1000',
                            isWarning ? 'bg-red-500' : 'bg-brand-500'
                        )}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
