import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Download, Github, Instagram, Linkedin, Mail, Phone, SendIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Format the email body with the form data
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;
    // Create a mailto link with the recipient, subject, and body
    const mailtoLink = `mailto:dobariyaharsh93@gmail.com?subject=Feedback Form Submission&body=${encodeURIComponent(emailBody)}`;
    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoLink;
    // Show success message
    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Complete the email send process in your email application.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const socialIconVariants = {
    initial: { scale: 1, backgroundColor: "var(--secondary)" },
    hover: { 
      scale: 1.1, 
      backgroundColor: "var(--primary)",
      color: "var(--primary-foreground)",
      transition: { duration: 0.2 } 
    },
    tap: { scale: 0.9, transition: { duration: 0.1 } },
  };

  const formControlVariants = {
    focus: { scale: 1.01, transition: { duration: 0.2 } },
  };

  return (
    <section id="contact" className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Get In Touch"
            subtitle="Connect with me"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader className="px-4 sm:px-6 pt-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-sm sm:text-base mt-1 sm:mt-2">
                  Let's connect and discuss how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 pb-6">
                <motion.div variants={itemVariants}>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                  <motion.a
                    href="mailto:dobariyaharsh93@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" /> dobariyaharsh93@gmail.com
                  </motion.a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Contact number</h3>
                  <motion.a
                    className="text-muted-foreground transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" /> (+91) 9426638153
                  </motion.a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Follow Me</h3>
                  <div className="flex gap-3 sm:gap-4">
                    <motion.a
                      href="https://github.com/HarshDobariya025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary p-1.5 sm:p-2 rounded-full"
                      variants={socialIconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/harsh-dobariya-0b72062ba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary p-1.5 sm:p-2 rounded-full"
                      variants={socialIconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Currently Available</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    I'm currently available for freelance work. Let's discuss your project requirements.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader className="px-4 sm:px-6 pt-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-sm sm:text-base mt-1 sm:mt-2">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-6">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <motion.div 
                    className="space-y-1 sm:space-y-2"
                    variants={itemVariants}
                  >
                    <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                    <motion.div whileFocus="focus" variants={formControlVariants}>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="text-sm sm:text-base p-2 sm:p-3"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-1 sm:space-y-2"
                    variants={itemVariants}
                  >
                    <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                    <motion.div whileFocus="focus" variants={formControlVariants}>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-sm sm:text-base p-2 sm:p-3"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-1 sm:space-y-2"
                    variants={itemVariants}
                  >
                    <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                    <motion.div whileFocus="focus" variants={formControlVariants}>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="text-sm sm:text-base p-2 sm:p-3"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      className="w-full rounded-full mt-2 sm:mt-3 py-2 sm:py-3 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center"
                      disabled={isSubmitting}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {isSubmitting ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          Sending...
                        </motion.span>
                      ) : (
                        <motion.span className="flex items-center">
                          <SendIcon className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> 
                          <span>Send Message</span>
                        </motion.span>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <div className="justify-center flex gap-4 mt-8 sm:mt-10 md:mt-18 lg:mt-12">
        <Button asChild variant="secondary" className="rounded-full px-6">
          <a href="/HarshDobariya-Resume.pdf" download="Harsh_Dobariya_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
      </div>
    </section>
  );
}