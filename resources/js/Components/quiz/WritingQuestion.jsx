import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Eraser, RotateCcw } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * Writing Question Component
 * Canvas-based character writing practice with evaluation
 */
export default function WritingQuestion({ 
    question, 
    onAnswer, 
    isAnswered 
}) {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasDrawn, setHasDrawn] = useState(false);
    const [evaluation, setEvaluation] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        
        // Set drawing style
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

    }, []);

    const getCoordinates = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        
        if (e.touches) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        }
        
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const startDrawing = (e) => {
        if (isAnswered) return;
        e.preventDefault();
        
        setIsDrawing(true);
        setHasDrawn(true);
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const coords = getCoordinates(e);
        
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
    };

    const draw = (e) => {
        if (!isDrawing || isAnswered) return;
        e.preventDefault();
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const coords = getCoordinates(e);
        
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        if (isAnswered) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setHasDrawn(false);
        setEvaluation(null);
    };

    const evaluateDrawing = () => {
        if (!hasDrawn || isAnswered) return;
        
        // Simulate evaluation - in production, use actual stroke analysis
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        // Count non-transparent pixels
        let pixelCount = 0;
        for (let i = 3; i < imageData.data.length; i += 4) {
            if (imageData.data[i] > 0) pixelCount++;
        }
        
        // Simple evaluation based on pixel coverage
        const coverage = pixelCount / (canvas.width * canvas.height);
        let score, feedback;
        
        if (coverage > 0.15 && coverage < 0.35) {
            score = 'perfect';
            feedback = 'Perfect!';
        } else if (coverage > 0.1 && coverage < 0.4) {
            score = 'great';
            feedback = 'Great!';
        } else if (coverage > 0.05) {
            score = 'good';
            feedback = 'Good';
        } else {
            score = 'try-again';
            feedback = 'Try Again';
        }
        
        setEvaluation({ score, feedback });
        
        // Award XP based on evaluation
        const xpMultiplier = score === 'perfect' ? 1.5 : score === 'great' ? 1.2 : score === 'good' ? 1 : 0.5;
        const earnedXP = Math.round(question.xp * xpMultiplier);
        
        setTimeout(() => {
            onAnswer(score !== 'try-again', earnedXP);
        }, 1500);
    };

    const getEvaluationClass = () => {
        if (!evaluation) return '';
        
        switch (evaluation.score) {
            case 'perfect':
                return 'border-emerald-500/50 bg-emerald-500/10';
            case 'great':
                return 'border-blue-500/50 bg-blue-500/10';
            case 'good':
                return 'border-yellow-500/50 bg-yellow-500/10';
            case 'try-again':
                return 'border-red-500/50 bg-red-500/10';
            default:
                return '';
        }
    };

    const getEvaluationIcon = () => {
        if (!evaluation) return null;
        
        switch (evaluation.score) {
            case 'perfect':
            case 'great':
            case 'good':
                return <Check className="w-6 h-6 text-emerald-300" />;
            case 'try-again':
                return <X className="w-6 h-6 text-red-300" />;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{question.question}</h3>
                <p className="text-gray-400 text-sm">Draw the character on the canvas below</p>
            </div>

            {/* Character Reference */}
            <div className="flex justify-center">
                <div className="text-8xl font-bold text-brand-300 opacity-30">
                    {question.character}
                </div>
            </div>

            {/* Drawing Canvas */}
            <Card className={cn(
                'p-4 border-2 transition-all',
                isAnswered ? getEvaluationClass() : 'border-white/20'
            )}>
                <canvas
                    ref={canvasRef}
                    className="w-full h-64 bg-white/5 rounded-lg cursor-crosshair touch-none"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
            </Card>

            {/* Evaluation Feedback */}
            {evaluation && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        'flex items-center justify-center gap-3 p-4 rounded-xl',
                        evaluation.score === 'perfect' || evaluation.score === 'great' || evaluation.score === 'good'
                            ? 'bg-emerald-500/10 border border-emerald-500/30'
                            : 'bg-red-500/10 border border-red-500/30'
                    )}
                >
                    {getEvaluationIcon()}
                    <span className={cn(
                        'font-bold text-lg',
                        evaluation.score === 'perfect' || evaluation.score === 'great' || evaluation.score === 'good'
                            ? 'text-emerald-300'
                            : 'text-red-300'
                    )}>
                        {evaluation.feedback}
                    </span>
                </motion.div>
            )}

            {/* Action Buttons */}
            {!isAnswered && (
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        onClick={clearCanvas}
                        disabled={!hasDrawn}
                        className="flex-1 gap-2"
                    >
                        <Eraser className="w-4 h-4" />
                        Clear
                    </Button>
                    
                    <Button
                        variant="primary"
                        onClick={evaluateDrawing}
                        disabled={!hasDrawn}
                        className="flex-1 gap-2"
                    >
                        <Check className="w-4 h-4" />
                        Check
                    </Button>
                </div>
            )}
        </div>
    );
}
