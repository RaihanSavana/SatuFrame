<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fotografers', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('spesialisasi')->nullable();
            $table->string('portofolio')->nullable();
            $table->string('foto_profil')->nullable();
            $table->longText('deskripsi')->nullable();
            $table->string('kota')->nullable();
            $table->string('floor_price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fotografers');
    }
};
