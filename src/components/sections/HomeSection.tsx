import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, ExternalLink, Sparkles, Cloud, CheckCircle2, ChevronDown, Award } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { assets } from "../../assets/assets";

const ROLES = [
  "Backend Systems",
  "Cloud-Native Applications",
  "Scalable Architectures",
  "Production-Grade Platforms",
];

function useTypingEffect(words: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Floating particle
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{
        y: [0, -80, 0],
        x: [0, Math.random() > 0.5 ? 40 : -40, 0],
        opacity: [0.4, 0.8, 0],
        scale: [1, 0.6, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        delay: Math.random() * 4,
        ease: "easeOut",
      }}
    />
  );
}

export default function HomeSection() {
  const role = useTypingEffect(ROLES);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-200, 200], [8, -8]);
  const rotateY = useTransform(mouseX, [-200, 200], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const particles = useRef(
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      style: {
        width: `${4 + Math.random() * 8}px`,
        height: `${4 + Math.random() * 8}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        background: i % 3 === 0
          ? "rgba(59,130,246,0.6)"
          : i % 3 === 1
            ? "rgba(6,182,212,0.5)"
            : "rgba(139,92,246,0.5)",
      } as React.CSSProperties,
    }))
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            animation: "blob-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            animation: "blob-pulse 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full opacity-10 dark:opacity-8"
          style={{
            background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
            animation: "blob-pulse 12s ease-in-out infinite 4s",
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-40" />
        {/* Particles */}
        {particles.current.map(p => <Particle key={p.id} style={p.style} />)}
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            }}
          >
            {/* Status badges */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/25 shadow-sm shadow-amber-500/10">
                <Cloud className="w-3.5 h-3.5" />
                2× AWS Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/25 shadow-sm shadow-purple-500/10">
                <Award className="w-3.5 h-3.5" />
                Top 2% NPTEL Programmer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-blue-500 font-semibold text-lg mb-1 tracking-wide"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-3 leading-tight tracking-tight"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="gradient-text">Harsh</span>
              <br />
              <span className="text-foreground">Dobariya</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-base sm:text-lg font-semibold text-muted-foreground mb-2"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              Full-Stack Developer &amp;  Cloud Engineer
            </motion.p>

            {/* Typing role */}
            <motion.div
              className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6 h-8"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <span className="text-sm sm:text-base text-muted-foreground/60 mr-1.5">Building</span>
              <span className="gradient-text">{role}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Full-Stack & Cloud Engineer focused on building scalable, high-performance applications with modern frontend technologies, robust backend systems, and cloud-native architectures on AWS.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {/* LinkedIn — Primary gradient CTA */}
              <motion.a
                href="https://www.linkedin.com/in/harsh-dobariya-0b72062ba"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white text-sm overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 28px rgba(59,130,246,0.55), 0 0 48px rgba(139,92,246,0.3)" }}
                whileTap={{ scale: 0.96 }}
              >
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2.5s ease infinite",
                  }}
                />
                <Linkedin className="w-4 h-4 relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/HarshDobariya025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm border border-border hover:border-blue-500/60 bg-muted/50 hover:bg-blue-500/10 transition-all duration-200 group"
                whileHover={{ scale: 1.05, boxShadow: "0 0 16px rgba(59,130,246,0.2)" }}
                whileTap={{ scale: 0.96 }}
              >
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </motion.a>

              {/* Resume */}
              <motion.a
                href="https://drive.google.com/file/d/1c2ttS5yNEM13zYB2WpkOxILvdtxvNmfI/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm border border-blue-500/40 text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/70 transition-all duration-200 group"
                whileHover={{ scale: 1.05, boxShadow: "0 0 16px rgba(59,130,246,0.25)" }}
                whileTap={{ scale: 0.96 }}
              >
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Profile image ── */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 600 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                {/* Outer glow aura */}
                <div
                  className="absolute inset-[-12px] rounded-full opacity-30"
                  style={{
                    background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                    filter: "blur(20px)",
                    animation: "spin-slow 6s linear infinite",
                  }}
                />

                {/* Spinning gradient ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                    animation: "spin-slow 4s linear infinite",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-background" />
                </div>

                {/* Inner glow ring */}
                <div
                  className="absolute inset-[-4px] rounded-full opacity-60"
                  style={{
                    background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                    filter: "blur(12px)",
                    animation: "spin-slow 4s linear infinite",
                  }}
                />

                {/* Image */}
                <div className="absolute inset-[4px] rounded-full overflow-hidden border-2 border-background z-10">
                  <img
                    src={assets.Harsh}
                    alt="Harsh Dobariya"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Float badge — AWS */}
                <motion.div
                  className="absolute -bottom-2 -right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold glass-card border border-amber-400/40 text-amber-500 shadow-lg shadow-amber-500/20"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-3 h-3" />
                  Full-Stack Developer
                </motion.div>

                {/* Float badge — Cloud */}
                <motion.div
                  className="absolute -top-2 -left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold glass-card border border-blue-400/40 text-blue-500 shadow-lg shadow-blue-500/20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Cloud className="w-3 h-3" />
                  Cloud Engineer
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}