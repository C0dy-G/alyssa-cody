"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react" // Using lucide-react for the pin icon

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false) // Handles lazy loading (Intersection Observer)
  const [isMapInteractive, setIsMapInteractive] = useState(false) // New: Handles scroll-hijacking fix

  useEffect(() => {
    // Observer to lazy load the map iframe only when it comes into view (improves performance)
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

  // Google My Maps embed URL
  const mapEmbedUrl = 
    "https://www.google.com/maps/d/embed?mid=1lXrA_2Ycisu67lzV8ojnv8F7YB5gvns"

  return (
    <section id="map" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-16">Location & Venues</h2>

          {/* Map Embed Container - Full width and relative for the overlay */}
          <div 
            ref={mapRef} 
            className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl border-4 border-[#1a522a]/10"
          >
            {isLoaded ? (
              <>
                {/* Google Maps Iframe */}
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ceremony and Reception Locations Map"
                  // Key change: If not interactive, disable pointer events (though the overlay handles most of it)
                  className={!isMapInteractive ? 'pointer-events-none' : ''} 
                />

                {/* INTERACTIVE SCROLL GUARD OVERLAY - Updated for clarity and position */}
                {!isMapInteractive && (
                  <div
                    // CHANGED: Removed 'justify-center' and added 'pt-24' to move content up
                    className="absolute inset-0 z-10 bg-white/10 flex flex-col items-center pt-24 cursor-pointer transition-opacity duration-300"
                    onClick={() => setIsMapInteractive(true)}
                  >
                    {/* CHANGED: Removed 'animate-bounce' */}
                    {/* <MapPin className="w-12 h-12 text-[#1a522a] mb-4" /> */}
                    <div className="bg-white p-6 rounded-xl shadow-2xl text-center border border-[#1a522a]/30">
                      <p className="font-serif text-2xl text-[#1a522a] font-semibold mb-1">
                        Click to Interact with Map
                      </p>
                      <p className="text-sm font-medium text-[#67846B]">
                        (Map scrolling is disabled to let you scroll the page freely)
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full bg-[#E4DAC6] flex items-center justify-center">
                <p className="text-[#67846B] text-lg font-medium">Loading map, please wait...</p>
              </div>
            )}
          </div>

          {/* Location Details - Order: Parking, Ceremony, Reception */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Civic Center Garage (Parking Suggestion) */}
            <div className="bg-[#E4DAC6] p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
              <p className="text-sm font-light text-[#67846B] mb-1">Parking</p>
              <h3 className="font-serif text-xl text-[#1a522a] mb-3">Civic Center Garage</h3>
              <a
                href="https://maps.app.goo.gl/5rF7e2W3k9sVfQjFA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#67846B] hover:text-[#1a522a] transition-colors underline-offset-4 hover:underline block"
              >
                355 McAllister St, San Francisco, CA 94102
              </a>
            </div>

            {/* SF City Hall (Ceremony) */}
            <div className="bg-[#E4DAC6] p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
              <p className="text-sm font-light text-[#67846B] mb-1">Ceremony</p>
              <h3 className="font-serif text-xl text-[#1a522a] mb-3">SF City Hall</h3>
              <a
                href="https://maps.app.goo.gl/wJ1hE22Hw3r1s3Xp6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#67846B] hover:text-[#1a522a] transition-colors underline-offset-4 hover:underline block"
              >
                1 Dr Carlton B Goodlett Pl, SF, CA 94102
              </a>
            </div>

            {/* Hazie's (Reception) */}
            <div className="bg-[#E4DAC6] p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
              <p className="text-sm font-light text-[#67846B] mb-1">Reception</p>
              <h3 className="font-serif text-xl text-[#1a522a] mb-3">Hazie&apos;s Restaurant</h3>
              <a
                href="https://maps.app.goo.gl/j4Yv6V1L8J6M8m9fA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#67846B] hover:text-[#1a522a] transition-colors underline-offset-4 hover:underline block"
              >
                501 Hayes St, San Francisco, CA 94102
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
