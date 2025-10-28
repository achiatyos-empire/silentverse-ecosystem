"use client"
import { useState } from "react"

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>(["Welcome to the global chatroom ✨"])
  const [text, setText] = useState("")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Global Chat (local demo)</h2>
      <div className="h-72 w-full overflow-auto rounded-md border p-3 text-sm">
        {messages.map((m, i) => (
          <div key={i} className="py-1">{m}</div>
        ))}
      </div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          if (!text.trim()) return
          setMessages((prev) => [...prev, text.trim()])
          setText("")
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message…"
          className="flex-1 rounded-md border px-3 py-2 text-sm"
        />
        <button className="rounded-md bg-gray-900 px-3 py-2 text-sm text-white">Send</button>
      </form>
      <p className="text-xs text-gray-500">This is a local-only demo. We'll wire realtime sockets next.</p>
    </div>
  )
}
