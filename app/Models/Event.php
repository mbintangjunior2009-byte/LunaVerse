<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'event_date',
        'start_time',
        'category',
        'is_completed',
    ];

    protected function casts(): array
    {
        return [
            'event_date'   => 'date',
            'start_time'   => 'datetime:H:i',
            'is_completed' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
