import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { GlassCard, SectionTitle, Button } from "../atoms";
import { SocialLink } from "../molecules";
import { FiMail, FiSend } from "react-icons/fi";
import { contact } from "../../data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="// contact"
          title="Let's Connect"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {contact.headline}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {contact.message}
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-neon-cyan font-mono text-sm hover:underline mb-8"
            >
              <FiMail size={16} />
              <span>{contact.email}</span>
            </a>

            <div className="flex gap-3">
              {contact.socials.map(({ href, icon, label }) => (
                <SocialLink key={label} href={href} icon={icon} label={label} />
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="p-6">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <span className="text-4xl mb-3 block">🎉</span>
                  <p className="text-neon-cyan font-semibold text-lg">
                    Message sent!
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-500 mb-1.5 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={inputCls}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-500 mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={inputCls}
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-500 mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      className={`${inputCls} resize-none`}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full justify-center mt-1"
                  >
                    <FiSend size={15} /> Send Message
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
