import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, TrendingUp, Trophy, Brain, LayoutDashboard } from 'lucide-react';
import { getLanguageConfig } from '@/data/languageConfig';

/**
 * Reusable Language Header Component
 * Displays language-specific header with navigation and stats
 */
export default function LanguageHeader({ languageId, currentSection = 'hub' }) {
    const config = getLanguageConfig(languageId);
    const { url } = usePage();
    // Strip query string for comparison
    const currentPath = url.split('?')[0];

    const sections = [
        { id: 'hub',          label: 'Hub',          icon: LayoutDashboard, href: `/languages/${languageId}` },
        { id: 'study',        label: 'Study',        icon: BookOpen,        href: `/languages/${languageId}/study` },
        { id: 'practice',     label: 'Practice',     icon: TrendingUp,      href: `/languages/${languageId}/practice` },
        { id: 'vocabulary',   label: 'Vocabulary',   icon: Brain,           href: `/languages/${languageId}/vocabulary` },
        { id: 'progress',     label: 'Progress',     icon: TrendingUp,      href: `/languages/${languageId}/progress` },
        { id: 'achievements', label: 'Achievements', icon: Trophy,          href: `/languages/${languageId}/achievements` },
    ];

    return (
        <div className="mb-8">
            <Link
                href="/languages"
                className="text-sm text-gray-400 hover:text-white transition-colors mb-2 inline-block"
            >
                ← Back to Languages
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
                    const Icon = section.icon;
                    // Active if URL exactly matches, or is a sub-path (e.g. /practice/hiragana)
                    const isActive =
                        currentPath === section.href ||
                        currentPath.startsWith(section.href + '/');

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
                            {section.label}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
