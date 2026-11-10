import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Brain, Lock, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * Reusable Quiz Card Component
 * Displays a quiz for any language
 */
export default function QuizCard({
    languageId,
    quiz,
    status = 'available',
    bestScore = null,
    questionCount = 10,
    timeLimit = null,
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
                    <h3 className="text-lg font-bold mb-1">{quiz.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{quiz.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                        {questionCount && (
                            <span className="inline-flex items-center gap-1">
                                <Brain className="w-3.5 h-3.5 text-brand-300" />
                                {questionCount} questions
                            </span>
                        )}
                        {timeLimit && (
                            <span className="inline-flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-brand-300" />
                                {timeLimit}
                            </span>
                        )}
                    </div>
                </div>
                <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center border shrink-0',
                    isCompleted && 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
                    isLocked && 'bg-white/5 border-white/10 text-gray-500',
                    !isCompleted && !isLocked && 'bg-brand-500/15 border-brand-500/30 text-brand-300'
                )}>
                    {isCompleted ? (
                        <span className="text-sm font-bold">{bestScore}%</span>
                    ) : isLocked ? (
                        <Lock className="w-5 h-5" />
                    ) : (
                        <Brain className="w-5 h-5" />
                    )}
                </div>
            </div>

            {isCompleted && bestScore !== null && (
                <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Best Score</span>
                        <span className={cn(
                            'font-bold',
                            bestScore >= 80 ? 'text-emerald-300' : bestScore >= 60 ? 'text-yellow-300' : 'text-red-300'
                        )}>
                            {bestScore}%
                        </span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className={cn(
                                'h-full rounded-full',
                                bestScore >= 80 ? 'bg-emerald-500' : bestScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            )}
                            style={{ width: `${bestScore}%` }}
                        />
                    </div>
                </div>
            )}

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
                        <Brain className="w-3.5 h-3.5" />
                        Start Quiz
                    </Button>
                )}
            </div>
        </motion.div>
    );

    if (isLocked) {
        return <div className="h-full">{body}</div>;
    }

    return (
        <Link href={`/languages/${languageId}/practice/${quiz.id}`} className="block h-full">
            {body}
        </Link>
    );
}
