"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Minimize2,
  AlertCircle,
  KeyRound,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "Patient has high fever and chest pain",
  "Run triage for shortness of breath",
  "Check risk score for diabetic patient",
  "Draft Rx for acute sinusitis",
];

function TypingIndicator() {
  return (
    <div className="message-ai" style={{ padding: "14px 16px" }}>
      <div className="typing-indicator" style={{ padding: "0" }}>
        <div className="typing-dot" />
        <div className="typing-dot" />
        <div className="typing-dot" />
      </div>
    </div>
  );
}

function ErrorBanner({ message, isKeyError }: { message: string; isKeyError?: boolean }) {
  return (
    <div
      className="mx-4 mb-3 p-3 rounded-xl flex items-start gap-2.5 text-xs"
      style={{
        background: "rgba(239,68,68,0.08)",
        border: "1px solid rgba(239,68,68,0.2)",
        color: "rgba(252,165,165,0.9)",
      }}
    >
      {isKeyError ? (
        <KeyRound size={13} className="flex-shrink-0 mt-0.5" />
      ) : (
        <AlertCircle size={13} className="flex-shrink-0 mt-0.5" />
      )}
      <span className="leading-relaxed">{message}</span>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi, I'm The AI Clinical Decisioning Layer assistant. Ask me about patient triage, symptom analysis, risk stratification, or prescription drafting.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<{ message: string; isKeyError?: boolean } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);
    setError(null);

    try {
      // Send full conversation history to preserve clinical context
      const historyToSend = updatedMessages
        .filter((m) => m.id !== "welcome") // welcome message is already in system prompt context
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyToSend }),
      });

      const data = await res.json();

      if (!res.ok) {
        const isKeyError =
          data.error === "missing_api_key" || data.error === "invalid_api_key";
        setError({
          message: data.message || "Something went wrong. Please try again.",
          isKeyError,
        });
      } else {
        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          role: "assistant",
          content: data.reply,
        };
        setMessages((prev) => [...prev, aiMsg]);
      }
    } catch {
      setError({
        message: "Network error — could not reach the AI. Please check your connection.",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="chat-window"
            role="dialog"
            aria-label="Chronic AI Chat Assistant"
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(9,9,11,0.8) 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                }}
              >
                <Bot size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-white">
                    Decisioning AI
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    GPT-4o
                  </span>
                </div>
                <p className="text-[11px] text-white/40 truncate">
                  Clinical AI Assistant · Context-aware
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/08 transition-all flex-shrink-0"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={
                    msg.role === "assistant" ? "message-ai" : "message-user"
                  }
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {msg.content}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <TypingIndicator />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Error banner */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <ErrorBanner
                    message={error.message}
                    isKeyError={error.isKeyError}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Suggested prompts — only show at start */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSuggestedPrompt(prompt)}
                    className="text-[11px] px-3 py-1.5 rounded-full border text-white/50 hover:text-emerald-300 hover:border-emerald-500/40 transition-all text-left"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              className="flex items-center gap-2 p-4 flex-shrink-0"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <input
                ref={inputRef}
                id="chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe symptoms or ask anything…"
                disabled={isTyping}
                className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none border-none min-w-0"
                aria-label="Chat message input"
              />
              <button
                id="chat-send-btn"
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all flex-shrink-0"
                style={{
                  background:
                    input.trim() && !isTyping
                      ? "linear-gradient(135deg, #10b981, #059669)"
                      : "rgba(255,255,255,0.06)",
                  cursor:
                    input.trim() && !isTyping ? "pointer" : "not-allowed",
                }}
                aria-label="Send message"
              >
                <Send
                  size={15}
                  className={
                    input.trim() && !isTyping ? "text-white" : "text-white/20"
                  }
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bubble Button */}
      <motion.button
        id="chat-toggle-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="chat-bubble-btn pulse"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1001,
        }}
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Minimize2 size={22} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
