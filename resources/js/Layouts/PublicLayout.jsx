import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/Button';

export default function PublicLayout({ children, auth }) {
    const { url } = usePage();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/features' },
        { name: 'Languages', href: '/languages-info' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Community', href: '/community' },
    ];

    return (
        <div className="min-h-screen bg-dark-900 text-white relative overflow-hidden font-sans">
            {/* Background Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-700/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <nav className="fixed top-0 w-full z-50 bg-dark-900/60 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-700 to-brand-300 flex items-center justify-center shadow-[0_0_15px_rgba(185,95,255,0.5)] group-hover:shadow-[0_0_25px_rgba(185,95,255,0.7)] transition-all">
                            <span className="font-bold text-lg text-white">L</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-glow">LinguaNova</span>
                    </Link>
                    
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className={`transition-colors ${url === link.href ? 'text-brand-400 font-semibold' : 'text-gray-300 hover:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {auth?.user ? (
                            <Link href="/dashboard">
                                <Button variant="primary">Dashboard</Button>
                            </Link>
                        ) : (
                            <>
                                <Link href="/login" className="text-sm font-medium hover:text-white transition-colors hidden sm:block">
                                    Login
                                </Link>
                                <Link href="/register">
                                    <Button variant="primary">Get Started</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <main className="pt-20 min-h-screen relative z-10">
                {children}
            </main>
        </div>
    );
}
