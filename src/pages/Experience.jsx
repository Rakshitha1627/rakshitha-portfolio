import { motion } from "framer-motion";
import GlowCard from "../components/Glowcard";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto grid gap-6">
      {experience.map((exp, idx) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <GlowCard>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.title} — {exp.company}</h3>
                <p className="text-dim">{exp.period}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc list-inside space-y-2 text-dim">
              {exp.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </GlowCard>
        </motion.div>
      ))}
    </section>
  );
}
