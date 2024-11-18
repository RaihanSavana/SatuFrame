import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Footer";

export default function Profile({ auth, fotografer }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(fotografer);
    // Form state
    const { data, setData, post, processing, errors } = useForm({
        date: "",
        start_time: "",
        end_time: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("user.order.store", fotografer.id), {
            onSuccess: () => {
                setIsOpen(false); // Close modal after successful submission
            },
        });
    };

    // Function to close modal when clicking outside the modal area
    const handleOutsideClick = (e) => {
        if (e.target.id === "modal-background") {
            setIsOpen(false);
        }
    };

    return (
        <>
            <Head title="Photography Service - Jasa Fotografi" />
            <Navbar auth={auth.auth}></Navbar>
            <br />
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={fotografer.foto_profil} // Dynamically set the image source
                                        alt="Profile Picture"
                                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-cover"
                                    />
                                    <h1 className="text-xl font-bold">
                                        {fotografer.user.name ||
                                            "Anonymous User"}{" "}
                                        {/* Default name */}
                                    </h1>
                                    <p className="text-gray-700">
                                        {fotografer.user.role ||
                                            "No role specified"}{" "}
                                        {/* Default role */}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">
                                    <div className="flex flex-col items-center gap-4 sm:gap-2">
                                        {auth.user ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setIsOpen(true)
                                                    }
                                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg opacity-70"
                                                >
                                                    Order Now
                                                </button>
                                            </>
                                        ) : (
                                            <p className="text-red-500"></p>
                                        )}

                                        <h2 className="text-2xl font-semibold">
                                            {fotografer.user.name ||
                                                "Anonymous User"}{" "}
                                            {/* Default name */}
                                        </h2>
                                    </div>
                                    <h3 className="text--500">
                                        ⭐ ⭐ ⭐ ⭐ ⭐ 5 {/* Default rating */}
                                    </h3>
                                    <p className="text-gray-600">
                                        {fotografer.user.alamat ||
                                            "Anonymous User"}
                                        , {fotografer.kota}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <p className="text23xl font-semibold text-gray-800 p-4 rounded-lg border border-gray-300 shadow-md hover:bg-gray-200 cursor-pointer">
                                            Start From
                                            <span className="font-bold text-gray-900 ml-2">
                                                Rp.{fotografer.floor_price}
                                            </span>
                                            <span className="block text-sm mt-2 text-gray-600">
                                                Book Now
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300"></hr>
                                <div className="flex flex-col">
                                    <ul className="flex flex-wrap gap-4">
                                        {fotografer.spesialisasi
                                            .split(",")
                                            .map((spesialisasi, index) => (
                                                <li
                                                    key={index}
                                                    className="mb-2 px-4 py-2 border border-gray-300 rounded-full"
                                                >
                                                    {spesialisasi.trim()}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">
                                    About Me
                                </h2>
                                <p className="text-gray-700">
                                    {fotografer.deskripsi}
                                </p>

                                <h3 className="text-xl font-semibold mt-6">
                                    Portfolio
                                </h3>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {JSON.parse(fotografer.portofolio).map(
                                        (imagePath, index) => (
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
                                        )
                                    )}
                                </div>

                                <section className="mt-6">
                                    <h3 className="text-xl font-semibold">
                                        Reviews
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

            {/* Modal */}
            {isOpen && (
                <div
                    id="modal-background"
                    onClick={handleOutsideClick}
                    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4">Order Form</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={data.date}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                                {errors.date && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.date}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="start_time"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    name="start_time"
                                    id="start_time"
                                    value={data.start_time}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                                {errors.start_time && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.start_time}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="end_time"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    name="end_time"
                                    id="end_time"
                                    value={data.end_time}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                                {errors.end_time && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.end_time}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                {processing ? "Submitting..." : "Submit"}
                            </button>
                        </form>

                        {/* Close Modal Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            {/* End of Modal */}

            <Footer />
        </>
    );
}
