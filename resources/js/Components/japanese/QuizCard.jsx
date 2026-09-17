import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Coins, HelpCircle, Signal, Sparkles, Play } from 'lucide-react';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

export default function QuizCard({ quiz, completed, bestScore, onPlay }) {
    const cardBody = (
        <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="glass-card p-5 h-full border border-white/10 hover:border-brand-500/40 cursor-pointer"
        >
            <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                    <h3 className="text-lg font-bold mb-1">{quiz.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{quiz.description}</p>
                </div>
                <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center border shrink-0',
                    completed
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                        : 'bg-brand-500/15 border-brand-500/30 text-brand-300'
                )}>
                    {completed ? <CheckCircle2 className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
                <span className="inline-flex items-center gap-1.5">
                    <Signal className="w-3.5 h-3.5 text-brand-300" />
                    {quiz.difficulty}
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-300" />
                    {quiz.questionCount} Questions
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-300" />
                    {quiz.estimatedTime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                    {quiz.xpReward} XP
                </span>
                <span className="inline-flex items-center gap-1.5 col-span-2">
                    <Coins className="w-3.5 h-3.5 text-yellow-400" />
                    {quiz.coinsReward} Coins
                </span>
            </div>

            <div className="flex items-center justify-between gap-3">
                <span className={cn(
                    'text-xs font-medium px-2.5 py-1 rounded-full border',
                    completed
                        ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20'
                        : 'text-brand-300 bg-brand-500/10 border-brand-500/20'
                )}>
                    {completed ? `Completed${bestScore != null ? ` · Best ${bestScore}%` : ''}` : 'Not completed'}
                </span>
                <Button variant="primary" size="sm" className="gap-1 pointer-events-none">
                    <Play className="w-3.5 h-3.5" />
                    Start
                </Button>
            </div>
        </motion.div>
    );

    if (onPlay) {
        return (
            <button type="button" onClick={onPlay} className="block h-full w-full text-left">
                {cardBody}
            </button>
        );
    }

    return (
        <Link href={`/languages/japanese/practice/${quiz.id}`} className="block h-full">
            {cardBody}
        </Link>
    );
}
