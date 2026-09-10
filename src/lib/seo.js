import { hotItems } from "@/data/antipasti";
import { saladItems } from "@/data/salad";
import { pastaItems, homemadePastaItems } from "@/data/pasta";
import { chickenItems, vealItems, parmigianaItems } from "@/data/pollo";
import { seafoodItems } from "@/data/seafood";
import { specialsItems } from "@/data/specials";

export const SITE_URL = "https://panevinonaples.com";
export const SITE_NAME = "Panevino Ristorante Naples";
export const TITLE_SUFFIX = "Panevino Naples";

// hero-2.jpg and every /images/menu/*.jpg are 1030x687
export const SHARE_IMAGE_SIZE = { width: 1030, height: 687 };

const RESTAURANT_ID = `${SITE_URL}/#restaurant`;

const absoluteUrl = (path) => `${SITE_URL}${path}`;

export const MENU_SECTIONS = [
    {
        slug: "antipasti",
        name: "Antipasti",
        image: "/images/menu/antipasti.jpg",
        groups: [{ items: hotItems }],
    },
    {
        slug: "salad",
        name: "Salad and Cold Antipasti",
        image: "/images/menu/salad.jpg",
        groups: [{ items: saladItems }],
    },
    {
        slug: "pasta",
        name: "Pasta",
        image: "/images/menu/pasta.jpg",
        groups: [
            { name: "Pasta", items: pastaItems },
            { name: "Homemade Pasta", items: homemadePastaItems },
        ],
    },
    {
        slug: "pollo",
        name: "Chicken, Veal and Parmigiana",
        image: "/images/menu/pollo.jpg",
        groups: [
            { name: "Chicken", items: chickenItems },
            { name: "Veal", items: vealItems },
            { name: "Parmigiana", items: parmigianaItems },
        ],
    },
    {
        slug: "seafood",
        name: "Seafood",
        image: "/images/menu/seafood.jpg",
        groups: [{ items: seafoodItems }],
    },
    {
        slug: "specials",
        name: "Chef's Specials of the Night",
        image: "/images/menu/specials.jpg",
        groups: [{ items: specialsItems }],
    },
];

// Menu data is stored in capitals ("PENNE ALLA VODKA"); schema reads better title-cased.
const toTitleCase = (text) =>
    text.toLowerCase().replace(/(^|[\s(/-])(\p{L})/gu, (_, sep, letter) => sep + letter.toUpperCase());

function menuItemSchema(item) {
    const price = item.price?.match(/\d+(?:\.\d+)?/)?.[0]; // "Market Price" has none
    return {
        "@type": "MenuItem",
        name: toTitleCase(item.title),
        ...(item.description && { description: item.description }),
        ...(item.image && { image: absoluteUrl(item.image) }),
        ...(price && { offers: { "@type": "Offer", price, priceCurrency: "USD" } }),
    };
}

function menuSectionRef(section) {
    return {
        "@type": "MenuSection",
        "@id": absoluteUrl(`/${section.slug}#menu-section`),
        name: section.name,
        url: absoluteUrl(`/${section.slug}`),
    };
}

function menuSectionSchema(section) {
    const { groups } = section;
    return {
        ...menuSectionRef(section),
        image: absoluteUrl(section.image),
        ...(groups.length === 1
            ? { hasMenuItem: groups[0].items.map(menuItemSchema) }
            : {
                hasMenuSection: groups.map((group) => ({
                    "@type": "MenuSection",
                    name: group.name,
                    hasMenuItem: group.items.map(menuItemSchema),
                })),
            }),
    };
}

function breadcrumbSchema(name, path) {
    return {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
        ],
    };
}

export const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Restaurant",
            "@id": RESTAURANT_ID,
            name: "Panevino Ristorante",
            alternateName: "Panevino Naples",
            description:
                "Family-owned Northern Italian restaurant on Tamiami Trail North in North Naples, Florida, serving homemade pasta, fresh seafood, veal and chef's specials since 1994.",
            url: absoluteUrl("/"),
            logo: absoluteUrl("/images/logo.png"),
            image: [absoluteUrl("/images/hero-2.jpg"), absoluteUrl("/images/guests.jpg")],
            telephone: "+1-239-514-8655",
            priceRange: "$$",
            servesCuisine: ["Italian", "Northern Italian", "Seafood", "Pasta"],
            address: {
                "@type": "PostalAddress",
                streetAddress: "8853 Tamiami Trail N",
                addressLocality: "Naples",
                addressRegion: "FL",
                postalCode: "34108",
                addressCountry: "US",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 26.232610877115057,
                longitude: -81.8090155881942,
            },
            // Google Business Profile listing (CID from the embedded map)
            hasMap: "https://maps.google.com/?cid=17519805545719840168",
            areaServed: ["North Naples", "Naples", "Pelican Bay", "Vanderbilt Beach", "Park Shore"].map((name) => ({
                "@type": "Place",
                name,
            })),
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "17:00",
                    closes: "21:30",
                },
            ],
            acceptsReservations: true,
            foundingDate: "1994",
            // Matches the badges shown in the Awards section
            award: [
                "Naples Award Program Best of Naples 2018 and 2023",
                "Naples Award Program Business Hall of Fame 2019, 2020, 2021 and 2024",
                "LUXlife Restaurant & Bar Awards 2022: Most Authentic Italian Restaurant",
                "LUXlife Culinary Excellence 2022: Northern Italian Cuisine",
                "Guide to Florida Best of Florida 2023, Honorable Mention",
                "Restaurantji Certificate of Excellence 2024",
                "Restaurant Guru Recommended 2024 and 2025",
                "BusinessRate Top 3 Italian Restaurants in Naples 2025",
                "Sluurpy Recommended 2021",
            ],
            sameAs: [
                "https://www.facebook.com/PanevinoRistoranteNaples",
                "https://www.tripadvisor.com/Restaurant_Review-g34467-d393353-Reviews-Panevino_Ristorante_Naples-Naples_Florida.html",
                "https://restaurantguru.com/Panevino-Ristorante-Naples-Florida",
            ],
            hasMenu: {
                "@type": "Menu",
                "@id": absoluteUrl("/#menu"),
                name: "Dinner Menu",
                url: absoluteUrl("/#menu"),
                hasMenuSection: MENU_SECTIONS.map(menuSectionRef),
            },
        },
        {
            "@type": "WebSite",
            "@id": absoluteUrl("/#website"),
            url: absoluteUrl("/"),
            name: SITE_NAME,
            inLanguage: "en-US",
            publisher: { "@id": RESTAURANT_ID },
        },
    ],
};

export function menuPageJsonLd(slug) {
    const section = MENU_SECTIONS.find((s) => s.slug === slug);
    return {
        "@context": "https://schema.org",
        "@graph": [menuSectionSchema(section), breadcrumbSchema(section.name, `/${slug}`)],
    };
}

export function breadcrumbJsonLd(name, path) {
    return { "@context": "https://schema.org", ...breadcrumbSchema(name, path) };
}

// Child routes replace the root openGraph object wholesale, so each page rebuilds it in full.
export function pageMetadata({ title, description, path, image, imageAlt }) {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            siteName: SITE_NAME,
            locale: "en_US",
            url: absoluteUrl(path),
            title: `${title} | ${TITLE_SUFFIX}`,
            description,
            images: [{ url: image, ...SHARE_IMAGE_SIZE, alt: imageAlt }],
        },
    };
}
