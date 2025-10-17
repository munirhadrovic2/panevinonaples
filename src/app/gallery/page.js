import fs from "fs";
import path from "path";
import Gallery from "@/components/Gallery"; // <-- we'll create this

export const metadata = {
    title: 'Gallery - Panevino Ristorante Naples',
    description: 'View our Italian cuisine photo gallery: homemade pasta, seafood, and authentic Northern Italian dishes at Panevino in Naples, FL.',
    alternates: { canonical: '/gallery' },
    openGraph: {
        title: 'Gallery - Panevino Ristorante Naples',
        description: 'Explore photos of our authentic Italian dishes and dining experience in Naples, Florida.',
        url: 'https://panevinonaples.com/gallery',
    },
};

export default function GalleryPage() {
    const galleryFolder = path.join(process.cwd(), "public", "images", "gallery");
    const images = fs.readdirSync(galleryFolder);

    return (
        <Gallery images={images} />
    );
}
