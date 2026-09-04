import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import { Input, Label, Button } from '../components';
import api from '../api/axios';

export default function Login({ status, canResetPassword = true }) {
    const [data, setData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            const response = await api.post('/login', {
                email: data.email,
                password: data.password,
                remember: data.remember,
            });
            
            // On success, navigate to dashboard
            navigate('/dashboard');
            
            // Reset password field
            setData(prev => ({ ...prev, password: '' }));
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ email: 'An error occurred. Please try again.' });
            }
        } finally {
            setProcessing(false);
        }
    };

    const handleChange = (field, value) => {
        setData(prev => ({ ...prev, [field]: value }));
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <GuestLayout>
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
                        onChange={(e) => handleChange('email', e.target.value)}
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
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                    {errors.password && <p className="text-sm text-red-400 mt-1">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => handleChange('remember', e.target.checked)}
                            className="rounded border-gray-700 bg-gray-900 text-brand-500 shadow-sm focus:ring-brand-500"
                        />
                        <span className="ms-2 text-sm text-gray-400">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            to="/forgot-password"
                            className="text-sm text-brand-300 hover:text-brand-500 hover:underline"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                    <Button variant="primary" disabled={processing} className="w-full">
                        {processing ? 'Logging in...' : 'Log in'}
                    </Button>
                    <Link to="/register" className="w-full">
                        <Button variant="glass" className="w-full" type="button">
                            Create an account
                        </Button>
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}

