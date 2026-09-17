import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import { loadLanguageProgress } from '@/lib/languageProgress';
import LanguageHeader from '@/Components/language/LanguageHeader';
import { Card } from '@/Components/ui/Card';
import { Brain, Search, BookOpen, Star, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Dynamic Language Vocabulary Page
 * Works for any supported language
 */
export default function LanguageVocabulary({ languageId }) {
    const config = getLanguageConfig(languageId);
    const progress = loadLanguageProgress(languageId);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    // Derive vocabulary categories from the language's study categories
    const categories = [
        { id: 'all', label: 'All' },
        ...(config.studyCategories ?? []).map((c) => ({ id: c.id, label: c.name })),
    ];

    // Pull vocabulary entries from study categories that have a `vocabulary` array,
    // or fall back to an empty list if the language config doesn't expose them yet.
    const allWords = (config.studyCategories ?? []).flatMap((cat) =>
        (cat.vocabulary ?? []).map((word) => ({ ...word, categoryId: cat.id, categoryName: cat.name }))
    );

    const filtered = allWords.filter((word) => {
        const matchesSearch =
            !search ||
            word.term?.toLowerCase().includes(search.toLowerCase()) ||
            word.reading?.toLowerCase().includes(search.toLowerCase()) ||
            word.meaning?.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            activeCategory === 'all' || word.categoryId === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const completedCount = progress.completed.length;
    const estimatedVocab = completedCount * 15;

    return (
        <DashboardLayout>
            <Head title={`${config.name} - Vocabulary`} />

            <LanguageHeader languageId={languageId} currentSection="vocabulary" />

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Brain className="w-8 h-8 text-brand-300" />
                    Vocabulary
                </h1>
                <p className="text-gray-400 mt-2">
                    All {config.name} vocabulary words from your lessons.
                </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <Card className="p-5">
                    <p className="text-sm text-gray-400 mb-1 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-brand-300" /> Words Learned
                    </p>
                    <p className="text-3xl font-bold">{estimatedVocab.toLocaleString()}</p>
                </Card>
                <Card className="p-5">
                    <p className="text-sm text-gray-400 mb-1 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-300" /> Total in Library
                    </p>
                    <p className="text-3xl font-bold">{allWords.length || '—'}</p>
                </Card>
                <Card className="p-5">
                    <p className="text-sm text-gray-400 mb-1 flex items-center gap-1">
                        <Brain className="w-3.5 h-3.5 text-brand-300" /> Lessons Completed
                    </p>
                    <p className="text-3xl font-bold">{completedCount}</p>
                </Card>
            </div>

            {/* Search + filter bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={`Search ${config.name} vocabulary…`}
                        className="w-full h-10 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                                activeCategory === cat.id
                                    ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
                                    : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10'
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Word list */}
            {allWords.length === 0 ? (
                /* Language config doesn't expose vocabulary arrays yet */
                <Card className="p-12 text-center border-dashed border-white/20">
                    <Brain className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Vocabulary coming soon</h2>
                    <p className="text-gray-400 mb-6">
                        Word lists for {config.name} are being prepared. Complete study lessons to
                        unlock vocabulary entries.
                    </p>
                    <Link
                        href={`/languages/${languageId}/study`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500/20 text-brand-300 border border-brand-500/30 hover:bg-brand-500/30 transition-colors text-sm font-medium"
                    >
                        <BookOpen className="w-4 h-4" /> Go to Study
                    </Link>
                </Card>
            ) : filtered.length === 0 ? (
                <Card className="p-10 text-center border-dashed border-white/20">
                    <p className="text-gray-400">No vocabulary matches your search.</p>
                </Card>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((word, index) => {
                        const isUnlocked = progress.completed.includes(word.lessonId) || !word.lessonId;

                        return (
                            <motion.div
                                key={`${word.categoryId}-${word.term}-${index}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                            >
                                <Card
                                    className={cn(
                                        'p-5 border transition-all',
                                        isUnlocked
                                            ? 'border-white/10 hover:border-brand-500/30'
                                            : 'border-white/5 opacity-60'
                                    )}
                                >
                                    {!isUnlocked && (
                                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                                            <Lock className="w-3 h-3" /> Locked
                                        </div>
                                    )}

                                    <div className="flex items-start justify-between mb-2">
                                        <span
                                            className="text-2xl font-bold"
                                            style={{ color: isUnlocked ? config.themeColor : undefined }}
                                        >
                                            {word.term}
                                        </span>
                                        {word.reading && (
                                            <span className="text-xs text-gray-400 mt-1 ml-2">{word.reading}</span>
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-300 mb-3">{word.meaning}</p>

                                    {word.example && (
                                        <p className="text-xs text-gray-500 italic border-t border-white/5 pt-2 mt-2">
                                            {word.example}
                                        </p>
                                    )}

                                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                                        <span
                                            className="px-2 py-0.5 rounded-full border"
                                            style={{
                                                borderColor: `${config.themeColor}33`,
                                                color: config.themeColor,
                                                backgroundColor: `${config.themeColor}11`,
                                            }}
                                        >
                                            {word.categoryName}
                                        </span>
                                        {word.level && <span>{word.level}</span>}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </DashboardLayout>
    );
}
