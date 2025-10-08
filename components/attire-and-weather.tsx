"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { 
  Sun, Cloud, CloudRain, CloudSnow, 
  CloudLightning, Wind, Cloud as CloudIcon 
} from "lucide-react"

// --- CONFIGURATION ---
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || "e869c13380ae357b3e8330d8fa003681" 
const LAT = 37.7749
const LON = -122.4194
const SF_TIMEZONE = "America/Los_Angeles"
const WEDDING_DATE = new Date("2025-10-16T12:00:00") 

const iconMap: { [key: string]: React.ElementType } = {
  "01d": Sun, "01n": Sun,
  "02d": Cloud, "02n": Cloud,
  "03d": Cloud, "03n": Cloud,
  "04d": Cloud, "04n": Cloud,
  "09d": CloudRain, "09n": CloudRain,
  "10d": CloudRain, "10n": CloudRain,
  "11d": CloudLightning, "11n": CloudLightning,
  "13d": CloudSnow, "13n": CloudSnow,
  "50d": Wind, "50n": Wind,
}

interface ForecastItem {
  time: string
  temp: number
  icon: React.ElementType
  description: string
}

export function AttireAndWeather() {
  const [forecast, setForecast] = useState<ForecastItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [todayHighLow, setTodayHighLow] = useState<{ high: number; low: number; icon: React.ElementType; description: string } | null>(null)

  const fetchWeather = useCallback(async () => {
    if (!API_KEY) {
      setError("Weather API Key missing. Please set NEXT_PUBLIC_OPENWEATHER_API_KEY.")
      setLoading(false)
      return
    }

    try {
      setLoading(true)

      // 1️⃣ 5-day/3-hour forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=imperial&appid=${API_KEY}`
      const forecastResponse = await fetch(forecastUrl)
      if (!forecastResponse.ok) throw new Error(`Forecast fetch failed: ${forecastResponse.statusText}`)
      const forecastData = await forecastResponse.json()

      // 2️⃣ Current weather for today
      const todayUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=imperial&appid=${API_KEY}`
      const todayResponse = await fetch(todayUrl)
      if (!todayResponse.ok) throw new Error(`Today weather fetch failed: ${todayResponse.statusText}`)
      const todayData = await todayResponse.json()

      const todayIconCode = todayData.weather[0].icon
      const TodayIconComponent = iconMap[todayIconCode] || Cloud
      setTodayHighLow({
        high: Math.round(todayData.main.temp_max),
        low: Math.round(todayData.main.temp_min),
        icon: TodayIconComponent,
        description: todayData.weather[0].description,
      })

      // --- Wedding day forecast ---
      const weddingForecast: ForecastItem[] = forecastData.list
        .map((hour: any) => {
          const localTimestamp = new Date((hour.dt + forecastData.city.timezone) * 1000)
          const sameDay =
            localTimestamp.getFullYear() === WEDDING_DATE.getFullYear() &&
            localTimestamp.getMonth() === WEDDING_DATE.getMonth() &&
            localTimestamp.getDate() === WEDDING_DATE.getDate()

          if (sameDay) {
            const iconCode = hour.weather[0].icon
            const IconComponent = iconMap[iconCode] || Cloud
            return {
              time: new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
                timeZone: SF_TIMEZONE,
              }),
              temp: Math.round(hour.main.temp),
              icon: IconComponent,
              description: hour.weather[0].description,
            }
          }
          return null
        })
        .filter((item: ForecastItem | null): item is ForecastItem => item !== null)

      setForecast(weddingForecast)
    } catch (err: any) {
      console.error("Error fetching weather:", err)
      setError(`Could not load forecast: ${err.message}.`)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchWeather()
    const intervalId = setInterval(fetchWeather, 30 * 60 * 1000)
    return () => clearInterval(intervalId)
  }, [fetchWeather])

  const WeatherDisplay = () => {
    if (loading) return <div className="text-center text-[#67846B] py-8">Loading real-time forecast...</div>
    if (error) return <div className="text-center text-red-500 bg-red-100 p-4 rounded-xl my-8 border border-red-300 shadow-md">{error}</div>
    if (!forecast.length && !todayHighLow) return <div className="text-center text-[#67846B] py-8">Forecast not available for today.</div>

    return (
      <div className="mt-8">
        {/* --- Today's Forecast --- */}
        {todayHighLow && (
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white rounded-2xl shadow-md border border-[#E4DAC6] text-center w-48">
              <todayHighLow.icon className="w-10 h-10 mx-auto text-[#1a522a] mb-2" />
              <p className="text-xl font-bold text-[#1a522a]">Today</p>
              <p className="text-sm text-[#67846B] capitalize mb-1">{todayHighLow.description}</p>
              <p className="text-sm text-[#1a522a]">High: {todayHighLow.high}°F</p>
              <p className="text-sm text-[#1a522a]">Low: {todayHighLow.low}°F</p>
            </div>
          </div>
        )}

        {/* --- Wedding Day Hourly Forecast --- */}
        {forecast.length > 0 && (
          <>
            <h3 className="text-2xl font-serif text-[#1a522a] mb-2 text-center">
              Hourly Forecast for Thursday, October 16th
            </h3>
            <p className="text-center text-xs text-[#67846B] mb-4">
              
            </p>
            <div className="flex overflow-x-auto pb-4 space-x-4 md:space-x-8 justify-start md:justify-center">
              {forecast.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex-shrink-0 w-24 p-3 bg-white border border-[#E4DAC6] rounded-xl text-center shadow-md transition-shadow hover:shadow-lg"
                >
                  <p className="text-sm font-medium text-[#67846B] mb-2">{item.time}</p>
                  <item.icon className="w-8 h-8 mx-auto text-[#1a522a] mb-2" />
                  <p className="text-xl font-bold text-[#1a522a] flex items-center justify-center">
                    {item.temp}°F
                  </p>
                  <p className="text-xs text-[#67846B] mt-1 capitalize">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        <p className="text-center text-xs text-[#67846B] mt-6">Forecast for San Francisco, CA</p>
      </div>
    )
  }

  return (
    <section id="attire" className="py-20 md:py-32 px-4 bg-[#F5F2EF]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <CloudIcon className="w-12 h-12 text-[#67846B] mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a522a] mb-8">Attire & Weather</h2>

          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed border-b border-[#E4DAC6] pb-10">
            <p className="text-[#1a522a]">Please wear a suit or dress.</p>
            <p className="text-[#67846B]">
              October in San Francisco can be unpredictable. Mornings and evenings are often cool and windy, while the afternoon may be sunny. Bring a light jacket, wrap, or shawl for comfort.
            </p>
          </div>
        </motion.div>

        <WeatherDisplay />
      </div>
    </section>
  )
}
