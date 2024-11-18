import CardPhotographer from "@/Components/CardPhotographer";
import Navbar from "@/Layouts/Navbar";
import { Button } from "@mui/material";
import DataTable from "react-data-table-component";
import { FaWhatsapp } from "react-icons/fa";

export default function UserDashboard({ fotografers, user, orders }) {
    const filteredOrders = orders.filter(
        (order) => order.status === "pending" || order.status === "process"
    );

    const datas = filteredOrders.map((order) => ({
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
                <button
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={() => handleSelectAndPay(order)}
                >
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

            <div className="container mx-auto px-20 mx-10 pt-10 bg-[url('images/dashboarduser.jpg')]  h-[30vh]  bg-cover bg-center bg-no-repeat">
                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Welcome Back, Raihan
                    </h1>
                </div>

                <div className="flex flex-row pt-10 bg ">
                    <div className="basis-3/5 stroke-black rounded-2xl bg-white">
                        <div className="flex flex-wrap justify-between rounded-2xl shadow-xl  p-5">
                            <div className="">
                                <p className="text-xl font-bold">
                                    Looking for Photographer?
                                </p>
                                <p>
                                    Find the best shooter that match on your
                                    style and need.
                                </p>
                            </div>
                            <div className="p-2">
                                <Button variant="outlined" color="primary" href={route("explore")}>
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 ps-3">
                    <h1 className="text-4xl font-bold">Maybe you interest</h1>
                </div>

                <div className="flex gap-5 mt-5">
                    {fotografers.map((fotografer) => (
                        <CardPhotographer
                            key={fotografer.id}
                            imageSrc={
                                fotografer.foto_profil ||
                                "https://via.placeholder.com/300"
                            }
                            name={fotografer.user.name}
                            description={fotografer.spesialisasi}
                            rating="4.9"
                            price={`Rp. ${fotografer.floor_price}`}
                        />
                    ))}
                </div>

                <div className="pt-10 ps-3">
                    <h1 className="text-4xl font-bold">Order Status</h1>
                </div>

                <div class="overflow-x-auto pt-5 pb-5">
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
