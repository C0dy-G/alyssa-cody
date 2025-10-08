"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// Coordinates for San Francisco City Hall: 37.779261, -122.419299
// Coordinates for Hazie's Restaurant (501 Hayes St): 37.776615, -122.422780
// The map is centered between these two points with an appropriate zoom level.

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Observer to load the map iframe only when it comes into view (improves performance)
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

  // NEW Google Maps embed URL derived from the Google My Maps ID.
  // This format (d/embed?mid=...) is specifically for embedding custom maps with multiple pins.
  const mapEmbedUrl = 
    "https://www.google.com/maps/d/embed?mid=1lXrA_2Ycisu67lzV8ojnv8F7YB5gvns"
    // Note: Ensure your Google My Map is set to 'Public on the web' or 'Unlisted' for this to work.


  return (
    <section id="map" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto"> {/* Adjusted max-width slightly for layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-16">Location & Venues</h2>

          {/* Map Embed */}
          <div ref={mapRef} className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl border-4 border-[#1a522a]/10">
            {isLoaded ? (
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ceremony and Reception Locations Map"
              />
            ) : (
              <div className="w-full h-full bg-[#E4DAC6] flex items-center justify-center">
                <p className="text-[#67846B] text-lg font-medium">Loading map, please wait...</p>
              </div>
            )}
          </div>

          {/* Location Details - REORDERED: Parking, Ceremony, Reception */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Civic Center Garage (Parking Suggestion) - MOVED TO FIRST */}
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

            {/* SF City Hall (Ceremony) - MOVED TO SECOND */}
            <div className="bg-[#E4DAC6] p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
              <p className="text-sm font-light text-[#67846B] mb-1">Ceremony</p>
              <h3 className="font-serif text-xl text-[#1a522a] mb-3">SF City Hall</h3>
              <a
                href="https://maps.app.goo.gl/wJ1hE22Hw3r1s3Xp6" // Updated Google Maps link for better mobile experience
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#67846B] hover:text-[#1a522a] transition-colors underline-offset-4 hover:underline block"
              >
                1 Dr Carlton B Goodlett Pl, SF, CA 94102
              </a>
            </div>

            {/* Hazie's (Reception) - MOVED TO THIRD (Last) */}
            <div className="bg-[#E4DAC6] p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
              <p className="text-sm font-light text-[#67846B] mb-1">Reception</p>
              <h3 className="font-serif text-xl text-[#1a522a] mb-3">Hazie&apos;s Restaurant</h3>
              <a
                href="https://maps.app.goo.gl/j4Yv6V1L8J6M8m9fA" // Updated Google Maps link for 501 Hayes St
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
