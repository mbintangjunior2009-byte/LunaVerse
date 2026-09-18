import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import {
    LayoutDashboard, Languages, BookOpen,
    Brain, Trophy, Target, Calendar, Sparkles, LogOut,
    Search, Bell, User as UserIcon, Settings, Menu, X, Coins, Flame, ChevronRight,
    Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/Components/ui/Button';
import LanguageSwitcher from '@/Components/LanguageSwitcher';

// Nav item keys map to translation keys in nav.* namespace
const NAV_ITEMS = [
    { key: 'dashboard',    href: '/dashboard',    icon: LayoutDashboard },
    { key: 'languages',    href: '/languages',    icon: Languages },
    { key: 'practice',     href: '/practice',     icon: BookOpen },
    { key: 'vocabulary',   href: '/vocabulary',   icon: Brain },
    { key: 'achievements', href: '/achievements', icon: Trophy },
    { key: 'progress',     href: '/progress',     icon: Target },
    { key: 'calendar',     href: '/calendar',     icon: Calendar },
];

const SEARCH_CATALOG_BASE = [
    ...NAV_ITEMS.map((item) => ({ labelKey: item.key, href: item.href, type: 'Page' })),
    { labelKey: 'settings', href: '/settings', type: 'Page' },
    { labelKey: 'profile',  href: '/profile',  type: 'Page' },
    { label: 'Japanese', href: '/languages/japanese', type: 'Language' },
    { label: 'Chinese',  href: '/languages/chinese',  type: 'Language' },
    { label: 'Korean',   href: '/languages/korean',   type: 'Language' },
    { label: 'English',  href: '/languages/english',  type: 'Language' },
    { label: 'Spanish',  href: '/languages/spanish',  type: 'Language' },
];

function isActivePath(currentUrl, href) {
    const path = currentUrl.split('?')[0];
    const hrefPath = href.split('?')[0];
    if (hrefPath === '/dashboard') return path === hrefPath;
    if (hrefPath === '/languages')  return path === hrefPath || path.startsWith('/languages/');
    return path === hrefPath || path.startsWith(`${hrefPath}/`);
}

export default function DashboardLayout({ children }) {
    const { auth } = usePage().props;
    const currentUrl = usePage().url;
    const user = auth.user;
    const { t } = useTranslation();

    const [sidebarOpen, setSidebarOpen]   = useState(false);
    const [searchQuery, setSearchQuery]   = useState('');
    const [searchOpen, setSearchOpen]     = useState(false);
    const [notifOpen, setNotifOpen]       = useState(false);
    const [profileOpen, setProfileOpen]   = useState(false);
    const searchRef  = useRef(null);
    const notifRef   = useRef(null);
    const profileRef = useRef(null);

    // Build translated notifications each render so they respond to locale changes
    const notifications = [
        { id: 1, title: t('notifications.streakReminder'),    body: t('notifications.streakBody'),   href: '/calendar',    time: '2m ago' },
        { id: 2, title: t('notifications.vocabSet'),           body: t('notifications.vocabBody'),    href: '/vocabulary',  time: '1h ago' },
        { id: 3, title: t('notifications.practiceSuggestion'), body: t('notifications.practiceBody'), href: '/practice',    time: t('common.yesterday') },
    ];

    // Build translated search catalog
    const searchCatalog = useMemo(() => {
        const base = SEARCH_CATALOG_BASE.map((item) =>
            item.labelKey
                ? { ...item, label: t(`nav.${item.labelKey}`) }
                : item
        );
        const adminEntries = user?.role === 'admin' ? [
            { label: 'Admin Dashboard', href: '/admin/dashboard', type: 'Admin' },
            { label: 'User Management', href: '/admin/users',     type: 'Admin' },
            { label: 'Site Settings',   href: '/admin/settings',  type: 'Admin' },
        ] : [];
        return [...base, ...adminEntries];
    }, [t, user?.role]);

    const searchResults = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return searchCatalog.slice(0, 6);
        return searchCatalog
            .filter((item) =>
                item.label.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
            )
            .slice(0, 8);
    }, [searchQuery, searchCatalog]);

    useEffect(() => {
        const onPointerDown = (e) => {
            if (searchRef.current  && !searchRef.current.contains(e.target))  setSearchOpen(false);
            if (notifRef.current   && !notifRef.current.contains(e.target))   setNotifOpen(false);
            if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
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

    const submitSearch = (e) => {
        e.preventDefault();
        if (searchResults[0]) goTo(searchResults[0].href);
    };

    return (
        <div className="min-h-screen bg-dark-900 text-white flex flex-col md:flex-row font-sans">

            {/* ── Mobile top bar ── */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-dark-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-700 to-brand-300 flex items-center justify-center">
                        <span className="font-bold text-white">L</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <LanguageSwitcher variant="dark" />
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
                        {sidebarOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-72 bg-dark-800/50 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex md:flex-col",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Logo */}
                <div className="h-20 flex items-center px-6 border-b border-white/5 hidden md:flex">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-700 to-brand-300 flex items-center justify-center">
                            <span className="font-bold text-white">L</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-glow">LinguaNova</span>
                    </Link>
                </div>

                {/* User card */}
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
                            <Flame className="w-4 h-4" /> 14 {t('sidebar.streak')}
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                            <Coins className="w-4 h-4" /> 320
                        </div>
                    </div>
                </div>

                {/* Nav links */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    {user?.role === 'admin' && (
                        <Link
                            href="/admin/dashboard"
                            onClick={() => setSidebarOpen(false)}
                            className={cn(
                                "flex items-center justify-between px-4 py-3 rounded-xl transition-all text-sm font-semibold mb-3 border",
                                isActivePath(currentUrl, '/admin')
                                    ? "bg-purple-600/30 text-purple-200 border-purple-500/60 shadow-lg shadow-purple-500/20"
                                    : "bg-purple-950/40 text-purple-300 border-purple-500/30 hover:bg-purple-900/50 hover:text-white"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-purple-400" />
                                <span>{t('nav.adminPanel')}</span>
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/40">
                                Admin
                            </span>
                        </Link>
                    )}

                    {NAV_ITEMS.map((item) => {
                        const active = isActivePath(currentUrl, item.href);
                        return (
                            <Link
                                key={item.key}
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
                                {t(`nav.${item.key}`)}
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
                            <Settings className="w-5 h-5" /> {t('nav.settings')}
                        </Link>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium"
                        >
                            <LogOut className="w-5 h-5" /> {t('nav.logout')}
                        </Link>
                    </div>
                </div>

                {/* Premium CTA */}
                <div className="p-4 m-4 rounded-xl bg-gradient-to-br from-brand-700/40 to-brand-900/40 border border-brand-500/30 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-brand-300" />
                            <h4 className="font-bold text-sm">{t('sidebar.goPremium')}</h4>
                        </div>
                        <p className="text-xs text-gray-300 mb-3">{t('sidebar.premiumDesc')}</p>
                        <Link href="/pricing">
                            <Button variant="primary" size="sm" className="w-full text-xs h-8">
                                {t('buttons.upgrade')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* ── Main ── */}
            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

                {/* Desktop header */}
                <header className="hidden md:flex h-20 items-center justify-between px-8 border-b border-white/5 bg-dark-900/50 backdrop-blur-sm shrink-0">

                    {/* Search */}
                    <div className="flex-1 max-w-md relative" ref={searchRef}>
                        <form onSubmit={submitSearch}>
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true); }}
                                onFocus={() => setSearchOpen(true)}
                                placeholder={t('search.placeholder')}
                                className="w-full h-10 bg-white/5 border border-white/10 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                            />
                        </form>
                        {searchOpen && (
                            <div className="absolute top-12 left-0 right-0 z-50 rounded-xl bg-dark-800/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                                {searchResults.length === 0 ? (
                                    <p className="px-4 py-3 text-sm text-gray-400">
                                        {t('search.noResults')} "{searchQuery}".
                                    </p>
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

                    {/* Right controls */}
                    <div className="flex items-center gap-3">

                        {/* Language switcher */}
                        <LanguageSwitcher variant="dark" />

                        {/* Notifications */}
                        <div className="relative" ref={notifRef}>
                            <button
                                type="button"
                                onClick={() => { setNotifOpen((o) => !o); setProfileOpen(false); }}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors relative"
                            >
                                <Bell className="w-5 h-5 text-gray-300" />
                                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-500" />
                            </button>
                            {notifOpen && (
                                <div className="absolute right-0 mt-3 w-80 rounded-xl bg-dark-800/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                        <h4 className="font-bold text-sm">{t('notifications.title')}</h4>
                                        <span className="text-xs text-brand-300">
                                            {notifications.length} {t('notifications.new')}
                                        </span>
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

                        {/* Profile dropdown */}
                        <div className="relative" ref={profileRef}>
                            <button
                                type="button"
                                onClick={() => { setProfileOpen((o) => !o); setNotifOpen(false); }}
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center overflow-hidden">
                                    <UserIcon className="w-5 h-5 text-brand-300" />
                                </div>
                            </button>
                            {profileOpen && (
                                <div className="absolute right-0 mt-3 w-52 rounded-xl bg-dark-800/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 overflow-hidden py-1">
                                    {user?.role === 'admin' && (
                                        <button
                                            type="button"
                                            onClick={() => goTo('/admin/dashboard')}
                                            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-purple-300 hover:bg-purple-500/15 font-semibold border-b border-white/5"
                                        >
                                            <Shield className="w-4 h-4 text-purple-400" />
                                            {t('nav.adminPanel')}
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => goTo('/profile')}
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5"
                                    >
                                        <UserIcon className="w-4 h-4 text-brand-300" /> {t('nav.profile')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => goTo('/settings')}
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5"
                                    >
                                        <Settings className="w-4 h-4 text-brand-300" /> {t('nav.settings')}
                                    </button>
                                    <div className="my-1 border-t border-white/5" />
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10"
                                    >
                                        <LogOut className="w-4 h-4" /> {t('nav.logout')}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page content */}
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
