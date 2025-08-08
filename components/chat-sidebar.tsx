"use client"

import { useMemo } from "react"
import styles from "@/styles/chat-scrollbar.module.css"

type ChatMessage = {
  id: number
  user: string
  text: string
  time: string
  color?: string
}

const SAMPLE_USERS = ["ghizzy", "bubblegum", "Littless", "sniperX", "mintch", "nuny", "lucy", "mika"]
const SAMPLE_TEXTS = [
  "gg wp",
  "Place bet?",
  "High to low sorting on.",
  "Items incoming...",
  "when flip out fr",
  "yo anyone up?",
  "rbx 90k?",
  "join my 25k",
]

function generateMessages(count = 24): ChatMessage[] {
  const list: ChatMessage[] = []
  for (let i = 0; i < count; i++) {
    const user = SAMPLE_USERS[i % SAMPLE_USERS.length]
    const text = SAMPLE_TEXTS[i % SAMPLE_TEXTS.length]
    const mins = (5 + (i % 55)).toString().padStart(2, "0")
    list.push({
      id: i + 1,
      user,
      text,
      time: `10:${mins} ${i % 2 === 0 ? "AM" : "PM"}`,
      color: i % 3 === 0 ? "text-blue-300" : i % 3 === 1 ? "text-emerald-300" : "text-purple-300",
    })
  }
  return list
}

export function ChatSidebar() {
  const messages = useMemo(() => generateMessages(40), [])

  return (
    <aside
      aria-label="Chat"
      className="rounded-md border border-white/10 bg-[#0c1220] h-[calc(100svh-56px-16px)] md:h-[calc(100svh-56px-24px)] flex flex-col"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs sm:text-sm text-white/80">Chat</span>
        </div>
        <span className="text-xs text-white/50">338</span>
      </div>

      <div className={`flex-1 overflow-y-auto ${styles.thinDarkScrollbar}`}>
        <ul className="divide-y divide-white/5">
          {messages.map((m) => (
            <li key={m.id} className="px-3 py-2">
              <div className="flex items-baseline justify-between">
                <span className={`text-xs font-medium ${m.color}`}>{m.user}</span>
                <time className="text-[10px] text-white/40">{m.time}</time>
              </div>
              <p className="text-sm leading-snug text-white/90">{m.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 border-t border-white/10">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full rounded-md bg-[#0a0f1a] border border-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600/50"
        />
        <p className="mt-1 text-[10px] text-white/40">No real-time functionality. UI only.</p>
      </div>
    </aside>
  )
}
