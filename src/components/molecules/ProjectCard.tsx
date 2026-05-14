import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard, Tag, Button } from "../atoms";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../../data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="perspective-1000 h-72 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <GlassCard
          hover
          className="absolute inset-0 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <div className="flex items-start justify-between mb-3">
              <span className="text-4xl">{project.emoji}</span>
              <span className="text-xs font-mono text-gray-500">
                {project.year}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.stack.slice(0, 4).map((tech) => (
              <Tag key={tech} color="gray">
                {tech}
              </Tag>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2 font-mono">
            click to flip →
          </p>
        </GlassCard>

        {/* Back */}
        <GlassCard
          className="absolute inset-0 p-6 flex flex-col justify-between border-neon-cyan/30"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-xl font-bold text-neon-cyan mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Tag key={tech} color="cyan">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <Button variant="outline" size="sm" href={project.github}>
                <FiGithub size={14} /> GitHub
              </Button>
            )}
            {project.live && (
              <Button variant="primary" size="sm" href={project.live}>
                <FiExternalLink size={14} /> Live
              </Button>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
