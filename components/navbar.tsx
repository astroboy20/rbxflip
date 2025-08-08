"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const NAV_LINKS = ["Claims", "Leaderboard", "FAQ", "TOS", "Provably Fair"]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full border-b border-white/5 bg-[#0b1020]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0b1020]/70">
      <div className="mx-auto flex h-14 items-center justify-between gap-3 px-2 md:px-4 max-w-[1600px]">
        {/* Left: logo and mobile menu */}
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white/80">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-[#0f1420] text-white border-white/10">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 grid gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo (text-based placeholder) */}
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">RBXFlip</span>
          </a>
        </div>

        {/* Center: links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/5"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: login */}
        <div className="flex items-center gap-2">
          <Button className="bg-blue-600 hover:bg-blue-500 text-white h-8 px-3">
            Login
          </Button>
        </div>
      </div>
    </nav>
  )
}
