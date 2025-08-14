import GlowCard from "../components/Glowcard";
import { skills, education } from "../data/resume";
import { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto space-y-10">
      {/* Skills */}
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

      {/* Education */}
      <GlowCard>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="space-y-3">
          {education.map((e) => (
            <div
              key={e.school}
              className="border-b border-white/10 pb-3 last:border-none last:pb-0"
            >
              <p className="font-semibold">{e.school}</p>
              <p className="text-dim">
                {e.degree} • {e.period} • {e.score}
              </p>
            </div>
          ))}
        </div>
      </GlowCard>

      {/* Contact Form */}
      <GlowCard>
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
          >
            Send
          </button>
        </form>
      </GlowCard>
    </section>
  );
}
