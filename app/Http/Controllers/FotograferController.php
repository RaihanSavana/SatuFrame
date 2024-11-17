<?php

namespace App\Http\Controllers;

use App\Models\Fotografer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
class FotograferController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Auth/FotograferDashboard');
    }

    public function show(Fotografer $fotografer)
    {
        return Inertia::render('Auth/FotograferProfile');
    }

    public function editProfile()
    {
        $user = Auth::user();

        return Inertia::render('Auth/FotograferEditProfile', [
            'user' => $user
        ]);
    }

    public function editInformation()
    {
        $id = Auth::user()->id;
        $fotografer = Fotografer::where('user_id', $id)->first();
        return Inertia::render('Auth/FotograferEditInformation', [
            'data' => $fotografer
        ]);
    }

    public function updateProfile(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'nomor_telepon' => 'required|digits_between:8,15|unique:users,nomor_telepon,' . $id,
            'alamat' => 'required|string|max:500',
        ]);


        $user = User::findOrFail($id);

        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'nomor_telepon' => $request->input('nomor_telepon'),
            'alamat' => $request->input('alamat'),
        ]);

        return redirect()->route('fotografer.profile')->with('message', 'Profile updated successfully!');
    }

    public function updateInformation(Request $request)
    {
        
    }




}
