import { motion } from "framer-motion";
import { basics } from "../data/resume"; // from the resume.js file we created

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-4"
      >
        Hi, I’m <span className="text-glow">{basics.name}</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl text-dim mb-6"
      >
        {basics.role} • {basics.location}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-2xl text-lg text-gray-300 mb-8"
      >
        {basics.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="flex gap-4"
      >
        <a
          href={basics.links.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg bg-glow/20 border border-glow/40 shadow-glow hover:-translate-y-1 transition"
        >
          GitHub
        </a>
        <a
          href={basics.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent/40 hover:shadow-glow transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
