import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Keyboard } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Typing Question Component
 */
export default function TypingQuestion({ 
    question, 
    onAnswer, 
    isAnswered,
    showFeedback 
}) {
    const [input, setInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!isAnswered) {
            inputRef.current?.focus();
        }
    }, [question, isAnswered]);

    const handleSubmit = () => {
        if (isAnswered || !input.trim()) return;
        
        const correct = input.trim().toLowerCase() === question.answer.toLowerCase();
        setIsCorrect(correct);
        onAnswer(correct);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isAnswered) {
            handleSubmit();
        }
    };

    const getFeedbackClass = () => {
        if (!isAnswered) return 'border-white/10 focus:border-brand-500/50';
        return isCorrect 
            ? 'border-emerald-500/50 bg-emerald-500/10' 
            : 'border-red-500/50 bg-red-500/10';
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <Keyboard className="w-5 h-5 text-brand-300" />
                <span className="text-sm text-gray-400">Type the romaji</span>
            </div>

            <h3 className="text-3xl font-bold text-center mb-8">{question.question}</h3>

            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isAnswered}
                    placeholder="Type your answer..."
                    className={cn(
                        'w-full px-6 py-4 rounded-xl border bg-white/5 text-white placeholder-gray-500 text-lg text-center transition-all',
                        getFeedbackClass()
                    )}
                />
                
                {isAnswered && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        {isCorrect ? (
                            <Check className="w-6 h-6 text-emerald-300" />
                        ) : (
                            <X className="w-6 h-6 text-red-300" />
                        )}
                    </div>
                )}
            </div>

            {showFeedback && isAnswered && !isCorrect && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-300"
                >
                    Correct answer: <span className="font-bold">{question.answer}</span>
                </motion.div>
            )}

            {!isAnswered && (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={!input.trim()}
                    className={cn(
                        'w-full py-3 rounded-xl font-medium transition-colors',
                        input.trim() 
                            ? 'bg-brand-500 hover:bg-brand-600 text-white' 
                            : 'bg-white/5 text-gray-500 cursor-not-allowed'
                    )}
                >
                    Submit
                </motion.button>
            )}
        </div>
    );
}
