// resources/js/Pages/PaymentPage.jsx
import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { Typography } from '@mui/material';

const PaymentPage = () => {
    // Destructure the snap_token from the props passed by the backend
    const { snap_token } = usePage().props;

    useEffect(() => {
        if (snap_token) {
            // Automatically trigger the payment process when the snap_token is received
            window.snap.pay(snap_token, {
                onSuccess: function (result) {
                    console.log("Payment success", result);
                    alert("Pembayaran berhasil!");
                },
                onPending: function (result) {
                    console.log("Payment pending", result);
                    alert("Pembayaran tertunda.");
                },
                onError: function (result) {
                    console.log("Payment error", result);
                    alert("Pembayaran gagal.");
                },
                onClose: function () {
                    alert("Anda menutup pop-up pembayaran.");
                },
            });
        } else {
            console.error("No Snap Token received");
        }
    }, [snap_token]); // Trigger effect when snap_token changes

    return (
        <div className="container mx-auto p-5">
            <Typography variant="h4" gutterBottom>
                Pembayaran Pesanan
            </Typography>
            {snap_token ? (
                <Typography variant="h6" gutterBottom>
                    Pembayaran sedang diproses...
                </Typography>
            ) : (
                <Typography variant="body1" color="error">
                    Error: Tidak ada Snap Token yang diterima.
                </Typography>
            )}
        </div>
    );
};

export default PaymentPage;
