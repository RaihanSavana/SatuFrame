import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Footer";

export default function Profile({ auth }) {
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
                                        wildan
                                    </h1>
                                    <p className="text-gray-700">photografer</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a
                                            href="#"
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg opacity-70"
                                        >
                                            Order Now
                                        </a>

                                        <h2 className="text-2xl font-semibold">
                                            Muhammad Wildan Arya A{" "}
                                        </h2>
                                        <h3 className="text--500">
                                            ⭐ ⭐ ⭐ ⭐ ⭐ 5
                                        </h3>
                                        <p className="text-gray-600">
                                            Malang, Jawa Timur Indonesia
                                        </p>
                                        <p className="text-gray-600">
                                            Monday - Saturday, 07:00 - 17:00
                                        </p>
                                        <div className="flex items-center mt-2">
                                            <p className="text-xl font-semibold">
                                                Rp 300.000 - Rp 500.000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300"></hr>
                                <div className="flex flex-col">
                                    <ul className="flex flex-wrap gap-4">
                                        <li className="mb-2 px-4 py-2 border border-gray-300 rounded-full">
                                            Wedding
                                        </li>
                                        <li className="mb-2 px-4 py-2 border border-gray-300 rounded-full">
                                            Graduation
                                        </li>
                                        <li className="mb-2 px-4 py-2 border border-gray-300 rounded-full">
                                            Formal
                                        </li>
                                        {/* <li className="mb-2 px-4 py-2 border border-gray-300 rounded-full">

                                        </li>
                                        <li className="mb-2 px-4 py-2 border border-gray-300 rounded-full">

                                        </li> */}
                                    </ul>
                                </div>
                                <h3 className="font-semibold text-center mt-3 -mb-2">
                                    Find me on
                                </h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit TrendyMinds YouTube"
                                        href=""
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            className="h-6"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit TrendyMinds Facebook"
                                        href=""
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            className="h-6"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit TrendyMinds Instagram"
                                        href=""
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            className="h-6"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit TrendyMinds Twitter"
                                        href=""
                                        target="_blank"
                                    >
                                        <svg
                                            className="h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">
                                    About Me
                                </h2>
                                <p className="text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit
                                    convallis. Aenean posuere risus non velit
                                    egestas suscipit. Nunc finibus vel ante id
                                    euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere
                                    cubilia Curae; Aliquam erat volutpat. Nulla
                                    vulputate pharetra tellus, in luctus risus
                                    rhoncus id.
                                </p>

                                <h2 className="text-xl font-bold mt-6 mb-4">
                                    Experience
                                </h2>
                                <div className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">
                                            /placeholder
                                        </span>
                                        <p>
                                            <span className="text-gray-700 mr-2">
                                                /placeholder
                                            </span>
                                            <span className="text-gray-700">
                                                /placeholder
                                            </span>
                                        </p>
                                    </div>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit
                                        convallis. Aenean posuere risus non
                                        velit egestas suscipit.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">
                                            /placeholder
                                        </span>
                                        <p>
                                            <span className="text-gray-700 mr-2">
                                                /placeholder
                                            </span>
                                            <span className="text-gray-700">
                                                /placeholder
                                            </span>
                                        </p>
                                    </div>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit
                                        convallis. Aenean posuere risus non
                                        velit egestas suscipit.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">
                                            /placeholder
                                        </span>
                                        <p>
                                            <span className="text-gray-700 mr-2">
                                                /placeholder
                                            </span>
                                            <span className="text-gray-700">
                                                /placeholder
                                            </span>
                                        </p>
                                    </div>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit
                                        convallis. Aenean posuere risus non
                                        velit egestas suscipit.
                                    </p>
                                </div>
                                <h3 className="text-xl font-semibold">
                                    Portofolio
                                </h3>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="w-full h-40 bg-gray-300">
                                        <img
                                            src=""
                                            alt="Image 1"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full h-40 bg-gray-300">
                                        <img
                                            src=""
                                            alt="Image 2"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full h-40 bg-gray-300">
                                        <img
                                            src=""
                                            alt="Image 3"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full h-40 bg-gray-300">
                                        <img
                                            src=""
                                            alt="Image 4"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
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
