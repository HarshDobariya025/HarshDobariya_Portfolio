
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

  const displayedProjects = showAllProjects
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="My Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {!showAllProjects && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAllProjects(true)}
              variant="outline"
              className="rounded-full px-6"
            >
              Show More Projects
            </Button>
          </div>
        )}
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
      className="project-card fade-in-up overflow-hidden"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-4 w-full">
          <Button asChild size="sm" className="flex-1">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="flex-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1 h-4 w-4" /> Code
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
