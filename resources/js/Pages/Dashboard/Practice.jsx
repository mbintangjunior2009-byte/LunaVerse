import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { InteractiveCard } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { BookOpen, MessageSquare, Mic, Headphones, ArrowRight } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';

export default function Practice() {
    const { t } = useTranslation();
    const languages = getAllLanguages();

    const modes = [
        { titleKey: 'practice.modes.aiConversation',   descKey: 'practice.modes.aiConversationDesc',   icon: MessageSquare },
        { titleKey: 'practice.modes.speakingDrill',    descKey: 'practice.modes.speakingDrillDesc',    icon: Mic           },
        { titleKey: 'practice.modes.listeningLab',     descKey: 'practice.modes.listeningLabDesc',     icon: Headphones    },
        { titleKey: 'practice.modes.lessonReview',     descKey: 'practice.modes.lessonReviewDesc',     icon: BookOpen      },
    ];

    return (
        <DashboardLayout>
            <Head title={t('sections.practice')} />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">{t('nav.dashboard')}</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">{t('sections.practice')}</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold">{t('sections.practice')}</h1>
                <p className="text-gray-400 mt-2">{t('dashboard.sharpenSkills')}</p>
            </div>

            {/* Japanese Practice Progression quick link */}
            <div className="mb-8">
                <InteractiveCard className="p-6 border-brand-500/30 bg-gradient-to-r from-brand-900/30 to-brand-700/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold mb-2">{t('dashboard.japaneseProgression')}</h2>
                            <p className="text-sm text-gray-400 mb-4">{t('dashboard.progressionDesc')}</p>
                            <Link href="/practice">
                                <Button variant="primary" className="gap-2">
                                    {t('buttons.startPractice')} <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="text-6xl opacity-50">あ</div>
                    </div>
                </InteractiveCard>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">{t('sections.selectLanguage')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {languages.map((lang) => (
                        <Link key={lang.id} href={`/languages/${lang.id}/practice`}>
                            <InteractiveCard className="p-4 text-center hover:border-brand-500/50 transition-colors">
                                <span className="text-3xl mb-2 block">{lang.flag}</span>
                                <p className="font-medium text-sm">{lang.name}</p>
                            </InteractiveCard>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">{t('sections.practiceModes')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {modes.map((mode) => (
                        <InteractiveCard key={mode.titleKey} className="h-full">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-300 flex items-center justify-center">
                                    <mode.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">{t(mode.titleKey)}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{t(mode.descKey)}</p>
                                    <Button variant="outline" size="sm" className="pointer-events-none">
                                        {t('common.comingSoon')}
                                    </Button>
                                </div>
                            </div>
                        </InteractiveCard>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
