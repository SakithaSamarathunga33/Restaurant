'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        id: 1,
        name: "Chef Gordon",
        role: "Head Chef",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Restaurant Manager",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Sous Chef",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Pastry Chef",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
    }
];

const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hero Animation
        gsap.from(".about-hero-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });

        // Story Section
        gsap.from(".story-image", {
            scrollTrigger: {
                trigger: ".story-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".story-text", {
            scrollTrigger: {
                trigger: ".story-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

        // Team Section
        gsap.from(".team-header", {
            scrollTrigger: {
                trigger: ".team-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".team-card", {
            scrollTrigger: {
                trigger: ".team-section",
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-black">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
                        alt="Restaurant Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center text-white about-hero-text">
                    <span className="text-[#CB3A1A] text-sm font-bold tracking-widest uppercase mb-4 block">Discover Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">About Us</h1>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="story-section py-20 md:py-32 max-w-7xl mx-auto px-4 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="story-image relative h-[500px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=1000&auto=format&fit=crop"
                            alt="Chef Cooking"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#CB3A1A] rounded-full blur-3xl opacity-20"></div>
                    </div>
                    <div className="story-text">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-black">
                            We Create <span className="text-[#CB3A1A]">Delicious</span> Memories
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Founded in 2010, The Culinary Corner began with a simple mission: to serve authentic, soul-warming food in a modern setting. What started as a small family kitchen has grown into a beloved local landmark, known for our commitment to quality and innovation.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our chefs travel the world to bring you unique flavors, blending traditional techniques with contemporary presentation. We believe that food is not just about sustenance, but about bringing people together.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <span className="block text-4xl font-bold text-[#CB3A1A]">15+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-[#CB3A1A]">50+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Team Members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section py-20 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="team-header text-center mb-16">
                        <span className="text-[#CB3A1A] text-sm font-bold tracking-widest uppercase mb-2 block">Our Experts</span>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase text-black">Meet The Team</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="team-card group relative overflow-hidden rounded-xl bg-white shadow-lg">
                                <div className="relative h-[350px] w-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                                            <h3 className="text-xl font-bold">{member.name}</h3>
                                            <p className="text-[#CB3A1A] text-sm font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
