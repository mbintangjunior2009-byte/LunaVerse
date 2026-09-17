import React from 'react';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Sparkles, Unlock } from 'lucide-react';
import { Button } from '@/Components/ui/Button';

export default function LessonCompletionOverlay({
    open,
    lessonTitle,
    xpAwarded,
    nextLesson,
    onClose,
}) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[80] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <button
                        type="button"
                        aria-label="Close completion dialog"
                        className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.85, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 10 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="relative z-10 w-full max-w-md glass-card p-8 text-center border border-brand-500/30 shadow-[0_0_60px_rgba(185,95,255,0.25)]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                            className="w-20 h-20 mx-auto mb-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center"
                        >
                            <CheckCircle2 className="w-10 h-10 text-emerald-300" />
                        </motion.div>

                        <h2 className="text-3xl font-bold mb-2">Lesson Complete!</h2>
                        <p className="text-gray-400 mb-6">{lessonTitle}</p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                                <p className="text-xs text-gray-400 mb-1 inline-flex items-center gap-1 justify-center w-full">
                                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> XP Awarded
                                </p>
                                <p className="text-2xl font-bold text-brand-300">+{xpAwarded}</p>
                            </div>
                            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                                <p className="text-xs text-gray-400 mb-1 inline-flex items-center gap-1 justify-center w-full">
                                    <Unlock className="w-3.5 h-3.5 text-emerald-300" /> Progress
                                </p>
                                <p className="text-2xl font-bold">Updated</p>
                            </div>
                        </div>

                        {nextLesson ? (
                            <p className="text-sm text-emerald-300 mb-5">
                                Next lesson unlocked: <span className="font-bold">{nextLesson.title}</span>
                            </p>
                        ) : (
                            <p className="text-sm text-brand-300 mb-5">You finished the current learning path.</p>
                        )}

                        <div className="flex flex-col gap-3">
                            {nextLesson && (
                                <Link href={`/languages/japanese/study/${nextLesson.id}`}>
                                    <Button variant="primary" className="w-full gap-2">
                                        Continue to {nextLesson.title}
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            )}
                            <Button type="button" variant="outline" className="w-full" onClick={onClose}>
                                Stay on this lesson
                            </Button>
                            <Link href="/languages/japanese/study">
                                <Button variant="glass" className="w-full">Back to Study</Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
