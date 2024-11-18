import React from "react";
import Navbar from "@/Layouts/Navbar";
import DropdownButton from "@/Components/DropdownButton";
import CardPhotographer from "@/Components/CardPhotographer";

export default function Explore({ fotografers }) {
    const specializations = [{ label: "Wedding", href: "#" }];
    const locations = [{ label: "Malang", href: "#" }];
    const prices = [
        { label: "Lowest to highest", href: "#" },
        { label: "Highest to lowest", href: "#" },
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
                    <DropdownButton id={2} label="Price" actions={prices} />
                </div>

                {/* Render Photographer Cards */}
                <div className="flex flex-wrap gap-5 mt-5">
                    {fotografers && fotografers.length > 0 ? (
                        fotografers.map((fotografer) => (
                            <CardPhotographer
                                key={fotografer.id}
                                href={`profile/${fotografer.id}`}
                                imageSrc={
                                    fotografer.foto_profil ||
                                    "https://via.placeholder.com/300"
                                }
                                name={fotografer.user.name}
                                description={fotografer.spesialisasi}
                                rating="4.9"
                                price={`Rp. ${fotografer.floor_price}`}
                            />
                        ))
                    ) : (
                        <p>No photographers found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
