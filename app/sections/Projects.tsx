"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">工作</h2>
          <div className="w-12 h-px bg-zinc-300 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-zinc-600">M</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                科技招聘猎头公司负责人
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                专注于科技领域的人才招聘，连接优秀的科技公司与顶尖的科技人才。
                关注技术趋势，理解业务需求，为双方创造最大价值。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
