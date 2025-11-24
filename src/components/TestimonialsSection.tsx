'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        text: "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.",
        name: "Amanda Martin",
        role: "Food Reviewer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        text: "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.",
        name: "Amanda Martin",
        role: "Food Reviewer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
];

const GarlicIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M50 10 C50 10 20 40 20 70 C20 85 35 95 50 95 C65 95 80 85 80 70 C80 40 50 10 50 10 Z" />
        <path d="M50 10 C50 10 35 40 35 70" />
        <path d="M50 10 C50 10 65 40 65 70" />
    </svg>
);

const BurgerIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 50 Q20 20 50 20 Q80 20 80 50" />
        <rect x="15" y="55" width="70" height="10" rx="5" />
        <path d="M20 70 Q20 90 50 90 Q80 90 80 70 L80 70 L20 70 Z" />
    </svg>
);

const MuffinIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M25 40 L30 90 L70 90 L75 40 Z" />
        <path d="M20 40 Q35 10 50 40 Q65 10 80 40" />
        <path d="M35 40 L35 90" strokeDasharray="4 4" />
        <path d="M50 40 L50 90" strokeDasharray="4 4" />
        <path d="M65 40 L65 90" strokeDasharray="4 4" />
    </svg>
);

const CoffeeBeanIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="50" cy="50" rx="30" ry="40" transform="rotate(-30 50 50)" />
        <path d="M40 20 Q60 50 40 80" />
    </svg>
);

const TestimonialsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".testimonial-header", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".testimonial-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-white py-20 overflow-hidden">
            {/* Background Icons */}
            <div className="absolute top-10 left-10 opacity-10 text-[#CB3A1A] w-24 h-24 rotate-[-15deg]">
                <GarlicIcon className="w-full h-full" />
            </div>
            <div className="absolute top-10 right-10 opacity-10 text-[#CB3A1A] w-24 h-24 rotate-[15deg]">
                <MuffinIcon className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-10 text-[#CB3A1A] w-24 h-24 rotate-[15deg]">
                <BurgerIcon className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10 text-[#CB3A1A] w-24 h-24 rotate-[-15deg]">
                <CoffeeBeanIcon className="w-full h-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="testimonial-header text-center mb-16">
                    <span className="bg-[#CB3A1A] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-4">
                        Client Testimonial
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-4">
                        Our Customer Feedbacks
                    </h2>
                    <div className="flex justify-center gap-1 text-[#CB3A1A]">
                        <span>♦</span>
                        <span>♦</span>
                        <span>♦</span>
                        <span>♦</span>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card bg-[#F9F9F9] p-8 md:p-12 border border-red-100 relative group hover:shadow-lg transition-shadow">
                            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                                {testimonial.text}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Quote Icon */}
                            <div className="absolute bottom-8 right-8 text-red-100">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
