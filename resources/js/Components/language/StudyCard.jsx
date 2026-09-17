import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BookOpen, Lock, Clock, Signal, ChevronRight } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * Reusable Study Card Component
 * Displays a study category with lesson count for any language.
 *
 * @prop {string}   languageId  – e.g. 'japanese'
 * @prop {object}   category    – study category object from languageConfig
 * @prop {string}   status      – 'available' | 'locked' | 'completed'
 * @prop {number}   progress    – 0-100 completion percentage
 * @prop {string}   [href]      – optional explicit destination; overrides the
 *                                default `/languages/{languageId}/study/{category.id}`
 * @prop {function} [onClick]   – optional click handler (suppresses the Link wrapper)
 */
export default function StudyCard({
    languageId,
    category,
    status = 'available',
    progress = 0,
    href,
    onClick
}) {
    const isLocked = status === 'locked';
    const isCompleted = status === 'completed';
    const lessonCount = category.lessons?.length || 0;

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
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : isLocked ? (
                        <Lock className="w-5 h-5" />
                    ) : (
                        <ChevronRight className="w-5 h-5" />
                    )}
                </div>
            </div>

            {lessonCount > 0 && (
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{lessonCount} lessons</span>
                    </div>
                </div>
            )}

            {progress > 0 && (
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
                        <BookOpen className="w-3.5 h-3.5" />
                        Start
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

    const destination = href ?? `/languages/${languageId}/study/${category.id}`;
    return (
        <Link href={destination} className="block h-full">
            {body}
        </Link>
    );
}
