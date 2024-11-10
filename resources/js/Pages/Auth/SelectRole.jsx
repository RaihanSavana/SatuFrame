import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";

export default function SelectRole() {
    return (
        <>
        <Navbar/>
            <Head title="Register" />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link
                        href="/register?role=user"
                        className="group bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all"
                    >
                        <div className="flex justify-center items-center gap-5">
                            <div>
                                <img
                                    srcSet="/images/search.png"
                                    alt=""
                                    className="w-20 h-auto"
                                />
                            </div>
                            <div className="w-6/12">
                                <h3 className="text-xl font-semibold text-center mb-4">
                                    Buying freelance photography services
                                </h3>
                                <p className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    I’m on the lookout for talented
                                    photographers to team up with.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/register?role=fotografer"
                        className="group bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all"
                    >
                        <div className="flex justify-center items-center gap-5">
                            <div>
                                <img
                                    srcSet="/images/photographer.png"
                                    alt=""
                                    className="w-20 h-auto"
                                />
                            </div>
                            <div className="w-6/12">
                                <h3 className="text-xl font-semibold text-center mb-4">
                                    Selling freelance photography services
                                </h3>
                                <p className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    I’m ready to offer my expert photography
                                    services.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
