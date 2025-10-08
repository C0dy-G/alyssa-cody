"use client"

import { motion } from "framer-motion"
import { Palette, Coffee, Croissant, Trees, ShoppingBag, IceCream } from "lucide-react"

// Define the structure for a recommendation item
interface Recommendation {
  icon: React.ElementType;
  title: string;
  // This allows the description to contain JSX elements like <em>
  description: string | React.ReactNode;
  color: string; // Tailwind color class for the icon/border
  link: string; 
}

export function BetweenEvents() {
  const recommendations: Recommendation[] = [
    {
      icon: Palette, 
      title: "Asian Art Museum",
      description: "Explore world-class Asian art collections just steps away.",
      color: "text-purple-700",
      link: "https://asianart.org/",
    },
    {
      icon: Coffee,
      title: "Blue Bottle Coffee",
      description: "Grab a specialty coffee at this beloved SF roastery.",
      color: "text-amber-700",
      link: "https://bluebottlecoffee.com/us/eng/cafes/kiosk",
    },
    {
      icon: ShoppingBag,
      title: "Hayes Street Boutiques",
      description: "Window shop or find unique gifts along Hayes Valley's trendy streets.",
      color: "text-pink-700",
      link: "https://www.google.com/maps/d/u/0/edit?mid=1lXrA_2Ycisu67lzV8ojnv8F7YB5gvns&usp=sharing",
    },
    {
      icon: Trees,
      title: "Patricia's Green Park",
      description: "Relax in this charming Hayes Valley green space.",
      color: "text-green-700",
      link: "https://sfrecpark.org/988/Patricias-Green-in-Hayes-Valley-Picnic-A",
    },
    {
      icon: Croissant,
      title: "La Boulange",
      description: "Grab a coffee or tea and people watch.",
      color: "text-yellow-800", 
      link: "https://www.laboulangeriesf.com/",
    },
    {
      icon: IceCream,
      title: "Salt & Straw",
      description: (
        <>
          They open at 11 AM. (We aren&apos;t recommending dessert <em >before</em> lunch, but we aren&apos;t stopping you, either.)
        </>
      ),
      color: "text-red-500",
      link: "https://saltandstraw.com/pages/hayes-valley",
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
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-4">
            Between Events
          </h2>
          <p className="text-center text-[#67846B] mb-16 text-lg">10:00 AM – 11:30 AM</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <a
                  key={index}
                  href={rec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer h-full" // <-- cursor-pointer on the link, fills height
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="flex flex-col justify-between bg-[#E4DAC6] p-6 rounded-lg shadow-sm hover:shadow-md transition-all h-full"
                  >
                    <div>
                      <rec.icon className="w-10 h-10 text-[#1a522a] mb-4" />
                      <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">{rec.title}</h3>
                      <p className="text-[#67846B] leading-relaxed">{rec.description}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
