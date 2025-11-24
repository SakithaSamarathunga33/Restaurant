# 🍴 TRIDENT - Restaurant Website

<div align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D%2018.0.0-green.svg" />
  <img src="https://img.shields.io/badge/made%20with-love-red.svg" />
  <br />
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</div>

<p align="center">
  <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" alt="Restaurant Banner" width="1200" height="400" />
</p>

## 📋 Overview

TRIDENT is a modern, premium restaurant website built with Next.js 16, featuring stunning animations powered by GSAP and buttery-smooth scrolling with Lenis. The website showcases a sophisticated dining experience with a dark, elegant design system centered around black, white, and signature red (`#CB3A1A`) accents.

## ✨ Features

### 🎨 Design & User Experience
- **Premium Aesthetics**: Curated color palette with black, white, and signature red accents
- **Smooth Scrolling**: Lenis integration for premium scroll feel
- **Hero Parallax**: Dynamic parallax effect on the hero background
- **Reversible Animations**: Scroll-triggered animations that play forward and backward
- **Floating Navbar**: Pill-shaped navigation bar with smooth slide-down animation
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern Typography**: Clean, sans-serif fonts for excellent readability
- **Micro-interactions**: Hover effects and transitions throughout the site

### 📄 Pages & Sections

#### Home Page (`/`)
- **Hero Section**: Full-screen hero with background image and compelling tagline
- **Welcome Section**: Dual-column layout introducing the restaurant's story
- **Services Section**: Interactive cards showcasing key offerings (Birthday Party, Catering, Events, Wedding)
- **Gallery Section**: 
  - Statistics showcase (Projects, Awards, Specialties, Team Members)
  - Horizontal scrolling image carousel with custom navigation
  - Hover effects with scale and overlay animations
- **Testimonials Section**: Customer feedback cards with decorative food icons
- **Footer**: 4-column layout with contact info, menu links, hours, and Instagram grid

#### About Us Page (`/about`)
- **Hero Section**: Striking full-screen introduction
- **Our Story**: Image and text layout with company history and statistics
- **Meet the Team**: Grid showcase of team members with hover effects
- **Consistent Footer**: Same footer across all pages

### 🎬 Animation Features
- **On-Load Animations**: Navbar and hero text reveal on page load
- **Scroll-Triggered**: Elements animate into view as you scroll down
- **Parallax Effects**: Hero background moves at different speed for depth
- **Stagger Effects**: Sequential animations for lists and grids
- **Hover Interactions**: Scale, translate, and color transitions on interactive elements
- **Reversible Animations**: Elements animate out when scrolling back up

## 🛠️ Technologies

### Frontend Framework
- **Next.js 16 (Turbopack)**: React framework with App Router and server components
- **React 18**: Modern UI library with hooks and functional components
- **TypeScript**: Type-safe JavaScript for better developer experience

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **GSAP (GreenSock)**: Professional-grade animation library
- **@gsap/react**: React integration for GSAP with useGSAP hook
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Lenis**: Smooth scrolling library for premium feel

### Assets & Images
- **Next.js Image**: Optimized image loading and rendering
- **Unsplash**: High-quality stock photography
- **Custom Illustrations**: SVG icons and decorative elements

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/restaurant-website.git

# Navigate to the project directory
cd restaurant-website

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see the application running!

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
restaurant/
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       └── logo.png
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Button.tsx
│       ├── Footer.tsx
│       ├── GallerySection.tsx
│       ├── Navbar.tsx
│       ├── ServiceCard.tsx
│       ├── SmoothScroll.tsx
│       └── TestimonialsSection.tsx
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Color Palette
```css
Primary Red: #CB3A1A
Primary Black: #000000, #0B0B0B, #111111
Background White: #FFFFFF
Light Gray: #F9F9F9
Text Gray: #6B7280
Border Gray: #374151
```

### Typography
- **Headings**: Bold, uppercase, tracking-wide
- **Body**: Regular weight, comfortable line-height
- **Labels**: Small, uppercase, letter-spacing

### Components
- **Buttons**: Red background with white text, hover effects
- **Cards**: White background with subtle shadows, hover scale
- **Navbar**: Black floating pill with rounded corners
- **Footer**: Dark background with organized columns

## 🔧 Configuration

### Next.js Configuration
The project uses Next.js 16 with Turbopack and custom image domain configuration:

```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
      },
    ],
  },
};
```

### Tailwind Configuration
Custom configuration for extended color palette and utilities.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are built mobile-first and scale elegantly across all screen sizes.

## ⚡ Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **Turbopack**: Fast bundler for development and production
- **Static Generation**: Pages pre-rendered at build time
- **Smooth Scrolling**: Hardware-accelerated scrolling with Lenis
- **GSAP Optimization**: Efficient animations with GPU acceleration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Developer

- **Frontend Development**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: GSAP, Lenis

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>© 2024 TRIDENT. All rights reserved.</p>
</div>
