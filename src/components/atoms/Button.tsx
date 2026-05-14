import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-neon-cyan text-gray-900 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] font-semibold",
  outline:
    "border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-gray-900 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]",
  ghost: "text-gray-300 hover:text-neon-cyan",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  [key: string]: unknown;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg transition-all duration-300 cursor-pointer select-none";
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cls}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </motion.button>
  );
}
