import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowRight } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import QuizTimer from './QuizTimer';
import ProgressBar from './ProgressBar';
import QuestionRenderer from './QuestionRenderer';
import ResultCard from './ResultCard';
import XPAnimation from './XPAnimation';
import { cn } from '@/lib/utils';

/**
 * Main Quiz Component
 * Reusable quiz engine for all languages
 */
export default function Quiz({ 
    languageId, 
    category, 
    difficulty, 
    questions,
    onExit 
}) {
    const [quizState, setQuizState] = useState('intro'); // intro, countdown, quiz, result
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [xpEarned, setXPEarned] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [countdown, setCountdown] = useState(3);
    const [totalTime, setTotalTime] = useState(0);
    const [combo, setCombo] = useState(0);
    const [bestCombo, setBestCombo] = useState(0);
    const [showXP, setShowXP] = useState(false);
    const [currentXP, setCurrentXP] = useState(0);

    const currentQuestionData = questions[currentQuestion];
    const isLastQuestion = currentQuestion === questions.length - 1;
    const isAnswered = answers[currentQuestion] !== undefined;

    // Calculate results
    const correctAnswers = answers.filter(a => a === true).length;
    const wrongAnswers = answers.filter(a => a === false).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    const accuracy = score;

    const startQuiz = () => {
        setQuizState('countdown');
        setCountdown(3);
    };

    useEffect(() => {
        if (quizState === 'countdown' && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (quizState === 'countdown' && countdown === 0) {
            setQuizState('quiz');
            setTimeLeft(currentQuestionData.timeLimit);
        }
    }, [quizState, countdown, currentQuestionData]);

    const handleAnswer = useCallback((isCorrect, earnedXP) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = isCorrect;
        setAnswers(newAnswers);

        // Track XP earned
        const questionXP = earnedXP || currentQuestionData.xp || 10;
        if (isCorrect) {
            setXPEarned(prev => prev + questionXP);
        }

        // Update combo
        if (isCorrect) {
            const newCombo = combo + 1;
            setCombo(newCombo);
            setBestCombo(Math.max(bestCombo, newCombo));
            
            // Show XP animation
            setCurrentXP(questionXP);
            setShowXP(true);
            setTimeout(() => setShowXP(false), 1500);
        } else {
            setCombo(0);
        }

        // Move to next question after delay
        setTimeout(() => {
            if (isLastQuestion) {
                setQuizState('result');
            } else {
                setCurrentQuestion(currentQuestion + 1);
                setTimeLeft(questions[currentQuestion + 1].timeLimit);
            }
        }, 1500);
    }, [answers, currentQuestion, isLastQuestion, combo, bestCombo, currentQuestionData, questions]);

    const handleTimeUp = () => {
        handleAnswer(false);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setXPEarned(0);
        setTimeLeft(questions[0].timeLimit);
        setCombo(0);
        setBestCombo(0);
        setTotalTime(0);
        setQuizState('intro');
    };

    const exitQuiz = () => {
        onExit();
    };

    // Render intro screen
    if (quizState === 'intro') {
        return (
            <div className="max-w-2xl mx-auto">
                <Card className="p-8">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mx-auto mb-4">
                            <Play className="w-10 h-10 text-brand-300" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Quiz Ready!</h2>
                        <p className="text-gray-400">
                            {category.charAt(0).toUpperCase() + category.slice(1)} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-2xl font-bold text-brand-300">{questions.length}</p>
                            <p className="text-sm text-gray-400">Questions</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-2xl font-bold text-emerald-300">~{questions.reduce((acc, q) => acc + q.xp, 0)}</p>
                            <p className="text-sm text-gray-400">XP Available</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-2xl font-bold text-orange-300">{questions.reduce((acc, q) => acc + q.timeLimit, 0) / 60}</p>
                            <p className="text-sm text-gray-400">Minutes</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            onClick={exitQuiz}
                            className="flex-1 gap-2"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            onClick={startQuiz}
                            className="flex-1 gap-2"
                        >
                            <Play className="w-4 h-4" />
                            Start Quiz
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    // Render countdown
    if (quizState === 'countdown') {
        return (
            <div className="flex items-center justify-center">
                <motion.div
                    key={countdown}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    className="text-center"
                >
                    <div className="w-32 h-32 rounded-full bg-brand-500/20 border-2 border-brand-500/50 flex items-center justify-center mb-4">
                        <span className="text-6xl font-bold text-brand-300">{countdown}</span>
                    </div>
                    <p className="text-gray-400">Get Ready!</p>
                </motion.div>
            </div>
        );
    }

    // Render results
    if (quizState === 'result') {
        return (
            <div className="max-w-2xl mx-auto">
                <ResultCard
                    score={score}
                    xpEarned={xpEarned}
                    accuracy={accuracy}
                    timeTaken={totalTime}
                    correctAnswers={correctAnswers}
                    wrongAnswers={wrongAnswers}
                    combo={bestCombo}
                    onRestart={restartQuiz}
                    onExit={exitQuiz}
                />
            </div>
        );
    }

    // Render quiz
    return (
        <div className="max-w-3xl mx-auto">
            <XPAnimation xp={currentXP} show={showXP} />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <ProgressBar current={currentQuestion + 1} total={questions.length} />
                <QuizTimer 
                    timeLimit={currentQuestionData.timeLimit} 
                    onTimeUp={handleTimeUp}
                />
            </div>

            {/* Question Card */}
            <Card className="p-8 mb-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <QuestionRenderer
                            question={currentQuestionData}
                            onAnswer={handleAnswer}
                            isAnswered={isAnswered}
                            showFeedback={true}
                        />
                    </motion.div>
                </AnimatePresence>
            </Card>

            {/* Combo Display */}
            {combo > 1 && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-center gap-2 mb-4"
                >
                    <div className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30">
                        <span className="text-orange-300 font-bold">{combo}x Combo!</span>
                    </div>
                </motion.div>
            )}

            {/* Navigation */}
            {isAnswered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <p className="text-gray-400 mb-4">
                        {isLastQuestion ? 'Showing results...' : 'Next question loading...'}
                    </p>
                </motion.div>
            )}
        </div>
    );
}
