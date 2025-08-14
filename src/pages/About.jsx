import GlowCard from "../components/Glowcard";
import { skills, education } from "../data/resume";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto space-y-10">
      <GlowCard>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.group}>
              <p className="font-medium">{s.group}</p>
              <p className="text-dim">{s.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </GlowCard>

      <GlowCard>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="space-y-3">
          {education.map((e) => (
            <div key={e.school} className="border-b border-white/10 pb-3 last:border-none last:pb-0">
              <p className="font-semibold">{e.school}</p>
              <p className="text-dim">{e.degree} • {e.period} • {e.score}</p>
            </div>
          ))}
        </div>
      </GlowCard>
    </section>
  );
}
