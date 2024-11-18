<?php

namespace App\Http\Controllers;

use App\Models\Fotografer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExploreController extends Controller
{
    public function index()
    {
        $fotografers = Fotografer::with('user')->get();
        return Inertia::render('Auth/UserExplore', [
            'fotografers' => $fotografers,
        ]);
    }

    public function show($id)
    {
        $fotografer = Fotografer::with('user')->where('id', $id)->first();
        return Inertia::render('Auth/Profile', [
            'fotografer' => $fotografer
        ]);
    }
}
