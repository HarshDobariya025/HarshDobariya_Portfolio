import { motion } from "framer-motion";

interface Category {
  title: string;
  subtitle: string;
  skills: { name: string }[];
  bg: string;
  border: string;
  pill: string;
  glow: string;
  icon: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Frontend",
    subtitle: "UI & User Experience",
    icon: "⚡",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/UI" },
    ],
    bg: "from-blue-500/8 to-cyan-500/5",
    border: "border-blue-500/20",
    pill: "bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 border border-blue-500/20",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    title: "Backend",
    subtitle: "APIs & Databases",
    icon: "🛠️",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Neon DB" },
      { name: "Convex" },
      { name: "REST APIs" },
    ],
    bg: "from-emerald-500/8 to-teal-500/5",
    border: "border-emerald-500/20",
    pill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20",
    glow: "rgba(16,185,129,0.12)",
  },
  {
    title: "Cloud Infrastructure",
    subtitle: "AWS & Cloud Services",
    icon: "☁️",
    skills: [
      { name: "S3" },
      { name: "VPC" },
      { name: "AWS Lambda" },
      { name: "AWS RDS" },
      { name: "CloudFront" },
      { name: "Route 53" },
      { name: "IAM" },
      { name: "EC2" },
    ],
    bg: "from-amber-500/8 to-orange-500/5",
    border: "border-amber-500/20",
    pill: "bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 border border-amber-500/20",
    glow: "rgba(245,158,11,0.12)",
  },
  {
    title: "Languages",
    subtitle: "Core Programming",
    icon: "💻",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "Java" },
      { name: "Javascript" },
      { name: "Typescript" },
    ],
    bg: "from-purple-500/8 to-violet-500/5",
    border: "border-purple-500/20",
    pill: "bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 border border-purple-500/20",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    title: "Tools & Practices",
    subtitle: "DevOps & Workflow",
    icon: "🔧",
    skills: [
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "Linux" },
    ],
    bg: "from-pink-500/8 to-rose-500/5",
    border: "border-pink-500/20",
    pill: "bg-pink-500/10 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20 border border-pink-500/20",
    glow: "rgba(236,72,153,0.12)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-emerald-500/[0.03] via-transparent to-blue-500/[0.03]" />

      <div className="container px-4 mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Skills &{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        {/* Grid: 2 cols on sm, 3 cols on lg for 5 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className={`group relative rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.bg} p-6 overflow-hidden transition-all duration-300`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={catIdx}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: `0 20px 40px ${cat.glow}, 0 0 0 1px ${cat.border.replace("border-", "").replace("/20", "44")}` }}
            >
              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                  }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{cat.icon}</span>
                <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 font-medium">{cat.subtitle}</p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05, delayChildren: catIdx * 0.08 } },
                }}
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className={`skill-badge text-xs sm:text-sm ${cat.pill}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 250, damping: 12 } },
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
