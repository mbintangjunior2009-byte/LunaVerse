import React from 'react';
import { Link } from '@inertiajs/react';
import { CheckCircle2, Coins, RotateCcw, Sparkles, XCircle } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

export default function QuizResults({
    quiz,
    score,
    total,
    earnedXp,
    earnedCoins,
    onRetry,
}) {
    const percent = total ? Math.round((score / total) * 100) : 0;
    const passed = percent >= 60;

    return (
        <Card className="p-6 md:p-8 text-center">
            <div className={cn(
                'w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center border',
                passed
                    ? 'bg-emerald-500/15 border-emerald-500/30'
                    : 'bg-orange-500/15 border-orange-500/30'
            )}>
                {passed ? <CheckCircle2 className="w-10 h-10 text-emerald-300" /> : <XCircle className="w-10 h-10 text-orange-300" />}
            </div>
            <h2 className="text-3xl font-bold mb-2">{passed ? 'Quiz Complete' : 'Keep Practicing'}</h2>
            <p className="text-gray-400 mb-6">{quiz.title}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-gray-400 mb-1">Score</p>
                    <p className="text-2xl font-bold">{score}/{total}</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-gray-400 mb-1">Accuracy</p>
                    <p className="text-2xl font-bold text-brand-300">{percent}%</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-gray-400 mb-1 inline-flex items-center gap-1 justify-center w-full">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> XP
                    </p>
                    <p className="text-2xl font-bold">+{earnedXp}</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-gray-400 mb-1 inline-flex items-center gap-1 justify-center w-full">
                        <Coins className="w-3.5 h-3.5 text-yellow-400" /> Coins
                    </p>
                    <p className="text-2xl font-bold">+{earnedCoins}</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button type="button" variant="primary" className="gap-2" onClick={onRetry}>
                    <RotateCcw className="w-4 h-4" />
                    Retry Quiz
                </Button>
                <Link href="/languages/japanese/practice">
                    <Button variant="outline" className="w-full sm:w-auto">Back to Practice</Button>
                </Link>
            </div>
        </Card>
    );
}
