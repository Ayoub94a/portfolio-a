import { motion } from "framer-motion";
import type { SkillLevel } from "../../data";

interface SkillBubbleProps {
  name: string;
  level: SkillLevel;
  icon: string;
  delay?: number;
}

const sizes: Record<SkillLevel, string> = {
  expert: "w-24 h-24 text-sm",
  advanced: "w-20 h-20 text-xs",
  intermediate: "w-16 h-16 text-xs",
};

const glows: Record<SkillLevel, string> = {
  expert: "hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] border-neon-cyan/40",
  advanced:
    "hover:shadow-[0_0_20px_rgba(191,90,242,0.4)] border-neon-purple/30",
  intermediate:
    "hover:shadow-[0_0_15px_rgba(255,55,95,0.3)] border-neon-pink/30",
};

export default function SkillBubble({
  name,
  level,
  icon,
  delay = 0,
}: SkillBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.15, y: -4 }}
      className={`
        ${sizes[level]}
        ${glows[level]}
        flex flex-col items-center justify-center gap-1
        rounded-full border bg-white/5 backdrop-blur-sm
        cursor-default transition-all duration-300
        animate-float
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-white font-medium text-center leading-tight px-1">
        {name}
      </span>
    </motion.div>
  );
}
