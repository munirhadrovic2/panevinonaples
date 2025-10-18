import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display } from 'next/font/google';
import Script from 'next/script';

export const viewport = {
    themeColor: '#8B0000',
};

export const metadata = {
    metadataBase: new URL('https://panevinonaples.com'),
    applicationName: 'Panevino Ristorante Naples',
    title: {
        default: 'Panevino Naples - Italian Restaurant on Tamiami Trail',
        template: '%s | Panevino Naples',
    },
    description: 'Family-owned Northern Italian restaurant in Naples, Florida since 1994. Authentic pasta, seafood, and Italian classics on Tamiami Trail North. Reservations accepted.',
    keywords: [
        'Italian restaurant Naples FL',
        'Panevino Ristorante Naples',
        'Northern Italian cuisine',
        'Homemade pasta Naples',
        'Tamiami Trail restaurants',
        'Best Italian food Naples Florida',
    ],
    alternates: {
        canonical: '/',
    },
    manifest: '/manifest.json',
    openGraph: {
        type: 'website',
        url: 'https://panevinonaples.com/',
        title: 'Panevino Naples - Italian Restaurant on Tamiami Trail',
        description: 'Authentic Italian restaurant in Naples, FL since 1994. Pasta, seafood, and Northern Italian dishes. Call (239) 514-8655.',
        siteName: 'Panevino Ristorante Naples',
        images: [
            {
                url: '/images/hero-2.jpg',
                width: 1200,
                height: 630,
                alt: 'Panevino Ristorante Naples - Authentic Italian Dining',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panevino Naples - Italian Restaurant',
        description: 'Northern Italian cuisine in Naples, Florida since 1994. Reservations accepted. Call (239) 514-8655.',
        images: ['/images/hero-2.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon/favicon.ico', sizes: 'any' },
            { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
        ],
        apple: [
            { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    formatDetection: {
        telephone: true,
        address: true,
        email: false,
    },
    other: {
        'geo.region': 'US-FL',
        'geo.placename': 'Naples',
        'geo.position': '26.232610877115057;-81.8090155881942',
        'ICBM': '26.232610877115057, -81.8090155881942',
    },
};

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
    const ldJson = {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: 'Panevino Ristorante',
        image: 'https://panevinonaples.com/images/hero-2.jpg',
        '@id': 'https://panevinonaples.com',
        url: 'https://panevinonaples.com',
        telephone: '+1-239-514-8655',
        priceRange: '$$',
        servesCuisine: ['Italian', 'Northern Italian', 'Seafood', 'Pasta'],
        address: {
            '@type': 'PostalAddress',
            streetAddress: '8853 Tamiami Trail N',
            addressLocality: 'Naples',
            addressRegion: 'FL',
            postalCode: '34108',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 26.232610877115057,
            longitude: -81.8090155881942,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                ],
                opens: '17:00',
                closes: '21:30',
            },
        ],
        sameAs: [
            'https://www.facebook.com/PanevinoRistoranteNaples',
            'https://www.tripadvisor.com/Restaurant_Review-g34467-d393353-Reviews-Panevino_Ristorante_Naples-Naples_Florida.html',
            'https://restaurantguru.com/Panevino-Ristorante-Naples-Florida',
        ],
        hasMenu: 'https://panevinonaples.com/menu.pdf',
        foundingDate: '1994',
        acceptsReservations: true,
    };

    return (
        <html lang="en" className={playfair.className}>
        <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <Script id="ld-json-restaurant" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify(ldJson)}
        </Script>
        </body>
        </html>
    );
}
