"use client";

import Image from "next/image";

export default function HomeGallery() {
    const galleryImages = [
        "/images/gallery/inside1.jpg",
        "/images/gallery/inside2.jpg",
        "/images/gallery/inside3.jpg",
        "/images/gallery/inside4.jpg",
        "/images/gallery/inside5.jpg",
        "/images/gallery/inside6.jpg",
    ];

    return (
        <section className="w-full py-20 bg-accent">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
                    A Glimpse Inside Panevino
                </h2>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {galleryImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-lg shadow-md group relative"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                width={400}
                                height={300}
                                className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* View Full Gallery Button */}
                <div className="flex justify-center">
                    <a
                        href="/gallery"
                        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-md text-lg transition-transform duration-300 hover:scale-105"
                    >
                        View Our Full Gallery
                    </a>
                </div>

            </div>
        </section>
    );
}
