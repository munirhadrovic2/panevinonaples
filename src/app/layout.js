import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import Analytics from "@/components/Analytics";
import { Suspense } from 'react';
import { SITE_URL, SITE_NAME, TITLE_SUFFIX, SHARE_IMAGE_SIZE, restaurantJsonLd } from "@/lib/seo";

export const viewport = {
    themeColor: '#8B0000',
};

const DEFAULT_TITLE = 'Panevino Ristorante | Italian Restaurant in North Naples, FL';
const DEFAULT_DESCRIPTION = "Family-owned Northern Italian restaurant in North Naples, FL since 1994. Homemade pasta, fresh seafood, veal and chef's specials on Tamiami Trail North.";

export const metadata = {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
        default: DEFAULT_TITLE,
        template: `%s | ${TITLE_SUFFIX}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
        'Italian restaurant North Naples',
        'Italian restaurant Naples FL',
        'Panevino Ristorante Naples',
        'Northern Italian cuisine Naples',
        'Homemade pasta Naples FL',
        'Tamiami Trail North restaurants',
        'Italian restaurant near Pelican Bay',
        'Italian restaurant near Vanderbilt Beach',
    ],
    alternates: {
        canonical: '/',
    },
    manifest: '/manifest.json',
    openGraph: {
        type: 'website',
        url: `${SITE_URL}/`,
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        siteName: SITE_NAME,
        images: [
            {
                url: '/images/hero-2.jpg',
                ...SHARE_IMAGE_SIZE,
                alt: 'Panevino Ristorante, Italian restaurant in North Naples, FL',
            },
        ],
        locale: 'en_US',
    },
    // No explicit title/description/image: X falls back to each page's Open Graph tags
    twitter: {
        card: 'summary_large_image',
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

const GTM_ID = 'GTM-K5QFHRRW';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={playfair.className}>
        <head>
            {/* Google Tag Manager */}
            <Script id="gtm-base" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            {/* End Google Tag Manager */}
        </head>
        <body className="font-sans">

        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Analytics 4 */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ZY4D100SNY"
            strategy="afterInteractive"
        />
        <Script id="gtag-setup" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                // Disable automatic page_view for SPA, we'll send it manually on route change
                gtag('config', 'G-ZY4D100SNY', { send_page_view: false });
                // Google Ads
                gtag('config', 'AW-829999246');
            `}
        </Script>

        <Header />
        {/* Track page views on route changes */}
        <Suspense fallback={null}>
            <Analytics measurementId="G-ZY4D100SNY" />
        </Suspense>
        {children}
        <Footer />
        <JsonLd data={restaurantJsonLd} />
        </body>
        </html>
    );
}
