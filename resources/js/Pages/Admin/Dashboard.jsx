import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Users,
    BookOpen,
    Flame,
    Trophy,
    Shield,
    Sliders,
    ArrowUpRight,
    Sparkles,
    UserCheck,
    Clock,
    Server,
    CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard({ metrics, recentUsers, systemInfo }) {
    const metricCards = [
        {
            label: 'Total Users',
            value: metrics.totalUsers,
            subtitle: `${metrics.learnerCount} learners, ${metrics.adminCount} admins`,
            icon: Users,
            color: 'from-blue-600/20 to-blue-400/10',
            borderColor: 'border-blue-500/30',
            iconColor: 'text-blue-400',
            href: '/admin/users',
        },
        {
            label: 'Practice Sessions',
            value: metrics.totalPracticeSessions.toLocaleString(),
            subtitle: 'Cumulative study sessions',
            icon: BookOpen,
            color: 'from-purple-600/20 to-purple-400/10',
            borderColor: 'border-purple-500/30',
            iconColor: 'text-purple-400',
            href: '/admin/users',
        },
        {
            label: 'Active Streaks',
            value: metrics.activeStreaks,
            subtitle: 'Users maintaining daily learning',
            icon: Flame,
            color: 'from-orange-600/20 to-orange-400/10',
            borderColor: 'border-orange-500/30',
            iconColor: 'text-orange-400',
            href: '/admin/users',
        },
        {
            label: 'Total XP Earned',
            value: metrics.totalXP.toLocaleString(),
            subtitle: 'Platform-wide experience points',
            icon: Trophy,
            color: 'from-emerald-600/20 to-emerald-400/10',
            borderColor: 'border-emerald-500/30',
            iconColor: 'text-emerald-400',
            href: '/admin/users',
        },
    ];

    const quickActions = [
        {
            title: 'Manage Users',
            desc: 'Inspect accounts, update credentials, change roles, or delete users.',
            href: '/admin/users',
            icon: Users,
            badge: `${metrics.totalUsers} registered`,
            color: 'hover:border-purple-500/50',
        },
        {
            title: 'Site Settings & Features',
            desc: 'Configure site metadata, toggle AI tutoring, and curriculum languages.',
            href: '/admin/settings',
            icon: Sliders,
            badge: 'Dynamic Config',
            color: 'hover:border-brand-500/50',
        },
        {
            title: 'Switch to Student View',
            desc: 'Preview student experience, language courses, and practice drills.',
            href: '/dashboard',
            icon: Sparkles,
            badge: 'Student Portal',
            color: 'hover:border-emerald-500/50',
        },
    ];

    return (
        <AdminLayout>
            <Head title="Admin Dashboard - LinguaNova" />

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                        <span>Admin Control Center</span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            Live Metrics
                        </span>
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        System telemetry, user activity stats, and platform administrative control.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/users"
                        className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2"
                    >
                        <Users className="w-4 h-4" />
                        <span>View All Users</span>
                    </Link>
                </div>
            </div>

            {/* Metrics Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metricCards.map((card, idx) => (
                    <motion.div
                        key={card.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} border ${card.borderColor} backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-transform`}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                {card.label}
                            </span>
                            <div className={`p-2.5 rounded-xl bg-white/5 ${card.iconColor}`}>
                                <card.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-white tracking-tight">{card.value}</div>
                        <p className="text-xs text-gray-400 mt-1">{card.subtitle}</p>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions Grid */}
            <div>
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-purple-400" />
                    <span>Quick Administration Actions</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickActions.map((action) => (
                        <Link
                            key={action.title}
                            href={action.href}
                            className={`p-5 rounded-2xl bg-dark-800/60 border border-white/10 ${action.color} transition-all group flex flex-col justify-between hover:bg-dark-800`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                        <action.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10">
                                        {action.badge}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                                    <span>{action.title}</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                                </h3>
                                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{action.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Grid: Recent Users & System Telemetry */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Users Table Card */}
                <div className="lg:col-span-2 p-6 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-purple-400" />
                                <span>Recent User Signups</span>
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">Most recent accounts registered on the platform</p>
                        </div>
                        <Link
                            href="/admin/users"
                            className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1"
                        >
                            <span>Manage All</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-white/10 text-gray-400 text-xs font-semibold">
                                    <th className="pb-3">User</th>
                                    <th className="pb-3">Role</th>
                                    <th className="pb-3">Streak</th>
                                    <th className="pb-3">Total XP</th>
                                    <th className="pb-3">Registered</th>
                                    <th className="pb-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3 pr-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-medium text-white truncate max-w-[140px]">{user.name}</p>
                                                    <p className="text-xs text-gray-400 truncate max-w-[140px]">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <span
                                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${
                                                    user.role === 'admin'
                                                        ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                                                        : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                                                }`}
                                            >
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="py-3 text-xs text-orange-400 font-medium">
                                            {user.streak > 0 ? `🔥 ${user.streak}d` : '-'}
                                        </td>
                                        <td className="py-3 text-xs text-brand-300 font-medium">
                                            {user.xp.toLocaleString()} XP
                                        </td>
                                        <td className="py-3 text-xs text-gray-400">
                                            {user.created_at}
                                        </td>
                                        <td className="py-3 text-right">
                                            <Link
                                                href={`/admin/users?search=${encodeURIComponent(user.email)}`}
                                                className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                                            >
                                                Edit Role
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* System Telemetry & RBAC Security Summary */}
                <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-xl">
                        <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Server className="w-5 h-5 text-purple-400" />
                            <span>System Status</span>
                        </h3>
                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-gray-400">Framework</span>
                                <span className="font-semibold text-white">Laravel {systemInfo.laravel_version}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-gray-400">PHP Version</span>
                                <span className="font-semibold text-white">{systemInfo.php_version}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-gray-400">Database Driver</span>
                                <span className="font-semibold uppercase text-purple-400">{systemInfo.db_driver}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-gray-400">Environment</span>
                                <span className="font-semibold capitalize text-emerald-400">{systemInfo.environment}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="text-gray-400">RBAC Guard</span>
                                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                                    <CheckCircle className="w-3.5 h-3.5" /> Active
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-brand-900/30 border border-purple-500/20 backdrop-blur-xl">
                        <div className="flex items-center gap-2 text-purple-300 mb-2">
                            <Shield className="w-4 h-4" />
                            <h4 className="font-bold text-sm">Role-Based Access Control</h4>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                            Admin middleware enforces server-side validation on every <code className="text-purple-300">/admin/*</code> route. Non-admin users attempting direct access will receive an instant <code className="text-red-300">403 Forbidden</code> response.
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
