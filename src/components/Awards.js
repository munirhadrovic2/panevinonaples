"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { awards, awardAlt } from "@/data/awards";

const firstAwardYear = Math.min(...awards.map((award) => award.year));

function AwardTile({ award, onOpen }) {
    return (
        <button
            type="button"
            onClick={() => onOpen(award)}
            className="block w-full rounded-md bg-white p-2 sm:p-3 text-center shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
            {/* width/height 0 + h-auto keeps each badge's natural shape, which is what makes the masonry work */}
            <Image
                src={award.src}
                alt={awardAlt(award)}
                width={0}
                height={0}
                sizes="(min-width: 1280px) 160px, (min-width: 768px) 20vw, (min-width: 640px) 25vw, 33vw"
                className="h-auto w-full"
            />
            <span className="mt-2 block text-xs font-medium tracking-wide text-gray-500">
                {award.year}
            </span>
        </button>
    );
}

export default function Awards() {
    const [selectedAward, setSelectedAward] = useState(null);

    useEffect(() => {
        if (!selectedAward) return;
        const closeOnEscape = (e) => e.key === "Escape" && setSelectedAward(null);
        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [selectedAward]);

    return (
        <div>
            {/* Awards Section */}
            <section className="w-full py-20 bg-white">
                <div className="container mx-auto">

                    <div className="grid gap-8 md:grid-cols-12 md:gap-16">
                        {/* Left: Heading + Intro */}
                        <div className="md:col-span-5">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                Award-winning since {firstAwardYear}
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                                The Best Italian Restaurant in Naples, Florida <span className="font-extrabold">To Dine</span>
                            </h2>
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                How it all came to be...
                            </p>
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                The <strong>Naples</strong> area dining scene is better than ever. <strong>Panevino</strong> is a family-owned <strong>Northern Italian Restaurant</strong> serving <strong>North Naples</strong> since 1994.
                            </p>
                            <blockquote className="border-l-4 border-primary pl-4 italic text-secondary">
                                One of our reviews: &quot;I have never eaten better Italian food, especially Chicken Scarparello.&quot;
                            </blockquote>
                        </div>

                        {/* Right: Story */}
                        <div className="md:col-span-7 md:pt-9">
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                Our mission is to ensure that every guest receives prompt, professional, friendly, and courteous service.
                                We are dedicated to maintaining a clean, comfortable, and well-maintained environment for our guests and staff.
                                At Panevino, we provide nutritious, well-prepared meals made with quality ingredients — all at a fair price.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                Beyond just food, we offer an experience — a place where every detail reflects our deep-rooted Italian heritage. From the aroma of freshly prepared sauces to the warmth of candlelit dinners, we invite you to feel at home the moment you walk through our doors. Whether you&apos;re celebrating a special occasion or simply enjoying a weekday meal, our team is honored to welcome you with the same love and passion we put into every dish.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed">
                                Panevino is more than a restaurant — it&apos;s a celebration of authentic Italian flavors, family traditions, and heartfelt hospitality.
                            </p>
                        </div>
                    </div>

                    {/* Awards Masonry */}
                    <div className="mt-16">
                        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-gray-200 pb-3">
                            <h3 className="text-xl font-semibold text-gray-900">Awards &amp; Recognition</h3>
                            <p className="text-sm text-gray-500">
                                {awards.length} honors since {firstAwardYear}
                            </p>
                        </div>

                        <ul className="columns-3 gap-4 sm:columns-4 sm:gap-6 md:columns-5 lg:columns-6 xl:columns-7">
                            {awards.map((award) => (
                                <li key={award.src} className="mb-4 break-inside-avoid sm:mb-6">
                                    <AwardTile award={award} onOpen={setSelectedAward} />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* Award Modal */}
            {selectedAward && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedAward(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={awardAlt(selectedAward)}
                >
                    <figure
                        className="relative flex max-h-full w-full max-w-lg flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedAward.src}
                            alt={awardAlt(selectedAward)}
                            width={800}
                            height={1100}
                            className="h-auto max-h-[75vh] w-auto rounded-lg bg-white object-contain p-4"
                        />
                        <figcaption className="mt-4 text-center text-white">
                            {selectedAward.name} · {selectedAward.year}
                        </figcaption>
                        <button
                            type="button"
                            onClick={() => setSelectedAward(null)}
                            className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </figure>
                </div>
            )}

            {/* About Panevino Section */}
            <section className="w-full py-20 bg-accent">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">

                        {/* Text Column with TripAdvisor and Restaurant Guru */}
                        <div className="flex-1 p-8 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                A Tradition of Warm Hospitality
                            </h2>
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                Panevino (the name translates to bread and wine) has provided the best Northern Italian cuisine to the Naples area since early 1994.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                Panevino is a minuscule, Northern Italian neighborhood charmer, most everything made from scratch with the finest ingredients in a word, &quot;Bellisimo.&quot;
                            </p>
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                Panevino was many times given Best of Naples for local Business and mentioned in &quot;Best of the Best&quot; by the Naples Daily News. It has been written up by Dining & Doing.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed mb-4">
                                Chef invites all to enjoy such appetizers as seafood salad with octopus. Spedini romano. Shrimp scampi with lemon sauce; as well as entrees such as pasta, lobster raviolis, chicken scarpariello with sausage, potatoes in white wine. Veal Shank Osso bucco with homemade gnocci, mushrooms and brown gravy sauce. Dover sole fileted tableside. 7-bone baby veal chop contadina country style. Fresh Chilean sea bass. Bronzine. Veal chop Panevino topped with asparagus, melted fresh mozzarella white wine and many more succulent dishes.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed mb-6">
                                Stop in and dine with us to find out why so many people agree the best Italian Restaurant in Naples is Panevino Ristorante.
                            </p>

                            {/* TripAdvisor and Restaurant Guru badges side-by-side */}
                            <div className="flex flex-wrap items-center gap-4">
                                {/* TripAdvisor Badge */}
                                <a
                                    href="https://www.tripadvisor.com/Restaurant_Review-g34467-d393353-Reviews-Panevino_Ristorante_Naples-Naples_Florida.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Image
                                        src="/images/awards/tripadvisor.svg"
                                        alt="TripAdvisor - Panevino Ristorante Naples"
                                        width={160}
                                        height={50}
                                        className="object-contain"
                                    />
                                </a>

                                {/* Restaurant Guru Badge */}
                                <div className="w-[180px] bg-white rounded shadow-md flex items-center justify-center overflow-hidden p-4">
                                    <>
                                        <link href="https://awards.infcdn.net/sq5_n.css" rel="stylesheet" />
                                        <div
                                            id="rest_sq5"
                                            onClick={(event) => {
                                                if (event.target.nodeName.toLowerCase() !== 'a') {
                                                    window.open(event.currentTarget.querySelector('.sq_bot').href);
                                                    return false;
                                                }
                                            }}
                                            className="text-center text-sm leading-snug"
                                        >
                                            <a
                                                href="https://restaurantguru.com/Panevino-Ristorante-Naples-Florida"
                                                className="sq_top"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Panevino
                                            </a>
                                            <div
                                                className="sq_img my-2"
                                                style={{
                                                    background: "url('https://awards.infcdn.net/img/star_white.svg') no-repeat center",
                                                    height: "50px",
                                                }}
                                            >
                                                &nbsp;
                                            </div>
                                            <span>Recommended on</span><br />
                                            <a
                                                href="https://restaurantguru.com"
                                                className="sq_bot"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Restaurant Guru 2019
                                            </a>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>

                        {/* About Image */}
                        <div className="flex-1 flex items-center justify-center p-6">
                            <Image
                                src="/images/guests.jpg"
                                alt="Two couples posing by the gift certificate sign at Panevino"
                                width={600}
                                height={400}
                                className="object-cover rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
