import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
    </motion.div>
  );
}
