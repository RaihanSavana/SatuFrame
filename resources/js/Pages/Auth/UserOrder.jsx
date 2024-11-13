import Navbar from "@/Layouts/Navbar";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: "No",
        selector: (row) => row.id,
    },
    {
        name: "Photographer Name",
        selector: (row) => row.name,
    },
    {
        name: "Hours",
        selector: (row) => row.hour,
    },
    {
        name: "Price",
        selector: (row) => row.price,
    },
    {
        name: "Status",
        selector: (row) => row.status,
    },
];

const data = [
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
    {
        id: 1,
        name: "Wildan Arya Ganteng",
        hour: "3",
        price: "300.000",
        status: "Done",
    },
];

export default function UserOrder() {
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
                    <DataTable
                        columns={columns}
                        data={data}
                        direction="auto"
                        fixedHeader
                        fixedHeaderScrollHeight="300px"
                        highlightOnHover
                        noHeader
                        pagination
                        pointerOnHover
                        responsive
                        selectableRowsRadio="checkbox"
                        striped
                        subHeaderAlign="center"
                        subHeaderWrap
                    />
                </div>
            </div>
        </>
    );
}
