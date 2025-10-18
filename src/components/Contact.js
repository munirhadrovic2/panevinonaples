"use client";

export default function Contact() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
                    Contact Panevino
                </h2>

                {/* Phone Number */}
                <div className="text-center mb-8">
                    <a
                        href="tel:2395148655"
                        aria-label="Call Panevino Ristorante Naples at 239-514-8655"
                        className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-primary transition-colors duration-300"
                    >
                        (239) 514-8655
                    </a>
                </div>

                {/* Full-width Google Map */}
                <div className="w-full rounded-lg overflow-hidden shadow-md min-h-[400px] md:min-h-[600px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.1615945099924!2d-81.8090155881942!3d26.232610877115057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1eec86ed5663%3A0xf322da51e68cbda8!2sPanevino%20Ristorante%20Naples!5e0!3m2!1sen!2sus!4v1713993029483!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        title="Map to Panevino Ristorante Naples on Tamiami Trail North"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[400px] md:h-[600px] border-0"
                    />

                    {/* Directions Button Overlay - Visible on all devices */}
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Panevino+Ristorante+Naples,8853+Tamiami+Trail+N,Naples,FL+34108"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-white hover:bg-gray-50 shadow-lg rounded-lg px-4 py-3 flex items-center gap-2 transition-all duration-300 hover:shadow-xl z-10"
                        aria-label="Get directions to Panevino Ristorante Naples"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span className="text-sm md:text-base font-semibold text-gray-800">Directions</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
