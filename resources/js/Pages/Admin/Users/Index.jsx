import React, { useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Users,
    Search,
    Shield,
    Trash2,
    Edit3,
    Eye,
    X,
    AlertTriangle,
    Check,
    Flame,
    Trophy,
    BookOpen,
    Filter,
    ShieldAlert
} from 'lucide-react';

export default function UsersIndex({ users, filters, currentAdminId }) {
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [roleFilter, setRoleFilter] = useState(filters.role || 'all');

    // Modals state
    const [editingUser, setEditingUser] = useState(null);
    const [viewingUser, setViewingUser] = useState(null);
    const [deletingUser, setDeletingUser] = useState(null);

    // Edit User Form
    const { data, setData, put, processing, errors, reset } = useForm({
        name: '',
        email: '',
        role: 'user',
    });

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.get('/admin/users', {
            search: searchQuery,
            role: roleFilter,
        }, { preserveState: true, replace: true });
    };

    const handleRoleFilterChange = (newRole) => {
        setRoleFilter(newRole);
        router.get('/admin/users', {
            search: searchQuery,
            role: newRole,
        }, { preserveState: true, replace: true });
    };

    const openEditModal = (user) => {
        setEditingUser(user);
        setData({
            name: user.name,
            email: user.email,
            role: user.role,
        });
    };

    const closeEditModal = () => {
        setEditingUser(null);
        reset();
    };

    const submitEdit = (e) => {
        e.preventDefault();
        if (!editingUser) return;

        put(`/admin/users/${editingUser.id}`, {
            onSuccess: () => {
                closeEditModal();
            },
        });
    };

    const confirmDelete = () => {
        if (!deletingUser) return;

        router.delete(`/admin/users/${deletingUser.id}`, {
            onSuccess: () => {
                setDeletingUser(null);
            },
        });
    };

    return (
        <AdminLayout>
            <Head title="User Management - LinguaNova Admin" />

            {/* Page Title & Stats Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                        <Users className="w-7 h-7 text-purple-400" />
                        <span>User Management</span>
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        Control user accounts, manage RBAC administrative privileges, and inspect learner metrics.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xs px-3 py-1.5 rounded-xl bg-dark-800 border border-white/10 text-gray-300 font-medium">
                        Showing <strong className="text-white">{users.length}</strong> accounts
                    </span>
                </div>
            </div>

            {/* Search & Role Filter Header */}
            <div className="p-4 rounded-2xl bg-dark-800/70 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
                <form onSubmit={handleSearchSubmit} className="w-full md:max-w-md relative">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search users by name or email..."
                        className="w-full h-10 pl-10 pr-4 bg-dark-900/80 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                </form>

                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
                    <span className="text-xs text-gray-400 flex items-center gap-1 shrink-0">
                        <Filter className="w-3.5 h-3.5" /> Filter:
                    </span>
                    {['all', 'admin', 'user'].map((r) => (
                        <button
                            key={r}
                            type="button"
                            onClick={() => handleRoleFilterChange(r)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all shrink-0 ${
                                roleFilter === r
                                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-600/30'
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {r === 'all' ? 'All Roles' : `${r}s`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Users Table */}
            <div className="rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400 text-xs font-semibold bg-white/[0.02]">
                                <th className="py-3.5 px-6">User / Account</th>
                                <th className="py-3.5 px-4">Role</th>
                                <th className="py-3.5 px-4">Gamification</th>
                                <th className="py-3.5 px-4">Practice Stats</th>
                                <th className="py-3.5 px-4">Joined</th>
                                <th className="py-3.5 px-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-12 text-center text-gray-400">
                                        No users match the search criteria.
                                    </td>
                                </tr>
                            ) : (
                                users.map((u) => {
                                    const isSelf = u.id === currentAdminId;
                                    return (
                                        <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                                            {/* User info */}
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500/20 to-brand-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-sm shrink-0">
                                                        {u.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <p className="font-semibold text-white truncate">{u.name}</p>
                                                            {isSelf && (
                                                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-300 border border-purple-500/40 font-bold">
                                                                    YOU
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-gray-400 truncate">{u.email}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Role */}
                                            <td className="py-4 px-4">
                                                <span
                                                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                                                        u.role === 'admin'
                                                            ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm shadow-purple-500/10'
                                                            : 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                                                    }`}
                                                >
                                                    {u.role === 'admin' && <Shield className="w-3 h-3" />}
                                                    <span className="capitalize">{u.role}</span>
                                                </span>
                                            </td>

                                            {/* Gamification progress */}
                                            <td className="py-4 px-4">
                                                <div className="space-y-1 text-xs">
                                                    <div className="flex items-center gap-1.5 text-brand-300 font-medium">
                                                        <Trophy className="w-3.5 h-3.5 text-brand-400" />
                                                        <span>{u.progress?.xp?.toLocaleString() || 0} XP (Lvl {u.progress?.level || 1})</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-orange-400">
                                                        <Flame className="w-3.5 h-3.5" />
                                                        <span>{u.progress?.streak || 0} Day Streak</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Practice stats */}
                                            <td className="py-4 px-4">
                                                <div className="text-xs text-gray-300 flex items-center gap-1.5">
                                                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                                                    <span>{u.practice_sessions || 0} attempts</span>
                                                </div>
                                                <p className="text-[11px] text-gray-500 mt-0.5">
                                                    {u.completed_practices || 0} categories mastered
                                                </p>
                                            </td>

                                            {/* Registered Date */}
                                            <td className="py-4 px-4 text-xs text-gray-400">
                                                {u.created_at}
                                            </td>

                                            {/* Action buttons */}
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewingUser(u)}
                                                        title="View user details"
                                                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => openEditModal(u)}
                                                        title="Edit user and role"
                                                        className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 transition-colors"
                                                    >
                                                        <Edit3 className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setDeletingUser(u)}
                                                        disabled={isSelf}
                                                        title={isSelf ? "Cannot delete your own account" : "Delete user"}
                                                        className={`p-2 rounded-lg transition-colors ${
                                                            isSelf
                                                                ? 'opacity-30 cursor-not-allowed text-gray-500'
                                                                : 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20'
                                                        }`}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* EDIT USER & ROLE MODAL */}
            {editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                    <div className="w-full max-w-lg rounded-2xl bg-dark-800 border border-white/10 shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-purple-400" />
                                <h3 className="text-lg font-bold text-white">Edit User & Assign Role</h3>
                            </div>
                            <button
                                onClick={closeEditModal}
                                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={submitEdit} className="mt-4 space-y-4">
                            {editingUser.id === currentAdminId && (
                                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs flex items-start gap-2">
                                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-purple-400" />
                                    <span>
                                        You are editing your own administrator account. Admin role cannot be removed from yourself.
                                    </span>
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-dark-900/90 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                                    required
                                />
                                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-dark-900/90 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                                    required
                                />
                                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                                    Assigned System Role (RBAC)
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* User Role Card */}
                                    <button
                                        type="button"
                                        onClick={() => setData('role', 'user')}
                                        disabled={editingUser.id === currentAdminId}
                                        className={`p-3.5 rounded-xl border text-left transition-all ${
                                            data.role === 'user'
                                                ? 'bg-blue-600/20 border-blue-500/50 text-white'
                                                : 'bg-dark-900/50 border-white/5 text-gray-400 hover:border-white/20'
                                        } ${editingUser.id === currentAdminId ? 'opacity-40 cursor-not-allowed' : ''}`}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-semibold text-sm">User</span>
                                            {data.role === 'user' && <Check className="w-4 h-4 text-blue-400" />}
                                        </div>
                                        <p className="text-[11px] text-gray-400">Standard student learning access</p>
                                    </button>

                                    {/* Admin Role Card */}
                                    <button
                                        type="button"
                                        onClick={() => setData('role', 'admin')}
                                        className={`p-3.5 rounded-xl border text-left transition-all ${
                                            data.role === 'admin'
                                                ? 'bg-purple-600/20 border-purple-500/50 text-white shadow-sm shadow-purple-500/10'
                                                : 'bg-dark-900/50 border-white/5 text-gray-400 hover:border-white/20'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-semibold text-sm flex items-center gap-1.5">
                                                <Shield className="w-3.5 h-3.5 text-purple-400" />
                                                Admin
                                            </span>
                                            {data.role === 'admin' && <Check className="w-4 h-4 text-purple-400" />}
                                        </div>
                                        <p className="text-[11px] text-gray-400">Full administrative panel permissions</p>
                                    </button>
                                </div>
                                {errors.role && <p className="text-xs text-red-400 mt-1">{errors.role}</p>}
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                                <button
                                    type="button"
                                    onClick={closeEditModal}
                                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-sm transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/20 disabled:opacity-50"
                                >
                                    {processing ? 'Saving Changes...' : 'Save User & Role'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* VIEW USER DETAIL MODAL */}
            {viewingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                    <div className="w-full max-w-md rounded-2xl bg-dark-800 border border-white/10 shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <h3 className="text-lg font-bold text-white">Learner Account Profile</h3>
                            <button
                                onClick={() => setViewingUser(null)}
                                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-4 space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-base">
                                    {viewingUser.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{viewingUser.name}</h4>
                                    <p className="text-xs text-gray-400">{viewingUser.email}</p>
                                    <span className="inline-block mt-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                        {viewingUser.role}
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl bg-dark-900 border border-white/5">
                                    <p className="text-[11px] text-gray-400 uppercase">Experience (XP)</p>
                                    <p className="text-lg font-bold text-brand-300 mt-1">
                                        {viewingUser.progress?.xp?.toLocaleString() || 0}
                                    </p>
                                </div>
                                <div className="p-3 rounded-xl bg-dark-900 border border-white/5">
                                    <p className="text-[11px] text-gray-400 uppercase">Daily Streak</p>
                                    <p className="text-lg font-bold text-orange-400 mt-1">
                                        {viewingUser.progress?.streak || 0} Days
                                    </p>
                                </div>
                                <div className="p-3 rounded-xl bg-dark-900 border border-white/5">
                                    <p className="text-[11px] text-gray-400 uppercase">Practice Sessions</p>
                                    <p className="text-lg font-bold text-purple-300 mt-1">
                                        {viewingUser.practice_sessions || 0}
                                    </p>
                                </div>
                                <div className="p-3 rounded-xl bg-dark-900 border border-white/5">
                                    <p className="text-[11px] text-gray-400 uppercase">Mastered Categories</p>
                                    <p className="text-lg font-bold text-emerald-400 mt-1">
                                        {viewingUser.completed_practices || 0}
                                    </p>
                                </div>
                            </div>

                            <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                                Registered: <strong className="text-white">{viewingUser.created_at}</strong>
                            </div>

                            <div className="flex justify-end pt-2">
                                <button
                                    type="button"
                                    onClick={() => setViewingUser(null)}
                                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* DELETE CONFIRMATION MODAL */}
            {deletingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                    <div className="w-full max-w-md rounded-2xl bg-dark-800 border border-red-500/30 shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center gap-3 text-red-400 mb-3">
                            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20">
                                <AlertTriangle className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Delete User Account</h3>
                                <p className="text-xs text-red-300">This action is permanent and cannot be undone.</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                            Are you sure you want to delete <strong className="text-white">{deletingUser.name}</strong> (<span className="text-gray-400">{deletingUser.email}</span>)?
                            All associated study progress, streak counts, and practice attempts will be permanently removed.
                        </p>

                        <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-white/10">
                            <button
                                type="button"
                                onClick={() => setDeletingUser(null)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-sm transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={confirmDelete}
                                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-sm transition-all shadow-lg shadow-red-600/20 flex items-center gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
