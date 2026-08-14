import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LanguageHeader from '@/Components/language/LanguageHeader';
import PracticeCard from '@/Components/language/PracticeCard';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { ArrowLeft } from 'lucide-react';

/**
 * Hiragana Practice Page
 * Dedicated page for Hiragana categories
 */
export default function Hiragana() {
    const hiraganaCategories = [
        {
            id: 'basic-hiragana',
            name: 'Basic Hiragana',
            icon: 'あ',
            description: '46 basic Hiragana characters',
            questions: 46,
            xpReward: 100,
            difficulty: 'Beginner',
            href: '/language/japanese/basic-hiragana-quiz'
        },
        {
            id: 'dakuten',
            name: 'Dakuten',
            icon: 'が',
            description: 'Voiced characters (がぎぐげご, etc.)',
            questions: 20,
            xpReward: 50,
            difficulty: 'Beginner',
            href: null // Coming soon
        },
        {
            id: 'handakuten',
            name: 'Handakuten',
            icon: 'ぱ',
            description: 'Semi-voiced characters (ぱぴぷぺぽ)',
            questions: 5,
            xpReward: 25,
            difficulty: 'Beginner',
            href: null // Coming soon
        },
        {
            id: 'mixed-challenge',
            name: 'Mixed Challenge',
            icon: '🎯',
            description: 'All Hiragana characters mixed randomly',
            questions: 10,
            xpReward: 75,
            difficulty: 'Intermediate',
            href: null // Coming soon
        }
    ];

    return (
        <DashboardLayout>
            <Head title="Hiragana Practice" />

            <LanguageHeader languageId="japanese" currentSection="practice" />

            <div className="mb-6">
                <Link href="/language/japanese/practice" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-300 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Practice
                </Link>
            </div>

            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Hiragana Practice</h1>
                <p className="text-gray-400">Master Japanese Hiragana characters through structured practice.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {hiraganaCategories.map((category) => {
                    const isAvailable = category.href !== null;

                    if (isAvailable) {
                        return (
                            <Link key={category.id} href={category.href}>
                                <PracticeCard
                                    languageId="japanese"
                                    category={category}
                                    status="available"
                                    questionCount={category.questions}
                                />
                            </Link>
                        );
                    }

                    return (
                        <Card key={category.id} className="p-6 border border-white/5 opacity-50">
                            <div className="text-5xl mb-4">{category.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                            <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                <span>{category.questions} questions</span>
                                <span>+{category.xpReward} XP</span>
                            </div>
                            <Button variant="outline" size="sm" className="w-full" disabled>
                                Coming Soon
                            </Button>
                        </Card>
                    );
                })}
            </div>
        </DashboardLayout>
    );
}
