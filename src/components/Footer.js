"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f8f5f0] text-gray-700 pt-16 pb-8 px-6">
            <div className="container mx-auto">

                {/* Top: 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Left Column: Logo + Facebook + Description */}
                    <div className="flex flex-col items-start">
                        <Image
                            src="/images/logo.png"
                            alt="Panevino Ristorante Logo"
                            width={200}
                            height={80}
                            className="object-contain mb-6"
                        />

                        {/* Facebook iframe */}
                        <div className="w-full mb-6">
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPanevinoRistoranteNaples&tabs&width=340&height=140&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                width="340"
                                height="140"
                                style={{ border: 'none', overflow: 'hidden', borderRadius: '0.5rem' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            />

                        </div>

                        {/* Description Text */}
                        <p className="text-md leading-relaxed">
                            Family-owned Northern Italian restaurant serving Naples, Florida since 1994. Authentic cuisine, warm hospitality, and timeless tradition.
                        </p>
                    </div>

                    {/* Center Column: Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Contact</h3>
                        <p className="mb-2">8853 Tamiami Trl N, Naples, FL 34108</p>
                        <p className="mb-2">(239) 514-8655</p>
                        {/*<p className="">info@panevino.com</p>*/}
                    </div>

                    {/* Right Column: Opening Hours */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Opening Hours</h3>
                        <ul className="space-y-2">
                            {[
                                ["Monday", "5:00 PM - 9:30 PM"],
                                ["Tuesday", "5:00 PM - 9:30 PM"],
                                ["Wednesday", "5:00 PM - 9:30 PM"],
                                ["Thursday", "5:00 PM - 9:30 PM"],
                                ["Friday", "5:00 PM - 9:30 PM"],
                                ["Saturday", "5:00 PM - 9:30 PM"],
                                ["Sunday", "5:00 PM - 9:30 PM"],
                            ].map(([day, hours]) => (
                                <li key={day} className="flex justify-between">
                                    <span>{day}</span>
                                    <span>{hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom: Horizontal Quick Links */}
                <div className="border-t border-gray-300 pt-8 flex flex-wrap justify-center gap-6 text-lg font-medium">
                    {[
                        { title: "Home", href: "/" },
                        { title: "About", href: "/about" },
                        { title: "Menu", href: "/menu" },
                        { title: "Gallery", href: "/gallery" },
                        { title: "Contact", href: "/contact" },
                    ].map((link) => (
                        <Link key={link.title} href={link.href} className="hover:text-primary">
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-600 mt-6">
                    &copy; {new Date().getFullYear()} Panevino Ristorante. All rights reserved.
                </div>

            </div>
        </footer>
    );
}