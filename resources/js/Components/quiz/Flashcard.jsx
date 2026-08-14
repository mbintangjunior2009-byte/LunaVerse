import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Flashcard Component
 * Front/back card for learning
 */
export default function Flashcard({ 
    question, 
    onAnswer, 
    isAnswered 
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        onAnswer(true);
    };

    return (
        <div className="space-y-6">
            <div className="relative w-full h-64 perspective-1000">
                <AnimatePresence mode="wait">
                    {!isFlipped ? (
                        <motion.div
                            key="front"
                            initial={{ rotateY: 0 }}
                            exit={{ rotateY: -90 }}
                            animate={{ rotateY: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <Card className="w-full h-full flex items-center justify-center border-2 border-white/20 bg-white/5 cursor-pointer hover:border-brand-500/40 transition-colors"
                                onClick={handleFlip}
                            >
                                <div className="text-center">
                                    <p className="text-5xl font-bold mb-4">{question.question}</p>
                                    <p className="text-sm text-gray-400">Click to flip</p>
                                </div>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="back"
                            initial={{ rotateY: 90 }}
                            exit={{ rotateY: 0 }}
                            animate={{ rotateY: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <Card className="w-full h-full flex items-center justify-center border-2 border-brand-500/30 bg-brand-500/10 cursor-pointer hover:border-brand-500/50 transition-colors"
                                onClick={handleFlip}
                            >
                                <div className="text-center">
                                    <p className="text-3xl font-bold mb-2">{question.answer}</p>
                                    <p className="text-sm text-gray-400">Click to flip back</p>
                                </div>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-medium bg-brand-500 hover:bg-brand-600 text-white transition-colors flex items-center justify-center gap-2"
            >
                Next Card
                <RotateCw className="w-4 h-4" />
            </motion.button>
        </div>
    );
}
