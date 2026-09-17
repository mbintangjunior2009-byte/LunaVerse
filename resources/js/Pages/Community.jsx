import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/Button';
import { Users, Trophy, Flame, MessageSquare, ArrowRight, Heart } from 'lucide-react';

export default function Community({ auth }) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Community - LinguaNova" />
            
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <Heart className="w-4 h-4" />
                            <span>Learn Together</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Join a Global Community</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Connect with thousands of language learners. Compete on leaderboards, share your progress, and stay motivated every day.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Stats Card */}
                        <div className="glass-card p-10 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center mb-6 text-brand-400">
                                <Users className="w-10 h-10" />
                            </div>
                            <div className="text-5xl font-bold text-white mb-3">10,000+</div>
                            <div className="text-lg text-gray-400">Active Learners Worldwide</div>
                        </div>

                        {/* Leaderboard Preview */}
                        <div className="glass-card p-8 rounded-3xl border border-white/5 md:col-span-2">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Trophy className="w-7 h-7 text-brand-400" /> Weekly Top Streaks
                                </h3>
                                <div className="text-sm px-3 py-1 rounded-full bg-dark-800 text-gray-400 border border-white/10">Live Updating</div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "Sarah J.", xp: "15,200 XP", streak: "142 Days", rank: 1, avatar: "👩‍💻" },
                                    { name: "Ken M.", xp: "14,800 XP", streak: "89 Days", rank: 2, avatar: "👨‍🎓" },
                                    { name: "Alex R.", xp: "12,100 XP", streak: "65 Days", rank: 3, avatar: "🧑‍🏫" },
                                ].map((user, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-dark-800/50 border border-white/5 hover:bg-dark-800/80 transition-colors">
                                        <div className="flex items-center gap-5">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${idx === 0 ? 'bg-yellow-500 text-dark-900' : idx === 1 ? 'bg-gray-300 text-dark-900' : 'bg-orange-500 text-dark-900'}`}>
                                                #{user.rank}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{user.avatar}</span>
                                                <span className="font-bold text-white text-lg">{user.name}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div className="text-gray-400 font-medium hidden sm:block">{user.xp}</div>
                                            <div className="flex items-center gap-2 text-orange-400 font-bold px-3 py-1.5 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                                <Flame className="w-5 h-5" /> {user.streak}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <h3 className="text-3xl font-bold text-center mb-10">What our learners say</h3>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="glass-card p-8 rounded-3xl border border-white/5 relative">
                            <MessageSquare className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-full bg-brand-500/20 flex items-center justify-center text-3xl">👩‍🎓</div>
                                <div>
                                    <p className="text-lg text-gray-300 italic mb-4">"The sequential unlocking and structured practice limits keep me perfectly challenged without feeling overwhelmed. Best way to learn Japanese!"</p>
                                    <div className="font-bold text-white text-lg">Emily Chen</div>
                                    <div className="text-brand-400">Passed JLPT N5</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass-card p-8 rounded-3xl border border-white/5 relative">
                            <MessageSquare className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl">👨‍💻</div>
                                <div>
                                    <p className="text-lg text-gray-300 italic mb-4">"Seeing my friends on the leaderboard is exactly the push I needed to study every day. I'm on an 89-day streak and haven't looked back."</p>
                                    <div className="font-bold text-white text-lg">Michael T.</div>
                                    <div className="text-brand-400">Learning Kanji</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center bg-dark-800/40 p-12 rounded-3xl border border-white/5">
                        <h2 className="text-3xl font-bold mb-4">Ready to climb the leaderboard?</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Create an account for free today and start earning XP immediately.</p>
                        <Link href="/register">
                            <Button size="lg" variant="primary" className="gap-2 text-lg px-8">
                                Join the Community <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
