import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Footer";

export default function FotograferProfile({ auth, data = {}, user = {} }) {
    // Ensure data and user are defined before accessing their properties
    const fotoProfil = data?.foto_profil || "https://via.placeholder.com/150"; // Default image if no foto_profil
    const spesialisasi = data?.spesialisasi ? data.spesialisasi.split(",") : []; // Default to empty array if no spesialisasi
    const portofolio = data?.portofolio ? JSON.parse(data.portofolio) : []; // Default to empty array if no portofolio
    const deskripsi = data?.deskripsi || "No description available."; // Default description
    const kota = data?.kota || "Unknown city"; // Default city
    const floorPrice = data?.floor_price || "0"; // Default price

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
                                <div className="col-span-4 sm:col-span-3">
                                    <div className="bg-white shadow rounded-lg p-6">
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={fotoProfil} // Dynamically set the image source
                                                alt="Profile Picture"
                                                className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-cover"
                                            />
                                            <h1 className="text-xl font-bold">
                                                {user?.name || "Anonymous User"}{" "}
                                                {/* Default name */}
                                            </h1>
                                            <p className="text-gray-700">
                                                {user?.role ||
                                                    "No role specified"}{" "}
                                                {/* Default role */}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">
                                            <div className="flex flex-col items-center gap-4 sm:gap-2">
                                                <a
                                                    href={route(
                                                        "fotografer.edit.profile"
                                                    )}
                                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                                >
                                                    Edit Profile
                                                </a>

                                                <h2 className="text-2xl font-semibold">
                                                    {user?.name ||
                                                        "Anonymous User"}{" "}
                                                    {/* Default name */}
                                                </h2>
                                            </div>
                                            <h3 className="text--500">
                                                ⭐ ⭐ ⭐ ⭐ ⭐ 5{" "}
                                                {/* Default rating */}
                                            </h3>
                                            <p className="text-gray-600">
                                                {user?.alamat ||
                                                    "Anonymous User"}
                                                , {kota}
                                            </p>
                                            <div className="flex items-center mt-2">
                                                <p className="text23xl font-semibold text-gray-800 p-4 rounded-lg border border-gray-300 shadow-md hover:bg-gray-200 cursor-pointer">
                                                    Start From
                                                    <span className="font-bold text-gray-900 ml-2">
                                                        Rp.{floorPrice}
                                                    </span>
                                                    <span className="block text-sm mt-2 text-gray-600">
                                                        Book Now
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <hr className="my-6 border-t border-gray-300" />

                                        <div className="flex flex-col">
                                            <ul className="flex flex-col sm:flex-row flex-wrap gap-4">
                                                {spesialisasi.map(
                                                    (spec, index) => (
                                                        <li
                                                            key={index}
                                                            className="mb-2 px-4 py-2 border border-gray-300 rounded-full"
                                                        >
                                                            {spec}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">
                                    About Me
                                </h2>
                                <p className="text-gray-700">{deskripsi}</p>
                                <h3 className="text-xl font-semibold pt-5">
                                    Portofolio
                                </h3>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {portofolio.map((imagePath, index) => (
                                        <div
                                            key={index}
                                            className="w-full h-40 bg-gray-300"
                                        >
                                            <img
                                                src={imagePath.replace(
                                                    /\\/g,
                                                    ""
                                                )} // Remove backslashes from the path
                                                alt={`Image ${index + 1}`}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-5">
                                    <a
                                        href={
                                            data?.portofolio
                                                ? route(
                                                      "fotografer.index.information"
                                                  )
                                                : route(
                                                      "fotografer.edit.information"
                                                  )
                                        } // Conditional route
                                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                    >
                                        {data?.portofolio ? "Update" : "Create"}{" "}
                                        {/* Conditional text */}
                                    </a>
                                </div>

                                <br />
                                <section>
                                    <h3 className="text-xl font-semibold">
                                        Review
                                    </h3>
                                    <div className="flex items-start mt-4">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full">
                                            <img
                                                src="https://api.dicebear.com/7.x/pixel-art/svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold">
                                                Raihan
                                            </h4>
                                            <span className="text-black-500">
                                                ⭐ ⭐ ⭐ ⭐ ⭐ 5
                                            </span>
                                            <p className="mt-2 text-gray-700">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nam
                                                vel purus pellentesque...
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
