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
        Schema::create('pemesanans', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('fotografer_id')->constrained('fotografers')->onDelete('cascade');
            $table->enum('status', ['pending', 'process', 'denied', 'completed'])->default('pending');
            $table->integer('biaya');
            $table->string('date');
            $table->string('start_time');
            $table->string('end_time');
            $table->decimal('total_jam');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pemesanans');
    }
};
