import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import LanguageHeader from '@/Components/language/LanguageHeader';
import PracticeCard from '@/Components/language/PracticeCard';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Dynamic Language Practice Page
 * Works for any supported language.
 *
 * Props:
 *   languageId         – e.g. 'japanese'
 *   backendCategories  – array from PracticeController (has is_unlocked, best_score, etc.)
 *                        Only present when this page is loaded via the controller-backed route.
 */
export default function LanguagePractice({ languageId, backendCategories }) {
    const config = getLanguageConfig(languageId);
    const [hiraganaModalOpen, setHiraganaModalOpen] = useState(false);

    /**
     * Build the unified category list.
     *
     * If the backend sent categories (via PracticeController) we use those for
     * unlock/score state. Otherwise we fall back to the static languageConfig data
     * and treat every category as available (client-side only, no progress tracking).
     */
    const categories = (() => {
        if (backendCategories?.length) {
            // Backend shape: { id, name, icon, description, questions, xp_reward,
            //                  is_unlocked, is_completed, best_score, attempts }
            return backendCategories.map((bc) => ({
                ...bc,
                xpReward: bc.xp_reward ?? bc.xpReward ?? 100,
                available: bc.is_unlocked ?? true,
            }));
        }
        // Static fallback — all categories available, no progress data
        return (config.practiceCategories ?? []).map((c) => ({
            ...c,
            available: true,
            is_unlocked: true,
            is_completed: false,
            best_score: 0,
            attempts: 0,
        }));
    })();

    // Hiragana sub-categories for the modal (Japanese only).
    // These are the four quiz types served by Language/HiraganaQuiz.
    const hiraganaSubcategories = [
        {
            id: 'basic-hiragana',
            name: 'Basic Hiragana',
            icon: 'あ',
            description: 'a-row through wa-row (46 characters)',
            questions: 10,
            xpReward: 100,
            available: true,
            href: `/languages/${languageId}/practice/hiragana`,
        },
        {
            id: 'dakuten',
            name: 'Dakuten',
            icon: 'が',
            description: 'Voiced characters (が、ざ、だ、ば…)',
            questions: 10,
            xpReward: 80,
            available: false,  // coming soon
            href: null,
        },
        {
            id: 'handakuten',
            name: 'Handakuten',
            icon: 'ぱ',
            description: 'Semi-voiced characters (ぱ、ぴ、ぷ…)',
            questions: 10,
            xpReward: 80,
            available: false,
            href: null,
        },
        {
            id: 'mixed',
            name: 'Mixed Challenge',
            icon: '🎯',
            description: 'All Hiragana characters mixed randomly',
            questions: 10,
            xpReward: 150,
            available: false,
            href: null,
        },
    ];

    const handleModalSelect = (href) => {
        if (href) router.visit(href);
    };

    return (
        <DashboardLayout>
            <Head title={`${config.name} - Practice`} />

            <LanguageHeader languageId={languageId} />

            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Practice Quizzes</h1>
                <p className="text-gray-400">
                    Test your {config.name} skills with interactive quizzes.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => {
                    const status = category.is_completed
                        ? 'completed'
                        : category.available
                        ? 'available'
                        : 'locked';

                    // Japanese Hiragana — open sub-category modal instead of navigating
                    if (category.id === 'hiragana' && languageId === 'japanese') {
                        return (
                            <div key={category.id} onClick={() => setHiraganaModalOpen(true)}>
                                <PracticeCard
                                    languageId={languageId}
                                    category={category}
                                    status={status}
                                    score={category.best_score || null}
                                    questionCount={category.questions}
                                    onClick={() => setHiraganaModalOpen(true)}
                                />
                            </div>
                        );
                    }

                    // All other categories — PracticeCard builds the href automatically:
                    //   /languages/{languageId}/practice/{category.id}
                    return (
                        <PracticeCard
                            key={category.id}
                            languageId={languageId}
                            category={category}
                            status={status}
                            score={category.best_score || null}
                            questionCount={category.questions}
                        />
                    );
                })}
            </div>

            {/* Hiragana Sub-category Modal */}
            <AnimatePresence>
                {hiraganaModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setHiraganaModalOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 border border-white/20">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1">Hiragana Practice</h2>
                                        <p className="text-gray-400 text-sm">Choose a quiz category</p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setHiraganaModalOpen(false)}
                                        className="gap-2"
                                    >
                                        <X className="w-4 h-4" /> Close
                                    </Button>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {hiraganaSubcategories.map((cat) => (
                                        <Card
                                            key={cat.id}
                                            className={`p-5 border transition-all ${
                                                cat.available
                                                    ? 'border-white/10 hover:border-brand-500/40 cursor-pointer hover:scale-[1.02]'
                                                    : 'border-white/5 opacity-50 cursor-not-allowed'
                                            }`}
                                            onClick={() => cat.available && handleModalSelect(cat.href)}
                                        >
                                            <div className="text-5xl mb-3">{cat.icon}</div>
                                            <h3 className="font-bold mb-1">{cat.name}</h3>
                                            <p className="text-sm text-gray-400 mb-3">{cat.description}</p>
                                            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                                <span>{cat.questions} questions</span>
                                                <span className="text-yellow-400">+{cat.xpReward} XP</span>
                                            </div>
                                            <Button
                                                variant={cat.available ? 'primary' : 'outline'}
                                                size="sm"
                                                className="w-full"
                                                disabled={!cat.available}
                                            >
                                                {cat.available ? 'Start' : 'Coming Soon'}
                                            </Button>
                                        </Card>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </DashboardLayout>
    );
}
