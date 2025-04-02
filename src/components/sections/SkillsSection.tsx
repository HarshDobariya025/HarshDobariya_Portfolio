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
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Bootstrap",
    "Material UI",
    // "Redux",
    // "TypeScript",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    // "Postgres",
    "MySQL",
    "REST APIs",
    // "Python",
    // "Java",
    // "Firebase",
    // "GraphQL",
  ];

  const languagesSkills = [
    "C",
    "C++",
    "Java",
    "Python",
  ];

  return (
    <section id="skills" className="py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
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
            title="Programming Languages" 
            skills={languagesSkills} 
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
      <CardHeader className="py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6">
        <CardTitle className="text-center text-base sm:text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 md:pb-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 justify-center">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`skill-badge ${badgeColor} text-xs sm:text-sm rounded-full px-2 py-1 sm:px-3 sm:py-1.5 font-medium`}
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