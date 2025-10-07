"use client"

import { motion } from "framer-motion"
import { DoorOpen, Shield, Stars as Stairs, ArrowUp, MapPin } from "lucide-react"

export function Navigation() {
  const steps = [
    {
      icon: DoorOpen,
      text: 'Enter from the Civic Center Plaza side (next to the garage). Look for the main doors marked "City Hall."',
    },
    {
      icon: Shield,
      text: "Pass through security (metal detectors).",
    },
    {
      icon: Stairs,
      text: "Once inside, head toward the grand staircase.",
    },
    {
      icon: ArrowUp,
      text: "The elevators are on the left, before the staircase.",
    },
    {
      icon: MapPin,
      text: "Take them to the 4th floor — the North Gallery will be on your left as you exit the elevators.",
    },
  ]

  return (
    <section id="navigation" className="py-20 md:py-32 px-4 bg-[#ededed]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-8">Navigating City Hall</h2>
          <p className="text-center text-[#875353] mb-12 text-lg">Enter through the blue doors with gold accents</p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a522a] text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="flex gap-4 items-start flex-1">
                  <step.icon className="w-6 h-6 text-[#67846B] flex-shrink-0 mt-1" />
                  <p className="text-[#0a0a0a] leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
