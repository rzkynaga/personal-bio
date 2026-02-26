"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function CloneChat() {
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const sendMessage = async (preset?: string) => {
        const content = preset || input;
        if (!content.trim()) return;

        const newMessages = [...messages, { role: "user", content }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        const res = await fetch("/api/clone", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: newMessages }),
        });

        const text = await res.text();

        setMessages([
            ...newMessages,
            { role: "assistant", content: text },
        ]);

        setLoading(false);
    };

    // Auto scroll to bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop =
                containerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <section className="relative w-full py-44 overflow-hidden">

            {/* Subtle cinematic glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 rounded-full blur-[180px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 mb-6">
                        Digital Interface
                    </p>

                    <h2 className="text-6xl font-semibold tracking-tight">
                        Ask Rizky
                    </h2>

                    <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        A strategic digital twin built on systems thinking,
                        leadership alignment, and long-term vision.
                    </p>
                </div>

                {/* Glass Panel */}
                <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 rounded-[32px] p-12 shadow-[0_60px_160px_-40px_rgba(0,0,0,0.8)]">

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-[32px] pointer-events-none border border-white/5" />

                    {/* Suggested Prompts */}
                    {messages.length === 0 && (
                        <div className="flex flex-wrap gap-3 mb-10">
                            {[
                                "Why did you build Himaja Nusantara?",
                                "What is your leadership philosophy?",
                                "How do you approach system design?",
                            ].map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => sendMessage(q)}
                                    className="text-sm bg-zinc-800/80 hover:bg-zinc-700 px-5 py-2.5 rounded-full border border-zinc-700 transition"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Messages */}
                    <div
                        ref={containerRef}
                        className="space-y-8 max-h-[500px] overflow-y-auto pr-2"
                    >
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[68%] px-8 py-5 rounded-[28px] text-sm leading-relaxed transition-all duration-300 ${m.role === "user"
                                            ? "bg-white text-black shadow-lg"
                                            : "bg-zinc-800/90 text-zinc-200 border border-zinc-700"
                                        }`}
                                >
                                    {m.role === "assistant" ? (
                                        <div className="prose prose-invert prose-sm max-w-none">
                                            <ReactMarkdown>{m.content}</ReactMarkdown>
                                        </div>
                                    ) : (
                                        m.content
                                    )}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="text-sm text-zinc-500">
                                Rizky is thinking...
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="flex gap-5 mt-14">
                        <input
                            className="flex-1 bg-zinc-800/70 border border-zinc-700 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-white transition"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something strategic..."
                        />
                        <button
                            onClick={() => sendMessage()}
                            className="px-10 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition"
                        >
                            Send
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}