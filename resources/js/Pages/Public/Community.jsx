import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, InteractiveCard } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Trophy, Users, Calendar, MessageSquare } from 'lucide-react';

export default function Community({ auth }) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Community" />
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-glow">Join the LinguaNova Community</h1>
                    <p className="text-xl text-gray-400">Learn together, grow together.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <InteractiveCard className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-[#5865F2]/20 text-[#5865F2] rounded-2xl flex items-center justify-center">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Discord Server</h3>
                            <p className="text-gray-400 mb-4">Chat with native speakers and other learners.</p>
                            <Button variant="outline">Join Discord</Button>
                        </div>
                    </InteractiveCard>

                    <InteractiveCard className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-brand-500/20 text-brand-300 rounded-2xl flex items-center justify-center">
                            <Users className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Study Groups</h3>
                            <p className="text-gray-400 mb-4">Find partners at your level.</p>
                            <Button variant="outline">Find a Group</Button>
                        </div>
                    </InteractiveCard>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-xl font-bold">Global Leaderboard</h3>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-brand-500/30 flex items-center justify-center font-bold">{i}</div>
                                        <span className="font-medium">User {i}</span>
                                    </div>
                                    <span className="text-brand-300 font-bold">{10000 - i * 500} XP</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <div className="flex items-center gap-3 mb-6">
                            <Calendar className="w-6 h-6 text-brand-300" />
                            <h3 className="text-xl font-bold">Upcoming Events</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <h4 className="font-bold mb-1">Japanese Conversation Club</h4>
                                <p className="text-sm text-gray-400 mb-2">Tomorrow at 8:00 PM EST</p>
                                <Button size="sm" variant="glass">RSVP</Button>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <h4 className="font-bold mb-1">Spanish Grammar Workshop</h4>
                                <p className="text-sm text-gray-400 mb-2">Friday at 6:00 PM EST</p>
                                <Button size="sm" variant="glass">RSVP</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </PublicLayout>
    );
}
