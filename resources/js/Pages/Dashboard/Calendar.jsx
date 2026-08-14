import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Calendar as CalendarIcon } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';

const days = Array.from({ length: 28 }, (_, i) => i + 1);
const studied = new Set([1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28]);

export default function CalendarPage() {
    const languages = getAllLanguages();
    const primaryLanguage = languages[0]; // Default to first language (Japanese)

    const upcoming = [
        { title: `${primaryLanguage.name} Grammar Review`, when: 'Today · 7:00 PM', href: `/language/${primaryLanguage.id}/study` },
        { title: 'Vocabulary Drill', when: 'Tomorrow · 6:30 PM', href: '/vocabulary' },
        { title: 'Practice Session', when: 'Friday · 8:00 PM', href: '/practice' },
    ];

    return (
        <DashboardLayout>
            <Head title="Calendar" />

            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Calendar</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <CalendarIcon className="w-8 h-8 text-brand-300" /> Calendar
                </h1>
                <p className="text-gray-400 mt-2">Keep your study streak and upcoming sessions organized.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">February 2026</h2>
                        <span className="text-sm text-brand-300">14-day streak</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                            <div key={d}>{d}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        {days.map((day) => (
                            <div
                                key={day}
                                className={`aspect-square rounded-xl flex items-center justify-center text-sm border ${
                                    studied.has(day)
                                        ? 'bg-brand-500/20 border-brand-500/40 text-brand-300'
                                        : 'bg-white/5 border-white/5 text-gray-500'
                                }`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h2 className="text-xl font-bold mb-4">Upcoming</h2>
                    <div className="space-y-4">
                        {upcoming.map((item) => (
                            <Link key={item.title} href={item.href} className="block p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-sm">{item.title}</h3>
                                <p className="text-xs text-gray-400 mt-1">{item.when}</p>
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
