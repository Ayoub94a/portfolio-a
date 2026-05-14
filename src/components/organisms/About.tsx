import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlassCard, SectionTitle, Tag } from "../atoms";
import { about } from "../../data";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// about me"
          title="Who I Am"
          subtitle="A quick introduction"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-xl scale-110" />
              <GlassCard className="relative w-72 h-72 flex items-center justify-center">
                <span className="text-8xl">{about.avatar}</span>
              </GlassCard>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-gray-900 border border-neon-cyan/30 rounded-xl px-3 py-2 text-center shadow-lg"
              >
                <p className="text-neon-cyan font-bold text-xl">
                  {about.stats.years}+
                </p>
                <p className="text-gray-400 text-xs">Years Exp.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gray-900 border border-neon-purple/30 rounded-xl px-3 py-2 text-center shadow-lg"
              >
                <p className="text-neon-purple font-bold text-xl">
                  {about.stats.projects}+
                </p>
                <p className="text-gray-400 text-xs">Projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {about.headline}
            </h3>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-400 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div className="mt-6">
              <p className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">
                Currently into
              </p>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((item) => (
                  <Tag key={item} color="cyan">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
