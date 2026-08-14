import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Multiple Choice Question Component
 */
export default function MultipleChoice({ 
    question, 
    onAnswer, 
    isAnswered,
    showFeedback 
}) {
    const [selectedChoice, setSelectedChoice] = useState(null);
    const isCorrect = selectedChoice === question.answer;

    const handleChoice = (choice) => {
        if (isAnswered) return;
        
        setSelectedChoice(choice);
        onAnswer(choice === question.answer);
    };

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">{question.question}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {question.choices.map((choice, index) => {
                    const isSelected = selectedChoice === choice;
                    const isChoiceCorrect = choice === question.answer;
                    
                    let statusClass = 'border-white/10 hover:border-brand-500/40';
                    let icon = null;
                    
                    if (isAnswered) {
                        if (isSelected) {
                            statusClass = isChoiceCorrect 
                                ? 'border-emerald-500/50 bg-emerald-500/10' 
                                : 'border-red-500/50 bg-red-500/10';
                            icon = isChoiceCorrect 
                                ? <Check className="w-5 h-5 text-emerald-300" />
                                : <X className="w-5 h-5 text-red-300" />;
                        } else if (isChoiceCorrect && showFeedback) {
                            statusClass = 'border-emerald-500/30 bg-emerald-500/5';
                            icon = <Check className="w-5 h-5 text-emerald-300" />;
                        }
                    } else if (isSelected) {
                        statusClass = 'border-brand-500/50 bg-brand-500/10';
                    }

                    return (
                        <motion.button
                            key={index}
                            whileHover={!isAnswered ? { scale: 1.02 } : {}}
                            whileTap={!isAnswered ? { scale: 0.98 } : {}}
                            onClick={() => handleChoice(choice)}
                            disabled={isAnswered}
                            className={cn(
                                'relative p-4 rounded-xl border text-left transition-all',
                                statusClass,
                                isAnswered && 'cursor-default'
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium">{choice}</span>
                                {icon && (
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                        {icon}
                                    </div>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
