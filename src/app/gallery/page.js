import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
// Made from public/images/gallery when the site is built (scripts/gallery-list.mjs). The folder
// also holds video.mp4, which Gallery plays separately.
import images from "@/data/galleryImages.json";

export const metadata = pageMetadata({
    title: 'Restaurant Photo Gallery',
    description: 'Photos of our dining room and signature Italian dishes at Panevino Ristorante on Tamiami Trail North in North Naples, Florida.',
    path: '/gallery',
    image: '/images/hero-2.jpg',
    imageAlt: 'Panevino Ristorante in North Naples, FL',
});

export default function GalleryPage() {
    return (
        <>
            <Gallery images={images} />
            <JsonLd data={breadcrumbJsonLd("Gallery", "/gallery")} />
        </>
    );
}
