import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PublicLayout from '../layouts/PublicLayout';
import { Button, FloatingCharacter } from '../components';
import { Sparkles, Brain, BookOpen, Globe2 } from 'lucide-react';

export default function Home({ auth }) {
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
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-10">
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
                            <Link to={auth?.user ? "/dashboard" : "/register"}>
                                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                                    Start Learning
                                </Button>
                            </Link>
                            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                <Button size="lg" variant="glass" className="w-full sm:w-auto gap-2">
                                    Watch Demo
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Everything you need to become fluent</h2>
                        <p className="text-gray-400">A complete toolset designed for rapid acquisition.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={<Brain className="w-8 h-8 text-brand-300" />}
                            title="AI Conversations"
                            desc="Practice real scenarios with an intelligent tutor that adapts to your level and corrects mistakes."
                        />
                        <FeatureCard 
                            icon={<BookOpen className="w-8 h-8 text-brand-300" />}
                            title="Smart Flashcards"
                            desc="Spaced repetition system ensures you never forget the vocabulary you've learned."
                        />
                        <FeatureCard 
                            icon={<Globe2 className="w-8 h-8 text-brand-300" />}
                            title="Native Context"
                            desc="Learn grammar and nuances through real-world examples from native speakers."
                        />
                    </div>
                </div>
            </section>

            {/* Placeholder Sections */}
            <section id="languages" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Languages</h2>
                    <p className="text-gray-400">Placeholder for Languages section.</p>
                </div>
            </section>

            <section id="pricing" className="py-24 relative z-10 bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Pricing</h2>
                    <p className="text-gray-400">Placeholder for Pricing section.</p>
                </div>
            </section>

            <section id="community" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Community</h2>
                    <p className="text-gray-400">Placeholder for Community section.</p>
                </div>
            </section>
        </PublicLayout>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col items-center text-center"
        >
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </motion.div>
    );
}