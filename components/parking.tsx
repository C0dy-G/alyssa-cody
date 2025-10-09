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
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-16">
            Parking & Transportation
          </h2>

          {/* Parking Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Civic Center Garage */}
            <motion.div
              whileHover={{ y: -0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-xl shadow-sm overflow-hidden bg-gradient-to-b from-[#FAF9F8] to-[#F4F2EF] p-8 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-[#1a522a]" />
                <h3 className="text-xl font-semibold text-[#1a522a]">Civic Center Garage</h3>
              </div>
              <p className="text-[#67846B] leading-relaxed mb-3">
                {" "}
                <a
                  href="https://maps.app.goo.gl/5rF7e2W3k9sVfQjFA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a522a] hover:underline font-medium"
                >
                  355 McAllister St, San Francisco, CA 94102
                </a>
                Closest to City Hall and a short walk to the reception.
              </p>
              <p className="text-sm text-[#875353] mb-2">
                Rates vary, arrive early for best availability.
              </p>
              {/*<p className="text-sm text-[#67846B] italic">
                You can park here and walk to both venues — no need to move your car between events.
              </p>*/}
            </motion.div>


            {/* Performing Arts Garage */}
            <motion.div
              whileHover={{ y: -0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-xl shadow-md overflow-hidden bg-gradient-to-b from-[#FAF9F8] to-[#F4F2EF] p-8 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-[#1a522a]" />
                <h3 className="text-xl font-semibold text-[#1a522a]">
                  Performing Arts Garage
                </h3>
              </div>
              <p className="text-[#67846B] leading-relaxed mb-3">
                {" "}
                <a
                  href="https://maps.app.goo.gl/nMZ9oV3m2xxVjJtC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a522a] hover:underline font-medium"
                >
                  360 Grove St, San Francisco, CA 94102 <br />
                </a>
                Central between City Hall and the reception
              </p>
              <p className="text-sm text-[#875353]">
                Covered garage, ideal if you prefer to park once and walk a few blocks.
              </p>
            </motion.div>
          </div>

          {/* Ride Options */}
          <motion.div
            whileHover={{ y: -0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-8 rounded-xl shadow-md overflow-hidden bg-gradient-to-b from-[#FAF9F8] to-[#F4F2EF] p-8 transition-all hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#1a522a]" />
              <h3 className="text-xl font-semibold text-[#1a522a]">Ride Options</h3>
            </div>
            <p className="text-[#67846B] leading-relaxed mb-3">
              Uber, Lyft, and Waymo are readily available in the area. Drop-off is convenient at the Civic Center Plaza entrance.
            </p>
            <p className="text-sm text-[#875353]">
              City Hall is also accessible via BART and Muni.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
