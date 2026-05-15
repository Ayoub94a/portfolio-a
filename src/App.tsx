import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from "./components/organisms";
import { Divider } from "./components/atoms";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-slate-950"
      }`}
    >
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-neon-cyan/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 80, damping: 30 }}
      />
    </div>
  );
}
