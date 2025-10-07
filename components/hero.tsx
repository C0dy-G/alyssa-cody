"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#E4DAC6] to-[#ededed]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a522a] mb-6 tracking-wide">
          You're Invited
        </h1>
        <div className="w-24 h-px bg-[#875353] mx-auto mb-6" />
        <p className="text-xl md:text-2xl text-[#0a0a0a] mb-4 leading-relaxed">Join us for our wedding celebration</p>
        <p className="text-lg md:text-xl text-[#67846B] font-medium">October 16, 2025</p>
      </motion.div>
    </section>
  )
}
