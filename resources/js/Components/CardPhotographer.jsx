import React from "react";

function CardPhotographer({ imageSrc, name, description, rating, price, href }) {
    return (
        <a href={href}>
            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                    className="w-full h-48 object-cover"
                    src={imageSrc}
                    alt="Photographer"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {name}
                    </h2>
                    <p className="text-sm text-gray-600">{description}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-xl">&#9733;</span>
                        <span className="text-gray-800 font-semibold ml-1">
                            {rating}
                        </span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mt-2">
                        {price}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default CardPhotographer;
