'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const instagramImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop', alt: 'Food 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop', alt: 'Food 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=200&auto=format&fit=crop', alt: 'Food 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=200&auto=format&fit=crop', alt: 'Food 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=200&auto=format&fit=crop', alt: 'Food 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=200&auto=format&fit=crop', alt: 'Food 6' },
];

const menuItems = [
    'White Castle',
    'Beef Sandwich',
    'Cherry Limeade',
    'Wendy\'s Frosty',
    'Pumpkin Spice',
];

const SocialIcon = ({ path }: { path: string }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#CB3A1A] hover:text-white transition-colors text-black">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d={path} />
        </svg>
    </a>
);

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".footer-column", {
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className="bg-[#0B0B0B] text-white pt-20 pb-10 relative overflow-hidden">
            {/* Background Texture Overlay (Optional) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {/* Column 1: Get in Touch */}
                <div className="footer-column">
                    <h3 className="text-lg font-bold uppercase mb-8 border-b border-gray-800 pb-2 inline-block">
                        Get in Touch
                    </h3>
                    <div className="space-y-4 text-gray-400 text-sm">
                        <p>Silk St, Barbican, London E2Y, UK</p>
                        <p>+39-055-123456</p>
                        <p className="underline decoration-gray-600 underline-offset-4">booking@webexample.com</p>
                    </div>
                    <div className="flex gap-3 mt-8">
                        <SocialIcon path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> {/* Facebook */}
                        <SocialIcon path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> {/* Twitter */}
                        <SocialIcon path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /> {/* LinkedIn */}
                        <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> {/* Instagram */}
                        <SocialIcon path="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.165 18.252c-3.618 0-5.325-1.891-5.325-4.14 0-3.78 3.57-4.298 5.157-4.478 1.35-.158 1.71-.585 1.71-1.148 0-.855-.743-1.35-1.845-1.35-1.238 0-1.935.63-2.025 1.575l-2.655-.337c.247-2.318 2.317-3.488 4.792-3.488 3.308 0 4.883 1.8 4.883 4.028 0 3.532-3.465 4.14-5.04 4.387-1.283.18-1.62.608-1.62 1.215 0 .968.967 1.463 2.16 1.463 1.665 0 2.407-.81 2.542-1.913l2.633.338c-.293 2.452-2.318 3.848-5.367 3.848z" /> {/* Skype-ish */}
                    </div>
                </div>

                {/* Column 2: Food Menu */}
                <div className="footer-column">
                    <h3 className="text-lg font-bold uppercase mb-8 border-b border-gray-800 pb-2 inline-block">
                        Food Menu
                    </h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        {menuItems.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 hover:text-[#CB3A1A] transition-colors cursor-pointer group">
                                <span className="text-[#CB3A1A] group-hover:translate-x-1 transition-transform">→</span>
                                <span className="border-b border-transparent group-hover:border-[#CB3A1A]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Working Hours */}
                <div className="footer-column">
                    <h3 className="text-lg font-bold uppercase mb-8 border-b border-gray-800 pb-2 inline-block">
                        Working Hours
                    </h3>
                    <div className="space-y-4 text-gray-400 text-sm">
                        <div className="flex justify-between border-b border-gray-900 pb-2">
                            <span>Monday - Friday</span>
                            <span className="text-[#CB3A1A]">09:00 - 22:00</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-900 pb-2">
                            <span>Saturday</span>
                            <span className="text-[#CB3A1A]">11:00 - 00:00</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-900 pb-2">
                            <span>Sunday</span>
                            <span className="text-[#CB3A1A]">11:00 - 23:00</span>
                        </div>
                        <p className="text-[#CB3A1A] mt-6 text-xs">* Happy hour 17:00 - 21:00</p>
                    </div>
                </div>

                {/* Column 4: Instagram */}
                <div className="footer-column">
                    <h3 className="text-lg font-bold uppercase mb-8 border-b border-gray-800 pb-2 inline-block">
                        Instagram
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                        {instagramImages.map((image) => (
                            <div key={image.id} className="relative aspect-square bg-gray-800 overflow-hidden group cursor-pointer">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Restaurant. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
