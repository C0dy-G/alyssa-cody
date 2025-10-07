"use client"

import { motion } from "framer-motion"
import { Cloud } from "lucide-react"

export function Attire() {
  return (
    <section id="attire" className="py-20 md:py-32 px-4 bg-[#ededed]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Cloud className="w-12 h-12 text-[#67846B] mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] mb-8">Attire & Weather</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg leading-relaxed">
            <p className="text-[#0a0a0a]">
              October in San Francisco can be pleasantly mild, but mornings may be cool. We recommend bringing a light
              jacket or wrap.
            </p>
            <p className="text-[#67846B]">
              Dress code: Semi-formal. Wear what makes you feel comfortable and celebratory!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
