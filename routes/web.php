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

// Logout
Route::middleware(['auth'])->group(function(){
    Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});


// Route User

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
    Route::get('/order', [UserController::class, 'order'])->name('user.order');
    Route::get('/user-profile', [UserController::class, 'index'])->name('user.profile');
    Route::patch('user-profile/update/{id}', [UserController::class, 'update'])->name('user.update');
});

// Route Fotografer

Route::middleware(['auth', 'role:fotografer'])->group(function () {
    Route::get('/dashboard-fotografer', function () {
        return Inertia::render('Auth/FotograferDashboard');
    })->name('fotografer.dashboard');
    Route::get('/profile-fotografer', function () {
        return Inertia::render('Auth/FotograferProfile');
    })->name('fotografer.profile');
});



require __DIR__.'/auth.php';
