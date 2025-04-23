"use client";

import Image from "next/image";

export default function FoodCard({ item, onClick }) {
    return (
        <div
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer border"
            onClick={() => onClick(item.image)}
        >
            <div className="flex items-stretch">
                <div className="w-32 h-32 relative flex-shrink-0">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center p-4 w-full">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-normal text-gray-800">
                            {item.title}
                        </h3>
                        <span className="text-lg font-semibold text-primary whitespace-nowrap">
                            {item.price}
                        </span>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
