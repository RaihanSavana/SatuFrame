<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{

    public function index() {
        return Inertia::render('Auth/UserProfile');
    }

    public function dashboard() {
        return Inertia::render('Auth/UserDashboard');
    }

    public function order() {
        return Inertia::render('Auth/UserOrder');
    }


}
