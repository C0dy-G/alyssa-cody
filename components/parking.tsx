"use client"

import { motion } from "framer-motion"
import { Car, MapPin } from "lucide-react"

export function Parking() {
  return (
    <section id="parking" className="py-20 md:py-32 px-4 bg-[#ededed]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-16">Parking & Transportation</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Parking */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-[#1a522a]" />
                <h3 className="text-xl font-semibold text-[#0a0a0a]">Parking</h3>
              </div>
              <p className="text-[#67846B] leading-relaxed mb-3">
                We recommend the{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=355+McAllister+St,+San+Francisco,+CA+94102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a522a] hover:underline font-medium"
                >
                  Civic Center Garage
                </a>{" "}
                located at 355 McAllister St. It's the closest parking facility to City Hall.
              </p>
              <p className="text-sm text-[#875353]">Rates vary; arrive early for best availability.</p>
            </div>

            {/* Ride Options */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#1a522a]" />
                <h3 className="text-xl font-semibold text-[#0a0a0a]">Ride Options</h3>
              </div>
              <p className="text-[#67846B] leading-relaxed mb-3">
                Uber, Lyft, and Waymo are all readily available in the area. Drop-off is convenient at the Civic Center
                Plaza entrance.
              </p>
              <p className="text-sm text-[#875353]">City Hall is also accessible via BART and Muni.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
