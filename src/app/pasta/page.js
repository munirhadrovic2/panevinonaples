"use client";

import { useState } from "react";
import Image from "next/image";
import { pastaItems, homemadePastaItems } from "@/data/pasta";
import FoodCard from "@/components/FoodCard";

export default function PastaPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-playfair font-semibold text-center text-primary mb-6 tracking-tight">
                    Pasta
                </h1>

                <p className="text-lg md:text-xl text-[#4a4a4a] font-light italic max-w-3xl mx-auto text-center mb-12 leading-relaxed tracking-wide">
                    Discover the heart of Italian cuisine with our classic and homemade pasta selections.
                    Each dish is crafted with traditional recipes and premium ingredients for an authentic taste of Italy.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Regular Pasta */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6">Pasta</h2>
                        <div className="grid gap-6">
                            {pastaItems.map((item, index) => (
                                <FoodCard key={index} item={item} onClick={() => openModal(item.image)} />
                            ))}
                        </div>
                    </div>

                    {/* Homemade Pasta */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6">Homemade Pasta</h2>
                        <div className="grid gap-6">
                            {homemadePastaItems.map((item, index) => (
                                <FoodCard key={index} item={item} onClick={() => openModal(item.image)} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                        onClick={closeModal}
                    >
                        <div
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Enlarged pasta"
                                width={1600}
                                height={1200}
                                className="object-contain w-auto h-auto max-w-full max-h-full rounded-lg"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white text-4xl"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
