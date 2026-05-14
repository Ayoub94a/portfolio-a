import type { ReactNode } from "react";

type TagColor = "cyan" | "purple" | "pink" | "gray";

interface TagProps {
  children: ReactNode;
  color?: TagColor;
}

const colors: Record<TagColor, string> = {
  cyan: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30",
  purple: "bg-neon-purple/10 text-neon-purple border-neon-purple/30",
  pink: "bg-neon-pink/10 text-neon-pink border-neon-pink/30",
  gray: "bg-white/5 text-gray-400 border-white/10",
};

export default function Tag({ children, color = "cyan" }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono border ${colors[color]}`}
    >
      {children}
    </span>
  );
}
