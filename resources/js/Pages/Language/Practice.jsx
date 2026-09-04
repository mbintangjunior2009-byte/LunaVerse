import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import LanguageHeader from '@/Components/language/LanguageHeader';
import PracticeCard from '@/Components/language/PracticeCard';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { router } from '@inertiajs/react';

/**
 * Dynamic Language Practice Page
 * Works for any supported language
 */
export default function LanguagePractice({ languageId, practiceCategories }) {
    const config = getLanguageConfig(languageId);
    const [hiraganaModalOpen, setHiraganaModalOpen] = useState(false);

    // Use practice categories from backend props, fallback to config
    const categories = practiceCategories || config.practiceCategories || [];

    // For Japanese Hiragana, use backend subcategories if available
    const hiraganaCategories = languageId === 'japanese' 
        ? (practiceCategories?.hiragana_subcategories || [])
        : [];

    const handleQuizSelect = (href) => {
        if (href) {
            router.visit(href);
        }
    };

    return (
        <DashboardLayout>
            <Head title={`${config.name} - Practice`} />
            
            <LanguageHeader languageId={languageId} currentSection="practice" />

            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Practice Quizzes</h1>
                <p className="text-gray-400">Test your {config.name} skills with interactive quizzes.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => {
                    // Hiragana card opens modal
                    if (category.id === 'hiragana' && languageId === 'japanese') {
                        return (
                            <div key={category.id} onClick={() => setHiraganaModalOpen(true)}>
                                <PracticeCard
                                    languageId={languageId}
                                    category={category}
                                    status={category.available ? 'available' : 'locked'}
                                    questionCount={category.questions}
                                />
                            </div>
                        );
                    }
                    
                    return (
                        <PracticeCard
                            key={category.id}
                            languageId={languageId}
                            category={category}
                            status={category.available ? 'available' : 'locked'}
                            questionCount={category.questions}
                        />
                    );
                })}
            </div>

            {/* Hiragana Modal */}
            <AnimatePresence>
                {hiraganaModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setHiraganaModalOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 border border-white/20">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1">Hiragana Practice</h2>
                                        <p className="text-gray-400">Choose a quiz category</p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setHiraganaModalOpen(false)}
                                        className="gap-2"
                                    >
                                        <X className="w-4 h-4" />
                                        Close
                                    </Button>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {hiraganaCategories.length > 0 ? (
                                        hiraganaCategories.map((cat) => (
                                            <Card
                                                key={cat.id}
                                                className={`p-6 border transition-all ${
                                                    cat.available 
                                                        ? 'border-white/10 hover:border-brand-500/40 cursor-pointer hover:scale-[1.02]' 
                                                        : 'border-white/5 opacity-50 cursor-not-allowed'
                                                }`}
                                                onClick={() => cat.available && handleQuizSelect(cat.href)}
                                            >
                                                <div className="text-5xl mb-4">{cat.icon}</div>
                                                <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
                                                <p className="text-sm text-gray-400 mb-4">{cat.description}</p>
                                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                                    <span>{cat.questions} questions</span>
                                                    <span>+{cat.xpReward} XP</span>
                                                </div>
                                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                                    <span>Progress: {cat.progress || 0}%</span>
                                                </div>
                                                <Button
                                                    variant={cat.available ? "primary" : "outline"}
                                                    size="sm"
                                                    className="w-full"
                                                    disabled={!cat.available}
                                                >
                                                    {cat.available ? 'Play' : 'Coming Soon'}
                                                </Button>
                                            </Card>
                                        ))
                                    ) : (
                                        <div className="col-span-2 text-center text-gray-400 py-8">
                                            No Hiragana categories available. Please check back later.
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </DashboardLayout>
    );
}
