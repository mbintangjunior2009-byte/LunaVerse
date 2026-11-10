import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/Button';
import { Card } from '@/Components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Volume2, Mic, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Learning({ auth, language = 'Japanese', slug = 'japanese' }) {
    const [step, setStep] = useState(1);
    const [completed, setCompleted] = useState(false);
    const totalSteps = 4;

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
        else setCompleted(true);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    if (completed) {
        return (
            <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center p-6 font-sans relative overflow-hidden">
                <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center z-10"
                >
                    <div className="text-8xl mb-6">🎉</div>
                    <h1 className="text-5xl font-bold mb-4 text-glow">Lesson Complete!</h1>
                    <p className="text-xl text-brand-300 mb-8">+50 XP Earned</p>
                    <Link href={`/languages/${slug}`}>
                        <Button variant="primary" size="lg">Continue to Next Lesson</Button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-900 text-white flex flex-col font-sans">
            <Head title="Learning" />

            {/* Header */}
            <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-dark-900/80 backdrop-blur-md sticky top-0 z-50">
                <Link href={`/languages/${slug}`} className="text-gray-400 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                </Link>

                <div className="flex-1 max-w-2xl mx-8 flex items-center gap-4">
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-brand-700 to-brand-300"
                            initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
                            animate={{ width: `${(step / totalSteps) * 100}%` }}
                        />
                    </div>
                    <span className="text-sm font-bold text-gray-400 whitespace-nowrap">
                        {step} / {totalSteps}
                    </span>
                </div>
            </header>

            {/* Main Learning Content */}
            <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <LessonContent key="s1" type="Vocabulary" title="New Word" main="水" sub="mizu" meaning="Water" />
                    )}
                    {step === 2 && (
                        <LessonContent key="s2" type="Grammar" title="Sentence Structure" main="水を飲みます" sub="Mizu o nomimasu" meaning="I drink water." />
                    )}
                    {step === 3 && (
                        <QuizContent key="s3" question="Translate: Water" options={['火 (hi)', '水 (mizu)', '木 (ki)', '金 (kin)']} correct={1} />
                    )}
                    {step === 4 && (
                        <SpeakingContent key="s4" text="水を飲みます" sub="Mizu o nomimasu" />
                    )}
                </AnimatePresence>
            </main>

            {/* Footer Navigation */}
            <footer className="border-t border-white/5 bg-dark-800/80 backdrop-blur-md p-6 sticky bottom-0">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Button
                        variant="ghost"
                        onClick={handlePrev}
                        disabled={step === 1}
                        className="gap-2"
                    >
                        <ChevronLeft className="w-5 h-5" /> Previous
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={handleNext}
                        className="w-full max-w-[200px] gap-2"
                    >
                        {step === totalSteps ? 'Complete' : 'Continue'}
                        {step !== totalSteps && <ChevronRight className="w-5 h-5" />}
                    </Button>
                </div>
            </footer>
        </div>
    );
}

function LessonContent({ type, title, main, sub, meaning }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl text-center"
        >
            <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-2 block">{type}</span>
            <h2 className="text-2xl font-bold mb-12">{title}</h2>

            <Card className="p-12 mb-8 bg-brand-500/5 border-brand-500/20 relative">
                <button className="absolute top-4 right-4 p-3 rounded-full hover:bg-white/10 text-brand-300 transition-colors">
                    <Volume2 className="w-6 h-6" />
                </button>
                <div className="text-8xl font-bold mb-6 text-glow">{main}</div>
                <div className="text-2xl text-brand-300 mb-2">{sub}</div>
                <div className="text-xl text-gray-300">{meaning}</div>
            </Card>
        </motion.div>
    );
}

function QuizContent({ question, options, correct }) {
    const [selected, setSelected] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl"
        >
            <h2 className="text-3xl font-bold mb-8 text-center">{question}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((opt, i) => (
                    <Card
                        key={i}
                        onClick={() => setSelected(i)}
                        className={`p-6 cursor-pointer text-center text-xl transition-all ${selected === i
                                ? (i === correct ? 'bg-green-500/20 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'bg-red-500/20 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]')
                                : 'hover:bg-white/10 hover:-translate-y-1'
                            }`}
                    >
                        {opt}
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}

function SpeakingContent({ text, sub }) {
    const [recording, setRecording] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl text-center"
        >
            <h2 className="text-2xl font-bold mb-12">Speak this sentence</h2>

            <div className="mb-12">
                <div className="text-5xl font-bold mb-4">{text}</div>
                <div className="text-xl text-brand-300">{sub}</div>
            </div>

            <button
                onClick={() => setRecording(!recording)}
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all ${recording
                        ? 'bg-red-500 animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.6)]'
                        : 'bg-brand-500 hover:bg-brand-600 shadow-[0_0_20px_rgba(185,95,255,0.4)] hover:scale-105'
                    }`}
            >
                <Mic className="w-10 h-10 text-white" />
            </button>
            <p className="mt-4 text-gray-400">{recording ? 'Recording... click to stop' : 'Click to speak'}</p>
        </motion.div>
    );
}
