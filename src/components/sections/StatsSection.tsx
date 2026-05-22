import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cloud, Server, Layers } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  glow: string;
  borderColor: string;
}

const STATS: Stat[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    value: 5,
    suffix: "+",
    label: "Projects Built",
    sublabel: "Production-grade apps",
    color: "text-blue-500",
    glow: "rgba(59,130,246,0.18)",
    borderColor: "rgba(59,130,246,0.25)",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    value: 2,
    suffix: "×",
    label: "AWS Certified",
    sublabel: "CLF-C02 & SAA-C03",
    color: "text-amber-500",
    glow: "rgba(245,158,11,0.18)",
    borderColor: "rgba(245,158,11,0.25)",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    value: 10,
    suffix: "+",
    label: "Technologies",
    sublabel: "Full-stack ecosystem",
    color: "text-purple-500",
    glow: "rgba(139,92,246,0.18)",
    borderColor: "rgba(139,92,246,0.25)",
  },
  {
    icon: <Server className="w-6 h-6" />,
    value: 3,
    suffix: "+",
    label: "Cloud Deployments",
    sublabel: "AWS-hosted scalable apps",
    color: "text-cyan-500",
    glow: "rgba(6,182,212,0.18)",
    borderColor: "rgba(6,182,212,0.25)",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Subtle divider gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 h-full"
                style={{
                  boxShadow: `0 0 0 1px ${stat.borderColor}, 0 4px 24px ${stat.glow}`,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 0 0 1.5px ${stat.borderColor}, 0 12px 36px ${stat.glow}, 0 0 32px ${stat.glow}`,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Icon */}
                <div
                  className={`${stat.color} p-2.5 rounded-xl`}
                  style={{ background: `${stat.glow.replace("0.18", "0.12")}` }}
                >
                  {stat.icon}
                </div>

                {/* Value */}
                <div className={`text-3xl sm:text-4xl font-black ${stat.color}`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="space-y-0.5">
                  <p className="text-sm text-foreground font-semibold leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
