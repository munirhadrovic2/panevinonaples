"use client";

import Image from "next/image";
import Script from "next/script";

export default function Awards() {
    const reviewJson = {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
            '@type': 'Restaurant',
            name: 'Panevino Ristorante',
            url: 'https://panevinonaples.com',
        },
        reviewBody: 'I have never eaten better Italian food, especially Chicken Scarparello.',
        reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1'
        },
        author: {
            '@type': 'Person',
            name: 'Guest'
        }
    };

    return (
        <div>
            {/* Awards Section */}
            <section className="w-full py-20 bg-white">
                <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">

                    {/* Left: Awards Grid */}
                    <div className="flex flex-col gap-6">
                        {/* First Row - Featured Awards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="w-full h-[260px] bg-white shadow-md flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/awards/award-google-2025.png"
                                    alt="Google Award 2025"
                                    width={400}
                                    height={260}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="w-full h-[260px] bg-white shadow-md flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/awards/guru_cert.png"
                                    alt="Guru 2024"
                                    width={400}
                                    height={260}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="w-full h-[260px] bg-white shadow-md flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/awards/best_florida.jpg"
                                    alt="Florida 2024"
                                    width={400}
                                    height={260}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Rest of Awards - Regular Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { src: "/images/awards/lux_life.jpg", alt: "Award 2024" },
                                { src: "/images/awards/2025.png", alt: "Award 2025" },
                                { src: "/images/awards/2024.png", alt: "Award 2024" },
                                { src: "/images/awards/2024-2.jpeg", alt: "Award 2024" },
                                { src: "/images/awards/2024-guru.png", alt: "Guru 2024" },
                                { src: "/images/awards/2023.jpg", alt: "Award 2023" },
                                { src: "/images/awards/2021.jpg", alt: "Award 2021" },
                                { src: "/images/awards/slurpy.jpg", alt: "Award Slurpy 2021" },
                                { src: "/images/awards/2020.jpg", alt: "Award 2020" },
                                { src: "/images/awards/2019.jpg", alt: "Award 2019" },
                                { src: "/images/awards/2018.jpg", alt: "Award 2018" },
                                { src: "/images/awards/2022cafebar.jpg", alt: "Award 2018" },
                            ].map((award, idx) => (
                                <div
                                    key={idx}
                                    className="w-[180px] h-[260px] bg-white shadow-md flex items-center justify-center overflow-hidden"
                                >
                                    <Image
                                        src={award.src}
                                        alt={award.alt}
                                        width={180}
                                        height={260}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Awards Text Block */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            The Best Italian Restaurant in Naples, Florida <span className="font-extrabold">To Dine</span>
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            How it all came to be...
                        </p>
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            The <strong>Naples</strong> area dining scene is better than ever. <strong>Panevino</strong> is a family-owned <strong>Northern Italian Restaurant</strong> serving the community since 1994.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-secondary mb-4">
                            One of our reviews: &quot;I have never eaten better Italian food, especially Chicken Scarparello.&quot;
                        </blockquote>
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            Our mission is to ensure that every guest receives prompt, professional, friendly, and courteous service.
                            We are dedicated to maintaining a clean, comfortable, and well-maintained environment for our guests and staff.
                            At Panevino, we provide nutritious, well-prepared meals made with quality ingredients — all at a fair price.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            Beyond just food, we offer an experience — a place where every detail reflects our deep-rooted Italian heritage. From the aroma of freshly prepared sauces to the warmth of candlelit dinners, we invite you to feel at home the moment you walk through our doors. Whether youapos;re celebrating a special occasion or simply enjoying a weekday meal, our team is honored to welcome you with the same love and passion we put into every dish.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed">
                            Panevino is more than a restaurant — it&apos;s a celebration of authentic Italian flavors, family traditions, and heartfelt hospitality.
                        </p>

                    </div>

                </div>
            </section>

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
                                alt="Panevino Ristorante"
                                width={600}
                                height={400}
                                className="object-cover rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Script id="ld-json-review" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(reviewJson)}
            </Script>
        </div>
    );
}
