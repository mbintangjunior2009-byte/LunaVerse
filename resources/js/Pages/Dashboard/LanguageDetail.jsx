import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Play, Lock, Book, MessageSquare, Headphones } from 'lucide-react';

const languageMeta = {
    japanese: { flag: '🇯🇵', blurb: 'Master the basics of Hiragana, Katakana, and essential Kanji.' },
    chinese: { flag: '🇨🇳', blurb: 'Learn Mandarin, Pinyin, and core Hanzi characters.' },
    korean: { flag: '🇰🇷', blurb: 'Read Hangul and build natural conversational grammar.' },
    english: { flag: '🇺🇸', blurb: 'Polish pronunciation, idioms, and everyday fluency.' },
    spanish: { flag: '🇪🇸', blurb: 'Converse confidently in real-life Spanish situations.' },
};

export default function LanguageDetail({ language = 'Japanese', slug = 'japanese' }) {
    const meta = languageMeta[slug] || languageMeta.japanese;

    const levels = [
        {
            name: 'Beginner',
            status: 'active',
            progress: 45,
            est: '120h',
            stats: { lessons: 40, vocab: 500, grammar: 30, kanji: 100 }
        },
        {
            name: 'Intermediate',
            status: 'locked',
            progress: 0,
            est: '350h',
            stats: { lessons: 60, vocab: 2000, grammar: 80, kanji: 500 }
        },
        {
            name: 'Advanced',
            status: 'locked',
            progress: 0,
            est: '600h',
            stats: { lessons: 100, vocab: 5000, grammar: 150, kanji: 1500 }
        },
    ];

    return (
        <DashboardLayout>
            <Head title={`${language} Course`} />

            <div className="mb-8">
                <Link href="/languages" className="text-sm text-brand-300 hover:underline mb-2 inline-block">
                    ← Back to Languages
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-5xl">{meta.flag}</span>
                    <div>
                        <h1 className="text-4xl font-bold">{language}</h1>
                        <p className="text-gray-400">{meta.blurb}</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {levels.map((level, idx) => (
                    <Card key={idx} className={`relative overflow-hidden ${level.status === 'locked' ? 'opacity-70' : ''}`}>
                        {level.status === 'locked' && (
                            <div className="absolute inset-0 bg-dark-900/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
                                <div className="bg-dark-800 p-4 rounded-full border border-white/10 shadow-2xl">
                                    <Lock className="w-8 h-8 text-gray-500" />
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative z-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="text-2xl font-bold">{level.name}</h2>
                                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">~{level.est}</span>
                                </div>

                                {level.status === 'active' && (
                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-brand-300">Course Progress</span>
                                            <span className="font-bold">{level.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-500 rounded-full" style={{ width: `${level.progress}%` }}></div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-4">
                                    <div className="flex items-center gap-1"><Book className="w-4 h-4 text-brand-300" /> {level.stats.lessons} Lessons</div>
                                    <div className="flex items-center gap-1"><MessageSquare className="w-4 h-4 text-blue-400" /> {level.stats.vocab} Vocab</div>
                                    <div className="flex items-center gap-1"><Headphones className="w-4 h-4 text-orange-400" /> {level.stats.grammar} Grammar</div>
                                    <div className="flex items-center gap-1">💮 {level.stats.kanji} Kanji</div>
                                </div>
                            </div>

                            <div className="w-full md:w-auto flex-shrink-0">
                                {level.status === 'active' ? (
                                    <Link href={`/language/${slug}/learn`}>
                                        <Button variant="primary" size="lg" className="w-full md:w-auto gap-2">
                                            <Play className="w-5 h-5 fill-current" /> Continue
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button variant="outline" size="lg" className="w-full md:w-auto cursor-not-allowed">
                                        Locked
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    );
}
