<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\CheckRole;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('landing_page');

Route::get('/select-role', function () {
    return Inertia::render('Auth/SelectRole');
})->name('select_role');

Route::get('/explore', function() {
    return Inertia::render('Auth/Explore');
})->name('explore');


// Route User

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
    Route::get('/order', [UserController::class, 'order'])->name('user.order');
});

// Route Fotografer

Route::get('/profile', function () {
    return Inertia::render('Auth/Profile');
})->name('profile');



require __DIR__.'/auth.php';
