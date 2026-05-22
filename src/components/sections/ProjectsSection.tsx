import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap, Brain, BarChart3, Bot, ShoppingCart, MessageSquare, QrCode, CloudSun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../assets/assets";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  featured: boolean;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Career Guidance System",
    description:
      "Full-stack AI platform — personalized industry insights, resume builder, MCQ practice, and AI-generated cover letters based on user skills and experience.",
    image: assets.AICareerNexus,
    techStack: ["Next.js", "AWS", "Node.js", "Neon PostgreSQL", "Gemini API", "Clerk", "Tailwind"],
    liveDemo: "https://ai-career-coach-v2-xi.vercel.app/",
    github: "https://github.com/HarshDobariya025/AI-Career-Coach.git",
    featured: true,
    badge: "AI Integrated",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    icon: <Brain className="w-3.5 h-3.5" />,
  },
  {
    id: 2,
    title: "Spott — Event Organiser",
    description:
      "Event platform with QR tickets, organizer dashboard, real-time check-ins, attendee management, revenue analytics and AI-powered features.",
    image: assets.Spott,
    techStack: ["Next.js", "AWS", "Node.js", "Convex", "Gemini API", "Clerk", "Tailwind"],
    liveDemo: "https://ai-event-organiser-seven.vercel.app/",
    github: "https://github.com/HarshDobariya025/AI-Event-Organiser.git",
    featured: true,
    badge: "Cloud Powered",
    badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
    icon: <Zap className="w-3.5 h-3.5" />,
  },
  {
    id: 3,
    title: "WebTrack — Analytics Platform",
    description:
      "Analytics platform with lightweight tracking script, 7-day free trial, dashboard with source/device/browser insights and visualizations.",
    image: assets.Webtrack,
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Gemini API", "Clerk", "Tailwind"],
    liveDemo: "https://web-track-phi.vercel.app/",
    github: "https://github.com/HarshDobariya025/Web-Track.git",
    featured: true,
    badge: "Production Ready",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/25",
    icon: <BarChart3 className="w-3.5 h-3.5" />,
  },
  {
    id: 4,
    title: "AI Student Assistant",
    description:
      "Platform for tech students with AI chatbot, 24/7 AI doubt solver, resume builder, and scholarship listings to enhance learning opportunities.",
    image: assets.StudyMate,
    techStack: ["React", "Node.js", "Express", "Redux", "Gemini API", "Tailwind"],
    liveDemo: "https://ai-student-assistant-six.vercel.app/",
    github: "https://github.com/HarshDobariya025/AI-Student-Assistant.git",
    featured: false,
    badge: "AI Integrated",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    icon: <Bot className="w-3.5 h-3.5" />,
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
    image: assets.Ecommerce,
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
    liveDemo: "https://cloth-frontend-eta.vercel.app/",
    github: "https://github.com/HarshDobariya025/Cloth-Full-Stack.git",
    featured: false,
    badge: "Full Stack",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/25",
    icon: <ShoppingCart className="w-3.5 h-3.5" />,
  },
  {
    id: 6,
    title: "Gemini Clone",
    description:
      "AI-powered chatbot allowing users to ask anything. Features sidebar for new chats and recent conversations, just like Gemini AI.",
    image: assets.Gemini,
    techStack: ["React", "Gemini API", "Tailwind CSS"],
    liveDemo: "https://gemini-clone-ten-lovat.vercel.app/",
    github: "https://github.com/HarshDobariya025/Gemini_clone.git",
    featured: false,
    badge: "AI Integrated",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    icon: <MessageSquare className="w-3.5 h-3.5" />,
  },
  {
    id: 7,
    title: "QR Code Generator",
    description:
      "Versatile QR Code Generator and Scanner supporting URLs, emails, Wi-Fi, locations, events, and plain text with built-in scanner.",
    image: assets.QRGenerator,
    techStack: ["React", "QRCode.js", "Tailwind"],
    liveDemo: "https://qr-code-generator-snowy.vercel.app/",
    github: "https://github.com/HarshDobariya025/QR-Code-generator.git",
    featured: false,
    badge: "Production Ready",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/25",
    icon: <QrCode className="w-3.5 h-3.5" />,
  },
  {
    id: 8,
    title: "Weather Dashboard",
    description:
      "Real-time weather information with forecasts, animated visualizations, and location-based data using public weather APIs.",
    image: assets.Weather,
    techStack: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://weather-web-app-five-pi.vercel.app/",
    github: "https://github.com/HarshDobariya025/Weather_Web_App.git",
    featured: false,
    badge: "Full Stack",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/25",
    icon: <CloudSun className="w-3.5 h-3.5" />,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden border border-border/60 bg-card/60 backdrop-blur-sm flex flex-col project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: "easeOut" }}
      whileHover={{
        borderColor: "rgba(59,130,246,0.5)",
        boxShadow: "0 24px 48px rgba(59,130,246,0.12), 0 0 0 1px rgba(59,130,246,0.2)",
      }}
    >
      {/* Browser frame mock */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-muted/70 border-b border-border/50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-muted-foreground/60 font-mono truncate flex-1">
          {project.liveDemo.replace("https://", "")}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Badge */}
        <span className={`self-start inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
          {project.icon}
          {project.badge}
        </span>

        <h3 className="text-base sm:text-lg font-bold leading-snug line-clamp-2 text-foreground">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-full bg-blue-500/8 text-blue-500 dark:text-blue-400 border border-blue-500/15 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground border border-border">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-1">
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 16px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-border hover:border-blue-500/50 hover:bg-blue-500/8 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featured = PROJECTS.filter(p => p.featured);
  const displayed = showAll ? PROJECTS : featured;

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />

      <div className="container px-4 mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
            What I've built
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Production-ready applications — from AI platforms to cloud-powered tools
          </p>
          <div className="w-16 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "all" : "featured"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more button */}
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setShowAll(s => !s)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-blue-500/40 text-blue-500 hover:bg-blue-500/10 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {showAll ? (
              <>View Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show More Projects <ChevronDown className="w-4 h-4" /></>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
}