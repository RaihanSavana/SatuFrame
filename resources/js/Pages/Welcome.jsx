import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Photography Service - Jasa Fotografi" />
            <Navbar auth={auth.auth}></Navbar>
            <div className="pt-12">
                {/* Explore Banner */}
                <div className="pt-10 px-4 md:px-8 lg:px-16">
                    <div
                        className="relative bg-cover bg-center h-64 rounded-2xl overflow-hidden"
                        style={{
                            backgroundImage: "url('/images/landingpage.jpg')",
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
                            <h2 className="text-2xl font-semibold mb-2">
                                Your Simple Solution for Capturing
                            </h2>
                            <h2 className="text-2xl font-semibold mb-4">
                                Life’s Most Precious Moments
                            </h2>
                            <button className="bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>

                {/* Popular Section with Horizontally Scrollable Cards */}
                <div className="pt-12 px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6">Popular Section</h2>
                    <div className="overflow-x-auto">
                        <div className="flex gap-4">
                            {/* Card 1 */}
                            <div className="bg-blue-700 rounded-2xl p-4 min-w-[200px] sm:min-w-[180px] md:min-w-[160px] lg:min-w-[140px]">
                                <h3 className="text-white font-semibold text-lg mb-2 text-center">
                                    Wedding
                                </h3>
                                <div className="bg-white rounded-xl p-2">
                                    <img
                                        src="/images/landingpage.jpg"
                                        alt="Wedding"
                                        className="rounded-xl w-32 h-32 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-blue-700 rounded-2xl p-4 min-w-[200px] sm:min-w-[180px] md:min-w-[160px] lg:min-w-[140px]">
                                <h3 className="text-white font-semibold text-lg mb-2 text-center">
                                    Wedding
                                </h3>
                                <div className="bg-white rounded-xl p-2">
                                    <img
                                        src="/images/popular.jpg"
                                        alt="Wedding"
                                        className="rounded-xl w-32 h-32 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Additional Cards */}
                            <div className="bg-blue-700 rounded-2xl p-4 min-w-[200px] sm:min-w-[180px] md:min-w-[160px] lg:min-w-[140px]">
                                <h3 className="text-white font-semibold text-lg mb-2 text-center">
                                    Wedding
                                </h3>
                                <div className="bg-white rounded-xl p-2">
                                    <img
                                        src="/images/landingpage.jpg"
                                        alt="Wedding"
                                        className="rounded-xl w-32 h-32 object-cover"
                                    />
                                </div>
                            </div>

                            <div className="bg-blue-700 rounded-2xl p-4 min-w-[200px] sm:min-w-[180px] md:min-w-[160px] lg:min-w-[140px]">
                                <h3 className="text-white font-semibold text-lg mb-2 text-center">
                                    Wedding
                                </h3>
                                <div className="bg-white rounded-xl p-2">
                                    <img
                                        src="/images/popular.jpg"
                                        alt="Wedding"
                                        className="rounded-xl w-32 h-32 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 pt-6">
                        The Way of Linking Photographers and Users
                    </h2>
                    <div className="flex flex-wrap gap-2 justify-center bg-gray-100 py-8 rounded-2xl">
                        {/* Feature 1: Comprehensive Photographer Profiles */}
                        <div className="flex flex-col items-center text-center p-4 max-w-xs">
                            <h3 className="text-xl font-semibold mb-2">
                                Comprehensive Photographer Profiles
                            </h3>
                            <p className="text-gray-700">
                                Each photographer has a detailed profile
                                showcasing their portfolio, biography, reviews
                                from previous clients, and availability. This
                                helps you confidently select a photographer who
                                aligns with your style and needs.
                            </p>
                        </div>

                        {/* Feature 2: Search by Category */}
                        <div className="flex flex-col items-center text-center p-4 max-w-xs">
                            <h3 className="text-xl font-semibold mb-2">
                                Search by Category
                            </h3>
                            <p className="text-gray-700">
                                Choose photographers based on categories like
                                weddings, events, portraits, commercial, and
                                more. Filters for location, category, and price
                                range allow you to quickly find the right
                                photographer.
                            </p>
                        </div>

                        {/* Feature 3: Integrated Project Management */}
                        <div className="flex flex-col items-center text-center p-4 max-w-xs">
                            <h3 className="text-xl font-semibold mb-2">
                                Integrated Project Management
                            </h3>
                            <p className="text-gray-700">
                                Track the status of your shoot and delivery of
                                photos with our project management system,
                                ensuring a smooth, structured experience from
                                start to finish.
                            </p>
                        </div>

                        {/* Feature 4: Transparent Pricing and Secure Payment */}
                        <div className="flex flex-col items-center text-center p-4 max-w-xs">
                            <h3 className="text-xl font-semibold mb-2">
                                Transparent Pricing and Secure Payment
                            </h3>
                            <p className="text-gray-700">
                                Select a photographer that fits your budget and
                                make secure payments directly through our
                                platform. SatuFrame guarantees every transaction
                                is handled with transparency and reliability.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-8 rounded-2xl shadow-md">
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
                            <h2 className="text-3xl font-bold mb-4">
                                Why SatuFrame?
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                With features tailored to meet the needs of both
                                clients and photographers, SatuFrame offers a
                                seamless and efficient experience. We provide
                                not only a platform but also a solution to help
                                you find the right photographer that matches
                                your budget, preferences, and schedule.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="/images/landingpage2.jpg" // Replace with your actual image path
                                alt="Why SatuFrame"
                                className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
