import Navbar from "@/Layouts/Navbar";
import React, { useState, useEffect } from "react";

const UserProfile = () => {
    // State untuk menyimpan data user
    const [user, setUser] = useState({
        name: "",
        email: "",
        nomor_telepon: "",
        alamat: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    // Simulasi pengambilan data dari API (misalnya, menggunakan fetch atau axios)
    useEffect(() => {
        // Ambil data user (misalnya, dari API)
        const fetchUserData = async () => {
            const userData = {
                name: "John Doe",
                email: "john.doe@example.com",
                nomor_telepon: "081234567890",
                alamat: "Jl. Merdeka No. 1, Jakarta",
            };
            setUser(userData); // Set data user ke state
        };

        fetchUserData();
    }, []);

    // Handle perubahan pada input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle tombol save
    const handleSave = () => {
        // Simulasi simpan data (misalnya, kirim ke server)
        console.log("Data user disimpan:", user);
        setIsEditing(false); // Nonaktifkan mode editing setelah save
    };

    return (
        <>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 pt-20">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        User Profile
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nomor Telepon
                            </label>
                            <input
                                type="text"
                                name="nomor_telepon"
                                value={user.nomor_telepon}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Alamat
                            </label>
                            <input
                                type="text"
                                name="alamat"
                                value={user.alamat}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                            {isEditing ? "Cancel" : "Edit"}
                        </button>
                        {isEditing && (
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none"
                            >
                                Save
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
