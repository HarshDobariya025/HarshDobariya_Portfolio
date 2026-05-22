import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Award } from "lucide-react";

interface Cert {
  title: string;
  code: string;
  badge: string;
  description: string;
  glowColor: string;
  accentColor: string;
  pillBg: string;
  pillText: string;
  pillBorder: string;
  borderColor: string;
  verifyUrl: string;
}

const CERTS: Cert[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    description:
      "Foundational AWS Cloud expertise — core services, security, architecture, pricing, and support. Validates essential cloud fluency and operational knowledge.",
    glowColor: "rgba(245,158,11,0.35)",
    accentColor: "#F59E0B",
    pillBg: "rgba(245,158,11,0.12)",
    pillText: "#F59E0B",
    pillBorder: "rgba(245,158,11,0.3)",
    borderColor: "rgba(245,158,11,0.2)",
    verifyUrl: "https://www.credly.com/badges/f08b8a11-ef7d-4731-98b4-fe6ed45fcf8e/public_url",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    code: "SAA-C03",
    badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    description:
      "Designing scalable, resilient, cost-optimized cloud architectures on AWS. Covers multi-tier apps, EC2, S3, RDS, VPC, CloudFront, IAM, and auto-scaling.",
    glowColor: "rgba(59,130,246,0.35)",
    accentColor: "#3B82F6",
    pillBg: "rgba(59,130,246,0.12)",
    pillText: "#3B82F6",
    pillBorder: "rgba(59,130,246,0.3)",
    borderColor: "rgba(59,130,246,0.2)",
    verifyUrl: "https://www.credly.com/badges/62895d9c-2152-4b18-a789-15a1d38d4907/public_url",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-blue-500/[0.04] via-background to-amber-500/[0.03]"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-[-15%] left-[5%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] right-[5%] w-[35vw] h-[35vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
      />

      {/* Dot pattern — dimmer in light mode */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Professional Credentials
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-3">
            AWS{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Validated cloud expertise through Amazon Web Services
          </p>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-amber-400 to-blue-400" />
        </motion.div>

        {/* Compact horizontal cert cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.code}
              className="relative rounded-2xl overflow-hidden glass-card"
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              whileHover={{
                y: -2,
                boxShadow: `0 0 40px ${cert.glowColor}, 0 0 80px ${cert.glowColor.replace("0.35", "0.15")}`,
                transition: { duration: 0.2 },
              }}
              style={{
                border: `1px solid ${cert.borderColor}`,
                boxShadow: `0 0 0 1px ${cert.borderColor}, 0 4px 24px ${cert.glowColor.replace("0.35", "0.08")}`,
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: `linear-gradient(to bottom, ${cert.accentColor}, ${cert.accentColor}50)` }}
              />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 sm:p-6 pl-6 sm:pl-7">
                {/* Left: Badge + Code */}
                <div className="flex sm:flex-col items-center gap-3 sm:gap-2 flex-shrink-0">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 1 }}
                  >
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ boxShadow: `0 0 20px ${cert.glowColor}`, borderRadius: "50%" }}
                    />
                    <img
                      src={cert.badge}
                      alt={cert.title}
                      className="relative z-10 w-16 h-16 object-contain drop-shadow-lg"
                    />
                  </motion.div>

                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full whitespace-nowrap"
                    style={{
                      background: cert.pillBg,
                      color: cert.pillText,
                      border: `1px solid ${cert.pillBorder}`,
                    }}
                  >
                    {cert.code}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="hidden sm:block w-px self-stretch flex-shrink-0"
                  style={{ background: `linear-gradient(to bottom, transparent, ${cert.accentColor}30, transparent)` }}
                />

                {/* Right: Content */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                        <Award className="w-4 h-4 flex-shrink-0" style={{ color: cert.accentColor }} />
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Amazon Web Services
                        </p>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug mb-2">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg">
                    {cert.description}
                  </p>

                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors"
                    style={{
                      background: cert.pillBg,
                      color: cert.pillText,
                      border: `1px solid ${cert.pillBorder}`,
                    }}
                    whileHover={{
                      scale: 1.04,
                      background: cert.accentColor,
                      color: "#fff",
                      transition: { duration: 0.15 },
                    }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    View Credential
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground font-medium"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            2 Active Certifications
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            AWS Cloud Platform
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Issued 2025
          </span>
        </motion.div>
      </div>
    </section>
  );
}
