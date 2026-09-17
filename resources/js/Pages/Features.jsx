import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/Button';
import { Trophy, ListTree, Zap, ArrowRight, BookOpen } from 'lucide-react';

export default function Features({ auth }) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Features - LinguaNova" />
            
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <Zap className="w-4 h-4" />
                            <span>Smarter Learning System</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Master Every Aspect</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">A fully structured learning path with intelligent practice limits designed for maximum long-term retention.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        <FeatureCard 
                            icon={<ListTree className="w-8 h-8 text-brand-300" />}
                            title="Sequential Unlocking"
                            desc="Learn naturally. Master Hiragana → Katakana → Kanji → Vocabulary → Grammar → Listening. Each category unlocks upon completing the previous one."
                        />
                        <FeatureCard 
                            icon={<Zap className="w-8 h-8 text-brand-300" />}
                            title="Optimized Practice Limits"
                            desc="Paced daily sessions to maximize retention: 40 Hiragana, 40 Katakana, 15 Kanji, 30 Vocabulary, 20 Grammar, and 20 Listening questions."
                        />
                        <FeatureCard 
                            icon={<Trophy className="w-8 h-8 text-brand-300" />}
                            title="Gamified Tracking"
                            desc="Stay motivated with an XP system, daily streaks, level progression, and detailed achievement tracking."
                        />
                    </div>

                    {/* Deep Dive into Quiz Limits */}
                    <div className="glass-card p-10 rounded-3xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                                <BookOpen className="w-8 h-8 text-brand-400" /> Daily Practice Limits
                            </h2>
                            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                                Science-backed repetition intervals. We cap your daily practice to ensure you learn efficiently without exhausting your memory retention capacity.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <LimitCard title="Hiragana" limit="40" type="Scripts" />
                                <LimitCard title="Katakana" limit="40" type="Scripts" />
                                <LimitCard title="Kanji" limit="15" type="Characters" />
                                <LimitCard title="Vocabulary" limit="30" type="Words" />
                                <LimitCard title="Grammar" limit="20" type="Lessons" />
                                <LimitCard title="Listening" limit="20" type="Exercises" />
                            </div>
                        </div>
                        
                        <div className="mt-16 text-center">
                            <Link href="/register">
                                <Button size="lg" variant="primary" className="gap-2">
                                    Start Learning Now <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col items-center text-center rounded-2xl border border-white/5"
        >
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </motion.div>
    );
}

function LimitCard({ title, limit, type }) {
    return (
        <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-brand-500/30 transition-colors">
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 mb-1">
                {limit}
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{type} / Day</div>
        </div>
    );
}
