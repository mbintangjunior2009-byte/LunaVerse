import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/Components/ui/Button';
import { Card } from '@/Components/ui/Card';

export default function LessonNavigation({
    previous,
    next,
    completed,
    onMarkComplete,
}) {
    return (
        <Card className="p-5 md:p-6">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                <div className="flex flex-col sm:flex-row gap-3">
                    {previous ? (
                        <Link href={`/language/japanese/study/${previous.id}`}>
                            <Button variant="outline" className="w-full sm:w-auto gap-2">
                                <ChevronLeft className="w-4 h-4" />
                                Previous Lesson
                            </Button>
                        </Link>
                    ) : (
                        <Button variant="outline" className="w-full sm:w-auto gap-2" disabled>
                            <ChevronLeft className="w-4 h-4" />
                            Previous Lesson
                        </Button>
                    )}

                    {next ? (
                        <Link href={`/language/japanese/study/${next.id}`}>
                            <Button variant="glass" className="w-full sm:w-auto gap-2">
                                Next Lesson
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    ) : (
                        <Link href="/language/japanese/study">
                            <Button variant="glass" className="w-full sm:w-auto gap-2">
                                Back to Study
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    )}
                </div>

                <Button
                    type="button"
                    variant={completed ? 'outline' : 'primary'}
                    className="gap-2 w-full lg:w-auto"
                    onClick={onMarkComplete}
                    disabled={completed}
                >
                    <CheckCircle2 className="w-4 h-4" />
                    {completed ? 'Completed' : 'Mark Complete'}
                </Button>
            </div>
        </Card>
    );
}
