import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Clock, Flame, Check, X, TrendingUp, Award } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Result Card Component
 * Displays quiz results with XP, accuracy, and rank
 */
export default function ResultCard({ 
    score, 
    xpEarned, 
    accuracy, 
    timeTaken, 
    correctAnswers, 
    wrongAnswers,
    combo,
    onRestart,
    onExit 
}) {
    const getRank = () => {
        if (accuracy >= 95) return { rank: 'S', color: 'text-yellow-300', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30' };
        if (accuracy >= 85) return { rank: 'A', color: 'text-emerald-300', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30' };
        if (accuracy >= 70) return { rank: 'B', color: 'text-blue-300', bg: 'bg-blue-500/20', border: 'border-blue-500/30' };
        if (accuracy >= 50) return { rank: 'C', color: 'text-orange-300', bg: 'bg-orange-500/20', border: 'border-orange-500/30' };
        return { rank: 'D', color: 'text-red-300', bg: 'bg-red-500/20', border: 'border-red-500/30' };
    };

    const rank = getRank();

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
        >
            {/* Rank Badge */}
            <Card className={cn(
                'p-8 text-center border-2',
                rank.bg,
                rank.border
            )}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className={cn(
                        'text-8xl font-bold mb-2',
                        rank.color
                    )}
                >
                    {rank.rank}
                </motion.div>
                <p className="text-gray-300">Quiz Completed!</p>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-brand-300" />
                        <span className="text-sm text-gray-400">Score</span>
                    </div>
                    <p className="text-3xl font-bold">{score}%</p>
                </Card>

                <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm text-gray-400">XP Earned</span>
                    </div>
                    <p className="text-3xl font-bold text-brand-300">+{xpEarned}</p>
                </Card>

                <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-emerald-300" />
                        <span className="text-sm text-gray-400">Accuracy</span>
                    </div>
                    <p className="text-3xl font-bold">{accuracy}%</p>
                </Card>

                <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-300" />
                        <span className="text-sm text-gray-400">Time</span>
                    </div>
                    <p className="text-3xl font-bold">{formatTime(timeTaken)}</p>
                </Card>
            </div>

            {/* Detailed Stats */}
            <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-brand-300" />
                    Performance
                </h3>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                <Check className="w-5 h-5 text-emerald-300" />
                            </div>
                            <span className="text-gray-300">Correct Answers</span>
                        </div>
                        <span className="text-xl font-bold text-emerald-300">{correctAnswers}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                                <X className="w-5 h-5 text-red-300" />
                            </div>
                            <span className="text-gray-300">Wrong Answers</span>
                        </div>
                        <span className="text-xl font-bold text-red-300">{wrongAnswers}</span>
                    </div>

                    {combo > 1 && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                                    <Flame className="w-5 h-5 text-orange-300" />
                                </div>
                                <span className="text-gray-300">Best Combo</span>
                            </div>
                            <span className="text-xl font-bold text-orange-300">{combo}x</span>
                        </div>
                    )}
                </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onRestart}
                    className="flex-1 py-4 rounded-xl font-medium bg-brand-500 hover:bg-brand-600 text-white transition-colors"
                >
                    Try Again
                </motion.button>
                
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onExit}
                    className="flex-1 py-4 rounded-xl font-medium bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                    Back to Practice
                </motion.button>
            </div>
        </motion.div>
    );
}
