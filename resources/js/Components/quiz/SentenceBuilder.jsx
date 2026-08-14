import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Sentence Builder Component
 * Drag and drop sentence ordering
 */
export default function SentenceBuilder({ 
    question, 
    onAnswer, 
    isAnswered,
    showFeedback 
}) {
    const [availableWords, setAvailableWords] = useState([...question.words]);
    const [orderedWords, setOrderedWords] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const addToOrder = (word, index) => {
        if (isAnswered) return;
        
        const newAvailable = [...availableWords];
        newAvailable.splice(index, 1);
        
        setAvailableWords(newAvailable);
        setOrderedWords([...orderedWords, word]);
    };

    const removeFromOrder = (word, index) => {
        if (isAnswered) return;
        
        const newOrdered = [...orderedWords];
        newOrdered.splice(index, 1);
        
        setOrderedWords(newOrdered);
        setAvailableWords([...availableWords, word]);
    };

    const checkAnswer = () => {
        if (isAnswered || orderedWords.length === 0) return;
        
        const correct = JSON.stringify(orderedWords) === JSON.stringify(question.answer);
        setIsCorrect(correct);
        onAnswer(correct);
    };

    const resetOrder = () => {
        if (isAnswered) return;
        
        setAvailableWords([...question.words]);
        setOrderedWords([]);
    };

    const isComplete = orderedWords.length === question.words.length;

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">{question.question}</h3>

            {/* Answer Area */}
            <div className="min-h-[80px] p-4 rounded-xl border-2 border-dashed border-white/20 bg-white/5">
                {orderedWords.length === 0 ? (
                    <p className="text-center text-gray-500">Click words below to build the sentence</p>
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {orderedWords.map((word, index) => (
                            <motion.button
                                key={`${word}-${index}`}
                                whileHover={!isAnswered ? { scale: 1.05 } : {}}
                                whileTap={!isAnswered ? { scale: 0.95 } : {}}
                                onClick={() => removeFromOrder(word, index)}
                                disabled={isAnswered}
                                className={cn(
                                    'px-4 py-2 rounded-lg border bg-brand-500/20 border-brand-500/30 text-white font-medium transition-all',
                                    isAnswered && 'cursor-default'
                                )}
                            >
                                {word}
                            </motion.button>
                        ))}
                    </div>
                )}
            </div>

            {/* Available Words */}
            <div className="flex flex-wrap gap-2">
                {availableWords.map((word, index) => (
                    <motion.button
                        key={`${word}-${index}`}
                        whileHover={!isAnswered ? { scale: 1.05 } : {}}
                        whileTap={!isAnswered ? { scale: 0.95 } : {}}
                        onClick={() => addToOrder(word, index)}
                        disabled={isAnswered}
                        className={cn(
                            'px-4 py-2 rounded-lg border bg-white/5 border-white/10 text-white font-medium transition-all hover:border-brand-500/40 hover:bg-brand-500/10',
                            isAnswered && 'cursor-default opacity-50'
                        )}
                    >
                        {word}
                    </motion.button>
                ))}
            </div>

            {/* Action Buttons */}
            {!isAnswered && (
                <div className="flex gap-3">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetOrder}
                        disabled={orderedWords.length === 0}
                        className={cn(
                            'flex-1 py-3 rounded-xl font-medium transition-colors',
                            orderedWords.length === 0 
                                ? 'bg-white/5 text-gray-500 cursor-not-allowed' 
                                : 'bg-white/10 hover:bg-white/20 text-white'
                        )}
                    >
                        Reset
                    </motion.button>
                    
                    <motion.button
                        whileHover={isComplete ? { scale: 1.02 } : {}}
                        whileTap={isComplete ? { scale: 0.98 } : {}}
                        onClick={checkAnswer}
                        disabled={!isComplete}
                        className={cn(
                            'flex-1 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2',
                            isComplete 
                                ? 'bg-brand-500 hover:bg-brand-600 text-white' 
                                : 'bg-white/5 text-gray-500 cursor-not-allowed'
                        )}
                    >
                        Check Answer
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            )}

            {/* Feedback */}
            {isAnswered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        'flex items-center justify-center gap-2 p-4 rounded-xl',
                        isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'
                    )}
                >
                    {isCorrect ? (
                        <>
                            <Check className="w-5 h-5 text-emerald-300" />
                            <span className="text-emerald-300 font-medium">Correct!</span>
                        </>
                    ) : (
                        <>
                            <X className="w-5 h-5 text-red-300" />
                            <span className="text-red-300 font-medium">
                                Correct order: {question.answer.join(' → ')}
                            </span>
                        </>
                    )}
                </motion.div>
            )}
        </div>
    );
}
