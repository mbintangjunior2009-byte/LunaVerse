import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, InteractiveCard } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Flame, Target, Trophy, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAllLanguages } from '@/data/languageConfig';
import { loadLanguageProgress } from '@/lib/languageProgress';
import { getTotalLessonCount } from '@/data/languageCurriculum';

export default function Dashboard({ auth }) {
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
            level: progressPercent > 0 ? currentLevel : 'Not started',
        };
    });

    const activeLanguages = languagesWithProgress.filter((l) => l.progress > 0);
    const exploreLanguages = languagesWithProgress.filter((l) => l.progress === 0);
    const primaryLanguage = activeLanguages[0] || languagesWithProgress[0];

    const stats = [
        { label: "Today's XP", value: "150", icon: Trophy, color: "text-brand-300", bg: "bg-brand-500/10" },
        { label: "Weekly Streak", value: "14 Days", icon: Flame, color: "text-orange-400", bg: "bg-orange-400/10" },
        { label: "Daily Goal", value: "3/5 Lessons", icon: Target, color: "text-blue-400", bg: "bg-blue-400/10" },
    ];

    return (
        <DashboardLayout>
            <Head title="Dashboard" />
            
            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <span className="text-brand-300 font-medium">Dashboard</span>
            </nav>
            
            {/* Welcome Banner */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-8 rounded-2xl bg-gradient-to-r from-brand-900/50 to-brand-700/50 border border-brand-500/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Welcome back, {auth.user.name}! 👋</h1>
                    <p className="text-gray-300 mb-4 max-w-lg">You're doing great. You've maintained a 14-day streak. Keep up the momentum!</p>
                    <Link href={`/language/${primaryLanguage.id}`}>
                        <Button variant="primary" className="gap-2">
                            <Play className="w-4 h-4" /> Continue {primaryLanguage.name}
                        </Button>
                    </Link>
                </div>
                <div className="hidden md:flex relative z-10 text-8xl opacity-80 mix-blend-overlay blur-[2px]">
                    {primaryLanguage.flag}
                </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <Card key={i} className="flex items-center gap-4 p-5">
                        <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold">{stat.value}</h3>
                        </div>
                    </Card>
                ))}
            </div>

            {/* My Languages */}
            <h2 className="text-xl font-bold mb-4">My Languages</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {activeLanguages.map((lang) => (
                    <Link key={lang.id} href={`/language/${lang.id}`}>
                        <InteractiveCard className="h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl">{lang.flag}</span>
                                    <div>
                                        <h3 className="text-xl font-bold">{lang.name}</h3>
                                        <p className="text-sm text-brand-300">{lang.level}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-400">Total XP</p>
                                    <p className="font-bold">{lang.xp.toLocaleString()}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Course Progress</span>
                                    <span className="font-bold">{lang.progress}%</span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full rounded-full transition-all duration-300" 
                                        style={{ 
                                            width: `${lang.progress}%`,
                                            backgroundColor: lang.themeColor 
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </InteractiveCard>
                    </Link>
                ))}
            </div>

            {/* Explore More */}
            {exploreLanguages.length > 0 && (
                <>
                    <h2 className="text-xl font-bold mb-4">Explore More</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {exploreLanguages.map((lang) => (
                            <Link key={lang.id} href={`/language/${lang.id}`}>
                                <Card className="p-4 text-center hover:bg-white/10 transition-colors cursor-pointer border-dashed border-white/20">
                                    <span className="text-3xl block mb-2">{lang.flag}</span>
                                    <span className="font-medium">{lang.name}</span>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </DashboardLayout>
    );
}
