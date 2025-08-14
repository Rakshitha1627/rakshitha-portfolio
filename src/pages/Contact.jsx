import GlowCard from "../components/Glowcard";
import { basics } from "../data/resume";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto">
      <GlowCard>
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="text-dim mb-4">
          Want to collaborate or just say hi? I’m always open to discussing new projects and ideas.
        </p>
        <div className="space-y-2">
          <a className="block hover:underline" href={`mailto:${basics.email}`}>{basics.email}</a>
          <p className="text-dim">{basics.phone}</p>
          <div className="flex gap-4 mt-2">
            <a className="hover:underline" href={basics.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={basics.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={basics.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
      </GlowCard>
    </section>
  );
}
