"use client"

import { useEffect, useState } from "react"

export function HeroHeader() {
  const [greeting, setGreeting] = useState("Good morning!")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning!")
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon!")
    } else {
      setGreeting("Good evening!")
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-4">
      <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a] md:text-6xl lg:text-7xl">
        ashish<span className="text-orange-500">.</span>
      </h1>
      <span className="inline-flex items-center rounded-full bg-orange-500 px-4 py-1.5 text-sm font-medium text-white">
        {greeting}
      </span>
    </div>
  )
}
