import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 mb-2 px-1 sm:px-8 lg:px-12",
        scrolled ? "bg-background/65 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container px-2 sm:mx-4 lg:mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-foreground tracking-wide">
          <span className="text-primary">Harsh</span> Dobariya
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            "home",
            "about",
            "skills",
            "projects",
            "contact",
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={cn(
                "text-lg font-medium text-foreground relative transition-all",
                activeSection === item ? "text-primary" : "",
                "after:absolute after:left-1/2 after:bottom-[-2px] after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:origin-center",
                activeSection === item ? "after:w-full after:translate-x-[-50%]" : "after:w-0"
              )}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 transition-transform transform rotate-180" />
            ) : (
              <Menu className="h-6 w-6 transition-transform transform scale-110" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-x-0 top-16 bg-background/90 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-[300px] shadow-md" : "max-h-0"
          )}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={cn(
                  "text-lg font-medium text-foreground relative transition-all",
                  activeSection === item ? "text-primary" : "",
                  "after:absolute after:left-1/2 after:bottom-[-2px] after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:origin-center",
                  activeSection === item ? "after:w-full after:translate-x-[-50%]" : "after:w-0"
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}