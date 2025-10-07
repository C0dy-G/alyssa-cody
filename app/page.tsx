import { Hero } from "@/components/hero"
import { Schedule } from "@/components/schedule"
import { Parking } from "@/components/parking"
import { MapSection } from "@/components/map-section"
import { Navigation } from "@/components/navigation"
import { BetweenEvents } from "@/components/between-events"
import { Attire } from "@/components/attire"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Schedule />
      <Parking />
      <MapSection />
      <Navigation />
      <BetweenEvents />
      <Attire />
      <Footer />
    </main>
  )
}
