import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, MapPin, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: custom * 0.1
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="about" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-muted/30">
      <motion.div 
        className="container px-4 mx-auto flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div variants={fadeInUp}>
          <SectionTitle
            title="About Me"
            subtitle="Get to know more about me and my background"
          />
        </motion.div>

        {/* Responsive Paragraph Section */}
        <motion.div 
          className="max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-5xl prose prose-sm sm:prose-base md:prose-lg dark:prose-invert mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6"
          variants={itemVariants}
        >
          <motion.p 
            className="text-base sm:text-lg"
            variants={itemVariants}
          >
            I am a full-stack developer pursuing Information Technology at Charotar University of Science 
            and Technology. With a strong foundation in Data Structures and Algorithms (DSA), 
            I specialize in building scalable, efficient, and user-friendly web applications.
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg mt-3 sm:mt-4"
            variants={itemVariants}
          >
            I am passionate about problem-solving, optimizing performance, and writing clean, maintainable 
            code. Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and 
            mentoring fellow developers. I strive to build innovative solutions that make an impact in the 
            tech world.
          </motion.p>
        </motion.div>

        {/* Responsive Cards Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-6xl"
          variants={containerVariants}
        >
          <MotionInfoCard
            custom={0}
            icon={<GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
            title="Education"
            description="B.Tech in Computer Science Engineering"
            cardVariants={cardVariants}
          />
          <MotionInfoCard
            custom={1}
            icon={<MapPin className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
            title="Home"
            description="Surat, Gujarat"
            cardVariants={cardVariants}
          />
          <MotionInfoCard
            custom={2}
            icon={<Trophy className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
            title="Achievements"
            description="5+ Projects"
            cardVariants={cardVariants}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function MotionInfoCard({ icon, title, description, custom, cardVariants }) {
  return (
    <motion.div
      variants={cardVariants}
      custom={custom}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <Card className="border border-gray-300 dark:border-gray-700 rounded-xl transition-shadow duration-300">
        <CardContent className="flex flex-col items-center text-center gap-1 sm:gap-2 p-3 sm:p-4 md:p-5 lg:p-6">
          <motion.div 
            className="text-primary text-xl sm:text-2xl md:text-3xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + custom * 0.1 }}
          >
            {icon}
          </motion.div>
          <motion.h3 
            className="font-semibold text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + custom * 0.1 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-muted-foreground text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + custom * 0.1 }}
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}