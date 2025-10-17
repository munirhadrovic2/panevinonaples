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
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
                    Contact Panevino
                </h2>

                {/* Phone Number */}
                <div className="text-center mb-8">
                    <a
                        href="tel:2395148655"
                        className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-primary transition-colors duration-300"
                    >
                        (239) 514-8655
                    </a>
                </div>

                {/* Full-width Google Map */}
                <div className="w-full rounded-lg overflow-hidden shadow-md min-h-[400px] md:min-h-[600px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.1615945099924!2d-81.8090155881942!3d26.232610877115057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1eec86ed5663%3A0xf322da51e68cbda8!2sPanevino%20Ristorante%20Naples!5e0!3m2!1sen!2sus!4v1713993029483!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[400px] md:h-[600px] border-0"
                    />
                </div>

            </div>
        </section>
    );
}
