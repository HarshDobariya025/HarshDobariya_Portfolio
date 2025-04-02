import { useState, useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { assets } from '../../assets/assets';

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);

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
  }, [showAllProjects]); // Added showAllProjects as dependency to re-run when it changes

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
      image: assets.Ecommerce,
      techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
      liveDemo: "https://cloth-frontend-eta.vercel.app/",
      github: "https://github.com/HarshDobariya025/Cloth-Full-Stack.git",
      featured: true,
    },
    {
      id: 2,
      title: "AI-Student Assistent",
      description:
        "A platform designed for tech students, integrating an AI-interactive chatbot, 24/7 AI doubt solver, resume builder, and scholarship listings to enhance learning and career opportunities.",
      image: assets.StudyMate,
      techStack: ["React","Gemini API" ,"Node.js", "Express", "Redux","Tailwind"],
      liveDemo: "https://ai-student-assistant-six.vercel.app/",
      github: "https://github.com/HarshDobariya025/AI-Student-Assistant.git",
      featured: true,
    },
    {
      id: 3,
      title: "Gemini Clone",
      description:
        "A personal travel blog featuring dynamic content, photo galleries, and interactive maps of visited locations.",
      image: assets.Gemini,
      techStack: ["React","Gemini API" ,"Node.js", "Express", "Redux","Tailwind"],
      liveDemo: "https://gemini-clone-ten-lovat.vercel.app/",
      github: "https://github.com/HarshDobariya025/Gemini_clone.git",
      featured: true,
    },
    {
      id: 4,
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

  return (
    <section id="projects" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="My Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
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
        </div>
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
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      className="project-card fade-in-up overflow-hidden h-full flex flex-col"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
        <h3 className="text-lg sm:text-xl font-bold line-clamp-1">{project.title}</h3>
      </CardHeader>
      <CardContent className="pb-1 sm:pb-2 px-3 sm:px-4 md:px-6 flex-grow">
        <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
        <div className="flex gap-2 sm:gap-4 w-full">
          <Button asChild size="sm" variant="outline" className="flex-1 h-8 sm:h-9 text-xs sm:text-sm">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Live Demo
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="flex-1 h-8 sm:h-9 text-xs sm:text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Code
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}