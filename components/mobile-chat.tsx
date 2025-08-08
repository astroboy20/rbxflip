"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MessageSquareText } from 'lucide-react'
import { ChatSidebar } from "./chat-sidebar"
import { useState } from "react"

export function MobileChat() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="h-8 gap-2 border-white/20 bg-transparent hover:bg-white/5 text-white/90">
          <MessageSquareText className="h-4 w-4" />
          Chat
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-2 w-[92vw] sm:w-[420px] bg-[#0f1420] text-white border-white/10">
        <SheetHeader className="px-2">
          <SheetTitle>Chat</SheetTitle>
        </SheetHeader>
        <div className="mt-2">
          <ChatSidebar />
        </div>
      </SheetContent>
    </Sheet>
  )
}
