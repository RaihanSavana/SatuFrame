import { useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import { useForm, router } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
Navbar; // Mengimpor useForm dan router dari Inertia

export default function FotograferDashboard({ tada, user, orders }) {
    const [open, setOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const { data, setData, post } = useForm({
        biaya: "",
    });

    const handleOpen = (order) => {
        setSelectedOrder(order);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {
        router.post(route("fotografer.order.acceptOrder", selectedOrder.id), {
            biaya: data.biaya,
        });
        handleClose();
    };

    const handleDecline = (order) => {
        router.post(route("fotografer.order.declineOrder", order.id));
    };

    const handleDone = (order) => {
        router.post(route("fotografer.order.doneOrder", order.id));
    };

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
                {/* Modal */}
                {open && (
                    <div
                        id="modal-background"
                        onClick={handleClose}
                        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
                    >
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl font-bold mb-4">
                                Input Biaya
                            </h2>
                            <input
                                type="number"
                                placeholder="Biaya"
                                value={data.biaya}
                                onChange={(e) =>
                                    setData("biaya", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={handleClose}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
