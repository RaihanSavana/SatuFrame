import { Head, useForm, router } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import React from "react";

const FotograferInformation = ({ fotografer: initialFotografer }) => {
    const { data, setData, processing, errors } = useForm({
        spesialisasi: initialFotografer.spesialisasi.split(","),
        portofolio: initialFotografer.portofolio ? JSON.parse(initialFotografer.portofolio) : [],
        foto_profil: initialFotografer.foto_profil,
        deskripsi: initialFotografer.deskripsi,
        kota: initialFotografer.kota,
        floor_price: initialFotografer.floor_price,
    });

    const [isEditing, setIsEditing] = React.useState(false);

    // Handle changes in the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Handle file input changes for portfolio and profile photo
    const handleFileChange = (e) => {
        setData("portofolio", Array.from(e.target.files));
    };

    const handleFotoProfilChange = (e) => {
        setData("foto_profil", e.target.files[0]);
    };

    // Handle checkbox selection for specialization
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setData("spesialisasi", [...data.spesialisasi, value]);
        } else {
            setData("spesialisasi", data.spesialisasi.filter((item) => item !== value));
        }
    };

    // Submit updated data
    const handleUpdate = (e) => {
        e.preventDefault();
        router.post(route("fotografer.update.information", initialFotografer.id), {
            _method: "patch",
            spesialisasi: data.spesialisasi,
            portofolio: data.portofolio,
            foto_profil: data.foto_profil,
            deskripsi: data.deskripsi,
            kota: data.kota,
            floor_price: data.floor_price,
        });
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8 pt-20">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        {isEditing ? "Edit Photographer Information" : "Photographer Information"}
                    </h2>

                    <form onSubmit={handleUpdate}>
                        <div className="space-y-4">
                            {/* Specialization */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Specialization</label>
                                <div className="flex flex-wrap gap-4">
                                    {["Wedding", "Portrait", "Commercial", "Event"].map((specialty) => (
                                        <label key={specialty} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={specialty}
                                                onChange={handleCheckboxChange}
                                                checked={data.spesialisasi.includes(specialty)}
                                                disabled={!isEditing}
                                            />
                                            <span className="ml-2">{specialty}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.spesialisasi && (
                                    <span className="text-red-500">{errors.spesialisasi}</span>
                                )}
                            </div>

                            {/* Portfolio Files */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Portfolio Files</label>
                                <input
                                    id="portofolio"
                                    name="portofolio"
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full"
                                />
                                {errors.portofolio && (
                                    <span className="text-red-500">{errors.portofolio}</span>
                                )}
                            </div>

                            {/* Profile Picture */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                                <label
                                    htmlFor="foto_profil"
                                    className="cursor-pointer block mt-1 w-full text-gray-800 border border-gray-300 rounded-md py-2 px-3 bg-white hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                >
                                    <span className="block truncate">{data.foto_profil ? data.foto_profil.name : "Choose a file"}</span>
                                    <input
                                        id="foto_profil"
                                        name="foto_profil"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFotoProfilChange}
                                        disabled={!isEditing}
                                    />
                                </label>
                                {errors.foto_profil && (
                                    <span className="text-red-500">{errors.foto_profil}</span>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="deskripsi"
                                    value={data.deskripsi}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.deskripsi && (
                                    <span className="text-red-500">{errors.deskripsi}</span>
                                )}
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <input
                                    type="text"
                                    name="kota"
                                    value={data.kota}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.kota && <span className="text-red-500">{errors.kota}</span>}
                            </div>

                            {/* Floor Price */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Floor Price</label>
                                <input
                                    type="number"
                                    name="floor_price"
                                    value={data.floor_price}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.floor_price && <span className="text-red-500">{errors.floor_price}</span>}
                            </div>
                        </div>

                        {/* Buttons */}
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

export default FotograferInformation;
