import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { CheckCircle, Globe2 } from 'lucide-react';
import { Button } from '@/Components/ui/Button';

export default function PublicLanguages({ auth }) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Languages - LinguaNova" />
            
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <Globe2 className="w-4 h-4" />
                            <span>Curriculums</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Supported Languages</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Start with our comprehensive flagship Japanese course. More languages are currently in active development.</p>
                    </div>
                    
                    <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                        {/* Japanese Card (Full Support) - Takes up 3 columns */}
                        <div className="lg:col-span-3 glass-card p-10 rounded-3xl border border-brand-500/40 relative overflow-hidden group shadow-[0_0_40px_rgba(185,95,255,0.1)]">
                            <div className="absolute top-0 right-0 bg-brand-500 text-white text-sm font-bold px-4 py-1.5 rounded-bl-xl z-10">
                                FULLY SUPPORTED
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <div className="text-6xl mb-6 text-glow">🇯🇵</div>
                                    <h2 className="text-4xl font-bold text-white mb-4">Japanese</h2>
                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                        Our flagship curriculum takes you from absolute beginner to conversational fluency with structured progression.
                                    </p>
                                    <Link href="/register">
                                        <Button variant="primary" size="lg">Start Japanese Course</Button>
                                    </Link>
                                </div>
                                <div className="flex-1 bg-dark-900/50 p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-4">Course Content</h3>
                                    <div className="space-y-4">
                                        {[
                                            'Hiragana & Katakana Mastery', 
                                            'JLPT N5 Kanji Recognition', 
                                            'Core Vocabulary Building', 
                                            'Foundational Grammar Rules', 
                                            'Native Listening Practice',
                                            'AI Conversation Scenarios'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                                                <span className="text-gray-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coming Soon Languages - Takes up 2 columns */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-white mb-2 px-2">Coming Soon</h3>
                            {[
                                { flag: '🇨🇳', name: 'Chinese', desc: 'Mandarin, Pinyin, & Simplified Characters' },
                                { flag: '🇰🇷', name: 'Korean', desc: 'Hangul alphabet & polite speech forms' },
                                { flag: '🇪🇸', name: 'Spanish', desc: 'European & Latin American dialects' },
                                { flag: '🇬🇧', name: 'English', desc: 'ESL grammar and practical vocabulary' }
                            ].map((lang, idx) => (
                                <div key={idx} className="glass-card p-5 rounded-2xl border border-white/5 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-5">
                                        <div className="text-4xl">{lang.flag}</div>
                                        <div>
                                            <div className="font-bold text-white text-lg">{lang.name}</div>
                                            <div className="text-sm text-gray-500">{lang.desc}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold px-3 py-1 bg-dark-800 text-gray-400 rounded-full border border-white/10 shrink-0 hidden sm:block">
                                        IN DEV
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
