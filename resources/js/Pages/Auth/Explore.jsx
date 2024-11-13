import React from "react";
import Navbar from "@/Layouts/Navbar";
import DropdownButton from "@/Components/DropdownButton";
import CardPhotographer from "@/Components/CardPhotographer";

export default function Explore() {
    const specializations = [
        { label: "Wedding", href: "#" },
        { label: "Graduation", href: "#" },
    ];

    const locations = [
        { label: "Malang", href: "#" },
        { label: "Surabaya", href: "#" },
    ];

    const prices = [
        { label: "300.000", href: "#" },
        { label: "500.000", href: "#" },
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
                        label="Specialization"
                        actions={specializations}
                    />
                    <DropdownButton
                        id={2}
                        label="Location"
                        actions={locations}
                    />
                    <DropdownButton
                        id={2}
                        label="Price"
                        actions={prices}
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
