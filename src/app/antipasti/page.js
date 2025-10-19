"use client";

import { useState } from "react";
import Image from "next/image";
import { hotItems } from "@/data/antipasti";
import FoodCard from "@/components/FoodCard";

export default function AntipastiPage() {
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
                    Antipasti
                </h1>

                <p className="text-lg md:text-xl text-[#4a4a4a] font-light italic max-w-3xl mx-auto text-center mb-12 leading-relaxed tracking-wide">
                    Indulge in the timeless flavors of Italy with our curated selection of Antipasti.
                    From warm, savory starters to chilled delicacies, each dish is crafted with the finest ingredients,
                    offering a perfect introduction to your Panevino dining experience.
                </p>

                {/* Antipasti Items */}
                <div className="grid md:grid-cols-2 gap-8">
                    {hotItems.map((item, index) => (
                        <FoodCard key={index} item={item} onClick={() => openModal(item.image)} />
                    ))}
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
                                alt="Enlarged dish"
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
