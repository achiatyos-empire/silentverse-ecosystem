"use client"
import { useState, useEffect, useCallback } from "react"
// import { io, Socket } from "socket.io-client" // To be implemented later

// Placeholder for socket connection logic
const useChatSocket = () => {
  const [messages, setMessages] = useState<string[]>(["Welcome to the global chatroom ✨ (Realtime Placeholder)"])
  
  // Placeholder for Socket.IO connection in a real application
  useEffect(() => {
    // const socket: Socket = io(process.env.NEXT_PUBLIC_WS_URL || "http://localhost:3000")

    // socket.on("connect", () => {
    //   setMessages((prev) => [...prev, "System: Connected to the SilentVerse grid."])
    // })
    
    // socket.on("chat message", (msg: string) => {
    //   setMessages((prev) => [...prev, msg])
    // })
    
    // return () => {
    //   socket.disconnect()
    // }
  }, [])
  
  // Placeholder for sending a message
  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return
    // In a real app: socket.emit("chat message", text.trim())
    setMessages((prev) => [...prev, `[You] ${text.trim()}`])
  }, [])

  return { messages, sendMessage }
}


export default function ChatPage() {
  const { messages, sendMessage } = useChatSocket()
  const [text, setText] = useState("")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Global Chat (Socket.IO Ready)</h2>
      <div className="h-72 w-full overflow-y-auto rounded-md border border-white/10 p-3 text-sm bg-white/5">
        {messages.map((m, i) => (
          <div key={i} className="py-1">{m}</div>
        ))}
      </div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage(text)
          setText("")
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message…"
          className="flex-1 rounded-md border border-white/10 px-3 py-2 text-sm bg-black/50 focus:outline-none focus:ring-2 focus:ring-sv-accent"
        />
        <button className="rounded-md bg-sv-accent px-3 py-2 text-sm text-black font-medium hover:bg-sv-accent-strong transition">
          Send
        </button>
      </form>
      <p className="text-xs text-sv-muted">
        This logic is now ready for Socket.IO integration once the server is configured.
      </p>
    </div>
  )
}
