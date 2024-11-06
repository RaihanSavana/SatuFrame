<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'fotografer_id',
        'rating',
        'komentar'
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function fotografer()
    {
        return $this->belongsTo(Fotografer::class);
    }
}
