"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

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

                {/* Video Section */}
                <div className="mb-16 max-w-5xl mx-auto">
                    <div className="relative w-full rounded-lg overflow-hidden shadow-2xl group">
                        <video
                            ref={videoRef}
                            className="w-full h-auto"
                            muted
                            playsInline
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src="/images/gallery/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play Button Overlay */}
                        {!isPlaying && (
                            <button
                                onClick={handlePlayPause}
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300"
                                aria-label="Play video"
                            >
                                <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 text-primary"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </div>
                            </button>
                        )}

                        {/* Video Controls Overlay */}
                        {isPlaying && (
                            <button
                                onClick={handlePlayPause}
                                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-300"
                                aria-label="Pause video"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                    </div>
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
