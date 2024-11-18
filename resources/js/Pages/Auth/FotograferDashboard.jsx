import { useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import { useForm, router } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
Navbar // Mengimpor useForm dan router dari Inertia

export default function FotograferDashboard({ tada, user, orders }) {
    const [open, setOpen] = useState(false); // State untuk membuka/menutup modal
    const [selectedOrder, setSelectedOrder] = useState(null); // Menyimpan order yang dipilih

    // Inertia form hook
    const { data, setData, post } = useForm({
        biaya: "", // Data input biaya
    });

    const handleOpen = (order) => {
        setSelectedOrder(order); // Menyimpan order yang dipilih
        setOpen(true); // Membuka modal
    };

    const handleClose = () => {
        setOpen(false); // Menutup modal
    };

    const handleAccept = () => {
        // Menggunakan router.post untuk mengirimkan data ke server
        router.post(route("fotografer.order.acceptOrder", selectedOrder.id), {
            biaya: data.biaya, // Mengirimkan data biaya
        });

        handleClose(); // Menutup modal setelah data terkirim
    };

    const handleDecline = (order) => {
        router.post(route("fotografer.order.declineOrder", order.id));
    }

    const handleDone = (order) => {
        router.post(route("fotografer.order.doneOrder", order.id));
    }

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="container mx-auto px-20 mx-10 pt-10 bg-[url('images/dashboarduser.jpg')] h-[30vh] bg-cover bg-center bg-no-repeat">
                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Welcome Back, {user.name}
                    </h1>
                </div>

                <div className="flex flex-row pt-10">
                    <div className="basis-3/5 stroke-black rounded-2xl bg-white">
                        <div className="flex flex-wrap justify-between rounded-2xl shadow-xl p-5">
                            <div>
                                <p className="text-xl font-bold">
                                    {tada?.portofolio
                                        ? "Enhance your profile"
                                        : "Start Create Profile"}
                                </p>
                                <p>
                                    {tada?.portofolio
                                        ? "Pretier your own profile by adding up some information!"
                                        : "Information is key to user want to know you!"}
                                </p>
                            </div>
                            <div className="p-2">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    href={
                                        tada?.portofolio
                                            ? route(
                                                  "fotografer.index.information"
                                              )
                                            : route(
                                                  "fotografer.edit.information"
                                              )
                                    }
                                >
                                    {tada?.portofolio
                                        ? "Update Profile"
                                        : "Create Profile"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 ps-3">
                    <h1 className="text-4xl font-bold">Order Status</h1>
                </div>

                <div className="overflow-x-auto pt-5 pb-5">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Nama Customer</th>
                                <th className="px-4 py-2">Tanggal Pemesanan</th>
                                <th className="px-4 py-2">Waktu Mulai</th>
                                <th className="px-4 py-2">Waktu Selesai</th>
                                <th className="px-4 py-2">Total Jam</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-4 py-2">
                                        {order.user.name}
                                    </td>
                                    <td className="px-4 py-2">{order.date}</td>
                                    <td className="px-4 py-2">
                                        {order.start_time}
                                    </td>
                                    <td className="px-4 py-2">
                                        {order.end_time}
                                    </td>
                                    <td className="px-4 py-2">
                                        {order.total_jam}
                                    </td>
                                    <td className="px-4 py-2">
                                        {order.status}
                                    </td>
                                    <td className="px-4 py-2">
                                        {order.status === "pending" ? (
                                            <div>
                                                <button
                                                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                                                    onClick={() =>
                                                        handleOpen(order)
                                                    }
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white rounded-md ml-2"
                                                    onClick={() =>
                                                        handleDecline(order)
                                                    }
                                                >
                                                    Decline
                                                </button>
                                            </div>
                                        ) : order.status === "process" ? (
                                            <button
                                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                                onClick={() =>
                                                    handleDone(order)
                                                }
                                            >
                                                Done
                                            </button>
                                        ) : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal untuk input biaya */}
                <Modal open={open} onClose={handleClose}>
                    <Box className="modal-box">
                        <h2 className="text-2xl font-bold mb-4">Input Biaya</h2>
                        <TextField
                            label="Biaya"
                            type="number"
                            fullWidth
                            value={data.biaya}
                            onChange={(e) => setData("biaya", e.target.value)}
                            margin="normal"
                        />
                        <div className="pt-4">
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleAccept}
                                className="ml-2"
                            >
                                Accept
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
}
