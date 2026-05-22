import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, SendIcon, Download, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:dobariyaharsh93@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      toast({ title: "Email client opened!", description: "Complete the send in your email app." });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const inputClass = (field: string) =>
    `w-full bg-muted/50 border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/60 ${
      focused === field
        ? "border-blue-500/60 ring-2 ring-blue-500/15"
        : "border-border hover:border-blue-500/30"
    }`;

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-cyan-500/[0.03] via-transparent to-blue-500/[0.03]" />

      <div className="container px-4 mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Let's work together
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Left — Contact info */}
          <motion.div
            className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-xl font-bold mb-1">Contact Information</h3>
              <p className="text-sm text-muted-foreground">
                Let's connect and discuss how we can work together.
              </p>
            </div>

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-500">Available for Freelance</span>
            </div>

            {/* Contact items */}
            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="w-4 h-4" />,
                  label: "Email",
                  value: "dobariyaharsh93@gmail.com",
                  href: "mailto:dobariyaharsh93@gmail.com",
                },
                {
                  icon: <Phone className="w-4 h-4" />,
                  label: "Phone",
                  value: "(+91) 9426638153",
                  href: "tel:+919426638153",
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  label: "Location",
                  value: "Surat, Gujarat, India",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-blue-500/10 text-blue-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-blue-500 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        {item.value}
                      </motion.a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Follow Me
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/HarshDobariya025", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/harsh-dobariya-0b72062ba", label: "LinkedIn" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-xl bg-muted/60 border border-border hover:border-blue-500/50 hover:bg-blue-500/10 text-muted-foreground hover:text-blue-500 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="glass-card rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold mb-1">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form and I'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClass("name")}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClass("email")}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  className={`${inputClass("message")} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-3 rounded-xl font-semibold text-sm text-white overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer on hover */}
                <span className="absolute inset-0 shimmer-btn pointer-events-none opacity-0 hover:opacity-100" />
                <span className="relative flex items-center justify-center gap-2">
                  <SendIcon className="w-4 h-4" />
                  {isSubmitting ? "Opening email..." : "Send Message"}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Resume CTA */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="/HarshDobariya-Resume.pdf"
            download="Harsh_Dobariya_Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-blue-500/40 text-blue-500 hover:bg-blue-500/10 transition-colors"
            whileHover={{ scale: 1.04, boxShadow: "0 0 16px rgba(59,130,246,0.2)" }}
            whileTap={{ scale: 0.96 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}