import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { TrendingUp, Lock, Target, Zap, ChevronRight } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * Reusable Practice Card Component
 * Displays a practice quiz or exercise for any language
 */
export default function PracticeCard({
    languageId,
    category,
    status = 'available',
    score = null,
    questionCount = 10,
    onClick
}) {
    const isLocked = status === 'locked';
    const isCompleted = status === 'completed';
    const questions = category.questions || questionCount;
    const xpReward = category.xpReward || 50;
    const difficulty = category.difficulty || 'Beginner';

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
            onClick={!isLocked ? onClick : undefined}
        >
            <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center text-2xl border',
                        isCompleted && 'bg-emerald-500/15 border-emerald-500/30',
                        isLocked && 'bg-white/5 border-white/10',
                        !isCompleted && !isLocked && 'bg-brand-500/15 border-brand-500/30'
                    )}>
                        {category.icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                </div>
                <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center border shrink-0',
                    isCompleted && 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
                    isLocked && 'bg-white/5 border-white/10 text-gray-500',
                    !isCompleted && !isLocked && 'bg-brand-500/15 border-brand-500/30 text-brand-300'
                )}>
                    {isCompleted ? (
                        <span className="text-sm font-bold">{score}%</span>
                    ) : isLocked ? (
                        <Lock className="w-5 h-5" />
                    ) : (
                        <ChevronRight className="w-5 h-5" />
                    )}
                </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="inline-flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    {questions} questions
                </span>
                <span className="inline-flex items-center gap-1 text-brand-300">
                    <Zap className="w-3.5 h-3.5" />
                    {xpReward} XP
                </span>
                {isCompleted && score && (
                    <span className={cn(
                        'inline-flex items-center gap-1',
                        score >= 80 ? 'text-emerald-300' : score >= 60 ? 'text-yellow-300' : 'text-red-300'
                    )}>
                        Best: {score}%
                    </span>
                )}
            </div>

            <div className="flex items-center justify-between gap-3">
                <span className={cn(
                    'text-xs font-medium px-2.5 py-1 rounded-full border',
                    isCompleted && 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
                    isLocked && 'text-gray-400 bg-white/5 border-white/10',
                    !isCompleted && !isLocked && 'text-brand-300 bg-brand-500/10 border-brand-500/20'
                )}>
                    {isCompleted ? 'Completed' : isLocked ? 'Locked' : difficulty}
                </span>

                {!isLocked && (
                    <Button variant="primary" size="sm" className="gap-1 pointer-events-none">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Play
                    </Button>
                )}
            </div>
        </motion.div>
    );

    if (isLocked) {
        return <div className="h-full">{body}</div>;
    }

    if (onClick) {
        return <div className="h-full cursor-pointer" onClick={onClick}>{body}</div>;
    }

    // Only render Link if no onClick handler and not locked
    return (
        <Link href={`/languages/${languageId}/practice/${category.id}`} className="block h-full">
            {body}
        </Link>
    );
}
