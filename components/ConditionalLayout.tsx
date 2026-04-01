"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"

/** Rutas donde el Header y Footer no se renderizan */
const FULLSCREEN_ROUTES = ["/dev"]

function isFullscreen(pathname: string) {
  return FULLSCREEN_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"))
}

export function ConditionalHeader() {
  const pathname = usePathname()
  if (isFullscreen(pathname)) return null
  return <Header />
}

export function ConditionalFooter() {
  const pathname = usePathname()
  if (isFullscreen(pathname)) return null
  return <Footer />
}
