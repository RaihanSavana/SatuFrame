<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemesanan extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'fotografer_id',
        'status',
        'biaya',
        'date',
        'start_time',
        'end_time',
        'total_jam'
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
