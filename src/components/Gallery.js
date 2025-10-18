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

                {/* Masonry Gallery Grid */}
                <div className="masonry-grid">
                    {images.map((filename, index) => (
                        <div
                            key={index}
                            className="masonry-item group cursor-pointer"
                            onClick={() => setSelectedImage(`/images/gallery/${filename}`)}
                        >
                            <div className="relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={`/images/gallery/${filename}`}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
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
                        onClick={(e) => e.stopPropagation()}
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
                            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .masonry-grid {
                    column-count: 1;
                    column-gap: 1.5rem;
                }

                @media (min-width: 640px) {
                    .masonry-grid {
                        column-count: 2;
                    }
                }

                @media (min-width: 1024px) {
                    .masonry-grid {
                        column-count: 3;
                    }
                }

                @media (min-width: 1280px) {
                    .masonry-grid {
                        column-count: 4;
                    }
                }

                .masonry-item {
                    break-inside: avoid;
                    margin-bottom: 1.5rem;
                    display: inline-block;
                    width: 100%;
                }
            `}</style>
        </section>
    );
}
