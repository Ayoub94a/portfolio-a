import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "../atoms";
import { ProjectCard } from "../molecules";
import { projects } from "../../data";

const filters = ["All", "Frontend", "Full-Stack", "Mobile"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// projects"
          title="What I've Built"
          subtitle="Click any card to see details"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
                active === f
                  ? "bg-neon-cyan text-gray-900 font-semibold shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                  : "border border-white/10 text-gray-400 hover:border-neon-cyan/30 hover:text-neon-cyan"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
