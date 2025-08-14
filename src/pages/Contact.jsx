import GlowCard from "../components/Glowcard";
import { basics } from "../data/resume";
import { useState } from "react";

export default function Contact() {
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
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-3xl mx-auto space-y-6">
      {/* Contact Info */}
      <GlowCard>
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="text-dim mb-4">
          Want to collaborate or just say hi? I’m always open to discussing new projects and ideas.
        </p>
        <div className="space-y-2">
          <a className="block hover:underline" href={`mailto:${basics.email}`}>
            {basics.email}
          </a>
          <p className="text-dim">{basics.phone}</p>
          <div className="flex gap-4 mt-2">
            <a className="hover:underline" href={basics.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={basics.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={basics.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
      </GlowCard>

      {/* Contact Form */}
      <GlowCard>
        <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-transparent border border-gray-500 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-transparent border border-gray-500 focus:border-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-transparent border border-gray-500 focus:border-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold"
          >
            Send
          </button>
        </form>
      </GlowCard>
    </section>
  );
}
