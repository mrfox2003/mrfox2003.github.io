import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const projects = [
    {
      title: "Voltage OS",
      description: "Open-source Android custom ROM focused on optimizing battery life and performance. Responsible for kernel tweaking, debugging, and building OTA packages.",
      tags: ["Android", "AOSP", "Kernel", "ROM"],
      status: "Active",
      features: [
        "Battery life optimization",
        "Performance enhancements",
        "Kernel tweaking and debugging",
        "OTA package building"
      ],
      link: "https://github.com/VoltageOS"
    },
    {
      title: "Meraki", 
      description: "Custom Linux kernel for Android devices with enhancements in CPU scheduling, thermal profiles, and stability improvements.",
      tags: ["Linux", "Kernel", "Android", "Performance"],
      status: "Active",
      features: [
        "Enhanced CPU scheduling",
        "Improved thermal profiles",
        "System stability optimizations",
        "Power management improvements"
      ],
      link: "https://t.me/foxbuildsupdates/77"
    },
    {
      title: "ScriptSculptor",
      description: "Comprehensive toolkit of Bash/Python scripts to automate ROM building, kernel setup, and development environment configuration.",
      tags: ["Python", "Bash", "Automation", "DevOps"],
      status: "Active",
      features: [
        "Automated ROM building",
        "Kernel setup scripts",
        "Environment configuration",
        "Build process optimization"
      ],
      link: "https://github.com/mrfox2003/ScriptSculptor"
    },
    {
      title: "Arduino-Based Fire Fighting Robot",
      description: "RF-controlled robot equipped with water pump system designed for fire suppression in hazardous environments where human intervention is dangerous.",
      tags: ["Arduino", "Robotics", "RF", "IoT"],
      status: "Completed",
      features: [
        "RF remote control system",
        "Integrated water pump",
        "Hazardous environment navigation",
        "Fire detection sensors"
      ],
    },
    {
      title: "Dynamic Wireless EV Charging",
      description: "Developing a 12V dynamic wireless charging system using resonant inductive coupling technology for electric vehicles in motion.",
      tags: ["EV", "Wireless", "Electronics", "Innovation"],
      status: "In Development",
      features: [
        "Resonant inductive coupling",
        "12V charging system",
        "Dynamic charging capability",
        "Motion-based power transfer"
      ],
    },
    {
      title: "Algae Fancy Lamp",
      description: "Sustainable decorative lamp powered by algae bioluminescence with integrated LED backup system. Currently in design phase.",
      tags: ["Sustainable", "Biotech", "Design", "LED"],
      status: "Design Phase",
      features: [
        "Algae bioluminescence power",
        "Integrated LED backup",
        "Sustainable energy source",
        "Decorative design elements"
      ],
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "In Development":
        return "bg-primary text-primary-foreground";
      case "Beta":
        return "bg-accent text-accent-foreground";
      case "Completed":
        return "bg-success text-success-foreground";
      case "Design Phase":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              My Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my work in system development, Android customization, and embedded programming
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div>
                    <h4 className="font-medium mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                      onClick={() => { setSelectedProject(project); setIsDialogOpen(true); }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Project Details Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          {selectedProject && (
            <div>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="mb-4 text-muted-foreground">{selectedProject.description}</p>
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-primary">Key Features:</h4>
                <ul className="space-y-1">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition-smooth"
                >
                  Visit Project
                </a>
              )}
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;