
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function SkillsSection() {
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

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Framer Motion",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "REST APIs",
    "GraphQL",
    "SQL",
    "Python",
    "Java",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Webpack",
    "Jest",
    "Docker",
    "AWS",
    "Vercel",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory 
            title="Frontend" 
            skills={frontendSkills} 
            badgeColor="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
          />
          <SkillCategory 
            title="Backend" 
            skills={backendSkills} 
            badgeColor="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
          />
          <SkillCategory 
            title="Tools & Others" 
            skills={toolsSkills} 
            badgeColor="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
          />
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  badgeColor: string;
}

function SkillCategory({ title, skills, badgeColor }: SkillCategoryProps) {
  return (
    <Card className="fade-in-up">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`skill-badge ${badgeColor}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
