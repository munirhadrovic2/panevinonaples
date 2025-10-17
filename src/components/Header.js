"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                e.target.closest("#mobile-menu") === null &&
                e.target.closest("#menu-button") === null
            ) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [menuOpen]);

    // useEffect(() => {
    //     const hash = window.location.hash;
    //     if (hash) {
    //         const target = document.querySelector(hash);
    //         if (target) {
    //             setTimeout(() => {
    //                 target.scrollIntoView({ behavior: "smooth" });
    //             }, 300);
    //         }
    //     }
    // }, []);



    return (
        <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50 py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Panevino Ristorante Logo"
                            width={200}
                            height={80}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-semibold text-base">
                    {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => {
                        const href =
                            item === "Home"
                                ? "/"
                                : item === "Gallery"
                                    ? "/gallery"
                                    : `/#${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                href={href}
                                className="relative px-3 py-1 hover:text-red-700 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-red-700"
                            >
                                {item}
                            </Link>
                        );
                    })}


                    {/* Facebook Icon */}
                    <a
                        href="https://www.facebook.com/PanevinoRistoranteNaples"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-gray-600 hover:text-red-700"
                    >
                        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                    </a>

                    {/* Phone Number */}
                    <a
                        href="tel:2395148655"
                        className="ml-4 text-gray-800 hover:text-primary text-large font-medium"
                    >
                        (239) 514-8655
                    </a>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    id="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 hover:text-red-700 focus:outline-none text-2xl"
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>
            </div>

            {/* Overlay for backdrop */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
            )}

            {/* Mobile Sliding Menu */}
            <div
                id="mobile-menu"
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out flex flex-col`}
            >
                {/* Close Button inside */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <Image
                            src="/images/logo.png"
                            alt="Panevino Ristorante Logo"
                            width={140}
                            height={60}
                            className="object-contain"
                        />
                    </Link>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-700 hover:text-red-700 text-2xl"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col p-6 space-y-6 flex-grow">
                    {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => {
                        const href =
                            item === "Home"
                                ? "/"
                                : item === "Gallery"
                                    ? "/gallery"
                                    : `/#${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                href={href}
                                className="relative px-3 py-1 hover:text-red-700 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-red-700"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    {/* Facebook Button - moved here */}
                    <a
                        href="https://www.facebook.com/PanevinoRistoranteNaples"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-blue-600 text-white font-bold text-lg py-3 rounded-md hover:bg-blue-700 transition-colors mt-4"
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </header>
    );
}
