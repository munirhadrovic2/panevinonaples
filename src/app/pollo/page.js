"use client";

import { useState } from "react";
import Image from "next/image";
import { chickenItems, vealItems, parmigianaItems } from "@/data/pollo";
import FoodCard from "@/components/FoodCard";

export default function PolloPage() {
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
                {/* Page Title */}
                <h1 className="text-5xl md:text-6xl font-playfair font-semibold text-center text-primary mb-6 tracking-tight">
                    Chicken, Veal & Parmigiana
                </h1>

                <p className="text-lg md:text-xl text-[#4a4a4a] font-light italic max-w-3xl mx-auto text-center mb-12 leading-relaxed tracking-wide">
                    Experience our chef's signature creations — from tender chicken and exquisite veal to indulgent Parmigiana. Every dish reflects the heart of Italian comfort food, artfully plated and made with love.
                </p>

                {/* Chicken Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Chicken Dishes</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {chickenItems.map((item, index) => (
                            <FoodCard key={index} item={item} onClick={() => openModal(item.image)} />
                        ))}
                    </div>
                </div>

                {/* Veal Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Veal Dishes</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {vealItems.map((item, index) => (
                            <FoodCard key={index} item={item} onClick={() => openModal(item.image)} />
                        ))}
                    </div>
                </div>

                {/* Parmigiana Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Parmigiana Dishes</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {parmigianaItems.map((item, index) => (
                            <FoodCard key={index} item={item} onClick={() => openModal(item.image)} />
                        ))}
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
                                alt="Dish"
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
