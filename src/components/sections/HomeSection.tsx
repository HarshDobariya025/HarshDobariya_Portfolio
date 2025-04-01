
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomeSection() {
  const elementRef = useRef<HTMLDivElement>(null);

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
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-10"
      ref={elementRef}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[120px]">
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50">
            <img
              src="src/components/sections/harsh-2.jpg"
              alt="Harsh Dobariya"
              className="object-cover w-full h-full"
            />
          </div>
          {/* <div className="absolute -z-10 top-6 -right-6 w-60 h-60 md:w-80 md:h-80 border-4 border-primary/30 rounded-full animate-pulse-soft"></div> */}
        </div>
          {/* Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className="text-xl md:text-2xl font-medium text-primary fade-in-up mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold fade-in-up mb-4">
              Harsh Dobariya
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold fade-in-up opacity-80 mb-6">
              Software Developer
            </h2>
            <p className="text-lg fade-in-up mb-8 max-w-xl mx-auto lg:mx-0">
              As a passionate student and full-stack developer, I specialize in building dynamic and responsive web applications. With expertise in both front-end and back-end technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start fade-in-up">
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="https://www.linkedin.com/in/harsh-dobariya-0b72062ba" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="https://github.com/HarshDobariya025" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="/HarshDobariya-Resume.pdf" download="Harsh_Dobariya_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
