import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { assets } from '../../assets/assets';
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "AI Career Guidance Syatem",
      description:
        "AI Career Coach is a full-stack platform offering personalized industry insights, resume builder, MCQ practice, and AI-generated cover letters based on user skills and experience.",
      image: assets.AICareerNexus,
      techStack: ["NextJS", "AWS", "Ingest", "Node.js", "Neon PostgresSQL", "Gemini API", "Clerk", "ShadcnUI", "Tailwind"],
      liveDemo: "https://ai-career-coach-v2-xi.vercel.app/",
      github: "https://github.com/HarshDobariya025/AI-Career-Coach.git",
      featured: true,
    },
    {
      id: 2,
      title: "Spott - Event Organiser",
      description:
        "Developed an event organizer platform that lets users discover events, register with QR-based tickets, and manage bookings with pro membership features. It also provides an organizer dashboard with real-time check-ins, attendee management, and revenue analytics.",
      image: assets.Spott,
      techStack: ["NextJS", "AWS", "Node.js", "Convex", "Gemini API", "Clerk", "ShadcnUI", "Tailwind"],
      liveDemo: "https://ai-event-organiser-seven.vercel.app/",
      github: "https://github.com/HarshDobariya025/AI-Event-Organiser.git",
      featured: true,
    },
    {
      id: 3,
      title: "WebTrack - Website Analytics Platform",
      description:
        "Built a website analytics platform that enables traffic tracking via a lightweight script, offering a 7-day free trial and premium plans. It provides an interactive dashboard with visualizations, date-based filters, and detailed insights on sources, locations, devices, browsers, and operating systems.",
      image: assets.Webtrack,
      techStack: ["NextJS", "Node.js", "Postgres", "Gemini API", "Clerk", "ShadcnUI", "Tailwind"],
      liveDemo: "https://web-track-phi.vercel.app/",
      github: "https://github.com/HarshDobariya025/Web-Track.git",
      featured: true,
    },
    {
      id: 4,
      title: "AI-Student Assistent",
      description:
      "A platform designed for tech students, integrating an AI-interactive chatbot, 24/7 AI doubt solver, resume builder, and scholarship listings to enhance learning and career opportunities.",
      image: assets.StudyMate,
      techStack: ["React" ,"Node.js", "Express", "Redux","Gemini API","Tailwind"],
      liveDemo: "https://ai-student-assistant-six.vercel.app/",
      github: "https://github.com/HarshDobariya025/AI-Student-Assistant.git",
      featured: false,
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
      image: assets.Ecommerce,
      techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
      liveDemo: "https://cloth-frontend-eta.vercel.app/",
      github: "https://github.com/HarshDobariya025/Cloth-Full-Stack.git",
      featured: false,
    },
    {
      id: 6,
      title: "Gemini Clone",
      description:
        "Gemini Clone is an AI-powered chatbot that allows users to ask anything, just like Gemini AI. It features a sidebar for new chats and recent conversations.",
      image: assets.Gemini,
      techStack: ["React","Gemini API","Tailwind CSS"],
      liveDemo: "https://gemini-clone-ten-lovat.vercel.app/",
      github: "https://github.com/HarshDobariya025/Gemini_clone.git",
      featured: false,
    },
    {
      id: 7,
      title: "QR-Code Generator",
      description:
      "A versatile QR Code Generator and Scanner that supports creating QR codes for URLs, emails, phone numbers, Wi-Fi, locations, events, and plain text. Includes a built-in QR scanner for seamless decoding.",
      image: assets.QRGenerator,
      techStack: ["React", "QRCode.js", "Tailwind"],
      liveDemo: "https://qr-code-generator-snowy.vercel.app/",
      github: "https://github.com/HarshDobariya025/QR-Code-generator.git",
      featured: false,
    },
    {
      id: 8,
      title: "Weather Dashboard",
      description:
        "Real-time weather information with forecasts, animated visualizations, and location-based data.",
      image: assets.Weather,
      techStack: ["HTML", "CSS", "Javascript"],
      liveDemo: "https://weather-web-app-five-pi.vercel.app/",
      github: "https://github.com/HarshDobariya025/Weather_Web_App.git",
      featured: false,
    },

  ];

  // Filter projects based on the current state
  const featuredProjects = projects.filter(project => project.featured);
  const displayedProjects = showAllProjects ? projects : featuredProjects;

  const toggleProjects = () => {
    setShowAllProjects(prevState => !prevState);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.2 
      }
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <section id="projects" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
            <SectionTitle
              title="My Projects"
              subtitle="Check out some of my recent work"
            />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={showAllProjects ? "all" : "featured"} // Force re-render animation when toggle changes
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variants={cardVariants}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-10 md:mt-12"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              onClick={toggleProjects}
              variant="outline"
              className="rounded-full px-4 sm:px-6 text-sm sm:text-base"
            >
              {showAllProjects ? (
                <>
                  View Less <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More Projects <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveDemo: string;
    github: string;
    featured: boolean;
  };
  index: number;
  variants: any;
}

function ProjectCard({ project, index, variants }: ProjectCardProps) {
  // Animation for tech stack tags
  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.2 + (index * 0.1)
      }
    }
  };

  // Animation for image hover
  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.4 } }
  };

  // Animation for buttons
  const buttonHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      variants={variants}
      custom={index}
      className="h-full"
    >
      <Card className="project-card overflow-hidden h-full flex flex-col">
        <motion.div 
          className="relative h-36 sm:h-40 md:h-48 overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            variants={imageVariants}
          />
        </motion.div>
        
        <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
          <motion.h3 
            className="text-lg sm:text-xl font-bold line-clamp-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (index * 0.05) }}
          >
            {project.title}
          </motion.h3>
        </CardHeader>
        
        <CardContent className="pb-1 sm:pb-2 px-3 sm:px-4 md:px-6 flex-grow">
          <motion.p 
            className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + (index * 0.05) }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
          >
            {project.techStack.map((tech) => (
              <motion.span
                key={tech}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                variants={techStackVariants}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
        
        <CardFooter className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
          <motion.div 
            className="flex gap-2 sm:gap-4 w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (index * 0.05) }}
          >
            <motion.div
              className="flex-1"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <Button asChild size="sm" variant="outline" className="w-full h-8 sm:h-9 text-xs sm:text-sm">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Live Demo
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex-1"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <Button asChild size="sm" variant="outline" className="w-full h-8 sm:h-9 text-xs sm:text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Code
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}