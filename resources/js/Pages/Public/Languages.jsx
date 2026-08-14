import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { InteractiveCard } from '@/Components/ui/Card';

export default function Languages({ auth }) {
    const languages = [
        { name: 'Japanese', slug: 'japanese', flag: '🇯🇵', desc: 'Master Kanji, Hiragana, and Katakana.', diff: 'Hard', hours: '2200h' },
        { name: 'Chinese', slug: 'chinese', flag: '🇨🇳', desc: 'Learn Mandarin, Pinyin, and Hanzi.', diff: 'Hard', hours: '2200h' },
        { name: 'Korean', slug: 'korean', flag: '🇰🇷', desc: 'Read Hangul and learn grammar naturally.', diff: 'Medium', hours: '1200h' },
        { name: 'English', slug: 'english', flag: '🇺🇸', desc: 'Perfect your pronunciation and idioms.', diff: 'Easy', hours: '600h' },
        { name: 'Spanish', slug: 'spanish', flag: '🇪🇸', desc: 'Converse fluently in real-life situations.', diff: 'Easy', hours: '600h' },
    ];

    const openLanguage = (slug) => {
        if (auth?.user) {
            router.visit(`/language/${slug}`);
            return;
        }
        router.visit('/login');
    };

    return (
        <PublicLayout auth={auth}>
            <Head title="Languages" />
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-glow">Available Languages</h1>
                    <p className="text-xl text-gray-400">Choose a language and start your journey today.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {languages.map((lang) => (
                        <InteractiveCard key={lang.slug} className="flex flex-col h-full" onClick={() => openLanguage(lang.slug)}>
                            <div className="text-6xl mb-6">{lang.flag}</div>
                            <h3 className="text-2xl font-bold mb-2">{lang.name}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{lang.desc}</p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-sm">
                                <span className="text-brand-300 bg-brand-500/10 px-3 py-1 rounded-full">{lang.diff}</span>
                                <span className="text-gray-400">~{lang.hours}</span>
                            </div>
                        </InteractiveCard>
                    ))}
                </div>

                {!auth?.user && (
                    <div className="text-center mt-12">
                        <Link href="/login" className="text-brand-300 hover:underline">
                            Already learning? Log in to continue
                        </Link>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
