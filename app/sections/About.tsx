"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Mountain, Plane, Users } from "lucide-react";

const interests = [
  { icon: Code, label: "编程" },
  { icon: Briefcase, label: "商业" },
  { icon: Mountain, label: "Hiking" },
  { icon: Plane, label: "旅行" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">关于我</h2>
          <div className="w-12 h-px bg-zinc-300 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What I do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-medium mb-4 text-zinc-700">我现在主要在做</h3>
            <p className="text-zinc-600 leading-relaxed">
              科技人才招聘。帮助优秀的科技公司与顶尖的科技人才建立连接。
              最近也在尝试 vibe coding，用 AI 辅助创作和开发。
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-medium mb-4 text-zinc-700">我的兴趣</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm bg-white"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Memorable trait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl border border-zinc-200 bg-white"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-zinc-100">
              <Users className="w-5 h-5 text-zinc-600" />
            </div>
            <div>
              <h4 className="font-medium text-zinc-800 mb-1">一个记忆点</h4>
              <p className="text-zinc-500">
                我喜欢和有趣的人交流。相信每个人都有独特的故事，
                每一次对话都是一次学习和成长的机会。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
