import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tag } from "../atoms";
import type { ExperienceItem } from "../../data";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}
      >
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-neon-cyan/30 transition-colors duration-300">
          <span className="font-mono text-neon-cyan text-xs">
            {item.period}
          </span>
          <h3 className="text-white font-bold text-lg mt-1">{item.role}</h3>
          <p className="text-neon-purple text-sm font-medium">{item.company}</p>
          <p className="text-gray-400 text-sm mt-2">{item.description}</p>
          <div
            className={`flex flex-wrap gap-1.5 mt-3 ${isLeft ? "md:justify-end" : ""}`}
          >
            {item.skills.map((s) => (
              <Tag key={s} color="purple">
                {s}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,245,255,0.8)] z-10" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
