import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Footer";

export default function FotograferProfile({ auth, data, user }) {
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
                                        src={data.foto_profil} // Dynamically set the image source
                                        alt="Profile Picture"
                                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-cover"
                                    />

                                    <h1 className="text-xl font-bold">
                                        {user.name}
                                    </h1>
                                    <p className="text-gray-700">{user.role}</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a
                                            href={route(
                                                "fotografer.edit.profile"
                                            )}
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg opacity-70"
                                        >
                                            Edit Profile
                                        </a>

                                        <h2 className="text-2xl font-semibold">
                                            {user.name}
                                        </h2>
                                        <h3 className="text--500">
                                            ⭐ ⭐ ⭐ ⭐ ⭐ 5
                                        </h3>
                                        <p className="text-gray-600">
                                            {data.kota}
                                        </p>
                                        <div className="flex items-center mt-2">
                                            <p className="text-xl font-semibold">
                                                Start From {data.floor_price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300"></hr>
                                <div className="flex flex-col">
                                    <ul className="flex flex-wrap gap-4">
                                        {data.spesialisasi
                                            .split(",")
                                            .map((spec, index) => (
                                                <li
                                                    key={index}
                                                    className="mb-2 px-4 py-2 border border-gray-300 rounded-full"
                                                >
                                                    {spec}
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
                                    {data.deskripsi}
                                </p>
                                <h3 className="text-xl font-semibold pt-5">
                                    Portofolio
                                </h3>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {JSON.parse(data.portofolio).map(
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

                                <div className="pt-5">
                                    <a
                                        href={route(
                                            "fotografer.edit.information"
                                        )}
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg opacity-70"
                                    >
                                        Add
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
