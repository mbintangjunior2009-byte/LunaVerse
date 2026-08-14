import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Check } from 'lucide-react';

export default function Pricing({ auth }) {
    const plans = [
        {
            name: "Free", price: "$0", period: "/forever",
            features: ["Basic vocabulary", "10 AI conversations/month", "Community access"],
            button: "Start Free", variant: "glass"
        },
        {
            name: "Premium", price: "$9.99", period: "/month",
            features: ["Unlimited AI conversations", "Advanced grammar", "Smart flashcards", "Priority support"],
            button: "Subscribe Premium", variant: "primary", popular: true
        },
        {
            name: "Pro", price: "$19.99", period: "/month",
            features: ["All Premium features", "1-on-1 Native tutoring (1hr/mo)", "Certification prep"],
            button: "Subscribe Pro", variant: "glass"
        }
    ];

    return (
        <PublicLayout auth={auth}>
            <Head title="Pricing" />
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-glow">Simple, transparent pricing</h1>
                    <p className="text-xl text-gray-400">Unlock your full potential.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, idx) => (
                        <Card key={idx} className={`relative flex flex-col ${plan.popular ? 'border-brand-500/50 shadow-[0_0_30px_rgba(185,95,255,0.2)] scale-105' : ''}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">{plan.price}</span>
                                <span className="text-gray-400">{plan.period}</span>
                            </div>
                            
                            <ul className="flex-grow space-y-4 mb-8">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-brand-300 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <Link href={auth?.user ? "/dashboard" : "/register"} className="w-full">
                                <Button variant={plan.variant} className="w-full">{plan.button}</Button>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
