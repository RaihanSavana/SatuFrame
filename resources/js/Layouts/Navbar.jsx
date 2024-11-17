import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CiLogout } from "react-icons/ci";

export default function Navbar() {
    const { auth } = usePage().props;

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                className={`hidden lg:block fixed top-0 w-full z-10 ${
                    isScrolled ? "bg-white shadow-md" : ""
                }`}
            >
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <Link href={route("landing_page")}>
                        <div className="flex items-center">
                            <h1 className="font-bold text-2xl text-black">
                                Satu
                            </h1>
                            <h1 className="font-bold text-2xl text-black">
                                Frame.
                            </h1>
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <ul className="flex gap-8">
                            {auth.user ? (
                                auth.role === "fotografer" ? (
                                    <>
                                        <li>
                                            <span
                                                className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                                onClick={closeNavbar}
                                            >
                                                <span className="underline"></span>
                                                <Link
                                                    href={route(
                                                        "fotografer.dashboard"
                                                    )}
                                                >
                                                    Dashboard
                                                </Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                                onClick={closeNavbar}
                                            >
                                                <span className="underline"></span>
                                                <Link
                                                    href={route(
                                                        "fotografer.profile"
                                                    )}
                                                >
                                                    Profile
                                                </Link>
                                            </span>
                                        </li>
                                        <li>
                                            <div className="pt-1">
                                                <Link href={route("logout")}>
                                                    <CiLogout size={18} />
                                                </Link>
                                            </div>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <span
                                                className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                                onClick={closeNavbar}
                                            >
                                                <span className="underline"></span>
                                                <Link
                                                    href={route(
                                                        "user.dashboard"
                                                    )}
                                                >
                                                    Dashboard
                                                </Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                                onClick={closeNavbar}
                                            >
                                                <span className="underline"></span>
                                                <Link href={route("explore")}>
                                                    Explore
                                                </Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                                onClick={closeNavbar}
                                            >
                                                <span className="underline"></span>
                                                <Link
                                                    href={route("user.order")}
                                                >
                                                    Order
                                                </Link>
                                            </span>
                                        </li>
                                        <li>
                                            <div className="">
                                                <Link href={route("user.profile")}>
                                                    <img
                                                        src="https://api.dicebear.com/7.x/lorelei/svg"
                                                        className="w-8 h-8 bg-gray-300 rounded-full mb-4 shrink-0"
                                                    ></img>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pt-1">
                                                <Link href={route("logout")}>
                                                    <CiLogout size={18} />
                                                </Link>
                                            </div>
                                        </li>
                                    </>
                                )
                            ) : (
                                <>
                                    <li>
                                        <span
                                            className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                            onClick={closeNavbar}
                                        >
                                            <span className="underline"></span>
                                            <Link href={route("explore")}>
                                                Explore
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                            onClick={closeNavbar}
                                        >
                                            <span className="underline"></span>
                                            <Link href={route("login")}>
                                                Login
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className="nav cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                            onClick={closeNavbar}
                                        >
                                            <span className="underline"></span>
                                            <button className="button1 bg-transparent rounded-2xl font-semibold py-0.3 px-6 border border-blue-500 hover:border-transparent rounded transition-colors duration-500  text-base">
                                                <Link
                                                    href={route("select_role")}
                                                >
                                                    Join
                                                </Link>
                                            </button>
                                        </span>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden fixed top-0 w-full z-10">
                <div
                    className={`container mx-auto px-4 py-6 ${
                        isScrolled || isOpen ? "bg-white shadow-md" : ""
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <h1 className="font-bold text-xl text-black">
                                Satu
                            </h1>
                            <h1 className="font-bold text-xl text-black">
                                Frame
                            </h1>
                        </div>
                        <div className="lg:hidden">
                            <button
                                onClick={toggleNavbar}
                                className="text-black focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                    transition={{ duration: 0.3 }}
                    className={`container mx-auto px-4 py-6 ${
                        isOpen ? "block" : "hidden"
                    } ${isScrolled || isOpen ? "bg-white shadow-md" : ""}`}
                >
                    <ul className="flex flex-col gap-4">
                        {auth.user ? (
                            auth.role === "fotografer" ? (
                                <>
                                    <motion.li
                                        whileHover={{ scale: 1 }}
                                        className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                        onClick={closeNavbar}
                                    >
                                        <Link className="hover:underline">
                                            <Link
                                                href={route(
                                                    "fotografer.dashboard"
                                                )}
                                            >
                                                Dashboard
                                            </Link>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1 }}
                                        className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                        onClick={closeNavbar}
                                    >
                                        <Link className="hover:underline">
                                            <Link
                                                href={route(
                                                    "fotografer.profile"
                                                )}
                                            >
                                                Profile
                                            </Link>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1 }}
                                        className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                        onClick={closeNavbar}
                                    >
                                        <Link className="hover:underline">
                                            <Link href={route("logout")}>
                                                Logout
                                            </Link>
                                        </Link>
                                    </motion.li>
                                </>
                            ) : (
                                <>
                                    <motion.li
                                        whileHover={{ scale: 1 }}
                                        className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                        onClick={closeNavbar}
                                    >
                                        <Link className="hover:underline">
                                            <Link
                                                href={route("user.dashboard")}
                                            >
                                                Dashboard
                                            </Link>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1 }}
                                        className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                        onClick={closeNavbar}
                                    >
                                        <Link
                                            className="hover:underline"
                                            href={route("explore")}
                                        >
                                            Explore
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1 }}
                                        className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                        onClick={closeNavbar}
                                    >
                                        <Link className="hover:underline">
                                            <Link href={route("user.order")}>
                                                Order
                                            </Link>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1 }}
                                        className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                        onClick={closeNavbar}
                                    >
                                        <Link className="hover:underline">
                                            <Link href={route("logout")}>
                                                Logout
                                            </Link>
                                        </Link>
                                    </motion.li>
                                </>
                            )
                        ) : (
                            <>
                                <motion.li
                                    whileHover={{ scale: 1 }}
                                    className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <Link
                                        className="hover:underline"
                                        href={route("explore")}
                                    >
                                        Explore
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1 }}
                                    className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <Link className="hover:underline">
                                        <Link href={route("landing_page")}>
                                            Login
                                        </Link>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1 }}
                                    className="cursor-pointer text-black hover:text-blue-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <Link className="hover:underline">
                                        <Link href={route("landing_page")}>
                                            Register
                                        </Link>
                                    </Link>
                                </motion.li>
                            </>
                        )}
                    </ul>
                </motion.div>
            </div>
        </>
    );
}
