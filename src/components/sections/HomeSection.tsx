import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { assets } from '../../assets/assets';

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
      className="min-h-screen flex items-center py-8 sm:py-12 md:py-16"
      ref={elementRef}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-24">
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative mb-6 lg:mb-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50">
              <img
              src={assets.Harsh}
              alt="Harsh"
              className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -z-10 top-4 -right-4 lg:w-80 lg:h-80 border-4 border-primary/30 rounded-full animate-pulse-soft"></div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary fade-in-up mb-1 sm:mb-2">
              Hello, I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold fade-in-up mb-2 sm:mb-3 md:mb-4">
              Harsh Dobariya
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold fade-in-up opacity-80 mb-3 sm:mb-4 md:mb-6">
              Software Developer
            </h2>
            <p className="text-base sm:text-lg fade-in-up mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              As a passionate student and full-stack developer, I specialize in building dynamic and responsive web applications. With expertise in both front-end and back-end technologies.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start fade-in-up">
              <Button asChild variant="outline" className="rounded-full px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                <a href="https://www.linkedin.com/in/harsh-dobariya-0b72062ba" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                <a href="https://github.com/HarshDobariya025" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                <a href="https://drive.google.com/file/d/1aml2zYt9m7WtXngrb48JsaKrThNSoQ8p/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Resume
                </a>
              </Button>
              {/* <Button asChild variant="outline" className="rounded-full px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                <a href="/HarshDobariya-Resume.pdf" download="Harsh_Dobariya_Resume.pdf">
                  <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Resume
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}