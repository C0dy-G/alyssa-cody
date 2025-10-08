import { Hero } from "@/components/hero"
import { Schedule } from "@/components/schedule"
import { Parking } from "@/components/parking"
import { MapSection } from "@/components/map-section"
import { Navigation } from "@/components/navigation"
import { BetweenEvents } from "@/components/between-events"
import { AttireAndWeather } from "@/components/attire-and-weather"
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
      <AttireAndWeather />
      <Footer />
    </main>
  )
}
