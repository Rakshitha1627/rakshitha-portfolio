export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-dim flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Rakshitha. All rights reserved.</p>
        <p className="opacity-80">Built with React • Tailwind • Framer Motion</p>
      </div>
    </footer>
  );
}
