import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/Button';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function Pricing({ auth }) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Pricing - Lunavera Language" />

            <section className="py-24 relative z-10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" />
                        <span>100% Free</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Everything is free.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Every course, every quiz, every feature — completely free, forever.
                        No subscriptions, no paywalls, no hidden tiers.
                    </p>

                    <div className="glass-card p-10 rounded-3xl border border-white/5 text-left max-w-xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">What you get</h3>
                        <div className="space-y-5 mb-10">
                            <PricingFeature text="Full access to Hiragana, Katakana & Kanji" />
                            <PricingFeature text="Unlimited quizzes and practice sessions" />
                            <PricingFeature text="All vocabulary, grammar & listening content" />
                            <PricingFeature text="Complete learning analytics and progress tracking" />
                            <PricingFeature text="AI conversation practice scenarios" />
                            <PricingFeature text="Community access and leaderboards" />
                        </div>

                        <Link href={auth?.user ? '/dashboard' : '/register'} className="w-full">
                            <Button size="lg" variant="primary" className="w-full text-lg">
                                {auth?.user ? 'Go to Dashboard' : 'Start Learning Free'}
                            </Button>
                        </Link>
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
