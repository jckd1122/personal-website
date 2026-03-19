"use client";

import { motion } from "framer-motion";
import { MapPin, MessageSquare, Heart } from "lucide-react";

const qaList = [
  {
    q: "你现在生活在哪？",
    a: "在上海，一座充满活力的城市。",
  },
  {
    q: "做什么事情？",
    a: "经营一家科技招聘猎头公司，帮助优秀的人才找到合适的位置。",
  },
  {
    q: "你的爱好是什么？",
    a: "编程、商业、Hiking、旅行。喜欢探索新事物，和有趣的人交流。",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            常见问题
          </h2>
          <div className="w-12 h-px bg-zinc-300 mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {qaList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-200 bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-zinc-100 flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-zinc-500" />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-800 mb-2">{item.q}</h4>
                  <p className="text-zinc-500">{item.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-zinc-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">上海 · 中国</span>
          </div>
          <p className="mt-4 text-zinc-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3" /> by 缪文强
          </p>
        </motion.div>
      </div>
    </section>
  );
}
