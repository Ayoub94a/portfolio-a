import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "../atoms";
import { SkillBubble } from "../molecules";
import { skills } from "../../data";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// skills"
          title="My Toolkit"
          subtitle="Technologies I build with"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 py-8"
        >
          {skills.map((skill, i) => (
            <SkillBubble
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              delay={i * 0.07}
            />
          ))}
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-8">
          {[
            { color: "text-neon-cyan", label: "Expert" },
            { color: "text-neon-purple", label: "Advanced" },
            { color: "text-neon-pink", label: "Intermediate" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-current ${color}`} />
              <span className={`text-xs font-mono ${color}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
