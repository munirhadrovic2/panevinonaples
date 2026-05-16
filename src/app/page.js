import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Menu from "@/components/Menu";
import HomeGallery from "@/components/HomeGallery";
import Contact from "@/components/Contact";
import Script from "next/script";

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

            <section id="blog">
                <div id="soro-blog"></div>
                <Script src="https://app.trysoro.com/api/embed/71bda81d-c220-4f3a-bd26-4f88eaf2a7d4" strategy="lazyOnload" />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    );
}
