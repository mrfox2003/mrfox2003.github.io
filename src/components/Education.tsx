import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Government Engineering College, Idukki",
      period: "Expected 2026",
      status: "Current",
      description: "Currently pursuing coursework with focus on embedded systems, automation, and digital electronics.",
      highlights: [
        "Embedded Systems Specialization",
        "Automation and Control Systems",
        "Digital Electronics",
        "Power Systems Engineering"
      ]
    },
    {
      degree: "Diploma in Electrical and Electronics Engineering",
      institution: "Sree Narayana Polytechnic College, Kollam",
      period: "Mar 2022",
      status: "Completed",
      description: "Comprehensive diploma program covering fundamental electrical and electronics engineering concepts with practical applications.",
      highlights: [
        "Circuit Analysis and Design",
        "Electronic Devices and Circuits",
        "Electrical Machines",
        "Control Systems"
      ]
    },
    {
      degree: "THSLC",
      institution: "Technical High School, Ezhukone, Kollam",
      period: "Mar 2019",
      status: "Completed",
      description: "Technical higher secondary education with focus on mathematics, physics, and basic engineering concepts.",
      highlights: [
        "Mathematics and Physics",
        "Basic Engineering Concepts",
        "Technical Foundation",
        "Problem-Solving Skills"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current":
        return "bg-primary text-primary-foreground";
      case "Completed":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Education
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey in electrical and electronics engineering
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4 sm:px-0">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className={`glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow group ${
                  edu.status === 'Current' ? 'ring-2 ring-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-smooth">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-base sm:text-lg text-primary font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <Badge className={`${getStatusColor(edu.status)} text-xs sm:text-sm w-fit`}>
                        {edu.status}
                      </Badge>
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Key Areas */}
                  <div>
                    <h4 className="font-medium mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Areas of Study:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Academic Info */}
          <div className="mt-16 text-center">
            <Card className="glass shadow-elegant border-border/50 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Academic Focus & Interests
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My academic journey has been focused on bridging the gap between theoretical 
                  knowledge and practical application. With a strong foundation in electrical 
                  engineering principles, I'm particularly interested in embedded systems, 
                  automation, and the intersection of hardware and software development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;