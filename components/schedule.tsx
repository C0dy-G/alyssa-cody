"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Calendar } from "lucide-react"
// Assuming Button component is correctly imported from "@/components/ui/button"
// If you don't have this file, you'll need to create a simple button component or replace with <button>
import { Button } from "@/components/ui/button" 

export function Schedule() {
  const generateICS = (event: "ceremony" | "lunch") => {
    const events = {
      ceremony: {
        title: "Wedding Ceremony",
        location:
          "San Francisco City Hall, North Gallery (4th Floor), 1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102",
        start: "20251016T090000",
        end: "20251016T100000",
      },
      lunch: {
        title: "Wedding Lunch at Hazie's",
        location: "Hazie's, San Francisco, CA",
        start: "20251016T113000",
        end: "20251016T133000",
      },
    }

    const e = events[event]
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//EN
BEGIN:VEVENT
UID:${event}-${Date.now()}@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:${e.start}
DTEND:${e.end}
SUMMARY:${e.title}
LOCATION:${e.location}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: "text/calendar" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${event}.ics`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="schedule" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] text-center mb-16">Schedule</h2>

          <div className="space-y-4">
            
            {/* NEW: Arrival */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E4DAC6] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#1a522a]" />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-[#0a0a0a]">8:30 AM - Guests Arrive</h3>
                <p className="text-sm text-[#67846B]">City Hall opens for access to the 4th floor.</p>
              </div>
            </div>

            {/* Connecting line */}
            <div className="ml-6 w-px h-8 bg-[#875353]" />

            {/* NEW: Seating */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E4DAC6] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#1a522a]" />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-[#0a0a0a]">8:45 AM - Seating Begins</h3>
                <p className="text-sm text-[#67846B]">Please take your seats in the North Gallery.</p>
              </div>
            </div>

            {/* Connecting line */}
            <div className="ml-6 w-px h-8 bg-[#875353]" />

            {/* Ceremony */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E4DAC6] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#1a522a]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-2">9:00 AM - Ceremony</h3>
                <div className="flex items-start gap-2 text-[#67846B] mb-4">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    San Francisco City Hall, North Gallery (4th Floor)
                    <br />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1+Dr+Carlton+B+Goodlett+Pl,+San+Francisco,+CA+94102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a522a] hover:underline"
                    >
                      1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102
                    </a>
                  </p>
                </div>
                <Button
                  onClick={() => generateICS("ceremony")}
                  variant="outline"
                  size="sm"
                  className="border-[#1a522a] text-[#1a522a] hover:bg-[#1a522a] hover:text-white"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Calendar
                </Button>
              </div>
            </div>

            {/* Connecting line (already existed) */}
            <div className="ml-6 w-px h-8 bg-[#875353]" />

            {/* Lunch (already existed) */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E4DAC6] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#1a522a]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-2">11:30 AM - Lunch</h3>
                <div className="flex items-start gap-2 text-[#67846B] mb-4">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">Hazie's, in Hayes Valley on the corner of Octavia and Hayes</p>
                </div>
                <Button
                  onClick={() => generateICS("lunch")}
                  variant="outline"
                  size="sm"
                  className="border-[#1a522a] text-[#1a522a] hover:bg-[#1a522a] hover:text-white"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Calendar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}