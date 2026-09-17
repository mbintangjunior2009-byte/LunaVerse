import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Sliders,
    Globe,
    Bot,
    MessageSquare,
    Trophy,
    Flame,
    Save,
    CheckCircle2,
    Shield,
    AlertOctagon,
    Languages
} from 'lucide-react';

export default function SettingsIndex({ settings }) {
    const { data, setData, post, processing, recentlySuccessful, errors } = useForm({
        site_name: settings.site_name || 'LinguaNova',
        site_tagline: settings.site_tagline || '',
        contact_email: settings.contact_email || 'admin@linguanova.com',
        allow_registration: Boolean(settings.allow_registration),
        require_email_verification: Boolean(settings.require_email_verification),
        ai_tutor_enabled: Boolean(settings.ai_tutor_enabled),
        community_forum_enabled: Boolean(settings.community_forum_enabled),
        leaderboard_enabled: Boolean(settings.leaderboard_enabled),
        daily_streak_reminders: Boolean(settings.daily_streak_reminders),
        default_user_role: settings.default_user_role || 'user',
        maintenance_mode: Boolean(settings.maintenance_mode),
        supported_languages: settings.supported_languages || [],
    });

    const toggleLanguage = (index) => {
        const updated = [...data.supported_languages];
        updated[index] = {
            ...updated[index],
            enabled: !updated[index].enabled,
        };
        setData('supported_languages', updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/settings');
    };

    return (
        <AdminLayout>
            <Head title="Site Settings & Features - LinguaNova Admin" />

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                        <Sliders className="w-7 h-7 text-purple-400" />
                        <span>Site Settings & Feature Toggles</span>
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        Configure global application attributes, curriculum availability, and feature flags.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {recentlySuccessful && (
                        <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 animate-in fade-in">
                            <CheckCircle2 className="w-4 h-4" /> Changes Applied
                        </span>
                    )}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={processing}
                        className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2 disabled:opacity-50"
                    >
                        <Save className="w-4 h-4" />
                        <span>{processing ? 'Saving...' : 'Save Configuration'}</span>
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. General Site Metadata */}
                <div className="p-6 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-xl">
                    <h2 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-purple-400" />
                        <span>General Platform Identity</span>
                    </h2>
                    <p className="text-xs text-gray-400 mb-5">
                        Brand identity displayed across navigation, meta headers, and communication.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                                Site / Application Name
                            </label>
                            <input
                                type="text"
                                value={data.site_name}
                                onChange={(e) => setData('site_name', e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-dark-900/90 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                                required
                            />
                            {errors.site_name && <p className="text-xs text-red-400 mt-1">{errors.site_name}</p>}
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                                Administrative Contact Email
                            </label>
                            <input
                                type="email"
                                value={data.contact_email}
                                onChange={(e) => setData('contact_email', e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-dark-900/90 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                                required
                            />
                            {errors.contact_email && <p className="text-xs text-red-400 mt-1">{errors.contact_email}</p>}
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                                Platform Tagline
                            </label>
                            <input
                                type="text"
                                value={data.site_tagline}
                                onChange={(e) => setData('site_tagline', e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-dark-900/90 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                            />
                            {errors.site_tagline && <p className="text-xs text-red-400 mt-1">{errors.site_tagline}</p>}
                        </div>
                    </div>
                </div>

                {/* 2. Feature Toggles */}
                <div className="p-6 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-xl">
                    <h2 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-purple-400" />
                        <span>Platform Feature Toggles</span>
                    </h2>
                    <p className="text-xs text-gray-400 mb-5">
                        Instantly enable or disable key modules across the application for learners.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Allow Registration */}
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-semibold text-white">Public User Registration</h4>
                                <p className="text-xs text-gray-400 mt-0.5">Permit new visitors to create accounts</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('allow_registration', !data.allow_registration)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${
                                    data.allow_registration ? 'bg-purple-600' : 'bg-white/10'
                                }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        data.allow_registration ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>

                        {/* AI Tutor */}
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Bot className="w-5 h-5 text-purple-400" />
                                <div>
                                    <h4 className="text-sm font-semibold text-white">AI Language Assistant</h4>
                                    <p className="text-xs text-gray-400 mt-0.5">Enable interactive AI drills & tutoring</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('ai_tutor_enabled', !data.ai_tutor_enabled)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${
                                    data.ai_tutor_enabled ? 'bg-purple-600' : 'bg-white/10'
                                }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        data.ai_tutor_enabled ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>

                        {/* Community Forum */}
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-5 h-5 text-brand-400" />
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Community Forum</h4>
                                    <p className="text-xs text-gray-400 mt-0.5">Allow discussions & learner threads</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('community_forum_enabled', !data.community_forum_enabled)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${
                                    data.community_forum_enabled ? 'bg-purple-600' : 'bg-white/10'
                                }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        data.community_forum_enabled ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>

                        {/* Leaderboard */}
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Trophy className="w-5 h-5 text-yellow-400" />
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Gamification & XP Leaderboard</h4>
                                    <p className="text-xs text-gray-400 mt-0.5">Show public rankings and badges</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('leaderboard_enabled', !data.leaderboard_enabled)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${
                                    data.leaderboard_enabled ? 'bg-purple-600' : 'bg-white/10'
                                }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        data.leaderboard_enabled ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>

                        {/* Streak Reminders */}
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Flame className="w-5 h-5 text-orange-400" />
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Daily Streak Reminders</h4>
                                    <p className="text-xs text-gray-400 mt-0.5">Nudge users before their streak expires</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('daily_streak_reminders', !data.daily_streak_reminders)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${
                                    data.daily_streak_reminders ? 'bg-purple-600' : 'bg-white/10'
                                }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        data.daily_streak_reminders ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>

                        {/* Maintenance Mode */}
                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <AlertOctagon className="w-5 h-5 text-red-400" />
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Maintenance Mode</h4>
                                    <p className="text-xs text-gray-400 mt-0.5">Display maintenance banner to learners</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('maintenance_mode', !data.maintenance_mode)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${
                                    data.maintenance_mode ? 'bg-red-600' : 'bg-white/10'
                                }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        data.maintenance_mode ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3. Curriculum & Language Toggles */}
                <div className="p-6 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-xl">
                    <h2 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                        <Languages className="w-5 h-5 text-purple-400" />
                        <span>Curriculum & Active Languages</span>
                    </h2>
                    <p className="text-xs text-gray-400 mb-5">
                        Manage which language learning tracks are visible and interactive for students.
                    </p>

                    <div className="space-y-3">
                        {data.supported_languages.map((lang, index) => (
                            <div
                                key={lang.id}
                                className="p-4 rounded-xl bg-dark-900/70 border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs text-white uppercase">
                                        {lang.id.slice(0, 2)}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-white">{lang.name}</h4>
                                        <span className="text-xs text-gray-400">{lang.levels}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span
                                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                                            lang.enabled
                                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                                : 'bg-white/5 text-gray-500'
                                        }`}
                                    >
                                        {lang.enabled ? 'Active Course' : 'Disabled'}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => toggleLanguage(index)}
                                        className={`w-11 h-6 rounded-full transition-colors relative ${
                                            lang.enabled ? 'bg-purple-600' : 'bg-white/10'
                                        }`}
                                    >
                                        <span
                                            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                                lang.enabled ? 'translate-x-5' : 'translate-x-0'
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Security & Default RBAC */}
                <div className="p-6 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-xl">
                    <h2 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-400" />
                        <span>Security & Access Control Defaults</span>
                    </h2>
                    <p className="text-xs text-gray-400 mb-5">
                        Define default security policies and initial RBAC role assignment for new users.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                                Default Role for New Signups
                            </label>
                            <select
                                value={data.default_user_role}
                                onChange={(e) => setData('default_user_role', e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-dark-900/90 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                            >
                                <option value="user">User (Standard Student)</option>
                                <option value="admin">Admin (Administrator)</option>
                            </select>
                            <p className="text-[11px] text-gray-500 mt-1">
                                Caution: Setting default to Admin will grant full access to any new registered user.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-semibold text-white">Require Email Verification</h4>
                                <p className="text-xs text-gray-400 mt-0.5">Mandate verified email before dashboard access</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('require_email_verification', !data.require_email_verification)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${
                                    data.require_email_verification ? 'bg-purple-600' : 'bg-white/10'
                                }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        data.require_email_verification ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    {recentlySuccessful && (
                        <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" /> All settings persisted successfully.
                        </span>
                    )}
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2 disabled:opacity-50"
                    >
                        <Save className="w-4 h-4" />
                        <span>{processing ? 'Saving...' : 'Save All Changes'}</span>
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
