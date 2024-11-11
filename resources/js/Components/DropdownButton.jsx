import React, { useState } from "react";

const DropdownButton = ({ id, label, actions }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        aria-expanded={isDropdownOpen ? "true" : "false"}
                        aria-haspopup="true"
                    >
                        {label}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mr-1 ml-2 h-5 w-5"
                            fill="none"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 7l7 7 7-7"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className={`absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ease-in-out ${
                        isDropdownOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                    }`}
                    style={{
                        display: isDropdownOpen ? "block" : "none",
                    }}
                >
                    <div className="py-1">
                        {actions.map((action, index) => (
                            <a
                                key={index}
                                href={action.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {action.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownButton;
