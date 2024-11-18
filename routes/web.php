<?php

use Inertia\Inertia;
use App\Models\Fotografer;
use App\Http\Middleware\CheckRole;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ExploreController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FotograferController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('landing_page');

Route::get('profile/{id}', [ExploreController::class, 'show'])->name('show.profile');

Route::get('/explore', [ExploreController::class, 'index'])->name('explore');

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
    Route::get('/user-dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
    Route::get('/order', [OrderController::class, 'index'])->name('user.order');
    Route::post('order/store/{id}', [OrderController::class, 'store'])->name('user.order.store');
    Route::get('/user-profile', [UserController::class, 'index'])->name('user.profile');
    Route::get('/user-profile/edit', [UserController::class, 'create'])->name('user.edit.profile');
    Route::patch('user-profile/edit/{id}', [UserController::class, 'update'])->name('user.update');
});

// Route Fotografer

Route::middleware(['auth', 'role:fotografer'])->group(function () {
    Route::get('/dashboard', [FotograferController::class, 'index'])->name('fotografer.dashboard');
    Route::get('/profile', [FotograferController::class, 'show'])->name('fotografer.profile');
    Route::get('/profile/edit', [FotograferController::class, 'editProfile'])->name('fotografer.edit.profile');
    Route::patch('/profile/edit/{id}', [FotograferController::class, 'updateProfile'])->name('fotografer.update.profile');
    Route::get('/information/edit', [FotograferController::class, 'editInformation'])->name('fotografer.edit.information');
    Route::post('/information', [FotograferController::class, 'store'])->name('fotografer.store.information');
    Route::get('/information/update', [FotograferController::class, 'indexInformation'])->name('fotografer.index.information');
    Route::patch('/information/update/{id}', [FotograferController::class, 'updateInformation'])->name('fotografer.update.information');

    Route::post('order/accept/{order}', [FotograferController::class, 'acceptOrder'])->name('fotografer.order.acceptOrder');
    Route::post('order/decline/{order}', [FotograferController::class, 'declineOrder'])->name('fotografer.order.declineOrder');
    Route::post('order/done/{order}', [FotograferController::class, 'doneOrder'])->name('fotografer.order.doneOrder');
});



require __DIR__.'/auth.php';
