import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    Users,
    Sliders,
    ArrowLeft,
    Shield,
    Menu,
    X,
    LogOut,
    CheckCircle2,
    AlertCircle,
    Bell,
    Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLayout({ children }) {
    const { auth, flash, errors } = usePage().props;
    const currentUrl = usePage().url;
    const user = auth?.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const adminNavItems = [
        { name: 'Overview', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'User Management', href: '/admin/users', icon: Users },
        { name: 'Site Settings', href: '/admin/settings', icon: Sliders },
    ];

    const isCurrent = (href) => {
        const path = currentUrl.split('?')[0];
        if (href === '/admin/dashboard') {
            return path === '/admin/dashboard';
        }
        return path === href || path.startsWith(`${href}/`);
    };

    return (
        <div className="min-h-screen bg-dark-900 text-white flex flex-col md:flex-row font-sans selection:bg-brand-500 selection:text-white">
            {/* Ambient Background Lights */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[130px]" />
            </div>

            {/* Mobile Top Navigation */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-dark-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-brand-400 flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-lg text-white">LinguaNova</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        Admin
                    </span>
                </div>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                    {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-72 bg-dark-800/80 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex md:flex-col",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo / Admin Header */}
                <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
                    <Link href="/admin/dashboard" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-brand-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.35)] group-hover:scale-105 transition-transform">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-lg tracking-tight block text-glow">LinguaNova</span>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400">
                                Admin Console
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Admin User Info Card */}
                <div className="p-5 border-b border-white/5">
                    <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-sm">
                                {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                            </div>
                            <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-sm truncate text-white">{user?.name}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs text-purple-300 capitalize font-medium">{user?.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Admin Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Navigation
                    </div>
                    {adminNavItems.map((item) => {
                        const active = isCurrent(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
                                    active
                                        ? "bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/10"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", active ? "text-purple-400" : "text-gray-400")} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}

                    <div className="pt-6 mt-6 border-t border-white/5">
                        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                            Quick Switch
                        </div>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-brand-300 hover:bg-brand-500/10 hover:text-white transition-colors text-sm font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Return to Student App</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium"
                        >
                            <Globe className="w-5 h-5" />
                            <span>Visit Public Site</span>
                        </Link>
                    </div>
                </div>

                {/* Footer Logout */}
                <div className="p-4 border-t border-white/5">
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative z-10">
                {/* Header */}
                <header className="hidden md:flex h-20 items-center justify-between px-8 border-b border-white/5 bg-dark-900/60 backdrop-blur-md shrink-0">
                    <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5" />
                            RBAC Security Enforced
                        </span>
                        <span className="text-xs text-gray-400">Role: <strong className="text-white">Administrator</strong></span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/dashboard"
                            className="text-xs px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-2 border border-white/10"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Student Dashboard</span>
                        </Link>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-white leading-tight">{user?.name}</p>
                                <p className="text-xs text-purple-400">{user?.email}</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-300 font-bold text-sm">
                                {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Flash Messages */}
                <div className="px-4 md:px-8 pt-4">
                    {flash?.success && (
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 mb-4 animate-in fade-in duration-200">
                            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                            <p className="text-sm font-medium">{flash.success}</p>
                        </div>
                    )}
                    {(flash?.error || errors?.role || errors?.user) && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-center gap-3 mb-4 animate-in fade-in duration-200">
                            <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                            <p className="text-sm font-medium">{flash?.error || errors?.role || errors?.user}</p>
                        </div>
                    )}
                </div>

                {/* Page Content Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-2">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
