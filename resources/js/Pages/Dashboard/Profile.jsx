import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { User, MapPin, Trophy, Star, Edit } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';
import { loadLanguageProgress, getTotalLessonCount } from '@/lib/languageProgress';

export default function Profile({ auth }) {
    const languages = getAllLanguages();
    
    // Calculate progress for each language
    const languagesWithProgress = languages.map((lang) => {
        const progress = loadLanguageProgress(lang.id);
        const totalLessons = getTotalLessonCount(lang.id);
        const completedLessons = progress.completed.length;
        const progressPercent = totalLessons > 0 
            ? Math.round((completedLessons / totalLessons) * 100) 
            : 0;
        
        // Calculate level based on progress
        const levelIndex = Math.floor(progressPercent / 33.33);
        const levels = ['Beginner', 'Intermediate', 'Advanced'];
        const currentLevel = levels[Math.min(levelIndex, 2)];
        
        return {
            ...lang,
            progress: progressPercent,
            xp: progress.xp || 0,
            level: currentLevel,
        };
    });

    const totalXP = languagesWithProgress.reduce((sum, lang) => sum + lang.xp, 0);
    const primaryLanguage = languagesWithProgress.find((l) => l.progress > 0) || languagesWithProgress[0];

    const achievements = [
        { title: "First Word", desc: "Learn your first 10 words", icon: "🌱", date: "Jan 12" },
        { title: "Week Warrior", desc: "7 day streak", icon: "🔥", date: "Jan 19" },
        { title: "Chatterbox", desc: "Complete 50 AI conversations", icon: "💬", date: "Feb 03" },
        { title: "Kanji Master", desc: "Learn 100 Kanji", icon: "💮", date: "Feb 14" },
    ];

    return (
        <DashboardLayout>
            <Head title="Profile" />

            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Profile</span>
            </nav>

            <div className="relative mb-16">
                <div className="h-48 w-full rounded-2xl bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                </div>

                <div className="absolute -bottom-12 left-8 flex items-end gap-6">
                    <div className="w-32 h-32 rounded-2xl bg-dark-800 border-4 border-dark-900 flex items-center justify-center shadow-xl overflow-hidden relative group">
                        <User className="w-16 h-16 text-gray-500" />
                        <Link href="/settings" className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Edit className="w-6 h-6 text-white" />
                        </Link>
                    </div>
                    <div className="pb-2">
                        <h1 className="text-3xl font-bold">{auth.user.name}</h1>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>United States</span>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-6 right-8">
                    <Link href="/settings">
                        <Button variant="outline" className="gap-2">
                            <Edit className="w-4 h-4" /> Edit Profile
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-6">
                    <Card>
                        <h3 className="font-bold mb-4 flex items-center gap-2"><Trophy className="w-5 h-5 text-brand-300" /> Statistics</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-white/5">
                                <span className="text-gray-400">Total XP</span>
                                <span className="font-bold text-brand-300">{totalXP.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/5">
                                <span className="text-gray-400">Current Level</span>
                                <span className="font-bold">{primaryLanguage.level}</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/5">
                                <span className="text-gray-400">Study Time</span>
                                <span className="font-bold">142h 30m</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Avg. Accuracy</span>
                                <span className="font-bold text-green-400">94%</span>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="font-bold mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-brand-300" /> Languages</h3>
                        <div className="space-y-3">
                            {languagesWithProgress.map((lang) => (
                                <Link key={lang.id} href={`/language/${lang.id}`} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                    <span className="text-2xl">{lang.flag}</span>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm">{lang.name}</h4>
                                        <p className="text-xs text-gray-400">Level {lang.level} • {lang.progress}%</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg">Achievements</h3>
                            <Link href="/achievements" className="text-sm text-brand-300 cursor-pointer hover:underline">View All</Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((ach, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-dark-900/50 rounded-xl border border-white/5 items-center">
                                    <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center text-2xl">
                                        {ach.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">{ach.title}</h4>
                                        <p className="text-xs text-gray-400">{ach.desc}</p>
                                        <p className="text-[10px] text-brand-500 mt-1">{ach.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <h3 className="font-bold text-lg mb-6">Recent Activity</h3>
                        <div className="relative pl-6 border-l-2 border-brand-500/30 space-y-6">
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-500 border-4 border-dark-800"></div>
                                <h4 className="font-bold">Completed {primaryLanguage.name} Lesson</h4>
                                <p className="text-sm text-gray-400">Grammar: Te-form • +50 XP</p>
                                <p className="text-xs text-brand-300 mt-1">2 hours ago</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-600 border-4 border-dark-800"></div>
                                <h4 className="font-bold">AI Conversation Practice</h4>
                                <p className="text-sm text-gray-400">Topic: Ordering at a restaurant • Score: 92%</p>
                                <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-600 border-4 border-dark-800"></div>
                                <h4 className="font-bold">Learned 20 new Vocabulary words</h4>
                                <p className="text-sm text-gray-400">{primaryLanguage.certification.name} Core set • +40 XP</p>
                                <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
