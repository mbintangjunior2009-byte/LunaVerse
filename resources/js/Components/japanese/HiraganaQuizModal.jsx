import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';

const HIRAGANA_OPTIONS = [
    {
        id: 'basic-hiragana',
        name: 'Basic Hiragana',
        icon: 'あ',
        description: '46 basic Hiragana characters',
    },
    {
        id: 'dakuten',
        name: 'Dakuten',
        icon: 'が',
        description: 'Voiced characters (がぎぐげご, etc.)',
    },
    {
        id: 'handakuten',
        name: 'Handakuten',
        icon: 'ぱ',
        description: 'Semi-voiced characters (ぱぴぷぺぽ)',
    },
    {
        id: 'mixed',
        name: 'Mixed Challenge',
        icon: '🎯',
        description: 'All Hiragana characters mixed randomly',
    },
];

export default function HiraganaQuizModal({ open, onClose, onSelect }) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 border border-white/20 pointer-events-auto">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-1">Hiragana Practice</h2>
                                    <p className="text-gray-400 text-sm">Choose a quiz category</p>
                                </div>
                                <Button variant="outline" size="sm" onClick={onClose} className="gap-2">
                                    <X className="w-4 h-4" /> Close
                                </Button>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {HIRAGANA_OPTIONS.map((option) => (
                                    <button
                                        key={option.id}
                                        type="button"
                                        onClick={() => onSelect(option.id)}
                                        className="glass-card p-5 text-left border border-white/10 hover:border-brand-500/40 transition-all hover:scale-[1.02]"
                                    >
                                        <div className="text-4xl mb-3">{option.icon}</div>
                                        <h3 className="font-bold text-lg mb-1">{option.name}</h3>
                                        <p className="text-sm text-gray-400">{option.description}</p>
                                    </button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
