"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Gift, Wallet, Coins } from 'lucide-react'
import { MobileChat } from "./mobile-chat"
import styles from "@/styles/spinner.module.css"

type TabKey = "coinflip" | "roulette" | "shop"

const TABS: { key: TabKey; label: string }[] = [
  { key: "coinflip", label: "Coinflip" },
  { key: "roulette", label: "Roulette" },
  { key: "shop", label: "Shop" },
]

export function GameArea() {
  const [activeTab, setActiveTab] = useState<TabKey>("coinflip")
  const [loading, setLoading] = useState(true)
  const [amount, setAmount] = useState("")

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section aria-label="Game area" className="space-y-3 md:space-y-4">
      {/* Top controls bar: Tabs + Wallet/Balance */}
      <div className="rounded-md border border-white/10 bg-[#0c1220] px-2 sm:px-3 py-2 sm:py-2.5">
        <div className="flex items-center gap-3">
          {/* Tabs */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {TABS.map((t) => {
                const isActive = activeTab === t.key
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`relative px-2.5 sm:px-3 py-1.5 rounded-md text-sm whitespace-nowrap
                      ${isActive ? "text-blue-400" : "text-white/70 hover:text-white"}
                      hover:bg-white/5`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="inline-flex items-center gap-2">
                      {t.key === "coinflip" && <Coins className="h-4 w-4 text-blue-400" />}
                      {t.label}
                    </span>
                    {isActive && (
                      <span className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-blue-500" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Balance + Gift (center/right area) */}
          <div className="hidden sm:flex items-center gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 text-white/80">
              <Wallet className="h-4 w-4 text-white/70" />
              <span className="text-white/70">R$</span>
              <span className="font-medium">0</span>
              <span className="text-white/40">/</span>
              <span className="text-white/70">0.00</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <Gift className="h-4 w-4 text-white/60" aria-hidden="true" />
          </div>

          {/* Mobile chat toggle */}
          <div className="sm:hidden">
            <MobileChat />
          </div>
        </div>
      </div>

      {/* Bet input row */}
      <div className="rounded-md border border-white/10 bg-[#0c1220] p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="relative flex-1">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter bet amount…"
              className="w-full rounded-md bg-[#0a0f1a] border border-white/10 px-3 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600/50 text-white"
            />
          </div>
          <div className="flex gap-2 sm:ml-2">
            <Button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white">
              Place Bet
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none border-white/15 text-white/90 bg-transparent hover:bg-white/5">
              Bet Items
            </Button>
          </div>
        </div>
      </div>

      {/* Main content panel with loading spinner */}
      <div className="relative rounded-md border border-white/10 bg-[#0c1220] p-6 min-h-[360px]">
        {loading ? (
          <div className="absolute inset-0 grid place-items-center">
            <div className={styles.spinner} aria-label="Loading games" />
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-white/90 font-medium">Open Games</h2>
            <div className="grid gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 bg-[#0a0f1a] px-4 py-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-400/90 text-black grid place-items-center text-sm font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-white/80 text-sm hidden sm:inline">VS</span>
                    <div className="h-8 w-8 rounded-full border border-white/15" />
                  </div>

                  <div className="hidden md:flex items-center gap-2">
                    {Array.from({ length: 6 }).map((__, idx) => (
                      <div key={idx} className="h-2.5 w-10 rounded bg-white/10" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-emerald-400 font-semibold text-sm">R${[1100, 715, 290, 63.7][i]}k</div>
                      <div className="text-white/40 text-xs">R${[900, 676, 216, 52.9][i]}k – R${[1100, 818, 319, 63.7][i]}k</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm px-3 py-1.5">
                        Join
                      </button>
                      <button className="rounded-md bg-white/5 hover:bg-white/10 text-white/90 text-sm px-3 py-1.5 border border-white/10">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-white/40">UI only – no backend hooked up.</p>
          </div>
        )}
      </div>
    </section>
  )
}
