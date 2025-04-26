import type { Metadata } from "next"
import { Azeret_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Privacy Builder Pack",
  description: "Privacy Builder Pack",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={`${azeretMono.variable} ${azeretMono.variable} antialiased w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
