import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useForm, router } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import DataTable from "react-data-table-component";
import { FaWhatsapp } from "react-icons/fa";

export default function UserOrder({ orders, user }) {
    // State management
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [snapLoaded, setSnapLoaded] = useState(false); // Track script Snap loading

    const { data, setData, post } = useForm({
        biaya: "",
    });

    // Load Snap script once
    useEffect(() => {
        const midtransScriptUrl =
            "https://app.sandbox.midtrans.com/snap/snap.js";
        const midtransClientKey = "SB-Mid-server-X4pn4ictm4mlrZUyXQufEHpL"; // Replace with your actual Client Key

        const scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        scriptTag.setAttribute("data-client-key", midtransClientKey);

        scriptTag.onload = () => {
            setSnapLoaded(true);
        };

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    // Function to set the selected order
    const handleSelectOrder = (order) => {
        setSelectedOrder(order);
    };

    // Function to handle payment via Midtrans
    // Function to handle payment via Midtrans
    const handleMidtrans = async (order) => {
        if (!order) {
            alert("No order selected.");
            return;
        }

        if (!snapLoaded) {
            alert("Midtrans Snap belum siap, harap tunggu sebentar.");
            return;
        }

        try {
            // Send request to backend to get snap_token
            const response = await router.post(
                route("payment.midtrans", order.id),
                {
                    nama_user: user.name,
                    email_user: user.email,
                    no_telp_user: user.nomor_telepon,
                    biaya: order.biaya,
                }
            );

            // Ensure snap_token is received from the server
            const snapToken = response.snap_token;
            if (!snapToken) {
                alert("Error: Tidak dapat menghasilkan token pembayaran.");
                return;
            }

            // Open the Midtrans Snap in a new window
            const paymentWindow = window.open(
                " ",
                "_blank",
                "width=800,height=600"
            );
            if (paymentWindow) {
                window.snap.pay(snapToken, {
                    onSuccess: function (result) {
                        console.log("Payment success", result);
                        alert("Pembayaran berhasil!");
                        paymentWindow.close(); // Close the window after successful payment
                    },
                    onPending: function (result) {
                        console.log("Payment pending", result);
                        alert("Pembayaran tertunda.");
                        paymentWindow.close(); // Close the window after payment is pending
                    },
                    onError: function (result) {
                        console.log("Payment error", result);
                        alert("Pembayaran gagal.");
                        paymentWindow.close(); // Close the window on error
                    },
                    onClose: function () {
                        alert("Anda menutup pop-up pembayaran.");
                        paymentWindow.close(); // Close the window if it's closed by the user
                    },
                });
            }
        } catch (error) {
            console.error("Error processing payment:", error);
        }
    };

    // Function to handle order selection and payment
    const handleSelectAndPay = (order) => {
        handleSelectOrder(order); // Update the selected order
        handleMidtrans(order); // Initiate payment process
    };

    // Mapping data for DataTable
    const datas = orders.map((order) => ({
        id: order.id,
        nama_fotografer: order.fotografer.user.name,
        tanggal_pemesanan: order.date,
        waktu_mulai: order.start_time,
        waktu_selesai: order.end_time,
        total_jam: order.total_jam,
        status: (
            <span
                className={`px-3 py-1 rounded-full text-sm font-bold ${
                    order.status === "pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : order.status === "process"
                        ? "bg-blue-200 text-blue-800"
                        : order.status === "denied"
                        ? "bg-red-200 text-red-800"
                        : order.status === "completed"
                        ? "bg-green-200 text-green-800"
                        : ""
                }`}
            >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
        ),
        biaya: order.biaya ? "Rp. " + order.biaya : "",
        kontak:
            order.status === "process" ? (
                <a
                    href={`https://wa.me/${order.fotografer.user.nomor_telepon.replace(
                        /^0/,
                        "62"
                    )}`}
                >
                    <FaWhatsapp
                        size={20}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </a>
            ) : null,
        bayar:
            order.status === "process" ? (
                <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                    Bayar
                </button>
            ) : null,
    }));

    const columns = [
        {
            name: "Nama Fotografer",
            selector: (row) => row.nama_fotografer,
            sortable: true,
        },
        {
            name: "Tanggal Pemesanan",
            selector: (row) => row.tanggal_pemesanan,
            sortable: true,
        },
        {
            name: "Waktu Mulai",
            selector: (row) => row.waktu_mulai,
            sortable: true,
        },
        {
            name: "Waktu Selesai",
            selector: (row) => row.waktu_selesai,
            sortable: true,
        },
        {
            name: "Total Jam",
            selector: (row) => row.total_jam,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
        {
            name: "Biaya",
            selector: (row) => row.biaya,
            sortable: true,
        },
        {
            name: "Contact Person",
            selector: (row) => row.kontak,
        },
        {
            name: "Bayar",
            selector: (row) => row.bayar,
            button: true,
        },
    ];

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="container mx-auto px-20 mx-10 pt-10">
                <div>
                    <h1 className="text-4xl font-bold">Order Status</h1>
                </div>

                <div className="overflow-x-auto pt-5 pb-5">
                    <DataTable
                        columns={columns}
                        data={datas}
                        pagination
                        highlightOnHover
                        striped
                        responsive
                        fixedHeader
                    />
                </div>
            </div>
        </>
    );
}
