import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Check } from 'lucide-react';

export default function Pricing({ auth }) {
    const features = [
        'Unlimited AI conversations',
        'All courses (Japanese, Chinese, Korean, English, Spanish)',
        'Advanced grammar & smart flashcards',
        'Full practice quizzes & analytics',
        'Community access & leaderboards',
        'No limits, no paywalls, no subscriptions',
    ];

    return (
        <PublicLayout auth={auth}>
            <Head title="Pricing" />
            <div className="max-w-3xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-glow">Everything is free.</h1>
                    <p className="text-xl text-gray-400">
                        Every feature, every course, completely free — forever.
                    </p>
                </div>

                <Card className="flex flex-col items-center text-center p-10">
                    <h3 className="text-3xl font-bold mb-2">Free</h3>
                    <div className="mb-8">
                        <span className="text-5xl font-extrabold">$0</span>
                        <span className="text-gray-400 ml-2">/ forever</span>
                    </div>

                    <ul className="flex-grow space-y-4 mb-8 text-left w-full max-w-md">
                        {features.map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-brand-300 flex-shrink-0" />
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>

                    <Link href={auth?.user ? '/dashboard' : '/register'} className="w-full max-w-xs">
                        <Button variant="primary" className="w-full">
                            {auth?.user ? 'Go to Dashboard' : 'Start Free'}
                        </Button>
                    </Link>
                </Card>
            </div>
        </PublicLayout>
    );
}
