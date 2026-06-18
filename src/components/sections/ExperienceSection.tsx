import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string[];
  tags: string[];
  accentColor: string;
  glowColor: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "Square Infosoft",
    location: "Remote",
    duration: "May 2026 — June 2026",
    type: "Internship",
    description: [
      "Developing and maintaining full-stack web applications using modern frameworks and technologies",
      "Collaborating on cloud-based deployments and DevOps workflows with Docker and CI/CD pipelines",
      "Building scalable REST APIs and integrating third-party services for production use cases",
      "Contributing to codebase improvements, code reviews, and agile development sprints",
    ],
    tags: ["Next.js", "Node.js", "Prisma", "PostgresSQL", "REST API"],
    accentColor: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Appify Infotech",
    location: "Remote",
    duration: "May 2025 — June 2025",
    type: "Internship",
    description: [
      "Built and deployed REST APIs using Node.js and Express for backend modules",
      "Designed optimized MongoDB schemas and implemented backend data architecture",
      "Developed a responsive React.js admin dashboard with real-time data visualization",
      "Improved operational visibility by integrating live analytics and real-time dashboards",
    ],
    tags: ["Node.js", "Express", "MongoDB", "React.js", "REST API", "Dashboard"],
    accentColor: "#3B82F6",
    glowColor: "rgba(59,130,246,0.15)",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.02]" />

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
            Professional Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 experience-line rounded-full" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                className="relative pl-12 sm:pl-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={fadeUp}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2 sm:left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${exp.accentColor}, #8B5CF6)`,
                    borderColor: exp.accentColor,
                    boxShadow: `0 0 16px ${exp.glowColor}, 0 0 32px ${exp.glowColor}`,
                    marginLeft: "-2px",
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 8px ${exp.glowColor}`,
                      `0 0 24px ${exp.glowColor}, 0 0 40px ${exp.glowColor}`,
                      `0 0 8px ${exp.glowColor}`,
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
                  style={{
                    boxShadow: `0 0 0 1px ${exp.accentColor}20, 0 4px 24px ${exp.glowColor}`,
                    borderLeft: `3px solid ${exp.accentColor}60`,
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: `0 0 0 1.5px ${exp.accentColor}40, 0 12px 40px ${exp.glowColor}, 0 0 40px ${exp.glowColor}`,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
                    <div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                      }}
                    />
                  </div>

                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      {/* Company logo placeholder */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${exp.accentColor}15`, border: `1px solid ${exp.accentColor}30` }}
                      >
                        <Briefcase className="w-6 h-6" style={{ color: exp.accentColor }} />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-base font-semibold mt-0.5" style={{ color: exp.accentColor }}>
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${exp.accentColor}12`,
                          color: exp.accentColor,
                          border: `1px solid ${exp.accentColor}30`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((point, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08, duration: 0.4 }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: exp.accentColor }}
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: `${exp.accentColor}10`,
                          color: exp.accentColor,
                          border: `1px solid ${exp.accentColor}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
