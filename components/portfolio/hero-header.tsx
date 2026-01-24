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
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-4">
      <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
        ashish<span className="text-primary">.</span>
      </h1>
      <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
        {greeting}
      </span>
    </div>
  )
}
