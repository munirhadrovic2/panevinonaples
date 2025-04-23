"use client";

import Image from "next/image";
import Link from "next/link"; // <-- we need Link for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
    const menuItems = [
        { title: "Antipasti", image: "/images/menu/antipasti.jpg", link: "/antipasti" },
        { title: "Salad", image: "/images/menu/salad.jpg", link: "/salad" },
        { title: "Pasta", image: "/images/menu/pasta.jpg", link: "/pasta" },
        { title: "Pollo (Chicken), Vitello (Veal), and Parmigiana", image: "/images/menu/pollo.jpg", link: "/pollo" },
        { title: "Seafood", image: "/images/menu/seafood.jpg", link: "/seafood" },
        { title: "Specials of the Night", image: "/images/menu/specials.jpg", link: "/specials" },
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
                    Specials of the Night, Seafood, Chicken and Veal, Pasta, Salad, Antipasti
                </h2>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    {menuItems.map((item, index) => (
                        <Link href={item.link} key={index} className="relative group overflow-hidden rounded-lg shadow-md block">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <h3 className="text-white text-xl font-semibold text-center px-4">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Printable Menu Button */}
                <div className="flex justify-center">
                    <a
                        href="/menu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-md text-lg transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={faPrint} className="w-5 h-5" />
                        See Our Printable Menu
                    </a>
                </div>

            </div>
        </section>
    );
}
