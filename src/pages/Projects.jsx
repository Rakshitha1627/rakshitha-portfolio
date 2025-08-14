import { motion } from "framer-motion";
import GlowCard from "../components/Glowcard";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <GlowCard>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-dim mt-2">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      ))}
    </section>
  );
}
