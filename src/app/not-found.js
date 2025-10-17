import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 pt-20">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors duration-300"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
