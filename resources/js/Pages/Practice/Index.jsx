import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, InteractiveCard } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Lock, Play, CheckCircle, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PracticeIndex({ categories }) {
    const handleCategoryClick = (category) => {
        if (!category.is_unlocked) {
            return; // Don't allow clicking locked categories
        }
        
        // Navigate to the quiz page for this category
        router.visit(`/language/japanese/practice/${category.id}`);
    };

    const handleSubmitResults = (category, score, completed) => {
        router.post('/practice/submit', {
            category: category.id,
            score: score,
            completed: completed,
        }, {
            onSuccess: () => {
                // Refresh the page to show updated unlock status
                router.reload();
            },
        });
    };

    return (
        <DashboardLayout>
            <Head title="Practice" />

            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Practice</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Practice</h1>
                <p className="text-gray-400 mt-2">
                    Complete practice sessions to unlock new categories. Start with Hiragana and progress through the curriculum.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Practice Categories</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <InteractiveCard
                                className={`h-full relative ${
                                    !category.is_unlocked
                                        ? 'opacity-60 cursor-not-allowed'
                                        : 'cursor-pointer hover:border-brand-500/50'
                                }`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {/* Lock overlay for locked categories */}
                                {!category.is_unlocked && (
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                                        <div className="text-center">
                                            <Lock className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                            <p className="text-sm text-gray-300 font-medium">Locked</p>
                                            <p className="text-xs text-gray-400 mt-1">Complete previous category to unlock</p>
                                        </div>
                                    </div>
                                )}

                                {/* Completed badge */}
                                {category.is_completed && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <CheckCircle className="w-6 h-6 text-green-400" />
                                    </div>
                                )}

                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-16 h-16 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
                                        <span className="text-3xl">{category.icon}</span>
                                    </div>
                                    {category.best_score > 0 && (
                                        <div className="text-right">
                                            <p className="text-xs text-gray-400">Best Score</p>
                                            <p className="text-lg font-bold text-brand-300">{category.best_score}%</p>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                                <p className="text-sm text-gray-400 mb-4">{category.description}</p>

                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                    <span>{category.questions} questions</span>
                                    <span className="text-yellow-400">+{category.xp_reward} XP</span>
                                </div>

                                {category.attempts > 0 && (
                                    <div className="text-xs text-gray-400 mb-4">
                                        Attempts: {category.attempts}
                                    </div>
                                )}

                                <Button
                                    variant={category.is_unlocked ? "primary" : "outline"}
                                    size="sm"
                                    className="w-full"
                                    disabled={!category.is_unlocked}
                                >
                                    {category.is_completed ? (
                                        <>
                                            <Trophy className="w-4 h-4 mr-2" /> Practice Again
                                        </>
                                    ) : (
                                        <>
                                            <Play className="w-4 h-4 mr-2" /> Start Practice
                                        </>
                                    )}
                                </Button>
                            </InteractiveCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-bold mb-4">Your Progress</h3>
                <div className="flex items-center gap-4">
                    {categories.map((category, index) => (
                        <React.Fragment key={category.id}>
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                                    category.is_completed
                                        ? 'bg-green-500 text-white'
                                        : category.is_unlocked
                                        ? 'bg-brand-500 text-white'
                                        : 'bg-gray-700 text-gray-400'
                                }`}
                            >
                                {category.is_completed ? '✓' : category.icon}
                            </div>
                            {index < categories.length - 1 && (
                                <div
                                    className={`flex-1 h-1 rounded ${
                                        category.is_completed ? 'bg-green-500' : 'bg-gray-700'
                                    }`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>Hiragana</span>
                    <span>Listening</span>
                </div>
            </div>
        </DashboardLayout>
    );
}
