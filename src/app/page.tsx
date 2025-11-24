'use client';

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Hero Animations
    const tl = gsap.timeline();

    tl.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.5
    })
      .from(".hero-button", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.5");

    // Hero Parallax
    gsap.to(".hero-bg", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 200,
      ease: "none"
    });

    // Welcome Section Animation
    gsap.from(".welcome-image", {
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".welcome-text", {
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });

    // Services Section Animation
    gsap.from(".service-header", {
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen relative bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="hero-bg absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Japanese traditional salad"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 pt-20 md:pt-0">
          <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 md:mb-6 font-serif tracking-tight leading-tight">
            Where Flavour Meets Comfort
          </h1>
          <p className="hero-text text-xs sm:text-sm md:text-base text-black font-semibold tracking-widest max-w-xs sm:max-w-md md:max-w-2xl mb-8 md:mb-10 uppercase px-4">
            Experience the rich aroma and exquisite taste of our carefully selected coffee beans, crafted with passion.
          </p>
          <div className="hero-button">
            <Link href="#gallery">
              <Button>EXPLORE MENU</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side */}
          <div className="welcome-image relative h-[350px] sm:h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden shadow-xl">
            <Image
              src="/images/welcome-food.jpg"
              alt="Luxury Dining Experience"
              fill
              className="object-cover"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-[#CB3A1A] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider">
              MAKE RESERVATION
            </div>
          </div>

          {/* Text Side */}
          <div className="welcome-text space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              WELCOME TO OUR LUXURY RESTAURANT
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Experience the finest dining with our master chefs who prepare every meal with passion and precision. We offer a wide range of cuisines to satisfy your cravings.
            </p>

            {/* Hotline */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#CB3A1A] flex items-center justify-center text-[#CB3A1A] flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 tracking-wider">HOTLINE</span>
                <span className="text-lg sm:text-xl font-bold text-black">+88-123-123456</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section bg-[#FAF7F2] py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="service-header text-center mb-12 md:mb-16">
            <span className="bg-[#CB3A1A] text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase inline-block mb-3 md:mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 md:mb-4">
              Our Restaurant Service
            </h2>
            <div className="flex justify-center gap-1 text-[#CB3A1A]">
              <span>♦</span>
              <span>♦</span>
              <span>♦</span>
              <span>♦</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="service-card">
              <ServiceCard
                imageSrc="/images/service-dine-in.jpg"
                icon="🍽️"
                title="Dine-In Experience"
                description="Enjoy our elegant ambiance and exceptional service for a memorable dining experience."
              />
            </div>
            <div className="service-card">
              <ServiceCard
                imageSrc="/images/service-delivery.jpg"
                icon="🛵"
                title="Takeaway & Delivery"
                description="Get your favorite meals delivered hot and fresh to your doorstep or ready for pickup."
              />
            </div>
            <div className="service-card">
              <ServiceCard
                imageSrc="/images/service-meals.jpg"
                icon="👨‍🍳"
                title="Freshly Prepared Meals"
                description="Savor the taste of authentic dishes prepared with the finest ingredients by our expert chefs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div id="gallery">
        <GallerySection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
