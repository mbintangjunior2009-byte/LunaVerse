import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/Button';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export default function Pricing({ auth }) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Pricing - LinguaNova" />
            
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Transparent Plans</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple, fair pricing</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Unlock your full language learning potential. Start for free, upgrade when you're ready to accelerate.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="glass-card p-10 rounded-3xl border border-white/5 flex flex-col h-full">
                            <h3 className="text-3xl font-bold text-white mb-2">Free</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-extrabold text-white">$0</span>
                                <span className="text-xl text-gray-400">/ forever</span>
                            </div>
                            <p className="text-gray-400 mb-10 text-lg">Perfect for absolute beginners to get started and learn the basics.</p>
                            
                            <div className="space-y-5 mb-12 flex-1">
                                <h4 className="font-semibold text-white mb-4">Includes:</h4>
                                <PricingFeature text="Full access to Hiragana & Katakana" />
                                <PricingFeature text="Daily Quizzes (Strict daily limits)" />
                                <PricingFeature text="Basic N5 Vocabulary" />
                                <PricingFeature text="Community Leaderboards" />
                                <PricingFeature text="Standard XP & Streak tracking" />
                            </div>
                            
                            <Link href="/register" className="w-full mt-auto">
                                <Button size="lg" variant="glass" className="w-full text-lg">Start for Free</Button>
                            </Link>
                        </div>

                        {/* Pro Tier */}
                        <div className="glass-card p-10 rounded-3xl border border-brand-500/50 flex flex-col relative shadow-[0_0_40px_rgba(185,95,255,0.15)] h-full">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-brand-400 text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-lg">
                                MOST POPULAR
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Pro</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-extrabold text-white">$9.99</span>
                                <span className="text-xl text-gray-400">/ month</span>
                            </div>
                            <p className="text-brand-200 mb-10 text-lg">Full access to all advanced features for rapid and unbounded fluency.</p>
                            
                            <div className="space-y-5 mb-12 flex-1">
                                <h4 className="font-semibold text-white mb-4">Everything in Free, plus:</h4>
                                <PricingFeature text="Unlimited quizzes and practice sessions" />
                                <PricingFeature text="Advanced Kanji (N4-N1) & Grammar" />
                                <PricingFeature text="Full learning analytics and history" />
                                <PricingFeature text="AI Conversation Practice scenarios" />
                                <PricingFeature text="Priority customer support" />
                            </div>
                            
                            <Link href="/register" className="w-full mt-auto">
                                <Button size="lg" variant="primary" className="w-full text-lg shadow-[0_0_20px_rgba(185,95,255,0.4)]">Choose Pro</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

function PricingFeature({ text }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4" />
            </div>
            <span className="text-gray-300 text-lg">{text}</span>
        </div>
    );
}
