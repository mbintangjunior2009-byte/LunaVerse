import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Volume2 } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { speakLanguage, stopLanguageSpeech } from '@/lib/languageSpeech';

export default function LessonInteractiveExamples({ items, onInteract, languageId = 'japanese' }) {
    const [revealed, setRevealed] = useState({});

    useEffect(() => () => stopLanguageSpeech(), []);

    if (!items?.length) return null;

    const toggle = (index) => {
        setRevealed((prev) => {
            const next = { ...prev, [index]: !prev[index] };
            onInteract?.(Object.values(next).filter(Boolean).length);
            return next;
        });
    };

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-2">Interactive Examples</h2>
            <p className="text-sm text-gray-400 mb-4">Tap a card to reveal the meaning. Use Listen for native audio.</p>
            <div className="grid sm:grid-cols-2 gap-3">
                {items.map((item, index) => {
                    const open = Boolean(revealed[index]);
                    return (
                        <motion.div
                            key={`${item.prompt}-${index}`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.99 }}
                            className="p-4 rounded-xl bg-white/5 border border-white/10"
                        >
                            <button type="button" className="w-full text-left" onClick={() => toggle(index)}>
                                <p className="text-xl font-bold mb-1">{item.prompt}</p>
                                <p className="text-sm text-brand-300 mb-3">{item.reading}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                    {open ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                    {open ? 'Hide meaning' : 'Show meaning'}
                                </div>
                                <p className={`text-sm min-h-[1.25rem] ${open ? 'text-gray-200' : 'text-transparent select-none'}`}>
                                    {item.answer}
                                </p>
                            </button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="gap-1 mt-3"
                                onClick={() => speakLanguage(item.audio || item.prompt, languageId)}
                            >
                                <Volume2 className="w-3.5 h-3.5" /> Listen
                            </Button>
                        </motion.div>
                    );
                })}
            </div>
        </Card>
    );
}
