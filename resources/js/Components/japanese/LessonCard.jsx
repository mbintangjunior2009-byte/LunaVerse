import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, Lock, Clock, Signal } from 'lucide-react';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

export default function LessonCard({
    lesson,
    status,
    progress,
}) {
    const isLocked = status === 'locked';
    const isCompleted = status === 'completed';

    const body = (
        <motion.div
            whileHover={isLocked ? undefined : { y: -3, scale: 1.01 }}
            whileTap={isLocked ? undefined : { scale: 0.99 }}
            className={cn(
                'glass-card p-5 h-full border transition-colors',
                isLocked
                    ? 'opacity-60 border-white/5 cursor-not-allowed'
                    : 'border-white/10 hover:border-brand-500/40 cursor-pointer'
            )}
        >
            <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                    <h3 className="text-lg font-bold mb-1">{lesson.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-brand-300" />
                            {lesson.estimatedTime}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Signal className="w-3.5 h-3.5 text-brand-300" />
                            {lesson.difficulty}
                        </span>
                    </div>
                </div>
                <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center border shrink-0',
                    isCompleted && 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
                    isLocked && 'bg-white/5 border-white/10 text-gray-500',
                    !isCompleted && !isLocked && 'bg-brand-500/15 border-brand-500/30 text-brand-300'
                )}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : isLocked ? <Lock className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </div>
            </div>

            <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-white">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className={cn('h-full rounded-full', isCompleted ? 'bg-emerald-400' : 'bg-brand-500')}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between gap-3">
                <span className={cn(
                    'text-xs font-medium px-2.5 py-1 rounded-full border',
                    isCompleted && 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
                    isLocked && 'text-gray-400 bg-white/5 border-white/10',
                    !isCompleted && !isLocked && 'text-brand-300 bg-brand-500/10 border-brand-500/20'
                )}>
                    {isCompleted ? 'Completed' : isLocked ? 'Locked' : 'Available'}
                </span>

                {!isLocked && (
                    <Button variant="primary" size="sm" className="gap-1 pointer-events-none">
                        <Play className="w-3.5 h-3.5" />
                        Start Lesson
                    </Button>
                )}
            </div>
        </motion.div>
    );

    if (isLocked) {
        return <div className="h-full">{body}</div>;
    }

    return (
        <Link href={`/language/japanese/study/${lesson.id}`} className="block h-full">
            {body}
        </Link>
    );
}
