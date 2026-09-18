import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Trophy } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';

export default function Achievements() {
    const { t } = useTranslation();
    const languages = getAllLanguages();

    // Achievement data sourced from locale keys so it translates dynamically
    const achievements = [
        { titleKey: 'achievements.firstWord',   descKey: 'achievements.firstWordDesc',   icon: '🌱', unlocked: true,  date: 'Jan 12' },
        { titleKey: 'achievements.weekWarrior', descKey: 'achievements.weekWarriorDesc', icon: '🔥', unlocked: true,  date: 'Jan 19' },
        { titleKey: 'achievements.chatterbox',  descKey: 'achievements.chatterboxDesc',  icon: '💬', unlocked: true,  date: 'Feb 03' },
        { titleKey: 'achievements.kanjiMaster', descKey: 'achievements.kanjiMasterDesc', icon: '💮', unlocked: true,  date: 'Feb 14' },
        { titleKey: 'achievements.polyglot',    descKey: 'achievements.polyglotDesc',    icon: '🌍', unlocked: false, date: null },
        { titleKey: 'achievements.nightOwl',    descKey: 'achievements.nightOwlDesc',    icon: '🦉', unlocked: false, date: null },
    ];

    const unlockedCount = achievements.filter((a) => a.unlocked).length;

    return (
        <DashboardLayout>
            <Head title={t('sections.achievements')} />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">{t('nav.dashboard')}</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">{t('sections.achievements')}</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-brand-300" /> {t('sections.achievements')}
                </h1>
                <p className="text-gray-400 mt-2">{t('dashboard.trackMilestones')}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">{t('sections.selectLanguage')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {languages.map((lang) => (
                        <Link key={lang.id} href={`/languages/${lang.id}/achievements`}>
                            <Card className="p-4 text-center hover:border-brand-500/50 transition-colors cursor-pointer">
                                <span className="text-3xl mb-2 block">{lang.flag}</span>
                                <p className="font-medium text-sm">{lang.name}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">{t('sections.globalAchievements')}</h2>
                <p className="text-sm text-gray-400 mb-4">
                    {t('dashboard.unlockedCount', { count: unlockedCount, total: achievements.length })}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((ach) => (
                    <Card key={ach.titleKey} className={ach.unlocked ? '' : 'opacity-60'}>
                        <div className="flex gap-4 items-center">
                            <div className="w-14 h-14 rounded-full bg-brand-500/10 flex items-center justify-center text-3xl">
                                {ach.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{t(ach.titleKey)}</h3>
                                <p className="text-sm text-gray-400">{t(ach.descKey)}</p>
                                <p className="text-xs text-brand-300 mt-1">
                                    {ach.unlocked ? t('dashboard.unlockedDate', { date: ach.date }) : t('stats.locked')}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    );
}
