import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Reusable Achievement Card Component
 * Displays an achievement/badge for any language
 */
export default function AchievementCard({ 
    achievement, 
    unlocked = false, 
    completionPercentage = 0,
    index = 0 
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card
                className={cn(
                    'p-5 relative overflow-hidden',
                    unlocked
                        ? 'border-brand-500/30 bg-brand-500/5'
                        : 'opacity-60 border-white/5'
                )}
            >
                <div className="relative flex gap-4 items-start">
                    <motion.div
                        className={cn(
                            'w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 border',
                            unlocked
                                ? 'bg-gradient-to-br from-brand-500/20 to-emerald-500/20 border-brand-500/30'
                                : 'bg-white/5 border-white/10'
                        )}
                        whileHover={unlocked ? { scale: 1.05, rotate: 5 } : {}}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        {achievement.icon}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className={cn('font-bold text-lg', unlocked ? 'text-white' : 'text-gray-400')}>
                                {achievement.title}
                            </h3>
                            {unlocked ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.1 }}
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                </motion.div>
                            ) : (
                                <Lock className="w-5 h-5 text-gray-500 shrink-0" />
                            )}
                        </div>

                        <p className="text-sm text-gray-400 mb-2">{achievement.desc}</p>

                        <div className="flex items-center gap-3 text-xs mb-3">
                            <span className={cn(
                                'inline-flex items-center gap-1',
                                unlocked ? 'text-brand-300' : 'text-gray-500'
                            )}>
                                <Sparkles className="w-3 h-3" />
                                +{achievement.xpReward} XP
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-1">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Progress</span>
                                <span className={cn('font-medium', unlocked ? 'text-emerald-300' : 'text-gray-400')}>
                                    {completionPercentage}%
                                </span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className={cn('h-full rounded-full',
                                        unlocked
                                            ? 'bg-gradient-to-r from-emerald-500 to-brand-500'
                                            : 'bg-gray-600'
                                    )}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${completionPercentage}%` }}
                                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status Badge */}
                <motion.div
                    className={cn(
                        'absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full border',
                        unlocked
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            : 'bg-white/5 text-gray-500 border-white/10'
                    )}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                >
                    {unlocked ? 'Unlocked' : 'Locked'}
                </motion.div>
            </Card>
        </motion.div>
    );
}
