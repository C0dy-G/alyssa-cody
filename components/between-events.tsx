"use client"

import { motion } from "framer-motion";
import { Palette, Coffee, Croissant, Trees, ShoppingBag, IceCream } from "lucide-react"

// Define the structure for a recommendation item
interface Recommendation {
  icon: React.ElementType;
  title: string;
  description: string | React.ReactNode;
  color: string; // hex color for the icon
  link: string; 
  badge?: string; // optional badge text
}

export function BetweenEvents() {
  const recommendations: Recommendation[] = [
    {
      icon: Palette, 
      title: "Asian Art Museum",
      description: "Explore world-class Asian art collections just steps away.",
      color: "#1a522a",
      link: "https://asianart.org/",
    },
    {
      icon: Croissant,
      title: "La Boulange",
      description: "Grab a coffee or tea and people watch.",
      color: "#1a522a",  
      link: "https://www.laboulangeriesf.com/",
      badge: "Recommended",
    },
    {
      icon: Coffee,
      title: "Blue Bottle Coffee",
      description: "Grab a specialty coffee at this beloved SF roastery.",
      color: "#1a522a",
      link: "https://bluebottlecoffee.com/us/eng/cafes/kiosk",
    },
    {
      icon: Trees,
      title: "Patricia's Green Park",
      description: "Relax in this charming Hayes Valley green space.",
      color: "#1a522a",
      link: "https://sfrecpark.org/988/Patricias-Green-in-Hayes-Valley-Picnic-A",
    },
    {
      icon: ShoppingBag,
      title: "Hayes Street Boutiques",
      description: "Window shop or find unique gifts along Hayes Valley's trendy streets.",
      color: "#1a522a",
      link: "https://www.google.com/maps/d/u/0/edit?mid=1lXrA_2Ycisu67lzV8ojnv8F7YB5gvns&usp=sharing",
    },
    {
      icon: IceCream,
      title: "Salt & Straw",
      description: (
        <>
          They open at 11 AM. (We aren&apos;t recommending dessert <em>before</em> lunch, but we aren&apos;t stopping you, either.)
        </>
      ),
      color: "#1a522a",
      link: "https://saltandstraw.com/pages/hayes-valley",
    },
  ];

  return (
    <section id="between-events" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a522a] text-center mb-4">
            Between Events
          </h2>
          <p className="text-center text-[#67846B] mb-12 text-lg">10:00 AM – 11:30 AM</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon; // Capitalized component
              return (
                <motion.a
                  key={index}
                  href={rec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl h-full overflow-hidden shadow-md cursor-pointer"
                  style={{ boxShadow: "0 2px 8px rgba(26, 82, 42, 0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative flex flex-col justify-between h-full bg-gradient-to-br from-[#F5F2EF] to-[#E4DAC6] p-4 sm:p-5 md:p-6">
                    
                    {/* Badge in top-right */}
                    {rec.badge && (
                      <span className="absolute top-3 right-3 bg-[#1a522a] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {rec.badge}
                      </span>
                    )}

                    {/* Icon */}
                    <Icon  className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex-shrink-0" stroke={rec.color} />

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] mb-1 relative">
                      {rec.title}
                      <span className="absolute left-0 bottom-0 w-8 sm:w-10 h-0.5 rounded-full bg-[#67846b]"></span>
                    </h3>

                    {/* Description */}
                    <p className="text-[#67846B] text-sm sm:text-base leading-relaxed mt-2">
                      {rec.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
