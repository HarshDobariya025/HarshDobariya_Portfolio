import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Cloud,
  Github,
  Briefcase,
  Server,
  Rocket,
  BookOpen,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
  delay?: number;
}

function InfoCard({ icon, title, value, color, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      className="group glass-card rounded-2xl p-4 sm:p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
      custom={delay}
      variants={fadeUp}
      style={{ boxShadow: `0 0 0 1px ${color}22` }}
      whileHover={{ boxShadow: `0 0 0 1.5px ${color}44, 0 8px 32px ${color}22` }}
    >
      <div
        className="mt-0.5 p-2.5 rounded-xl flex-shrink-0"
        style={{ background: `${color}18`, color }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
          {title}
        </p>
        <p className="text-sm font-semibold text-foreground leading-snug">{value}</p>
      </div>
    </motion.div>
  );
}

const CARDS = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education",
    value: "B.Tech Information Technology · CHARUSAT",
    color: "#3B82F6",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "Surat, Gujarat, India",
    color: "#8B5CF6",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Certifications",
    value: "2× AWS Certified (CLF-C02 & SAA-C03)",
    color: "#F59E0B",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Production Experience",
    value: "Cloud-native scalable deployments",
    color: "#10B981",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Availability",
    value: "Open to full-time & freelance roles",
    color: "#06B6D4",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Engineering Focus",
    value: "Cloud Architecture · Full-Stack Systems",
    color: "#6366F1",
  },
  {
    icon: <Github className="w-5 h-5" />,
    title: "Open Source",
    value: "github.com/HarshDobariya025",
    color: "#EC4899",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Backend Stack",
    value: "Node.js · Express · PostgreSQL · AWS RDS",
    color: "#14B8A6",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle bg tint */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />

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
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              variants={fadeUp}
            >
              I'm an{" "}
              <span className="font-semibold text-foreground">AWS Certified Full-Stack Developer</span>{" "}
              pursuing{" "}
              <span className="font-semibold text-blue-500">
                B.Tech in Information Technology
              </span>{" "}
              at CHARUSAT, with strong expertise in scalable backend systems,{" "}
              <span className="font-semibold text-foreground">cloud-native architectures</span>, APIs, and modern web technologies.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              variants={fadeUp}
            >
              I specialize in building production-grade applications using{" "}
              <span className="font-semibold text-foreground">React, Next.js, Node.js, PostgreSQL</span>, and AWS services including{" "}
              <span className="font-semibold text-cyan-500">EC2, S3, Lambda, Route 53, CloudFront, and RDS</span>.
              I focus on performance, scalability, security, and clean software architecture.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              variants={fadeUp}
            >
              Beyond development, I actively solve complex DSA problems, explore{" "}
              <span className="font-semibold text-purple-500">system design concepts</span>, and
              build cloud-powered platforms that solve real-world problems with efficient and
              scalable engineering solutions.
            </motion.p>

            {/* Journey milestones */}
            <motion.div
              className="mt-8 space-y-3"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
            >
              {[
                { year: "2022", event: "Started B.Tech IT at CHARUSAT" },
                { year: "2023", event: "Built first full-stack cloud-integrated application" },
                { year: "2024", event: "Earned AWS CLF-C02 & SAA-C03 certifications" },
                { year: "2025", event: "Full-Stack Developer Intern at Appify Infotech" },
              ].map((item) => (
                <motion.div
                  key={item.year}
                  className="flex items-start gap-3"
                  variants={fadeUp}
                >
                  <span className="mt-0.5 text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-md flex-shrink-0">
                    {item.year}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.event}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Info cards grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {CARDS.map((card, i) => (
              <InfoCard key={card.title} {...card} delay={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}