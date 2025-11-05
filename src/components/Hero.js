"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/hero-4.jpg",
    "/images/hero-5.jpg",
    "/images/hero-6.jpg",
    "/images/hero-7.jpg",
    "/images/hero-8.jpg",
    "/images/hero-9.jpg",
    "/images/hero-10.jpg",
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(1);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, []);

    const goToPrevious = useCallback(() => {
        setDirection(-1);
        setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }, []);

    const goToSlide = useCallback((index) => {
        setDirection(index > currentImage ? 1 : -1);
        setCurrentImage(index);
    }, [currentImage]);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                goToNext();
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isHovered, goToNext]);

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 1,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 1,
        }),
    };

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
                /* Full-width and full-height hero on desktop */
                @media (min-width: 768px) {
                    .hero-section {
                        position: relative;
                        width: 100vw;
                        height: 100vh;
                        left: 50%;
                        right: 50%;
                        margin-left: -50vw;
                        margin-right: -50vw;
                        padding-top: 0;
                    }
                    /* Hero slide background behavior - full cover on desktop */
                    .hero-slide {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background-size: cover !important;
                        background-position: center !important;
                        background-repeat: no-repeat !important;
                    }
                }
                /* Mobile styles */
                @media (max-width: 767px) {
                    .hero-section {
                        position: relative;
                        width: 100%;
                        min-height: 100vh;
                        padding-top: 80px;
                    }
                    /* On mobile, keep image height at 100% to reduce zoom */
                    .hero-slide {
                        background-size: auto 100%;
                        background-position: center center;
                        background-repeat: no-repeat;
                    }
                }
            `}</style>
            <section
                className="hero-section flex items-start justify-center overflow-hidden bg-black"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >

                {/* Animated overlay for slide transitions */}
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentImage}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "tween", duration: 0.5, ease: "easeInOut" },
                            opacity: { duration: 0.5 }
                        }}
                        className="absolute inset-0 hero-slide"
                        style={{ zIndex: 1 }}
                    >
                        <img
                            src={heroImages[currentImage]}
                            alt="Panevino Hero"
                            className="w-full h-full object-cover"
                            style={{ width: '100vw', height: '100vh' }}
                            draggable={false}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-3 md:p-5 rounded-full shadow-lg"
                    aria-label="Previous slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 md:h-12 md:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={goToNext}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-3 md:p-5 rounded-full shadow-lg"
                    aria-label="Next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 md:h-12 md:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Bottom Left Text - Panevino Ristorante */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute bottom-24 sm:bottom-8 left-4 sm:left-8 z-20 max-w-[90%] pb-2 sm:pb-0 pointer-events-none"
                >
                    <h1 className="gambarino-font text-7xl md:text-9xl text-white leading-none" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                        Panevino<br />Ristorante
                    </h1>
                    <p className="gambarino-font text-3xl md:text-5xl text-white mt-2 font-medium" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)' }}>
                        A Taste of Italy in the Heart of Naples, since 1994
                    </p>

                    {/* Slide Indicators */}
                    <div className="flex gap-3 mt-4 pointer-events-auto">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentImage
                                        ? 'bg-white w-12 h-3'
                                        : 'bg-white/50 hover:bg-white/75 w-3 h-3'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
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
