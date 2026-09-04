<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPracticeProgress extends Model
{
    protected $fillable = ['user_id', 'category', 'is_unlocked', 'is_completed', 'best_score', 'attempts', 'completed_at'];

    protected $casts = [
        'is_unlocked' => 'boolean',
        'is_completed' => 'boolean',
        'best_score' => 'integer',
        'attempts' => 'integer',
        'completed_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the unlock order for categories
     */
    public static function getUnlockOrder(): array
    {
        return ['hiragana', 'katakana', 'kanji', 'vocabulary', 'grammar', 'listening'];
    }

    /**
     * Get the next category to unlock after completing the given category
     */
    public static function getNextCategory(string $currentCategory): ?string
    {
        $order = self::getUnlockOrder();
        $index = array_search($currentCategory, $order);
        
        if ($index !== false && isset($order[$index + 1])) {
            return $order[$index + 1];
        }
        
        return null;
    }
}
