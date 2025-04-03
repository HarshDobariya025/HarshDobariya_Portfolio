import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SkillsSection() {
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
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "REST APIs",
  ];

  const languagesSkills = [
    "C",
    "C++",
    "Java",
    "Python",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };

  const skillBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: { 
      scale: 1.1, 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="py-10 sm:py-14 md:py-16 lg:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SkillCategory 
            title="Frontend" 
            skills={frontendSkills} 
            badgeColor="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
            variants={categoryVariants}
            badgeVariants={skillBadgeVariants}
          />
          <SkillCategory 
            title="Backend" 
            skills={backendSkills} 
            badgeColor="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
            variants={categoryVariants}
            badgeVariants={skillBadgeVariants}
          />
          <SkillCategory 
            title="Programming Languages" 
            skills={languagesSkills} 
            badgeColor="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
            variants={categoryVariants}
            badgeVariants={skillBadgeVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  badgeColor: string;
  variants: any;
  badgeVariants: any;
}

function SkillCategory({ title, skills, badgeColor, variants, badgeVariants }: SkillCategoryProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full">
        <CardHeader className="py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6">
          <CardTitle className="text-center text-base sm:text-lg md:text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 md:pb-6">
          <motion.div 
            className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 justify-center"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className={`${badgeColor} text-xs sm:text-sm rounded-full px-2 py-1 sm:px-3 sm:py-1.5 font-medium`}
                variants={badgeVariants}
                custom={index}
                whileHover="hover"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}