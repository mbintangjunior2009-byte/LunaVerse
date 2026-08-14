import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Input } from '@/Components/ui/Input';
import { Label } from '@/Components/ui/Label';
import { Button } from '@/Components/ui/Button';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
                <p className="text-sm text-gray-400">Join the LinguaNova community</p>
            </div>

            <form onSubmit={submit} className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1"
                        autoComplete="name"
                        autoFocus
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
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
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    {errors.password && <p className="text-sm text-red-400 mt-1">{errors.password}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="password_confirmation">Confirm Password</Label>
                    <Input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    {errors.password_confirmation && <p className="text-sm text-red-400 mt-1">{errors.password_confirmation}</p>}
                </div>

                <div className="mt-6 flex flex-col gap-3 pt-2">
                    <Button variant="primary" disabled={processing} className="w-full">
                        Register
                    </Button>
                    
                    <div className="text-center mt-2">
                        <Link
                            href={route('login')}
                            className="text-sm text-gray-400 hover:text-white underline rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                        >
                            Already registered?
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
