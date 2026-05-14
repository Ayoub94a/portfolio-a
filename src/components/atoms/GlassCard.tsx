import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
  [key: string]: unknown;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  style,
  ...props
}: GlassCardProps) {
  const base = "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm";
  const hoverCls = hover
    ? "hover:border-neon-cyan/40 hover:bg-white/10 transition-all duration-300"
    : "";

  return (
    <motion.div
      className={`${base} ${hoverCls} ${className}`}
      style={style}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </motion.div>
  );
}
