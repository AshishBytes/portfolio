import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import "@radix-ui/themes/styles.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ashish Singh | Software Engineer & Distributed Systems Specialist',
  description: 'Final-year B.Tech. CS student with 4+ years building distributed systems and scalable applications. Delivered 1M+ MAU-scale platforms with expertise in C, C++, Python, and cloud architecture.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { Theme } from "@radix-ui/themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme
          appearance="light"
          accentColor="orange"
          grayColor="sand"
          radius="large"
          scaling="100%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
