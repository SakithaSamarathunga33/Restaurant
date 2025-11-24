'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-32 relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}>
                </div>

                <h1 className="text-9xl font-bold text-[#CB3A1A] mb-4 font-serif">404</h1>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Page Not Found</h2>
                <p className="text-gray-600 max-w-md mb-10 text-lg">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link href="/">
                    <Button>BACK TO HOME</Button>
                </Link>
            </div>

            <Footer />
        </main>
    );
}
