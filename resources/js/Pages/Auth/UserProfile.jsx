import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import toast from "react-hot-toast";

export default function UserProfile({ auth, user }) {
    return (
        <>
            <Head title="Photography Service - Jasa Fotografi" />
            <Navbar auth={auth.auth}></Navbar>
            <br></br>
            <br></br> <br></br>
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img
                                        src="https://api.dicebear.com/7.x/lorelei/svg"
                                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                                    ></img>
                                    <h1 className="text-xl font-bold">
                                        {user.name}
                                    </h1>
                                    <p className="text-gray-700">User</p>
                                    <Link href={route("user.edit.profile")}>
                                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                            <h className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg opacity-70">
                                                Edit Profile
                                            </h>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold ">Email</h2>
                                <p className="text-gray-700">{user.email}</p>
                                <h2 className="text-xl font-bold pt-2">
                                    Nomor Telepon
                                </h2>
                                <p className="text-gray-700">
                                    {user.nomor_telepon}
                                </p>
                                <h2 className="text-xl font-bold pt-2">
                                    Alamat
                                </h2>
                                <p className="text-gray-700">{user.alamat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
