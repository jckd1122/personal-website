"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// 基于缪文强的信息预置一些回答
const knowledgeBase: Record<string, string> = {
  "名字": "我是缪文强的数字分身。",
  "你是谁": "我是缪文强的数字分身，一个基于他的背景和经历创建的AI助手。",
  "生活": "缪文强目前生活在上海，一座充满活力的城市。",
  "在哪": "缪文强目前生活在上海。",
  "做什么": "缪文强经营一家科技招聘猎头公司，专注于连接优秀的科技公司与顶尖的科技人才。",
  "工作": "缪文强是科技招聘猎头公司的负责人，帮助人才和企业找到彼此。",
  "职业": "他是一名科技招聘专家，也是猎头公司的负责人。",
  "爱好": "他的爱好包括编程、商业、Hiking和旅行。",
  "兴趣": "他对编程、商业、户外徒步和旅行都很感兴趣。",
  "喜欢": "他喜欢和有趣的人交流，也热衷于探索新事物。",
  "vibe": "他最近在尝试 vibe coding，用 AI 辅助创作和开发。",
  "coding": "是的，他最近在用 AI 辅助进行 vibe coding。",
  "联系": "你可以通过页面上的方式联系他，或者继续和我对话。",
  "招聘": "如果你有招聘需求或求职意向，可以和他详细聊聊。",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (lower.includes(key)) {
      return value;
    }
  }

  const defaultResponses = [
    "这是个有趣的问题。缪文强可能会这样回答：条条大路通罗马，适合自己的很重要。",
    "嗯，我可以帮你转达给缪文强。他通常喜欢和有趣的人交流这类话题。",
    "关于这个，建议直接和缪文强聊聊。他喜欢和有趣的人交流。",
    "这是个好问题。不过我的知识有限，你可以直接联系缪文强了解更多。",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export default function AITwin() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "你好！我是缪文强的数字分身。你可以问我关于他的任何问题。",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // 模拟打字延迟
    setTimeout(() => {
      const response = getResponse(userMessage.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section
      id="ai-twin"
      className="py-24 bg-white min-h-screen"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            数字分身
          </h2>
          <p className="text-zinc-500">
            与缪文强的 AI 分身对话，了解更多关于他的信息
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm"
        >
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-zinc-800 text-white"
                      : "bg-zinc-900 text-white"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    message.role === "user"
                      ? "bg-zinc-800 text-white"
                      : "bg-white text-zinc-700 border border-zinc-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white border border-zinc-200">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入你的问题..."
                className="flex-1 px-4 py-3 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-400"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="px-4 bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="mt-2 text-xs text-zinc-400 text-center">
              试试问：你做什么工作？你有什么爱好？
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
