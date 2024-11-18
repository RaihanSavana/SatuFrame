<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MidtransController extends Controller
{
    public function midtrans(Request $request, $orderId)
    {
        \Midtrans\Config::$serverKey = 'SB-Mid-server-X4pn4ictm4mlrZUyXQufEHpL';
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        // Fetch the necessary data from the request
        $user = Auth::user(); // Get the logged-in user
        $order = \App\Models\Pemesanan::find($orderId); // Assuming you have an Order model

        // Check if the order exists
        if (!$order) {
            return response()->json(['error' => 'Order not found'], 404);
        }

        // Set up the transaction details
        $params = [
            'transaction_details' => [
                'order_id' => $order->id, // Use the order ID from the order
                'gross_amount' => $order->biaya, // Use the biaya from the order
            ],
            'customer_details' => [
                'first_name' => $user->name, // User's name
                'email' => $user->email, // User's email
                'phone' => $user->nomor_telepon, // User's phone number
            ],
        ];

        // Get the Snap token
        try {
            $snapToken = \Midtrans\Snap::getSnapToken($params);

            // Return an Inertia response
            return Inertia::render('Auth/Bayar', [
                'snap_token' => $snapToken,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
