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
        Schema::create('komen', function (Blueprint $table) {
            $table->bigIncrements('id')->primary();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('forum_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('forum_id')->references('id')->on('forum_komunitas');
            $table->datetime('waktu_buat');
            $table->string('teks_komen', 220);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
