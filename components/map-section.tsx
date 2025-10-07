"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="map" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-16">Location</h2>

          <div ref={mapRef} className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            {isLoaded ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193847891!2d-122.42520368468!3d37.77783637975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="San Francisco City Hall Location"
              />
            ) : (
              <div className="w-full h-full bg-[#E4DAC6] flex items-center justify-center">
                <p className="text-[#67846B]">Loading map...</p>
              </div>
            )}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-[#E4DAC6] p-6 rounded-lg">
              <h3 className="font-semibold text-[#1a522a] mb-2">San Francisco City Hall</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1+Dr+Carlton+B+Goodlett+Pl,+San+Francisco,+CA+94102"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#67846B] hover:text-[#1a522a] transition-colors"
              >
                1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102
              </a>
            </div>
            <div className="bg-[#E4DAC6] p-6 rounded-lg">
              <h3 className="font-semibold text-[#1a522a] mb-2">Civic Center Garage</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=355+McAllister+St,+San+Francisco,+CA+94102"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#67846B] hover:text-[#1a522a] transition-colors"
              >
                355 McAllister St, San Francisco, CA 94102
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
