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
        return Inertia::render('Auth/FotograferInformation', [
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


    public function store(Request $request)
    {
        $data = $request->validate([
            'spesialisasi' => 'required|array', // Expect an array for checkbox inputs
            'spesialisasi.*' => 'string',       // Each checkbox value should be a string
            'portofolio' => 'required',
            'portofolio.*' => 'mimes:jpg,jpeg,png|max:10000', // Validate each uploaded file
            'foto_profil' => 'required|mimes:jpg,jpeg,png|max:10000',
            'deskripsi' => 'required',
            'kota' => 'required',
            'floor_price' => 'required|numeric',
        ]);

        // Convert the spesialisasi array into a comma-separated string
        $data['spesialisasi'] = implode(',', $data['spesialisasi']);

        // Handle the portofolio file uploads
        $portofolioPaths = [];
        if ($request->hasFile('portofolio')) {
            foreach ($request->file('portofolio') as $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/uploads/portofolio'), $fileName);
                $portofolioPaths[] = '/uploads/portofolio/' . $fileName;
            }
        }
        $data['portofolio'] = json_encode($portofolioPaths); // Store paths as JSON

        // Handle the foto_profil upload
        $fotoProfilFile = $request->file('foto_profil');
        $fotoProfilFileName = time() . '_' . $fotoProfilFile->getClientOriginalName();
        $fotoProfilFile->move(public_path('/uploads/foto_profil'), $fotoProfilFileName);
        $data['foto_profil'] = '/uploads/foto_profil/' . $fotoProfilFileName;

        // Include the authenticated user ID
        $data['user_id'] = Auth::user()->id;

        // Save to the database
        Fotografer::create($data);

        return redirect()->route('fotografer.profile')->with('message', 'Photographer successfully added');
    }
}
