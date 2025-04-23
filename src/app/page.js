import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Menu from "@/components/Menu";
import HomeGallery from "@/components/HomeGallery";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Hero />

            <section id="about">
            <Awards />
            </section>

            <section id="menu">
                <Menu />
            </section>

            <section id="gallery">
                <HomeGallery />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    );
}
