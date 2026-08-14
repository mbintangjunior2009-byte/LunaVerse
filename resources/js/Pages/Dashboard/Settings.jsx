import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Input } from '@/Components/ui/Input';
import { Label } from '@/Components/ui/Label';
import { Settings as SettingsIcon, Bell, Shield, Palette, Globe } from 'lucide-react';

export default function Settings({ auth }) {
    const { data, setData, put, processing, errors } = useForm({
        name: auth.user.name,
        email: auth.user.email,
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset('current_password', 'password', 'password_confirmation'),
        });
    };

    return (
        <DashboardLayout>
            <Head title="Settings" />

            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Settings</span>
            </nav>
            
            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <SettingsIcon className="w-8 h-8 text-brand-300" /> Settings
                </h1>
                <p className="text-gray-400 mt-2">Manage your account preferences and application settings.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {/* Settings Nav */}
                <div className="md:col-span-1 space-y-2">
                    <button className="w-full text-left px-4 py-2 rounded-lg bg-brand-500/20 text-brand-300 border border-brand-500/30 font-medium">
                        Account
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                        Appearance
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                        Notifications
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                        Privacy
                    </button>
                </div>

                {/* Settings Content */}
                <div className="md:col-span-3 space-y-8">
                    {/* Profile Information */}
                    <Card>
                        <h3 className="font-bold text-lg mb-4">Profile Information</h3>
                        <p className="text-sm text-gray-400 mb-6">Update your account's profile information and email address.</p>
                        
                        <form className="space-y-4 max-w-xl">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                            </div>
                            <div className="pt-2">
                                <Button variant="primary">Save Changes</Button>
                            </div>
                        </form>
                    </Card>

                    {/* Update Password */}
                    <Card>
                        <h3 className="font-bold text-lg mb-4">Update Password</h3>
                        <p className="text-sm text-gray-400 mb-6">Ensure your account is using a long, random password to stay secure.</p>
                        
                        <form onSubmit={updatePassword} className="space-y-4 max-w-xl">
                            <div className="space-y-1">
                                <Label htmlFor="current_password">Current Password</Label>
                                <Input 
                                    id="current_password" type="password" 
                                    value={data.current_password} 
                                    onChange={e => setData('current_password', e.target.value)} 
                                />
                                {errors.current_password && <p className="text-sm text-red-400">{errors.current_password}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">New Password</Label>
                                <Input 
                                    id="password" type="password" 
                                    value={data.password} 
                                    onChange={e => setData('password', e.target.value)} 
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password_confirmation">Confirm Password</Label>
                                <Input 
                                    id="password_confirmation" type="password" 
                                    value={data.password_confirmation} 
                                    onChange={e => setData('password_confirmation', e.target.value)} 
                                />
                            </div>
                            <div className="pt-2">
                                <Button variant="primary" disabled={processing}>Save Password</Button>
                            </div>
                        </form>
                    </Card>

                    {/* Appearance Preview (Mock) */}
                    <Card>
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Palette className="w-5 h-5" /> Appearance</h3>
                        <div className="grid grid-cols-2 gap-4 max-w-sm">
                            <div className="p-4 rounded-xl border-2 border-brand-500 bg-dark-900 cursor-pointer">
                                <div className="h-4 bg-dark-800 rounded mb-2"></div>
                                <div className="h-20 bg-dark-800 rounded"></div>
                                <p className="text-center mt-2 font-bold text-sm text-brand-300">Dark (Active)</p>
                            </div>
                            <div className="p-4 rounded-xl border border-gray-600 bg-gray-100 cursor-pointer opacity-50">
                                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                <div className="h-20 bg-gray-300 rounded"></div>
                                <p className="text-center mt-2 font-bold text-sm text-gray-500">System Default</p>
                            </div>
                        </div>
                    </Card>

                    {/* Danger Zone */}
                    <Card className="border-red-500/30">
                        <h3 className="font-bold text-lg mb-2 text-red-400">Delete Account</h3>
                        <p className="text-sm text-gray-400 mb-6">Once your account is deleted, all of its resources and data will be permanently deleted.</p>
                        <Button className="bg-red-500 hover:bg-red-600 text-white border-transparent">Delete Account</Button>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
