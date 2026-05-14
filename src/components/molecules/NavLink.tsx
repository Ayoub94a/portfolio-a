import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({
  href,
  children,
  active = false,
  onClick,
}: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`relative font-mono text-sm transition-colors duration-200 ${
        active ? "text-neon-cyan" : "text-gray-400 hover:text-white"
      }`}
      whileHover={{ y: -1 }}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-px bg-neon-cyan"
        />
      )}
    </motion.a>
  );
}
