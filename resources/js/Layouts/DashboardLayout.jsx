import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import {
    LayoutDashboard, Languages, BookOpen,
    Brain, Trophy, Target, Calendar, Sparkles, LogOut,
    Search, Bell, User as UserIcon, Settings, Menu, X, Coins, Flame, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/Components/ui/Button';

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Languages', href: '/languages', icon: Languages },
    { name: 'Practice', href: '/practice', icon: BookOpen },
    { name: 'Vocabulary', href: '/vocabulary', icon: Brain },
    { name: 'Achievements', href: '/achievements', icon: Trophy },
    { name: 'Progress', href: '/progress', icon: Target },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
];

const searchCatalog = [
    ...navItems.map((item) => ({ label: item.name, href: item.href, type: 'Page' })),
    { label: 'Settings', href: '/settings', type: 'Page' },
    { label: 'Profile', href: '/profile', type: 'Page' },
    { label: 'Japanese', href: '/languages/japanese', type: 'Language' },
    { label: 'Chinese', href: '/languages/chinese', type: 'Language' },
    { label: 'Korean', href: '/languages/korean', type: 'Language' },
    { label: 'English', href: '/languages/english', type: 'Language' },
    { label: 'Spanish', href: '/languages/spanish', type: 'Language' },
];

const notifications = [
    { id: 1, title: 'Streak reminder', body: 'Keep your 14-day streak alive today.', href: '/calendar', time: '2m ago' },
    { id: 2, title: 'New vocabulary set', body: '20 JLPT N5 words are ready to review.', href: '/vocabulary', time: '1h ago' },
    { id: 3, title: 'Practice suggestion', body: 'Try an AI conversation session.', href: '/practice', time: 'Yesterday' },
];

function isActivePath(currentUrl, href) {
    const path = currentUrl.split('?')[0];
    const hrefPath = href.split('?')[0];
    
    if (hrefPath === '/dashboard') {
        return path === hrefPath;
    }
    if (hrefPath === '/languages') {
        return path === hrefPath || path.startsWith('/languages/');
    }
    return path === hrefPath || path.startsWith(`${hrefPath}/`);
}

export default function DashboardLayout({ children }) {
    const { auth } = usePage().props;
    const currentUrl = usePage().url;
    const user = auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const searchRef = useRef(null);
    const notifRef = useRef(null);
    const profileRef = useRef(null);

    const searchResults = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return searchCatalog.slice(0, 6);
        return searchCatalog.filter((item) =>
            item.label.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
        ).slice(0, 8);
    }, [searchQuery]);

    useEffect(() => {
        const onPointerDown = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) setSearchOpen(false);
            if (notifRef.current && !notifRef.current.contains(event.target)) setNotifOpen(false);
            if (profileRef.current && !profileRef.current.contains(event.target)) setProfileOpen(false);
        };
        document.addEventListener('mousedown', onPointerDown);
        return () => document.removeEventListener('mousedown', onPointerDown);
    }, []);

    const goTo = (href) => {
        setSearchOpen(false);
        setNotifOpen(false);
        setProfileOpen(false);
        setSidebarOpen(false);
        setSearchQuery('');
        router.visit(href);
    };

    const submitSearch = (event) => {
        event.preventDefault();
        if (searchResults[0]) {
            goTo(searchResults[0].href);
        }
    };

    return (
        <div className="min-h-screen bg-dark-900 text-white flex flex-col md:flex-row font-sans">
            {/* Top Navbar for Mobile */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-dark-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-700 to-brand-300 flex items-center justify-center">
                        <span className="font-bold text-white">L</span>
                    </div>
                </div>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
                    {sidebarOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-72 bg-dark-800/50 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex md:flex-col",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="h-20 flex items-center px-6 border-b border-white/5 hidden md:flex">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-700 to-brand-300 flex items-center justify-center">
                            <span className="font-bold text-white">L</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-glow">LinguaNova</span>
                    </Link>
                </div>

                <div className="p-6 border-b border-white/5">
                    <Link href="/profile" className="flex items-center gap-4 mb-4 hover:opacity-90 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center overflow-hidden">
                            <UserIcon className="w-6 h-6 text-brand-300" />
                        </div>
                        <div>
                            <h3 className="font-bold">{user.name}</h3>
                            <p className="text-xs text-brand-300">Level 12 • 4,250 XP</p>
                        </div>
                    </Link>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                        <div className="h-full bg-gradient-to-r from-brand-700 to-brand-300 w-[65%]" />
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium">
                        <div className="flex items-center gap-1 text-orange-400">
                            <Flame className="w-4 h-4" /> 14 Day Streak
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                            <Coins className="w-4 h-4" /> 320
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    {navItems.map((item) => {
                        const active = isActivePath(currentUrl, item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium",
                                    active
                                        ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="pt-6 mt-6 border-t border-white/5">
                        <Link
                            href="/settings"
                            onClick={() => setSidebarOpen(false)}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium",
                                isActivePath(currentUrl, '/settings')
                                    ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <Settings className="w-5 h-5" /> Settings
                        </Link>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium"
                        >
                            <LogOut className="w-5 h-5" /> Logout
                        </Link>
                    </div>
                </div>

                <div className="p-4 m-4 rounded-xl bg-gradient-to-br from-brand-700/40 to-brand-900/40 border border-brand-500/30 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-brand-300" />
                            <h4 className="font-bold text-sm">Go Premium</h4>
                        </div>
                        <p className="text-xs text-gray-300 mb-3">Unlock unlimited AI tutoring.</p>
                        <Link href="/pricing">
                            <Button variant="primary" size="sm" className="w-full text-xs h-8">Upgrade Now</Button>
                        </Link>
                    </div>
                </div>
            </aside>

            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                <header className="hidden md:flex h-20 items-center justify-between px-8 border-b border-white/5 bg-dark-900/50 backdrop-blur-sm shrink-0">
                    <div className="flex-1 max-w-md relative" ref={searchRef}>
                        <form onSubmit={submitSearch}>
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setSearchOpen(true);
                                }}
                                onFocus={() => setSearchOpen(true)}
                                placeholder="Search courses, vocabulary..."
                                className="w-full h-10 bg-white/5 border border-white/10 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                            />
                        </form>
                        {searchOpen && (
                            <div className="absolute top-12 left-0 right-0 z-50 rounded-xl bg-dark-800/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                                {searchResults.length === 0 ? (
                                    <p className="px-4 py-3 text-sm text-gray-400">No results for “{searchQuery}”.</p>
                                ) : (
                                    searchResults.map((item) => (
                                        <button
                                            key={`${item.type}-${item.href}`}
                                            type="button"
                                            onClick={() => goTo(item.href)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-left text-sm hover:bg-white/5 transition-colors"
                                        >
                                            <span>
                                                <span className="font-medium text-white">{item.label}</span>
                                                <span className="text-gray-500 ml-2">{item.type}</span>
                                            </span>
                                            <ChevronRight className="w-4 h-4 text-gray-500" />
                                        </button>
                                    ))
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative" ref={notifRef}>
                            <button
                                type="button"
                                onClick={() => {
                                    setNotifOpen((open) => !open);
                                    setProfileOpen(false);
                                }}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors relative"
                            >
                                <Bell className="w-5 h-5 text-gray-300" />
                                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-500" />
                            </button>
                            {notifOpen && (
                                <div className="absolute right-0 mt-3 w-80 rounded-xl bg-dark-800/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                        <h4 className="font-bold text-sm">Notifications</h4>
                                        <span className="text-xs text-brand-300">{notifications.length} new</span>
                                    </div>
                                    <div className="max-h-80 overflow-y-auto">
                                        {notifications.map((item) => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => goTo(item.href)}
                                                className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                            >
                                                <p className="text-sm font-medium">{item.title}</p>
                                                <p className="text-xs text-gray-400 mt-1">{item.body}</p>
                                                <p className="text-[10px] text-brand-300 mt-2">{item.time}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative" ref={profileRef}>
                            <button
                                type="button"
                                onClick={() => {
                                    setProfileOpen((open) => !open);
                                    setNotifOpen(false);
                                }}
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center overflow-hidden">
                                    <UserIcon className="w-5 h-5 text-brand-300" />
                                </div>
                            </button>
                            {profileOpen && (
                                <div className="absolute right-0 mt-3 w-52 rounded-xl bg-dark-800/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 overflow-hidden py-1">
                                    <button
                                        type="button"
                                        onClick={() => goTo('/profile')}
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5"
                                    >
                                        <UserIcon className="w-4 h-4 text-brand-300" /> View Profile
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => goTo('/settings')}
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5"
                                    >
                                        <Settings className="w-4 h-4 text-brand-300" /> Settings
                                    </button>
                                    <div className="my-1 border-t border-white/5" />
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10"
                                    >
                                        <LogOut className="w-4 h-4" /> Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                    <div className="absolute top-[0%] right-[0%] w-[50%] h-[50%] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="relative z-10 max-w-6xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
