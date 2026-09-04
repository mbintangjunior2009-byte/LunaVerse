<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['category', 'question_data'];

    protected function casts(): array
    {
        return [
            'question_data' => 'array',
        ];
    }
}
