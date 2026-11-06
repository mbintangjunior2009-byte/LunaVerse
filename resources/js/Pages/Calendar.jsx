import React, { useMemo, useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import {
    Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus,
    X, Clock, Check, Trash2, Pencil, BookOpen, Brain, Bell, Award,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// ── Category metadata ────────────────────────────────────────────────────────
const CATEGORIES = {
    study:    { label: 'Study',    color: 'brand',   dot: 'bg-brand-500',   text: 'text-brand-300',   bg: 'bg-brand-500/10',   border: 'border-brand-500/30',   icon: BookOpen },
    quiz:     { label: 'Quiz',     color: 'emerald', dot: 'bg-emerald-500', text: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: Brain },
    reminder: { label: 'Reminder', color: 'orange',  dot: 'bg-orange-500',  text: 'text-orange-300',  bg: 'bg-orange-500/10',  border: 'border-orange-500/30',  icon: Bell },
    exam:     { label: 'Exam',     color: 'red',     dot: 'bg-red-500',    text: 'text-red-300',     bg: 'bg-red-500/10',     border: 'border-red-500/30',     icon: Award },
};

// ── Date helpers ─────────────────────────────────────────────────────────────
const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function parseDate(str) {
    const [y, m, d] = str.split('-').map(Number);
    return new Date(y, m - 1, d);
}

function isSameDay(a, b) {
    return formatDate(a) === formatDate(b);
}

/**
 * Build a 6×7 grid of Date objects for the given month.
 * Weeks start on Monday.
 */
function buildMonthGrid(year, month) {
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + 6) % 7; // Mon = 0
    const gridStart = new Date(year, month, 1 - startOffset);
    const cells = [];
    for (let i = 0; i < 42; i++) {
        cells.push(new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i));
    }
    return cells;
}

// ── Event Form Modal ─────────────────────────────────────────────────────────
function EventFormModal({ open, onClose, selectedDate, event, onSave, onDelete }) {
    const isEditing = !!event;
    const [form, setForm] = useState({
        title: event?.title ?? '',
        description: event?.description ?? '',
        event_date: event?.event_date
            ? formatDate(parseDate(event.event_date))
            : selectedDate ? formatDate(selectedDate) : formatDate(new Date()),
        start_time: event?.start_time ?? '',
        category: event?.category ?? 'study',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
    };

    const handleDelete = () => {
        if (onDelete) onDelete(event);
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <Card className="w-full max-w-md p-6 border border-white/20 pointer-events-auto">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">
                                    {isEditing ? 'Edit Event' : 'Add Event'}
                                </h2>
                                <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Title */}
                                <div>
                                    <label className="text-sm text-gray-400 mb-1 block">Title</label>
                                    <input
                                        type="text" required autoFocus
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        placeholder="e.g. Hiragana Practice"
                                        className="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                                    />
                                </div>

                                {/* Date + Time */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-sm text-gray-400 mb-1 block">Date</label>
                                        <input
                                            type="date" required
                                            value={form.event_date}
                                            onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                                            className="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400 mb-1 block">Time (optional)</label>
                                        <input
                                            type="time"
                                            value={form.start_time}
                                            onChange={(e) => setForm({ ...form, start_time: e.target.value })}
                                            className="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Category</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {Object.entries(CATEGORIES).map(([key, meta]) => (
                                            <button
                                                key={key} type="button"
                                                onClick={() => setForm({ ...form, category: key })}
                                                className={cn(
                                                    'flex flex-col items-center gap-1 p-2.5 rounded-xl border text-xs font-medium transition-colors',
                                                    form.category === key
                                                        ? cn(meta.bg, meta.text, meta.border)
                                                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                                                )}
                                            >
                                                <meta.icon className="w-4 h-4" />
                                                {meta.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="text-sm text-gray-400 mb-1 block">Description (optional)</label>
                                    <textarea
                                        value={form.description}
                                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                                        rows={2}
                                        placeholder="Notes about this study session..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                                    />
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-2">
                                    {isEditing && (
                                        <Button type="button" variant="outline" onClick={handleDelete} className="gap-2 text-red-400 hover:bg-red-500/10">
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                    <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                                        Cancel
                                    </Button>
                                    <Button type="submit" variant="primary" className="flex-1 gap-2">
                                        {isEditing ? <><Pencil className="w-4 h-4" /> Save</> : <><Plus className="w-4 h-4" /> Add</>}
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ── Day Detail Drawer ────────────────────────────────────────────────────────
function DayDetailDrawer({ open, onClose, date, events, onEventClick, onToggle, onAdd }) {
    const dayEvents = events.filter((e) => e.event_date === formatDate(date));
    const dateLabel = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-[101] bg-dark-800/95 backdrop-blur-xl border-l border-white/10 overflow-y-auto"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-lg font-bold">{dateLabel}</h2>
                                    <p className="text-sm text-gray-400 mt-0.5">
                                        {dayEvents.length} {dayEvents.length === 1 ? 'event' : 'events'}
                                    </p>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            {dayEvents.length === 0 ? (
                                <p className="text-gray-400 text-sm text-center py-8">No events scheduled for this day.</p>
                            ) : (
                                <div className="space-y-3 mb-6">
                                    {dayEvents.map((event) => {
                                        const meta = CATEGORIES[event.category] ?? CATEGORIES.study;
                                        return (
                                            <div
                                                key={event.id}
                                                className={cn(
                                                    'p-4 rounded-xl border cursor-pointer transition-all',
                                                    meta.bg, meta.border,
                                                    event.is_completed && 'opacity-50'
                                                )}
                                                onClick={() => onEventClick(event)}
                                            >
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className={cn('font-bold text-sm', event.is_completed && 'line-through')}>
                                                            {event.title}
                                                        </h3>
                                                        {event.start_time && (
                                                            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                                                <Clock className="w-3 h-3" /> {event.start_time}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <span className={cn('text-[10px] font-bold uppercase px-2 py-0.5 rounded-full', meta.bg, meta.text, 'border', meta.border)}>
                                                        {meta.label}
                                                    </span>
                                                </div>
                                                {event.description && (
                                                    <p className="text-xs text-gray-400 mt-2">{event.description}</p>
                                                )}
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); onToggle(event); }}
                                                    className={cn(
                                                        'mt-3 flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg transition-colors',
                                                        event.is_completed
                                                            ? 'text-emerald-300 bg-emerald-500/10'
                                                            : 'text-gray-400 hover:text-emerald-300 hover:bg-emerald-500/10'
                                                    )}
                                                >
                                                    <Check className="w-3.5 h-3.5" />
                                                    {event.is_completed ? 'Completed' : 'Mark as done'}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            <Button variant="outline" className="w-full gap-2" onClick={() => onAdd(date)}>
                                <Plus className="w-4 h-4" /> Add Event
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ── Today's Notification Banner ──────────────────────────────────────────────
function TodayBanner({ count, onDismiss }) {
    if (count === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-between gap-4"
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-brand-300" />
                </div>
                <p className="text-sm text-gray-200">
                    You have <span className="font-bold text-brand-300">{count}</span> study{' '}
                    {count === 1 ? 'activity' : 'activities'} scheduled for today!
                </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                <Link href="/calendar">
                    <Button variant="primary" size="sm" className="gap-1">
                        View Calendar
                    </Button>
                </Link>
                <button onClick={onDismiss} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                    <X className="w-4 h-4 text-gray-400" />
                </button>
            </div>
        </motion.div>
    );
}

// ── Main Calendar Page ───────────────────────────────────────────────────────
export default function CalendarPage({ events: propEvents }) {
    const { todaysEventCount } = usePage().props;
    const { t } = useTranslation();

    const today = new Date();
    const [viewYear, setViewYear]   = useState(today.getFullYear());
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [selectedDate, setSelectedDate] = useState(null);
    const [drawerOpen, setDrawerOpen]   = useState(false);
    const [formOpen, setFormOpen]       = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [bannerDismissed, setBannerDismissed] = useState(false);

    // Normalize events from backend — event_date comes as a serialized string
    const events = useMemo(() => {
        return (propEvents ?? []).map((e) => ({
            ...e,
            event_date: typeof e.event_date === 'string' ? e.event_date : formatDate(new Date(e.event_date)),
        }));
    }, [propEvents]);

    // Group events by date string for quick lookup
    const eventsByDate = useMemo(() => {
        const map = {};
        for (const e of events) {
            if (!map[e.event_date]) map[e.event_date] = [];
            map[e.event_date].push(e);
        }
        return map;
    }, [events]);

    const monthGrid = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);

    const prevMonth = () => {
        setViewMonth((m) => { if (m === 0) { setViewYear((y) => y - 1); return 11; } return m - 1; });
    };
    const nextMonth = () => {
        setViewMonth((m) => { if (m === 11) { setViewYear((y) => y + 1); return 0; } return m + 1; });
    };
    const goToday = () => { setViewYear(today.getFullYear()); setViewMonth(today.getMonth()); };

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setDrawerOpen(true);
    };

    const handleAddEvent = (date) => {
        setSelectedDate(date);
        setEditingEvent(null);
        setDrawerOpen(false);
        setFormOpen(true);
    };

    const handleEditEvent = (event) => {
        setEditingEvent(event);
        setDrawerOpen(false);
        setFormOpen(true);
    };

    const handleSaveEvent = (formData) => {
        if (editingEvent) {
            router.put(`/calendar/events/${editingEvent.id}`, formData, {
                preserveScroll: true,
                onSuccess: () => setFormOpen(false),
            });
        } else {
            router.post('/calendar/events', formData, {
                preserveScroll: true,
                onSuccess: () => setFormOpen(false),
            });
        }
    };

    const handleDeleteEvent = (event) => {
        router.delete(`/calendar/events/${event.id}`, {
            preserveScroll: true,
            onSuccess: () => setFormOpen(false),
        });
    };

    const handleToggleEvent = (event) => {
        router.patch(`/calendar/events/${event.id}/toggle`, {}, { preserveScroll: true });
    };

    // Upcoming events (next 5 from today)
    const todayStr = formatDate(today);
    const upcoming = events
        .filter((e) => e.event_date >= todayStr)
        .sort((a, b) => a.event_date.localeCompare(b.event_date) || (a.start_time ?? '').localeCompare(b.start_time ?? ''))
        .slice(0, 5);

    return (
        <DashboardLayout>
            <Head title="Calendar" />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">{t('nav.dashboard')}</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">{t('nav.calendar')}</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <CalendarIcon className="w-8 h-8 text-brand-300" /> {t('nav.calendar')}
                </h1>
                <p className="text-gray-400 mt-2">Keep your study streak and upcoming sessions organized.</p>
            </div>

            {/* Today's notification banner */}
            {!bannerDismissed && (
                <TodayBanner count={todaysEventCount} onDismiss={() => setBannerDismissed(true)} />
            )}

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Calendar grid */}
                <Card className="lg:col-span-2 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">
                            {MONTH_NAMES[viewMonth]} {viewYear}
                        </h2>
                        <div className="flex items-center gap-2">
                            <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                                <ChevronLeft className="w-5 h-5 text-gray-400" />
                            </button>
                            <button
                                onClick={goToday}
                                className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
                            >
                                Today
                            </button>
                            <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* Day labels */}
                    <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
                        {DAY_LABELS.map((d) => <div key={d}>{d}</div>)}
                    </div>

                    {/* Date cells */}
                    <div className="grid grid-cols-7 gap-2">
                        {monthGrid.map((date, i) => {
                            const dateStr = formatDate(date);
                            const isCurrentMonth = date.getMonth() === viewMonth;
                            const isToday = isSameDay(date, today);
                            const dayEvents = eventsByDate[dateStr] ?? [];
                            const hasEvents = dayEvents.length > 0;
                            const hasIncomplete = dayEvents.some((e) => !e.is_completed);

                            return (
                                <button
                                    key={i}
                                    onClick={() => handleDayClick(date)}
                                    className={cn(
                                        'aspect-square rounded-xl flex flex-col items-center justify-start p-1.5 text-sm border transition-all relative',
                                        isCurrentMonth ? 'bg-white/5 border-white/5' : 'bg-transparent border-transparent opacity-30',
                                        isToday && 'border-brand-500/50 ring-1 ring-brand-500/20',
                                        hasEvents && isCurrentMonth && hasIncomplete && 'bg-brand-500/10 border-brand-500/30',
                                        'hover:border-brand-500/40 hover:scale-[1.03] cursor-pointer'
                                    )}
                                >
                                    <span className={cn(
                                        'font-medium',
                                        isToday ? 'text-brand-300 font-bold' : isCurrentMonth ? 'text-gray-300' : 'text-gray-600'
                                    )}>
                                        {date.getDate()}
                                    </span>

                                    {/* Event dots */}
                                    {hasEvents && (
                                        <div className="flex flex-wrap gap-0.5 mt-auto mb-0.5 justify-center">
                                            {dayEvents.slice(0, 3).map((e) => {
                                                const meta = CATEGORIES[e.category] ?? CATEGORIES.study;
                                                return (
                                                    <span
                                                        key={e.id}
                                                        className={cn('w-1.5 h-1.5 rounded-full', meta.dot, e.is_completed && 'opacity-30')}
                                                    />
                                                );
                                            })}
                                            {dayEvents.length > 3 && (
                                                <span className="text-[8px] text-gray-500">+{dayEvents.length - 3}</span>
                                            )}
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </Card>

                {/* Upcoming sidebar */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Upcoming</h2>
                    {upcoming.length === 0 ? (
                        <p className="text-gray-400 text-sm text-center py-8">No upcoming events.</p>
                    ) : (
                        <div className="space-y-3">
                            {upcoming.map((event) => {
                                const meta = CATEGORIES[event.category] ?? CATEGORIES.study;
                                const eventDate = parseDate(event.event_date);
                                const isTodayEvent = isSameDay(eventDate, today);
                                return (
                                    <div
                                        key={event.id}
                                        className={cn('p-3 rounded-xl border cursor-pointer transition-colors hover:bg-white/5',
                                            meta.bg, meta.border)}
                                        onClick={() => handleEditEvent(event)}
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className={cn('font-bold text-sm', event.is_completed && 'line-through opacity-50')}>
                                                {event.title}
                                            </h3>
                                            <span className={cn('text-[10px] font-bold uppercase px-1.5 py-0.5 rounded', meta.bg, meta.text)}>
                                                {meta.label}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {isTodayEvent ? 'Today' : eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            {event.start_time && ` · ${event.start_time}`}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <Button
                        variant="outline"
                        className="w-full mt-4 gap-2"
                        onClick={() => handleAddEvent(today)}
                    >
                        <Plus className="w-4 h-4" /> Add Event
                    </Button>
                </Card>
            </div>

            {/* Modals */}
            <DayDetailDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                date={selectedDate ?? today}
                events={events}
                onEventClick={handleEditEvent}
                onToggle={handleToggleEvent}
                onAdd={handleAddEvent}
            />

            <EventFormModal
                open={formOpen}
                onClose={() => setFormOpen(false)}
                selectedDate={selectedDate}
                event={editingEvent}
                onSave={handleSaveEvent}
                onDelete={handleDeleteEvent}
            />
        </DashboardLayout>
    );
}
