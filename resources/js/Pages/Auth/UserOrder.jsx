import Navbar from "@/Layouts/Navbar";
import DataTable from "react-data-table-component";


export default function UserOrder({ orders }) {
    console.log(orders);
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

                <div class="overflow-x-auto pt-5 pb-5">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Nama Fotografer</th>
                                <th className="px-4 py-2">Tanggal Pemesanan</th>
                                <th className="px-4 py-2">Waktu Mulai</th>
                                <th className="px-4 py-2">Waktu Selesai</th>
                                <th className="px-4 py-2">Total Jam</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mapping data orders yang didapat dari Inertia */}
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-4 py-2">
                                        {order.fotografer.user.name}
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
