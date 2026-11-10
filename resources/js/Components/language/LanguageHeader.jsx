import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { BookOpen, TrendingUp, Trophy, Brain, LayoutDashboard } from 'lucide-react';
import { getLanguageConfig } from '@/data/languageConfig';

export default function LanguageHeader({ languageId }) {
    const { t } = useTranslation();
    const config = getLanguageConfig(languageId);
    const { url } = usePage();
    const currentPath = url.split('?')[0];

    const sections = [
        { id: 'hub',          labelKey: 'language.hub',           icon: LayoutDashboard, href: `/languages/${languageId}` },
        { id: 'study',        labelKey: 'sections.study',         icon: BookOpen,        href: `/languages/${languageId}/study` },
        { id: 'practice',     labelKey: 'sections.practice',      icon: TrendingUp,      href: `/languages/${languageId}/practice` },
        { id: 'vocabulary',   labelKey: 'sections.vocabulary',    icon: Brain,           href: `/languages/${languageId}/vocabulary` },
        { id: 'progress',     labelKey: 'sections.progress',      icon: TrendingUp,      href: `/languages/${languageId}/progress` },
        { id: 'achievements', labelKey: 'sections.achievements',  icon: Trophy,          href: `/languages/${languageId}/achievements` },
    ];

    return (
        <div className="mb-8">
            <Link href="/languages" className="text-sm text-gray-400 hover:text-white transition-colors mb-2 inline-block">
                {t('language.backToLanguages')}
            </Link>

            <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{config.flag}</span>
                <div>
                    <h1 className="text-4xl font-bold">{config.name}</h1>
                    <p className="text-gray-400">{config.nativeName}</p>
                </div>
            </div>

            <nav className="flex flex-wrap gap-2">
                {sections.map((section) => {
                    const Icon    = section.icon;
                    const isActive = currentPath === section.href || currentPath.startsWith(section.href + '/');
                    return (
                        <Link
                            key={section.id}
                            href={section.href}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                isActive
                                    ? 'bg-white/10 text-white border border-white/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {t(section.labelKey)}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
