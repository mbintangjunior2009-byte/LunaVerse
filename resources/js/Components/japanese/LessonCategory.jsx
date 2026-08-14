import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import LessonCard from '@/Components/japanese/LessonCard';
import { cn } from '@/lib/utils';

export default function LessonCategory({
    category,
    completedIds,
    getStatus,
    getProgress,
    defaultOpen = false,
}) {
    const [open, setOpen] = useState(defaultOpen);
    const done = category.lessons.filter((lesson) => completedIds.includes(lesson.id)).length;
    const total = category.lessons.length;
    const percent = total ? Math.round((done / total) * 100) : 0;

    return (
        <Card className="p-0 overflow-hidden">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-white/5 transition-colors"
            >
                <div className="min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold">{category.title}</h2>
                    <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                    <div className="mt-3 flex items-center gap-3 max-w-sm">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-500 rounded-full" style={{ width: `${percent}%` }} />
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{done}/{total}</span>
                    </div>
                </div>
                <ChevronDown className={cn('w-6 h-6 text-brand-300 shrink-0 transition-transform', open && 'rotate-180')} />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 md:px-6 pb-6 grid sm:grid-cols-2 gap-4 border-t border-white/5 pt-5">
                            {category.lessons.map((lesson) => (
                                <LessonCard
                                    key={lesson.id}
                                    lesson={lesson}
                                    status={getStatus(lesson.id)}
                                    progress={getProgress(lesson.id)}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
}
