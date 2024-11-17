import Navbar from "@/Layouts/Navbar";
import { useForm, router } from "@inertiajs/react";
import React from "react";

const FotograferEditProfile = ({ user: initialUser }) => {
    const { data, setData, processing, errors } = useForm({
        name: initialUser.name,
        email: initialUser.email,
        nomor_telepon: initialUser.nomor_telepon,
        alamat: initialUser.alamat,
    });

    const [isEditing, setIsEditing] = React.useState(false);

    // Handle changes in the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Function to handle form submission
    const handleUpdate = (e) => {
        e.preventDefault();
        router.post(route("fotografer.update.profile", initialUser.id), {
            _method: "patch",
            name: data.name,
            email: data.email,
            nomor_telepon: data.nomor_telepon,
            alamat: data.alamat,
        });
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8 pt-20">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        User Profile
                    </h2>

                    <form onSubmit={handleUpdate}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.name && (
                                    <span className="text-red-500">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.email && (
                                    <span className="text-red-500">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nomor Telepon
                                </label>
                                <input
                                    type="text"
                                    name="nomor_telepon"
                                    value={data.nomor_telepon}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.nomor_telepon && (
                                    <span className="text-red-500">
                                        {errors.nomor_telepon}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    name="alamat"
                                    value={data.alamat}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.alamat && (
                                    <span className="text-red-500">
                                        {errors.alamat}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <button
                                type="button"
                                onClick={() => setIsEditing(!isEditing)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                            >
                                {isEditing ? "Cancel" : "Edit"}
                            </button>
                            {isEditing && (
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none"
                                >
                                    {processing ? "Saving..." : "Save"}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FotograferEditProfile;
