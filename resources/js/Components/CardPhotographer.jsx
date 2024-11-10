import React from "react";

function CardPhotographer({ imageSrc, name, description, rating, price }) {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-48 object-cover"
                src={imageSrc} // Use the image source passed as a prop
                alt="Photographer"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
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
    );
}

export default CardPhotographer;