import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  pulse?: boolean;
}

export default function Badge({ children, pulse = false }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono">
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
        </span>
      )}
      {children}
    </span>
  );
}
