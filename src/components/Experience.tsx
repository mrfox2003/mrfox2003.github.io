import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Operation/Media Lead",
      company: "CGPC, GEC Idukki",
      period: "2025 – Present",
      description: "Spearheaded media and operational efforts for the college placement cell. Implemented communication strategies and organized career-focused events, increasing student participation and placements.",
      type: "leadership",
      achievements: [
        "Implemented effective communication strategies",
        "Organized career-focused events",
        "Increased student participation and placements"
      ]
    },
    {
      title: "Chairperson",
      company: "IEEE RAS SBC, GEC Idukki",
      period: "2025 – Present",
      description: "Provided strategic leadership and oversight for chapter activities.Strengthened organizational visibility and fostered collaboration within the technical community.",
      type: "leadership",
      achievements: [
        "Led 10+ technical events",
        "40% increase in participation",
        "Leadership and event management"
      ]
    },
    {
      title: "Technical Coordinator",
      company: "IEEE RAS SBC, GEC Idukki",
      period: "2024 – 2025",
      description: "Organized 6+ events attended by 100+ students. Oversaw logistics and technical setups.",
      type: "technical",
      achievements: [
        "Organized 6+ events with 100+ attendees",
        "Managed logistics and technical setups",
        "Coordination and planning expertise"
      ]
    },
    {
      title: "Custom ROM Developer",
      company: "Voltage OS Project",
      period: "2021 – Present",
      description: "Delivered 30+ OTA builds for Qualcomm devices with 1000+ downloads. Reduced build failure rate by 30% through device tree and kernel optimizations.",
      type: "development",
      achievements: [
        "30+ OTA builds delivered",
        "1000+ downloads achieved",
        "30% reduction in build failure rate"
      ]
    },
    {
      title: "Solar Technician",
      company: "Lifestyles, Kollam",
      period: "Jan 2023 – Jul 2023",
      description: "Installed and tested 20+ solar systems in homes and businesses. Achieved 98% first-time fix rate on inverter and battery setups. Conducted client training, improving customer satisfaction.",
      type: "professional",
      isActualJob: true,
      achievements: [
        "Installed and tested 20+ solar systems",
        "98% first-time fix rate achieved",
        "Client training and satisfaction improvement"
      ]
    },
    {
      title: "Site Engineer",
      company: "Connectline Business Solutions Pvt. Ltd, Ernakulam",
      period: "Aug 2022 – Jan 2023",
      description: "Maintained 12+ telecom towers with 99% uptime. Resolved faults in under 2 hours on average, minimizing downtime. Ensured safety compliance and prepared technical reports.",
      type: "professional",
      isActualJob: true,
      achievements: [
        "Maintained 12+ telecom towers with 99% uptime",
        "Average fault resolution under 2 hours",
        "Safety compliance and technical reporting"
      ]
    },
    {
      title: "Industrial Training",
      company: "KSEB, Koorkkenchery, Thrissur",
      period: "Sep 2024",
      description: "Completed 1-week training in substation monitoring, transmission lines, and fault handling. Observed load management and relay operations at the 110kV substation.",
      type: "training",
      achievements: [
        "Substation monitoring expertise",
        "Transmission line knowledge",
        "110kV substation operations understanding"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "professional":
        return "bg-primary text-primary-foreground";
      case "development":
        return "bg-accent text-accent-foreground";
      case "leadership":
        return "bg-success text-success-foreground";
      case "technical":
        return "bg-primary-glow text-primary-foreground";
      case "training":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through leadership roles, development projects, and professional experience
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card 
                key={`${experience.title}-${experience.company}`}
                className={`glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow group ${
                  experience.isActualJob ? 'ring-2 ring-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth flex items-center gap-3">
                        {experience.title}
                        {experience.isActualJob && (
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            Professional Role
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-lg text-primary font-medium mt-1">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getTypeColor(experience.type)}>
                        {experience.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium mb-3 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;