import { motion } from "framer-motion";
import type { ComponentType } from "react";

interface SocialLinkProps {
  href: string;
  icon: ComponentType<{ size?: number }>;
  label: string;
}

export default function SocialLink({
  href,
  icon: Icon,
  label,
}: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300"
    >
      <Icon size={18} />
    </motion.a>
  );
}
