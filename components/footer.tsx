"use client"

import { ChevronUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 px-4 bg-white border-t border-[#875353]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#67846B] text-lg mb-6 leading-relaxed">
          We can't wait to celebrate with you!
          <br />
          Thank you for being part of our special day.
        </p>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-[#1a522a] hover:text-[#67846B] transition-colors font-medium"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
          Back to top
        </button>
      </div>
    </footer>
  )
}
