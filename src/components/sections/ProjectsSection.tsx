import { useState, useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

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
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveDemo: "https://project1.com",
      github: "https://github.com/harshdobariya/project1",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      liveDemo: "https://project2.com",
      github: "https://github.com/harshdobariya/project2",
      featured: true,
    },
    {
      id: 3,
      title: "Travel Blog",
      description:
        "A personal travel blog featuring dynamic content, photo galleries, and interactive maps of visited locations.",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      techStack: ["React", "GraphQL", "Contentful", "Netlify"],
      liveDemo: "https://project3.com",
      github: "https://github.com/harshdobariya/project3",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Real-time weather information with forecasts, animated visualizations, and location-based data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      techStack: ["React", "OpenWeatherAPI", "Chart.js", "CSS Modules"],
      liveDemo: "https://project4.com",
      github: "https://github.com/harshdobariya/project4",
      featured: false,
    },
    {
      id: 5,
      title: "Recipe Finder",
      description:
        "Search and discover recipes based on available ingredients, dietary preferences, and meal types.",
      image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      techStack: ["JavaScript", "Spoonacular API", "HTML", "CSS"],
      liveDemo: "https://project5.com",
      github: "https://github.com/harshdobariya/project5",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A dynamic portfolio website showcasing my projects, skills, and experience with a sleek, modern design.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      liveDemo: "https://project6.com",
      github: "https://github.com/harshdobariya/project6",
      featured: false,
    },
  ];

  // This should reliably filter the projects
  const featuredProjects = projects.filter(project => project.featured);
  const displayedProjects = showAllProjects ? projects : featuredProjects;

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
    // Force a re-render to ensure the projects update
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  };

  // Log to help debug
  console.log("Showing all projects:", showAllProjects);
  console.log("Total projects:", projects.length);
  console.log("Featured projects:", featuredProjects.length);
  console.log("Displayed projects:", displayedProjects.length);

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
            {showAllProjects ? "View Less" : "Show More Projects"}
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
          <Button asChild size="sm" className="flex-1 h-8 sm:h-9 text-xs sm:text-sm">
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