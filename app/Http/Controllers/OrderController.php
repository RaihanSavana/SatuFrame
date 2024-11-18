<?php

namespace App\Http\Controllers;

use App\Models\Fotografer;
use App\Models\Pemesanan;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function index()
    {
        $orders = Pemesanan::with('fotografer.user')->get();

        return Inertia::render('Auth/UserOrder', [
            'orders' => $orders
        ]);
    }

    public function store(Request $request, $fotograferId)
    {
        // Validasi input
        $request->validate([
            'date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
        ]);

        // Mendapatkan fotografer berdasarkan ID
        $fotografer = Fotografer::findOrFail($fotograferId);

        // Menghitung selisih waktu antara start_time dan end_time
        $startTime = Carbon::createFromFormat('H:i', $request->start_time);
        $endTime = Carbon::createFromFormat('H:i', $request->end_time);

        // Jika end_time lebih kecil dari start_time, maka tampilkan error atau tukar posisi
        if ($endTime < $startTime) {
            return back()->withErrors(['end_time' => 'End time harus lebih besar dari start time']);
        }

        // Menghitung total jam sebagai selisih antara end_time dan start_time
        $totalJam = $startTime->diffInHours($endTime) + ($startTime->diffInMinutes($endTime) % 60) / 60;

        // Membuat pemesanan baru
        $order = new Pemesanan();
        $order->user_id = Auth::user()->id; // Menggunakan ID user yang sedang login
        $order->fotografer_id = $fotografer->id;
        $order->status = 'pending'; // Status pemesanan awal
        $order->biaya = $request->biaya ?: null; // Jika biaya tidak ada, set ke null
        $order->date = $request->date;
        $order->start_time = $request->start_time;
        $order->end_time = $request->end_time;
        $order->total_jam = $totalJam;  // Set nilai total_jam
        $order->save();

        return redirect(route('user.order'));
    }
}
