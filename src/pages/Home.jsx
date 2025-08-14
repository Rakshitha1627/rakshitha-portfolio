import { motion } from "framer-motion";
import GlowCard from "../components/Glowcard";
import { basics } from "../data/resume";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-glow">Rakshitha</span>
        </h1>
        <p className="mt-4 text-lg text-dim max-w-2xl mx-auto">
          {basics.summary}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <GlowCard>
          <h3 className="text-xl font-semibold mb-2">Role</h3>
          <p className="text-dim">{basics.role}</p>
        </GlowCard>
        <GlowCard>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-dim">{basics.location}</p>
        </GlowCard>
        <GlowCard>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-dim break-all">{basics.email}</p>
          <p className="text-dim">{basics.phone}</p>
        </GlowCard>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <a
          href={basics.links.github}
          target="_blank" rel="noreferrer"
          className="inline-block px-6 py-3 rounded-xl bg-glow/20 border border-glow/40 shadow-glow hover:translate-y-[-2px] transition"
        >
          View GitHub
        </a>
        <a
          href={basics.links.linkedin}
          target="_blank" rel="noreferrer"
          className="inline-block ml-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 hover:shadow-glow transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
