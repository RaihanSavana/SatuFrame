import React from "react";
import Navbar from "@/Layouts/Navbar";
import DropdownButton from "@/Components/DropdownButton";
import CardPhotographer from "@/Components/CardPhotographer";

export default function Explore() {
    const dropdownActions1 = [
        { label: "Action 1", href: "#" },
        { label: "Action 2", href: "#" },
    ];

    const dropdownActions2 = [
        { label: "Action 3", href: "#" },
        { label: "Action 4", href: "#" },
    ];

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />

            <div className="container mx-auto px-20 mx-10 pt-10">
                <div className="grid grid-cols-1 pb-7">
                    <div>
                        <h1 className="text-4xl font-bold">
                            You decide what you need.
                        </h1>
                    </div>
                </div>

                <div className="flex flex-wrap gap-5">
                    <DropdownButton
                        id={1}
                        label="Options 1"
                        actions={dropdownActions1}
                    />
                    <DropdownButton
                        id={2}
                        label="Options 2"
                        actions={dropdownActions2}
                    />
                </div>

                <div className="flex gap-5 mt-5">
                    <CardPhotographer
                        imageSrc="https://via.placeholder.com/300"
                        name="Wildan Arya"
                        description="Wedding Specialist and Graduation Specialist"
                        rating="4.9"
                        price="Rp. 500,000.00/Hour"
                    />
                </div>
            </div>
        </>
    );
}
