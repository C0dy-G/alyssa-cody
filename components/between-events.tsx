"use client"

import { motion } from "framer-motion"
import { MouseOff as Museum, Coffee, Croissant, Trees, ShoppingBag } from "lucide-react"

export function BetweenEvents() {
  const recommendations = [
    {
      icon: Museum,
      title: "Asian Art Museum",
      description: "Explore world-class Asian art collections just steps away.",
    },
    {
      icon: Coffee,
      title: "Blue Bottle Coffee",
      description: "Grab a specialty coffee at this beloved SF roastery.",
    },
    {
      icon: Croissant,
      title: "La Boulangerie",
      description: "Enjoy fresh pastries and French-inspired treats.",
    },
    {
      icon: Trees,
      title: "Patricia's Green Park",
      description: "Relax in this charming Hayes Valley green space.",
    },
    {
      icon: ShoppingBag,
      title: "Hayes Valley Shops",
      description: "Browse unique boutiques and local designer stores.",
    },
  ]

  return (
    <section id="between-events" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-4">Between Events</h2>
          <p className="text-center text-[#67846B] mb-16 text-lg">10:00 AM – 11:30 AM</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#E4DAC6] p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <rec.icon className="w-10 h-10 text-[#1a522a] mb-4" />
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">{rec.title}</h3>
                <p className="text-[#67846B] leading-relaxed">{rec.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
