'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const foodImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1607247098789-6a43ebeaba4e?q=80&w=1000&auto=format&fit=crop',
        alt: 'Shrimp Dish',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=1000&auto=format&fit=crop',
        alt: 'Burger',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop',
        alt: 'Salad',
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1737140790470-d1c4e388a1b2?q=80&w=1000&auto=format&fit=crop',
        alt: 'Skewers',
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
        alt: 'Steak',
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop',
        alt: 'Pasta',
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop',
        alt: 'Sushi',
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1626790708567-f4e61046deac?q=80&w=1000&auto=format&fit=crop',
        alt: 'Dessert',
    },
];

const stats = [
    { number: '15', label: 'NEW', subLabel: 'COOL PROJECTS' },
    { number: '15', label: 'TOTAL', subLabel: 'AWARDS WIN' },
    { number: '20', label: 'UNIQUE', subLabel: 'FOOD SPECIALITIES' },
    { number: '69', label: 'HARD', subLabel: 'TEAM MEMBERS' },
];

const GallerySection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    useGSAP(() => {
        gsap.from(".gallery-header", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".gallery-item", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="gallery-section bg-[#111111] text-white py-20 overflow-hidden">
            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <span className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</span>
                            <div className="flex flex-col text-xs md:text-sm font-medium tracking-wider text-gray-400 uppercase text-left">
                                <span>{stat.label}</span>
                                <span>{stat.subLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Header */}
            <div className="gallery-header max-w-7xl mx-auto px-4 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="bg-[#CB3A1A] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-4">
                            View Our Projects
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase">
                            Our Food Gallery
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={scrollLeft}
                            className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                            ←
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Gallery Grid/Carousel */}
            <div className="w-full">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 px-4 md:px-8 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {foodImages.map((image) => (
                        <div key={image.id} className="gallery-item relative group min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 snap-center">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#CB3A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#CB3A1A" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
