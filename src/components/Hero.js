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
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="w-full min-h-screen pt-20 relative flex items-start justify-center overflow-hidden">

            {/* Fallback Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${heroImages[currentImage]}')`,
                        zIndex: 0,
                    }}
                />

                {/* Animated overlay for fade + zoom */}
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

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4 mt-[12vh] md:mt-[14vh]"
                >
                    <div className="inline-block bg-white/10 border border-white/30 backdrop-blur-[1px] px-4 py-5 md:px-6 md:py-6 rounded-lg shadow-xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                            A Taste of Italy in the Heart of Naples
                        </h1>
                        <p className="text-base md:text-xl text-white mb-4">
                            Panevino Ristorante welcomes you to an authentic Italian dining experience.
                        </p>

                        <p className="text-sm md:text-base text-gray-200 mb-1">
                            The best Italian restaurant in Naples, Florida
                        </p>

                        <p className="text-sm md:text-base text-gray-300 mb-4">
                            8853 Tamiami Trail N, Naples
                        </p>

                        {/* Desktop Buttons */}
                        <div className="hidden sm:flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="#menu"
                                className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md text-base transition-colors duration-300"
                            >
                                View Menu
                            </a>
                            <a
                                href="#contact"
                                className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-md text-base transition-colors duration-300 hover:bg-white hover:text-primary"
                            >
                                Reserve Now
                            </a>
                        </div>
                    </div>

                </motion.div>
            </section>

            {/* Mobile Sticky Button Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex sm:hidden z-50">
                <a
                    href="#menu"
                    className="w-1/2 text-center py-4 text-lg font-semibold text-primary border-r border-gray-200 hover:bg-gray-50"
                >
                    View Menu
                </a>
                <a
                    href="tel:2395148655"
                    className="w-1/2 text-center py-4 text-lg font-semibold bg-primary text-white hover:bg-primary-dark"
                >
                    Call Us
                </a>
            </div>
        </>
    );
}
