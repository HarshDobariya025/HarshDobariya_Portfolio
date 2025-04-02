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
    <section id="about" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 mx-auto flex flex-col items-center text-center">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me and my background"
        />

        {/* Responsive Paragraph Section */}
        <div className="max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-5xl prose prose-sm sm:prose-base md:prose-lg dark:prose-invert fade-in-up mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6">
          <p className="text-base sm:text-lg">
            I am a full-stack developer pursuing Information Technology at Charotar University of Science 
            and Technology. With a strong foundation in Data Structures and Algorithms (DSA), 
            I specialize in building scalable, efficient, and user-friendly web applications.
          </p>
          <p className="text-base sm:text-lg mt-3 sm:mt-4">
            I am passionate about problem-solving, optimizing performance, and writing clean, maintainable 
            code.Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and 
            mentoring fellow developers. I strive to build innovative solutions that make an impact in the 
            tech world.
          </p>
        </div>

        {/* Responsive Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-6xl">
          <InfoCard
            icon={<GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
            title="Education"
            description="B.Tech in Computer Science Engineering"
          />
            <InfoCard
              icon={<MapPin className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
              title="Home"
              description="Surat, Gujarat"
            />
          <InfoCard
            icon={<Trophy className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
            title="Achievements"
            description="5+ Successful Projects"
          />
          {/* <InfoCard
            icon={<Briefcase className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
            title="Experience"
            description="2+ Years of Development"
          /> */}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <Card className="fade-in-up border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex flex-col items-center text-center gap-1 sm:gap-2 p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="text-primary text-xl sm:text-2xl md:text-3xl">{icon}</div>
        <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}