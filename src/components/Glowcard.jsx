export default function GlowCard({ children }) {
  return (
    <div className="rounded-2xl bg-mid/60 border border-white/10 p-5 hover:shadow-glow hover:border-glow/40 transition">
      {children}
    </div>
  );
}
