import { useState } from "react";
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
import { Github, Instagram, Linkedin, Mail, Phone, SendIcon } from "lucide-react";
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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="fade-in-up">
            <CardHeader className="px-4 sm:px-6 pt-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-sm sm:text-base mt-1 sm:mt-2">
                Let's connect and discuss how we can work together.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 pb-6">
              <div>
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                <a
                  href="mailto:dobariyaharsh93@gnail.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" /> dobariyaharsh93@gnail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Contact number</h3>
                <a
                  className="text-muted-foreground transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" /> (+91) 9426638153
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Follow Me</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com/HarshDobariya025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harsh-dobariya-0b72062ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  {/* <a
                    href="https://instagram.com/harshdobariya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a> */}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Currently Available</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  I'm currently available for freelance work or full-time
                  positions. Let's discuss your project requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader className="px-4 sm:px-6 pt-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-sm sm:text-base mt-1 sm:mt-2">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base p-2 sm:p-3"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
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
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
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
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full mt-2 sm:mt-3 py-2 sm:py-3 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <SendIcon className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}