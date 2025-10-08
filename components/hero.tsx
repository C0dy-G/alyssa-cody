"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#E4DAC6] to-[#ededed]">
      
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        // Use a style object to directly reference the image in the public folder
        style={{ 
          backgroundImage: `url('/sf-city-hall-elevation.jpg')`,
          // Add a very low opacity for a subtle, ghostly effect
          opacity: 0.1 
        }}
        aria-hidden="true" // Hide from screen readers since it's purely decorative
      />

      {/* 2. Content Container (Ensures content stays on top) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // Added relative and z-10 to ensure content is above the absolute background
        className="relative z-10 text-center max-w-4xl mx-auto" 
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a522a] mb-6 tracking-wide">
          Welcome, Family & Friends
        </h1>
        <div className="w-24 h-px bg-[#875353] mx-auto mb-6" />
        <p className="text-xl md:text-2xl text-[#0a0a0a] mb-4 leading-relaxed">We are so grateful to celebrate with you, whether you’ve traveled across the city or across the Grand Canyon. San Francisco is a special place for us, and we’re honored to share its beauty with you. Thank you for being here to celebrate our marriage.</p>
        <p className="text-lg md:text-xl text-[#67846B] font-medium">October 16, 2025</p>
      </motion.div>
    </section>
  )
}
