"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="w-full min-h-screen bg-white pt-32 pb-20">
            <div className="container mx-auto px-4">

                {/* Title and Description */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Panevino Ristorante Gallery
                    </h1>
                    <p className="text-lg md:text-xl text-[#4a4a4a] font-light italic max-w-3xl mx-auto text-center mb-12 leading-relaxed tracking-wide">
                        Discover the essence of Panevino through our carefully curated gallery.
                        From artfully crafted dishes to the welcoming atmosphere,
                        every moment reflects our passion for exceptional Italian dining in the heart of Naples.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((filename, index) => (
                        <div
                            key={index}
                            className="relative w-full h-72 rounded-lg overflow-hidden shadow-md group cursor-pointer"
                            onClick={() => setSelectedImage(`/images/gallery/${filename}`)}
                        >
                            <Image
                                src={`/images/gallery/${filename}`}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged Image"
                            width={1200}
                            height={800}
                            className="object-contain rounded-lg w-full h-auto"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white text-3xl font-bold"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
