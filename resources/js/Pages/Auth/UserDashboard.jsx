import CardPhotographer from "@/Components/CardPhotographer";
import Footer from "@/Components/Footer";
import Navbar from "@/Layouts/Navbar";
import { Button } from "@mui/material";

export default function UserDashboard() {

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />

            <div className="container mx-auto px-20 mx-10 pt-10">
                <div>
                    <h1 className="text-4xl font-bold">Welcome Back, Raihan</h1>
                </div>

                <div className="flex flex-row pt-10">
                    <div className="basis-3/5 stroke-black">
                        <div className="flex flex-wrap justify-between shadow-xl rounded-2xl p-5">
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
                                <Button variant="outlined" color="secondary">
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
                    <CardPhotographer
                        imageSrc="https://via.placeholder.com/300"
                        name="Wildan Arya"
                        description="Wedding Specialist and Graduation Specialist"
                        rating="4.9"
                        price="Rp. 500,000.00/Hour"
                    />
                    <CardPhotographer
                        imageSrc="https://via.placeholder.com/300"
                        name="Wildan Arya"
                        description="Wedding Specialist and Graduation Specialist"
                        rating="4.9"
                        price="Rp. 500,000.00/Hour"
                    />
                    <CardPhotographer
                        imageSrc="https://via.placeholder.com/300"
                        name="Wildan Arya"
                        description="Wedding Specialist and Graduation Specialist"
                        rating="4.9"
                        price="Rp. 500,000.00/Hour"
                    />
                    <CardPhotographer
                        imageSrc="https://via.placeholder.com/300"
                        name="Wildan Arya"
                        description="Wedding Specialist and Graduation Specialist"
                        rating="4.9"
                        price="Rp. 500,000.00/Hour"
                    />
                </div>

                <div className="pt-10 ps-3">
                    <h1 className="text-4xl font-bold">Order Status</h1>
                </div>

                <div class="overflow-x-auto pt-5 pb-5">
                    <table class="min-w-full table-auto border border-gray-300">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Name
                                </th>
                                <th class="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Email
                                </th>
                                <th class="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Role
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 border border-gray-300">
                                    John Doe
                                </td>
                                <td class="px-4 py-2 border border-gray-300">
                                    john@example.com
                                </td>
                                <td class="px-4 py-2 border border-gray-300">
                                    Admin
                                </td>
                            </tr>
                            <tr class="bg-gray-100">
                                <td class="px-4 py-2 border border-gray-300">
                                    Jane Smith
                                </td>
                                <td class="px-4 py-2 border border-gray-300">
                                    jane@example.com
                                </td>
                                <td class="px-4 py-2 border border-gray-300">
                                    Editor
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer/>
        </>
    );
}
