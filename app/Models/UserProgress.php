<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProgress extends Model
{
    protected $fillable = ['user_id', 'xp', 'level', 'streak', 'completed_lessons'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
