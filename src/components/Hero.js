"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 10 seconds per image
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full min-h-screen pt-20 relative flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${heroImages[currentImage]}')`,
                    zIndex: 0,
                }}
            />

            {/* Animated overlay for fade */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    className="absolute inset-0 bg-cover bg-center"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 20, ease: "linear" },
                    }}
                    style={{
                        backgroundImage: `url('${heroImages[currentImage]}')`,
                        zIndex: 1,
                    }}
                />
            </AnimatePresence>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />


            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 text-center px-4"
            >
                <div className="inline-block bg-white/10 border border-white/30 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        A Taste of Italy in the Heart of Naples
                    </h1>
                    <p className="text-lg md:text-2xl text-white mb-6">
                        Panevino Ristorante welcomes you to an authentic Italian dining experience.
                    </p>

                    <p className="text-base md:text-lg text-gray-200 mb-2">
                        The best Italian restaurant in Naples, Florida
                    </p>

                    <p className="text-base md:text-lg text-gray-300 mb-6">
                        8853 Tamiami Trail N, Naples
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#menu"
                            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md text-lg transition-colors duration-300"
                        >
                            View Menu
                        </a>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 border border-white text-white font-semibold rounded-md text-lg transition-colors duration-300 hover:bg-white hover:text-primary"
                        >
                            Reserve Now
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
