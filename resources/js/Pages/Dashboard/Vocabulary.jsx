import React, { useMemo, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Brain } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';

const words = [
    { term: '水',          reading: 'mizu',            meaning: 'Water',          language: 'Japanese' },
    { term: 'ありがとう', reading: 'arigatou',         meaning: 'Thank you',      language: 'Japanese' },
    { term: '안녕하세요', reading: 'annyeonghaseyo',   meaning: 'Hello',          language: 'Korean'   },
    { term: '朋友',        reading: 'péngyou',          meaning: 'Friend',         language: 'Chinese'  },
    { term: 'hola',        reading: 'ola',               meaning: 'Hello',          language: 'Spanish'  },
    { term: 'library',     reading: 'lai-brer-ee',       meaning: 'A place with books', language: 'English'},
];

export default function Vocabulary() {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const languages = getAllLanguages();

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return words;
        return words.filter((w) =>
            [w.term, w.reading, w.meaning, w.language].some((v) => v.toLowerCase().includes(q))
        );
    }, [query]);

    return (
        <DashboardLayout>
            <Head title={t('sections.vocabulary')} />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">{t('nav.dashboard')}</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">{t('sections.vocabulary')}</span>
            </nav>

            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Brain className="w-8 h-8 text-brand-300" /> {t('sections.vocabulary')}
                    </h1>
                    <p className="text-gray-400 mt-2">{t('dashboard.reviewWords')}</p>
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('dashboard.filterVocab')}
                    className="h-10 w-full md:w-72 bg-white/5 border border-white/10 rounded-full px-4 text-sm focus:outline-none focus:border-brand-500"
                />
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">{t('sections.selectLanguage')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {languages.map((lang) => (
                        <Link key={lang.id} href={`/languages/${lang.id}/study`}>
                            <Card className="p-4 text-center hover:border-brand-500/50 transition-colors cursor-pointer">
                                <span className="text-3xl mb-2 block">{lang.flag}</span>
                                <p className="font-medium text-sm">{lang.name}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">{t('sections.recentWords')}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {filtered.map((word) => (
                        <Card key={`${word.language}-${word.term}`} className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-1">{word.term}</h3>
                                <p className="text-sm text-brand-300">{word.reading}</p>
                                <p className="text-sm text-gray-400 mt-1">{word.meaning}</p>
                            </div>
                            <Link href={`/languages/${word.language.toLowerCase()}`} className="text-xs text-brand-300 hover:underline">
                                {word.language}
                            </Link>
                        </Card>
                    ))}
                    {filtered.length === 0 && (
                        <Card className="md:col-span-2 text-center text-gray-400">
                            {t('dashboard.noVocabMatch', { query })}
                        </Card>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
