import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display } from 'next/font/google';



export const metadata = {
    title: 'Panevino Naples - Italian Restaurant',
    description: 'Authentic Italian Restaurant in Naples, Florida',
};

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={playfair.className}>
        <body className="font-sans">
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
