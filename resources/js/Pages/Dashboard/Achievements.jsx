import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Trophy } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';

const achievements = [
    { title: 'First Word', desc: 'Learn your first 10 words', icon: '🌱', unlocked: true, date: 'Jan 12' },
    { title: 'Week Warrior', desc: '7 day streak', icon: '🔥', unlocked: true, date: 'Jan 19' },
    { title: 'Chatterbox', desc: 'Complete 50 AI conversations', icon: '💬', unlocked: true, date: 'Feb 03' },
    { title: 'Kanji Master', desc: 'Learn 100 Kanji', icon: '💮', unlocked: true, date: 'Feb 14' },
    { title: 'Polyglot', desc: 'Study 3 languages at once', icon: '🌍', unlocked: false, date: null },
    { title: 'Night Owl', desc: 'Complete a lesson after midnight', icon: '🦉', unlocked: false, date: null },
];

export default function Achievements() {
    const languages = getAllLanguages();
    const unlockedCount = achievements.filter((a) => a.unlocked).length;

    return (
        <DashboardLayout>
            <Head title="Achievements" />

            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Achievements</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-brand-300" /> Achievements
                </h1>
                <p className="text-gray-400 mt-2">Track the milestones you've unlocked on your learning path.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Select a Language</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {languages.map((lang) => (
                        <Link key={lang.id} href={`/language/${lang.id}/achievements`}>
                            <Card className="p-4 text-center hover:border-brand-500/50 transition-colors cursor-pointer">
                                <span className="text-3xl mb-2 block">{lang.flag}</span>
                                <p className="font-medium text-sm">{lang.name}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Global Achievements</h2>
                <p className="text-sm text-gray-400 mb-4">Unlocked: {unlockedCount} / {achievements.length}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((ach) => (
                    <Card key={ach.title} className={ach.unlocked ? '' : 'opacity-60'}>
                        <div className="flex gap-4 items-center">
                            <div className="w-14 h-14 rounded-full bg-brand-500/10 flex items-center justify-center text-3xl">
                                {ach.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{ach.title}</h3>
                                <p className="text-sm text-gray-400">{ach.desc}</p>
                                <p className="text-xs text-brand-300 mt-1">
                                    {ach.unlocked ? `Unlocked ${ach.date}` : 'Locked'}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    );
}
