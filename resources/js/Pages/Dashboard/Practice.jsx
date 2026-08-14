import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { InteractiveCard } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { BookOpen, MessageSquare, Mic, Headphones } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';

const modes = [
    { title: 'AI Conversation', desc: 'Practice real-life dialogues with an adaptive tutor.', icon: MessageSquare },
    { title: 'Speaking Drill', desc: 'Improve pronunciation with guided speaking prompts.', icon: Mic },
    { title: 'Listening Lab', desc: 'Train your ear with short audio clips and quizzes.', icon: Headphones },
    { title: 'Lesson Review', desc: 'Jump back into your current language lesson.', icon: BookOpen },
];

export default function Practice() {
    const languages = getAllLanguages();
    const primaryLanguage = languages[0]; // Default to first language (Japanese)

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
                <h1 className="text-3xl font-bold">Practice</h1>
                <p className="text-gray-400 mt-2">Sharpen your skills with focused practice sessions.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Select a Language</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {languages.map((lang) => (
                        <Link key={lang.id} href={`/language/${lang.id}/practice`}>
                            <InteractiveCard className="p-4 text-center hover:border-brand-500/50 transition-colors">
                                <span className="text-3xl mb-2 block">{lang.flag}</span>
                                <p className="font-medium text-sm">{lang.name}</p>
                            </InteractiveCard>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Practice Modes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {modes.map((mode) => (
                        <InteractiveCard key={mode.title} className="h-full">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-300 flex items-center justify-center">
                                    <mode.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">{mode.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{mode.desc}</p>
                                    <Button variant="outline" size="sm" className="pointer-events-none">Coming Soon</Button>
                                </div>
                            </div>
                        </InteractiveCard>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
