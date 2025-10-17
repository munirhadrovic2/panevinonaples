"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/hero-4.jpg",
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
            <style jsx>{`
                @font-face {
                    font-family: 'Gambarino-Regular';
                    src: url('/fonts/Gambarino-Regular.woff2') format('woff2'),
                         url('/fonts/Gambarino-Regular.woff') format('woff'),
                         url('/fonts/Gambarino-Regular.ttf') format('truetype');
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }
                .gambarino-font {
                    font-family: 'Gambarino-Regular', serif;
                }
            `}</style>
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

                {/* Bottom Left Text - Panevino Ristorante */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute bottom-24 sm:bottom-8 left-4 sm:left-8 z-20 max-w-[90%] pb-4 sm:pb-0"
                >
                    <h2 className="gambarino-font text-7xl md:text-9xl text-white leading-none" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                        Panevino<br />Ristorante
                    </h2>
                    <p className="gambarino-font text-3xl md:text-5xl text-white mt-2 font-medium" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.25)' }}>
                        A Taste of Italy in the Heart of Naples
                    </p>
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
