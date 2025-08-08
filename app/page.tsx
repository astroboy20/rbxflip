import { Navbar } from "@/components/navbar"
import { ChatSidebar } from "@/components/chat-sidebar"
import { GameArea } from "@/components/game-area"

export default function Page() {
  return (
    <div className="min-h-svh w-full bg-[#0f1420] text-white">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <div className="mx-auto flex w-full max-w-[1600px] gap-0 md:gap-4 px-2 md:px-4">
        {/* Chat on desktop */}
        <aside className="hidden md:block w-full md:w-[300px] lg:w-[340px] shrink-0">
          <ChatSidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 py-4 md:py-6">
          <GameArea />
        </main>
      </div>
    </div>
  )
}
