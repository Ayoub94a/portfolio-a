export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-neon-cyan text-sm font-bold">
          &lt;AEK /&gt;
        </span>
        <p className="text-gray-600 text-xs font-mono">
          Designed & built by Ayoub ELKADIRI © {new Date().getFullYear()}
        </p>
        <p className="text-gray-700 text-xs font-mono">
          React · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
