import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90, description: "Automation, scripting, data analysis" },
        { name: "C", level: 85, description: "System programming, low-level development" },
        { name: "Shell", level: 80, description: "System scripting, automation" },
        { name: "Bash", level: 80, description: "Command-line scripting, system administration" }
      ]
    },
    {
      category: "Operating Systems",
      skills: [
        { name: "Linux", level: 90, description: "System administration, development environment" },
        { name: "Windows Server", level: 85, description: "Enterprise server management" },
        { name: "MacOS", level: 75, description: "Development and productivity" },
        { name: "WSL", level: 80, description: "Windows Subsystem for Linux integration" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90, description: "Version control, collaboration" },
        { name: "VMware", level: 85, description: "Virtualization, testing environments" },
        { name: "AWS", level: 80, description: "Cloud services, deployment" },
        { name: "AutoCAD", level: 75, description: "Computer-aided design" },
        { name: "MATLAB", level: 85, description: "Mathematical computing, simulation" },
        { name: "VS Code", level: 90, description: "Code editing, debugging, extensions" },
        { name: "KiCad", level: 85, description: "PCB design, schematic capture, circuit simulation" },
        { name: "Microsoft 365", level: 90, description: "Productivity suite, collaboration" }

      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-gradient-primary";
    if (level >= 75) return "bg-gradient-accent";
    return "bg-primary";
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My expertise spans from low-level system programming to high-level application development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.category}
                className="glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center">
                    <div className="w-2 h-8 bg-gradient-primary rounded-full mr-3" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="space-y-2"
                      style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-foreground">{skill.name}</h4>
                          <p className="text-xs text-muted-foreground">{skill.description}</p>
                        </div>
                        <div className="text-sm font-medium text-primary">
                          {skill.level}%
                        </div>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                        {/* Custom progress bar styling */}
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="glass shadow-elegant border-border/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Continuous Learning & Growth
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Technology evolves rapidly, and I'm committed to staying at the forefront. 
                  Currently exploring AI/ML integration in embedded systems, advanced kernel 
                  security features, and next-generation hardware architectures. Always 
                  excited to tackle new challenges and expand my technical horizons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;