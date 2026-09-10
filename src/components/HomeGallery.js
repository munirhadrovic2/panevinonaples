"use client";

import Image from "next/image";
import { galleryImageAlt } from "@/data/gallery";

export default function HomeGallery() {
    const galleryImages = [
        "inside1.jpg",
        "b9f88da0-7bcc-49fc-b525-3e273a7fc0f0.jpeg",
        "inside3.jpg",
        "img_4.png",
        "inside5.jpg",
        "inside6.jpg",
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
                    {galleryImages.map((file) => (
                        <div
                            key={file}
                            className="overflow-hidden rounded-lg shadow-md group relative"
                        >
                            <Image
                                src={`/images/gallery/${file}`}
                                alt={galleryImageAlt(file)}
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
