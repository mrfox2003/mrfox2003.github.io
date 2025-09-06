import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      icon: "🎓",
      title: "EEE Student",
      description: "Pursuing Electrical & Electronics Engineering with focus on embedded systems"
    },
    {
      icon: "🔧",
      title: "ROM Developer", 
      description: "Creating custom Android experiences with optimized performance and features"
    },
    {
      icon: "⚡",
      title: "Kernel Developer",
      description: "Linux kernel development and system-level programming expertise"
    },
    {
      icon: "💻",
      title: "Tech Enthusiast",
      description: "Always exploring cutting-edge technologies and development practices"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Section */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Building Tomorrow's Technology Today
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm an Electrical & Electronics Engineering student with a deep passion 
                    for system-level development and creating innovative solutions. My journey 
                    in technology spans from low-level kernel development to crafting custom 
                    Android ROMs that enhance user experiences.
                  </p>
                  <p>
                    What drives me is the intersection of hardware and software - understanding 
                    how systems work at their core and optimizing them for peak performance. 
                    Whether it's tweaking kernel parameters or developing custom firmware, 
                    I love diving deep into the technical details.
                  </p>
                  <p>
                    My experience includes working with ARM architectures, Android AOSP, 
                    Linux kernel modules, and embedded systems. I believe in open-source 
                    development and contributing back to the community that has taught me so much.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="animate-slide-in-right">
              <Card className="glass shadow-elegant border-border/50">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6 text-center">Quick Facts</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Focus Areas</span>
                      <span className="text-primary font-medium">Custom Rom Developement, Embedded Systems, Power Systems</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Education</span>
                      <span className="text-primary font-medium">B.Tech in Electrical and Electronics Engineering</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="text-primary font-medium">Telecom & Solar, IEEE Leadership, ROM & Kernel Dev</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interests</span>
                      <span className="text-primary font-medium">IoT, AI, Wireless Power Transfer, Robotics, Sustainable Tech</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;