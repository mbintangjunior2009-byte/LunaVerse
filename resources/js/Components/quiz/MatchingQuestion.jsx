import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Matching Question Component
 */
export default function MatchingQuestion({ 
    question, 
    onAnswer, 
    isAnswered,
    showFeedback 
}) {
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [matches, setMatches] = useState([]);
    const [shuffledRight, setShuffledRight] = useState([]);

    React.useEffect(() => {
        // Shuffle right side
        const shuffled = [...question.pairs].sort(() => Math.random() - 0.5);
        setShuffledRight(shuffled.map(p => p.right));
    }, [question]);

    const handleLeftClick = (leftItem) => {
        if (isAnswered) return;
        setSelectedLeft(leftItem);
    };

    const handleRightClick = (rightItem) => {
        if (isAnswered || !selectedLeft) return;

        const newMatch = { left: selectedLeft, right: rightItem };
        const isCorrectMatch = question.pairs.some(
            p => p.left === selectedLeft && p.right === rightItem
        );

        setMatches([...matches, { ...newMatch, correct: isCorrectMatch }]);
        setSelectedLeft(null);
    };

    const isMatched = (item, side) => {
        return matches.some(m => m[side] === item);
    };

    const getMatchStatus = (item, side) => {
        const match = matches.find(m => m[side] === item);
        if (!match) return null;
        return match.correct ? 'correct' : 'wrong';
    };

    const allMatched = matches.length === question.pairs.length;
    const allCorrect = matches.every(m => m.correct);

    React.useEffect(() => {
        if (allMatched && !isAnswered) {
            onAnswer(allCorrect);
        }
    }, [allMatched, allCorrect, isAnswered, onAnswer]);

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">{question.question}</h3>

            <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-2">
                    {question.pairs.map((pair, index) => {
                        const matched = isMatched(pair.left, 'left');
                        const status = getMatchStatus(pair.left, 'left');
                        const isSelected = selectedLeft === pair.left;

                        return (
                            <motion.button
                                key={index}
                                whileHover={!matched && !isAnswered ? { scale: 1.02 } : {}}
                                onClick={() => handleLeftClick(pair.left)}
                                disabled={matched || isAnswered}
                                className={cn(
                                    'w-full p-4 rounded-xl border text-left transition-all',
                                    isSelected && 'border-brand-500/50 bg-brand-500/10',
                                    matched && status === 'correct' && 'border-emerald-500/50 bg-emerald-500/10',
                                    matched && status === 'wrong' && 'border-red-500/50 bg-red-500/10',
                                    !matched && !isSelected && 'border-white/10 hover:border-brand-500/40',
                                    (matched || isAnswered) && 'cursor-default'
                                )}
                            >
                                <span className="font-medium text-lg">{pair.left}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Right Column */}
                <div className="space-y-2">
                    {shuffledRight.map((item, index) => {
                        const matched = isMatched(item, 'right');
                        const status = getMatchStatus(item, 'right');

                        return (
                            <motion.button
                                key={index}
                                whileHover={!matched && !isAnswered ? { scale: 1.02 } : {}}
                                onClick={() => handleRightClick(item)}
                                disabled={matched || isAnswered}
                                className={cn(
                                    'w-full p-4 rounded-xl border text-left transition-all',
                                    matched && status === 'correct' && 'border-emerald-500/50 bg-emerald-500/10',
                                    matched && status === 'wrong' && 'border-red-500/50 bg-red-500/10',
                                    !matched && 'border-white/10 hover:border-brand-500/40',
                                    (matched || isAnswered) && 'cursor-default'
                                )}
                            >
                                <span className="font-medium text-lg">{item}</span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {isAnswered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        'flex items-center justify-center gap-2 p-4 rounded-xl',
                        allCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'
                    )}
                >
                    {allCorrect ? (
                        <>
                            <Check className="w-5 h-5 text-emerald-300" />
                            <span className="text-emerald-300 font-medium">Perfect Match!</span>
                        </>
                    ) : (
                        <>
                            <X className="w-5 h-5 text-red-300" />
                            <span className="text-red-300 font-medium">Some matches were incorrect</span>
                        </>
                    )}
                </motion.div>
            )}
        </div>
    );
}
