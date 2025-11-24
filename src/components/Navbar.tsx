'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
    }, { scope: navRef });

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <nav ref={navRef} className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] max-w-7xl bg-black text-white z-50 shadow-2xl rounded-full md:rounded-[76px] px-4 md:px-8 py-3 md:py-4">
                <div className="flex items-center justify-between h-full">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="Trident Logo"
                                width={32}
                                height={32}
                                className="h-8 md:h-10 w-auto"
                            />
                            <div className="flex flex-col justify-center">
                                <span className="text-yellow-500 text-[8px] md:text-[10px] tracking-[0.2em] leading-none text-center font-serif">TRIDENT</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            <Link href="/" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">Home</Link>
                            <Link href="#" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">Blogs</Link>
                            <Link href="/about" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">About Us</Link>
                            <Link href="#" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">Contact</Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button - 3 Lines */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden flex flex-col gap-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleMobileMenu}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <Link
                        href="/"
                        className="text-white text-2xl font-medium uppercase tracking-wide hover:text-[#CB3A1A] transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="text-white text-2xl font-medium uppercase tracking-wide hover:text-[#CB3A1A] transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/about"
                        className="text-white text-2xl font-medium uppercase tracking-wide hover:text-[#CB3A1A] transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        href="#"
                        className="text-white text-2xl font-medium uppercase tracking-wide hover:text-[#CB3A1A] transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
