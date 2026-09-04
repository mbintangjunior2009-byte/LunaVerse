import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import { Input, Label, Button } from '../components';
import api from '../api/axios';

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            await api.get('/sanctum/csrf-cookie');
            await api.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            });

            navigate('/dashboard');

            setData((prev) => ({
                ...prev,
                password: '',
                password_confirmation: '',
            }));
        } catch (err) {
            console.error('Register Error Details:', err.response?.data || err);
            if (err.response?.data?.errors) {
                setErrors(err.response.data.errors);
                const firstError = Object.values(err.response.data.errors)[0];
                const errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;
                alert(`Registration Error: ${errorMessage}`);
            } else if (err.response?.data?.message) {
                alert(`Registration Error: ${err.response.data.message}`);
            } else {
                alert('An unexpected error occurred during registration. Check console for details.');
            }
        } finally {
            setProcessing(false);
        }
    };

    const handleChange = (field, value) => {
        setData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const fieldError = (field) => {
        const error = errors[field];
        if (!error) return null;
        return Array.isArray(error) ? error[0] : error;
    };

    return (
        <GuestLayout>
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
                <p className="text-sm text-gray-400">Join the LinguaNova community</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1"
                        autoComplete="name"
                        autoFocus
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                    />
                    {fieldError('name') && (
                        <p className="text-sm text-red-400 mt-1">{fieldError('name')}</p>
                    )}
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
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                    />
                    {fieldError('email') && (
                        <p className="text-sm text-red-400 mt-1">{fieldError('email')}</p>
                    )}
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
                        onChange={(e) => handleChange('password', e.target.value)}
                        required
                    />
                    {fieldError('password') && (
                        <p className="text-sm text-red-400 mt-1">{fieldError('password')}</p>
                    )}
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
                        onChange={(e) => handleChange('password_confirmation', e.target.value)}
                        required
                    />
                    {fieldError('password_confirmation') && (
                        <p className="text-sm text-red-400 mt-1">{fieldError('password_confirmation')}</p>
                    )}
                </div>

                <div className="mt-6 flex flex-col gap-3 pt-2">
                    <Button variant="primary" disabled={processing} className="w-full">
                        {processing ? 'Registering...' : 'Register'}
                    </Button>

                    <div className="text-center mt-2">
                        <Link
                            to="/login"
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
