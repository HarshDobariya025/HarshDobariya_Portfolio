import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#070b14" }}>
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] h-[20vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="container px-4 mx-auto py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <h2 className="text-xl font-black">
              <span className="gradient-text">Harsh</span>
              <span className="text-slate-400"> Dobariya</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Full-Stack · DevOps & Cloud</p>
          </motion.div>

          {/* Center copyright */}
          <p className="text-xs text-slate-500 text-center order-3 md:order-2">
            © {new Date().getFullYear()} Harsh Dobariya. All rights reserved.
            <br />
            <span className="text-slate-600">Built with React · Tailwind · Framer Motion</span>
          </p>

          {/* Social icons */}
          <div className="flex gap-3 order-2 md:order-3">
            {[
              { icon: <Mail className="w-4 h-4" />, href: "mailto:dobariyaharsh93@gmail.com", label: "Email" },
              { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/harsh-dobariya-0b72062ba", label: "LinkedIn" },
              { icon: <Github className="w-4 h-4" />, href: "https://github.com/HarshDobariya025", label: "GitHub" },
              { icon: <Phone className="w-4 h-4" />, href: "tel:+919426638153", label: "Phone" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="p-2 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 border border-slate-700/50 hover:border-blue-500/30 transition-all"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
