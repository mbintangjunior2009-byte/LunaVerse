import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Input } from '@/Components/ui/Input';
import { Label } from '@/Components/ui/Label';
import { Button } from '@/Components/ui/Button';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-400">
                    {status}
                </div>
            )}

            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
                <p className="text-sm text-gray-400">Continue your learning journey</p>
            </div>

            <form onSubmit={submit} className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1"
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <p className="text-sm text-red-400 mt-1">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded border-gray-700 bg-gray-900 text-brand-500 shadow-sm focus:ring-brand-500"
                        />
                        <span className="ms-2 text-sm text-gray-400">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-brand-300 hover:text-brand-500 hover:underline"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                    <Button variant="primary" disabled={processing} className="w-full">
                        Log in
                    </Button>
                    <Link href={route('register')} className="w-full">
                        <Button variant="glass" className="w-full" type="button">
                            Create an account
                        </Button>
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
