import fs from "fs";
import path from "path";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
    title: 'Restaurant Photo Gallery',
    description: 'Photos of our dining room and signature Italian dishes at Panevino Ristorante on Tamiami Trail North in North Naples, Florida.',
    path: '/gallery',
    image: '/images/hero-2.jpg',
    imageAlt: 'Panevino Ristorante in North Naples, FL',
});

const IMAGE_FILE = /\.(jpe?g|png|webp|avif)$/i;

export default function GalleryPage() {
    const galleryFolder = path.join(process.cwd(), "public", "images", "gallery");
    // The folder also holds video.mp4, which Gallery plays separately
    const images = fs.readdirSync(galleryFolder).filter((file) => IMAGE_FILE.test(file));

    return (
        <>
            <Gallery images={images} />
            <JsonLd data={breadcrumbJsonLd("Gallery", "/gallery")} />
        </>
    );
}
