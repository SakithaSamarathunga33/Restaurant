'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
    }, { scope: navRef });

    return (
        <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl bg-black text-white z-50 shadow-2xl rounded-[76px] px-8 py-4">
            <div className="flex items-center justify-between h-full">
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="Trident Logo"
                            width={40}
                            height={40}
                            className="h-10 w-auto"
                        />
                        <div className="flex flex-col justify-center">
                            <span className="text-yellow-500 text-[10px] tracking-[0.2em] leading-none text-center font-serif">TRIDENT</span>
                        </div>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-baseline space-x-8">
                        <Link href="#" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">Home</Link>
                        <Link href="#" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">Properties</Link>
                        <Link href="#" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">Blogs</Link>
                        <Link href="#" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">About Us</Link>
                        <Link href="#" className="hover:text-gray-300 text-xs font-medium transition-colors duration-200 uppercase tracking-wide">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
