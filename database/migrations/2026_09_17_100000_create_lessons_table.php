<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->string('language');          // e.g. 'japanese'
            $table->string('category');          // e.g. 'kanji'
            $table->string('lesson_id');         // matches curriculum ID, e.g. 'basic-kanji'
            $table->string('title');
            $table->json('content');             // flashcards, notes, examples – schema-free
            $table->timestamps();

            $table->index(['language', 'category']);
            $table->unique(['language', 'lesson_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};
