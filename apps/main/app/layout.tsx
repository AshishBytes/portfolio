import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Ashish Singh — Backend & AI/ML Engineer',
  description: 'I build systems that scale. Co-developer of Reef Bot (585K+ users, 850+ servers). Backend infrastructure, distributed systems, and AI/ML applications.',
  keywords: ['Ashish Singh', 'AshishBytes', 'Software Engineer', 'Backend Engineer', 'Distributed Systems', 'AI/ML', 'Next.js', 'TypeScript', 'React'],
  authors: [{ name: 'Ashish Singh', url: 'https://ashishbytes.com' }],
  creator: 'Ashish Singh',
  openGraph: {
    title: 'Ashish Singh — Backend & AI/ML Engineer',
    description: 'I build systems that scale. Co-developer of Reef Bot (585K+ users, 850+ servers).',
    url: 'https://ashishbytes.com',
    siteName: 'AshishBytes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ashishbytes',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
