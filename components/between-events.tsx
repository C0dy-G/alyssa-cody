"use client"

import { motion } from "framer-motion"
import { Palette, Coffee, Croissant, Trees, ShoppingBag, IceCream } from "lucide-react"

// Define the structure for a recommendation item
interface Recommendation {
  icon: React.ElementType;
  title: string;
  // This allows the description to contain JSX elements like <em>
  description: React.ReactNode; 
  color: string; // Tailwind color class for the icon/border
}

export function BetweenEvents() {
  const recommendations: Recommendation[] = [
    {
      icon: Palette, 
      title: "Asian Art Museum",
      description: "Explore world-class Asian art collections just steps away.",
      color: "text-purple-700",
    },
    {
      icon: Coffee,
      title: "Hayes Valley Coffee Shops",
      description: "Grab a morning espresso or a quick afternoon pick-me-up nearby.",
      color: "text-amber-700",
    },
    {
      icon: ShoppingBag,
      title: "Hayes Street Boutiques",
      description: "Window shop or find unique gifts along Hayes Valley's trendy streets.",
      color: "text-pink-700",
    },
    {
      icon: Trees,
      title: "Civic Center Plaza",
      description: "A large public green space perfect for a brief, relaxing stroll.",
      color: "text-green-700",
    },
    {
      icon: Croissant,
      title: "La Boulange",
      description: "Grab a classic French pastry and a latte before the ceremony begins.",
      color: "text-yellow-800", 
    },
    {
      icon: IceCream,
      title: "Salt & Straw",
      // FIXED: Removed font-semibold class. The <em> tag provides italics.
      description: (
        <>
          They open at 11 AM. (We aren&apos;t recommending dessert <em >before</em> lunch, but we aren&apos;t stopping you, either.)
        </>
      ),
      color: "text-red-500",
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
