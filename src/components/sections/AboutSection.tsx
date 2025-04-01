
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, MapPin, Trophy } from "lucide-react";
import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me and my background"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none fade-in-up">
              <p>
                I am a passionate full-stack developer with over 5 years of
                experience creating web applications that are not only
                functional but also provide exceptional user experiences.
              </p>
              <p>
                My journey in software development began during my college years
                where I first discovered my passion for coding. Since then, I've
                worked with various technologies and frameworks, always eager to
                learn and adapt to the ever-evolving tech landscape.
              </p>
              <p>
                I specialize in building responsive web applications using modern
                JavaScript frameworks like React and Next.js on the frontend,
                coupled with Node.js, Express, and MongoDB on the backend. I
                believe in writing clean, maintainable code and following best
                practices to ensure scalability and performance.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and mentoring junior developers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <InfoCard
                icon={<GraduationCap />}
                title="Education"
                description="B.Tech in Computer Science"
              />

              <InfoCard
                icon={<Briefcase />}
                title="Experience"
                description="5+ Years of Development"
              />

              <InfoCard
                icon={<MapPin />}
                title="Location"
                description="Mumbai, India"
              />

              <InfoCard
                icon={<Trophy />}
                title="Achievements"
                description="15+ Successful Projects"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <StatCard number="25+" label="Projects Completed" delay={0} />
          <StatCard number="5+" label="Years Experience" delay={100} />
          <StatCard number="15+" label="Happy Clients" delay={200} />
          <StatCard number="3000+" label="Coffee Cups" delay={300} />
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <Card className="fade-in-up">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
}

function StatCard({ number, label, delay }: StatCardProps) {
  return (
    <div
      className="fade-in-up bg-card p-6 rounded-lg shadow-sm text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold text-primary mb-2">{number}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
