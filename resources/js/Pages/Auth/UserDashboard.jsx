import CardPhotographer from "@/Components/CardPhotographer";
import Navbar from "@/Layouts/Navbar";
import { Button } from "@mui/material";
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

export default function UserDashboard({ fotografers }) {

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
                                <Button variant="outlined" color="primary">
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
