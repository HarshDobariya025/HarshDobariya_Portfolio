import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Set default light theme when component mounts
  useEffect(() => {
    // Check if theme is already set in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      // If no theme is set, set it to light
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

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

  // Handle scroll lock for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Animation variants
  const navbarVariants = {
    initial: { 
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    scrolled: { 
      backgroundColor: "rgba(var(--background), 0.65)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -10,
      transition: { 
        duration: 0.2,
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.2,
      }
    }
  };

  const menuItemVariants = {
    initial: { y: -5, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.05, duration: 0.2 }
    }),
    exit: { y: -5, opacity: 0, transition: { duration: 0.1 } }
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-300 mb-2 px-1 sm:px-8 lg:px-12 backdrop-blur-md"
      variants={navbarVariants}
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      transition={{ duration: 0.3 }}
    >
      <div className="container px-2 sm:mx-4 lg:mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <motion.h1 
          className="text-2xl font-bold text-foreground tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Harsh</span> Dobariya
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            "home",
            "about",
            "skills",
            "projects",
            "contact",
          ].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className={cn(
                "text-lg font-medium text-foreground relative transition-all",
                activeSection === item ? "text-primary" : ""
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <motion.div
                className="absolute left-0 bottom-[-2px] h-[2px] bg-primary"
                initial={{ width: 0, left: "50%" }}
                animate={{
                  width: activeSection === item ? "100%" : "0%",
                  left: activeSection === item ? "0%" : "50%"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 180, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning outside the container */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-16 bg-background/95 backdrop-blur-md shadow-md md:hidden h-screen"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-4">
              <motion.div 
                className="flex flex-col items-center py-8 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {[
                  "home",
                  "about",
                  "skills",
                  "projects",
                  "contact",
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="inline-block"
                    variants={menuItemVariants}
                    custom={index}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <motion.button
                      onClick={() => scrollToSection(item)}
                      className={cn(
                        "text-xl font-medium text-foreground relative transition-all inline-block py-2",
                        activeSection === item ? "text-primary" : ""
                      )}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      <motion.div
                        className="absolute left-0 bottom-[-2px] h-[2px] bg-primary"
                        initial={{ width: 0, left: "50%" }}
                        animate={{
                          width: activeSection === item ? "100%" : "0%",
                          left: activeSection === item ? "0%" : "50%"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}