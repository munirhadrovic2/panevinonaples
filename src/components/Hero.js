"use client";

import { motion } from "framer-motion"; // ✅ New import for animation

export default function Hero() {
    return (
        <section
            className="w-full min-h-screen pt-20 bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-4"
            >
                <div className="inline-block bg-white/10 border border-white/30 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        A Taste of Italy in the Heart of Naples
                    </h1>
                    <p className="text-lg md:text-2xl text-white mb-6">
                        Panevino Ristorante welcomes you to an authentic Italian dining experience.
                    </p>

                    {/* Trust line */}
                    <p className="text-base md:text-lg text-gray-200 mb-2">
                        The best Italian restaurant in Naples, Florida
                    </p>

                    {/* Address line */}
                    <p className="text-base md:text-lg text-gray-300 mb-6">
                        8853 Tamiami Trail N, Naples
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Primary Button → scroll to Menu section */}
                        <a
                            href="#menu"
                            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md text-lg transition-colors duration-300"
                        >
                            View Menu
                        </a>

                        {/* Secondary Button → scroll to Contact section */}
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
