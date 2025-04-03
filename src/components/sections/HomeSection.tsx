import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from '../../assets/assets';

export default function HomeSection() {
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

  const itemVariants = {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const pulseVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: 0.7,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-8 sm:py-12 md:py-16"
    >
      <div className="container px-4 mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center lg:justify-end relative mb-6 lg:mb-0"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50"
              variants={imageVariants}
            >
              <img
                src={assets.Harsh}
                alt="Harsh"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-medium text-primary mb-1 sm:mb-2"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
              variants={itemVariants}
            >
              Harsh Dobariya
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-semibold opacity-80 mb-3 sm:mb-4 md:mb-6"
              variants={itemVariants}
            >
              Web Developer
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={itemVariants}
            >
              As a passionate student and full-stack developer, I specialize in building dynamic and responsive web applications. With expertise in both front-end and back-end technologies.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button asChild variant="outline" className="rounded-full px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                <motion.a 
                  href="https://www.linkedin.com/in/harsh-dobariya-0b72062ba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  LinkedIn
                </motion.a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                <motion.a 
                  href="https://github.com/HarshDobariya025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  GitHub
                </motion.a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                <motion.a 
                  href="https://drive.google.com/file/d/1aml2zYt9m7WtXngrb48JsaKrThNSoQ8p/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Resume
                </motion.a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}