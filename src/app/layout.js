import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Panevino Naples - Italian Restaurant',
    description: 'Authentic Italian Restaurant in Naples, Florida',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="font-sans">
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
