"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if (result.success) alert("Message sent!");
            else alert("Something went wrong!");
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };


    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
                    Contact Panevino
                </h2>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Left: Google Map */}
                    <div className="flex-1 rounded-lg overflow-hidden shadow-md min-h-[400px] md:min-h-[600px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.1615945099924!2d-81.8090155881942!3d26.232610877115057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1eec86ed5663%3A0xf322da51e68cbda8!2sPanevino%20Ristorante%20Naples!5e0!3m2!1sen!2sus!4v1713993029483!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-[400px] md:h-[600px] border-0"
                        />
                    </div>



                    {/* Right: Contact Form */}
                    <div className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-200 min-h-[600px] flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

                            <div>
                                <label className="block text-primary font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text-primary font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-primary font-semibold mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                                    placeholder="Your Message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-md text-lg transition-transform duration-300 hover:scale-105"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
