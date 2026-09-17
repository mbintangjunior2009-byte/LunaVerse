import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/Button';
import { FloatingCharacter } from '@/Components/ui/FloatingCharacter';
import { Sparkles, ArrowRight, Flame, Trophy, ListTree, CheckCircle, Zap, Users, MessageSquare, Globe2, ShieldCheck, Heart, BookOpen } from 'lucide-react';

export default function Welcome({ auth }) {
    const chars = [
        { char: '学', delay: 0, x: '10%', y: '20%', size: 80 },
        { char: '愛', delay: 1, x: '80%', y: '15%', size: 100 },
        { char: '梦', delay: 2, x: '15%', y: '60%', size: 70 },
        { char: '한', delay: 0.5, x: '85%', y: '70%', size: 90 },
        { char: '글', delay: 1.5, x: '70%', y: '30%', size: 60 },
        { char: '星', delay: 2.5, x: '25%', y: '80%', size: 85 },
    ];

    return (
        <PublicLayout auth={auth}>
            <Head title="Master Languages Beautifully" />
            
            {/* Hero Section */}
            <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-10">
                {/* Floating Background Objects */}
                {chars.map((c, i) => (
                    <div key={i} className="absolute" style={{ top: c.y, left: c.x }}>
                        <FloatingCharacter char={c.char} delay={c.delay} size={c.size} />
                    </div>
                ))}

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span>AI-Powered Language Learning</span>
                        </div>
                        
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            Master Languages <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700">
                                Beautifully.
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Learn Japanese, Chinese, Korean, English and Spanish using AI conversations, flashcards, grammar lessons and pronunciation practice.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/register">
                                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                                    Start Learning
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button size="lg" variant="glass" className="w-full sm:w-auto gap-2">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 relative z-10 bg-dark-800/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <Zap className="w-4 h-4" />
                            <span>Smarter Learning System</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Master Every Aspect</h2>
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
                            desc="Stay motivated with an XP system, daily streaks, level progression, and achievement tracking."
                        />
                    </div>
                </div>
            </section>

            {/* Languages Section */}
            <section id="languages" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <Globe2 className="w-4 h-4" />
                            <span>Curriculums</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Supported Languages</h2>
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

            {/* Pricing Section */}
            <section id="pricing" className="py-24 relative z-10 bg-dark-800/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Transparent Plans</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, fair pricing</h2>
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

            {/* Community Section */}
            <section id="community" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
                            <Heart className="w-4 h-4" />
                            <span>Learn Together</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Join a Global Community</h2>
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

                    <div className="text-center mt-16">
                        <Link href="/register">
                            <Button size="lg" variant="primary" className="gap-2">
                                Start Your Journey Now <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
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
