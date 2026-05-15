import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../molecules";
import { Button } from "../atoms";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-mono text-neon-cyan font-bold text-lg tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          &lt;AEK /&gt;
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              active={active === href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(href);
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <Button
            variant="outline"
            size="sm"
            href="/portfolio-a/resume.pdf"
            className="hidden md:inline-flex"
          >
            Resume
          </Button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-gray-400"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950/95 backdrop-blur-md border-b border-white/5"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  active={active === href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(href);
                  }}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
