import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "niranjankannan2003@gmail.com",
      description: "Get in touch for collaborations"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Kerala, India",
      description: "Open to remote opportunities"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "📦",
      url: "https://github.com/mrfox2003",
      description: "View my code repositories"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/niranjanbr2003/",
      description: "Professional network"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/mrfox2003",
      description: "Tech discussions and updates"
    },
    {
      name: "Telegram",
      icon: "✈️",
      url: "https://t.me/mrfox2003",
      description: "Quick messaging"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Form */}
              <Card className="glass shadow-elegant border-border/50 animate-slide-in-left">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-primary flex items-center">
                    <div className="w-2 h-6 sm:h-8 bg-gradient-primary rounded-full mr-3" />
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form id="contactForm" action="https://formspree.io/f/mqaaoeee" method="POST" className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Name</label>
                        <Input
                          name="fname"
                          placeholder="Your name"
                          required
                          className="glass border-primary/30 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone</label>
                        <Input
                          name="phone"
                          type="number"
                          placeholder="Your number"
                          required
                          className="glass border-primary/30 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="glass border-primary/30 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Subject</label>
                        <Input
                          name="subject"
                          placeholder="Your subject"
                          required
                          className="glass border-primary/30 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Your message"
                        rows={6}
                        required
                        className="glass border-primary/30 focus:border-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground shadow-glow transition-smooth group py-4 sm:py-6"
                    >
                      Send Message
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Resume Card Block */}
              <Card className="glass shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center">
                    <div className="w-2 h-6 bg-gradient-primary rounded-full mr-3" />
                    Resume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="/resume.pdf"
                      download
                      className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition-smooth"
                    >
                      Download Resume
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-smooth"
                    >
                      View Resume
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Contact Information */}
              <Card className="glass shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center">
                    <div className="w-2 h-6 bg-gradient-primary rounded-full mr-3" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={info.title}
                        className="p-4 rounded-lg glass border border-primary/10 transition-smooth hover:border-primary/30 group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl group-hover:scale-110 transition-transform">
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground">{info.title}</h4>
                            <p className="text-primary font-medium">{info.value}</p>
                            <p className="text-xs text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center">
                    <div className="w-2 h-6 bg-gradient-primary rounded-full mr-3" />
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-lg glass border border-primary/10 transition-smooth hover:border-primary/30 hover:shadow-glow group text-center block"
                      >
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                          {social.icon}
                        </div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                          {social.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{social.description}</p>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="glass shadow-elegant border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <div>
                      <p className="font-medium text-foreground">Available for Projects</p>
                      <p className="text-sm text-muted-foreground">
                        Open to new opportunities and collaborations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;