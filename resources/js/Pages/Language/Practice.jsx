import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import LanguageHeader from '@/Components/language/LanguageHeader';
import PracticeCard from '@/Components/language/PracticeCard';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguagePractice({ languageId, backendCategories }) {
    const { t } = useTranslation();
    const config = getLanguageConfig(languageId);
    const [hiraganaModalOpen, setHiraganaModalOpen] = useState(false);

    const categories = (() => {
        if (backendCategories?.length) {
            return backendCategories.map((bc) => ({
                ...bc,
                xpReward: bc.xp_reward ?? bc.xpReward ?? 100,
                available: bc.is_unlocked ?? true,
            }));
        }
        return (config.practiceCategories ?? []).map((c) => ({
            ...c,
            available: true,
            is_unlocked: true,
            is_completed: false,
            best_score: 0,
            attempts: 0,
        }));
    })();

    // Hiragana sub-categories — translated names/descriptions
    const hiraganaSubcategories = [
        {
            id: 'basic-hiragana',
            name: t('hiragana.basic'),
            icon: 'あ',
            description: t('hiragana.basicDesc'),
            questions: 10,
            xpReward: 100,
            available: true,
            href: `/languages/${languageId}/practice/hiragana`,
        },
        {
            id: 'dakuten',
            name: t('hiragana.dakuten'),
            icon: 'が',
            description: t('hiragana.dakutenDesc'),
            questions: 10,
            xpReward: 80,
            available: false,
            href: null,
        },
        {
            id: 'handakuten',
            name: t('hiragana.handakuten'),
            icon: 'ぱ',
            description: t('hiragana.handakutenDesc'),
            questions: 10,
            xpReward: 80,
            available: false,
            href: null,
        },
        {
            id: 'mixed',
            name: t('hiragana.mixed'),
            icon: '🎯',
            description: t('hiragana.mixedDesc'),
            questions: 10,
            xpReward: 150,
            available: false,
            href: null,
        },
    ];

    const handleModalSelect = (href) => { if (href) router.visit(href); };

    return (
        <DashboardLayout>
            <Head title={`${config.name} - ${t('sections.practiceQuizzes')}`} />

            <LanguageHeader languageId={languageId} />

            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">{t('sections.practiceQuizzes')}</h1>
                <p className="text-gray-400">{t('language.practiceDesc', { name: config.name })}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => {
                    const status = category.is_completed ? 'completed'
                        : category.available ? 'available' : 'locked';

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
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setHiraganaModalOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 border border-white/20">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1">{t('language.hiraganaTitle')}</h2>
                                        <p className="text-gray-400 text-sm">{t('language.hiraganaSubtitle')}</p>
                                    </div>
                                    <Button variant="outline" size="sm" onClick={() => setHiraganaModalOpen(false)} className="gap-2">
                                        <X className="w-4 h-4" /> {t('buttons.close')}
                                    </Button>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {hiraganaSubcategories.map((cat) => (
                                        <Card
                                            key={cat.id}
                                            className={`p-5 border transition-all ${cat.available
                                                ? 'border-white/10 hover:border-brand-500/40 cursor-pointer hover:scale-[1.02]'
                                                : 'border-white/5 opacity-50 cursor-not-allowed'
                                            }`}
                                            onClick={() => cat.available && handleModalSelect(cat.href)}
                                        >
                                            <div className="text-5xl mb-3">{cat.icon}</div>
                                            <h3 className="font-bold mb-1">{cat.name}</h3>
                                            <p className="text-sm text-gray-400 mb-3">{cat.description}</p>
                                            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                                <span>{t('language.questionsCount', { count: cat.questions })}</span>
                                                <span className="text-yellow-400">+{cat.xpReward} {t('common.xpSuffix')}</span>
                                            </div>
                                            <Button
                                                variant={cat.available ? 'primary' : 'outline'}
                                                size="sm"
                                                className="w-full"
                                                disabled={!cat.available}
                                            >
                                                {cat.available ? t('buttons.start') : t('common.comingSoon')}
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
