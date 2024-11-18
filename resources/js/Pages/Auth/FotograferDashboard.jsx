import { useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import { useForm, router } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import DataTable from "react-data-table-component";

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

    // Mapping data for DataTable
    const datas = orders.map((order) => ({
        id: order.id,
        nama_customer: order.user.name,
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
        action: (
            <div>
                {order.status === "pending" ? (
                    <div className="flex gap-2">
                        <button
                            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                            onClick={() => handleOpen(order)}
                        >
                            Accept
                        </button>
                        <button
                            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            onClick={() => handleDecline(order)}
                        >
                            Decline
                        </button>
                    </div>
                ) : order.status === "process" ? (
                    <button
                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        onClick={() => handleDone(order)}
                    >
                        Done
                    </button>
                ) : null}
            </div>
        ),
    }));

    const columns = [
        {
            name: "Nama Customer",
            selector: (row) => row.nama_customer,
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
            name: "Action",
            selector: (row) => row.action,
        },
    ];

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
