import fs from "fs";
import path from "path";
import Gallery from "@/components/Gallery"; // <-- we'll create this

export default function GalleryPage() {
    const galleryFolder = path.join(process.cwd(), "public", "images", "gallery");
    const images = fs.readdirSync(galleryFolder);

    return (
        <Gallery images={images} />
    );
}
