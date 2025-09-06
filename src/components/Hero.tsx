import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/niranjan-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-slide-up">
            <img
              src={profileImage}
              alt="Niranjan BR"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-elegant animate-pulse-glow border-4 border-primary/30"
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hi, I am</p>
              <h1 className="text-5xl md:text-7xl font-bold text-glow gradient-text">
                Niranjan BR
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
                <p>Electrical & Electronics Engineering Student</p>
                <div className="flex flex-wrap justify-center gap-2 text-lg">
                  <span className="px-3 py-1 glass rounded-full text-primary border border-primary/30">
                    Custom ROM Developer
                  </span>
                  <span className="px-3 py-1 glass rounded-full text-accent border border-accent/30">
                    Linux Kernel Developer
                  </span>
                  <span className="px-3 py-1 glass rounded-full text-primary-glow border border-primary-glow/30">
                    Tech Enthusiast
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about custom ROM development, Linux kernel optimization, and embedded systems, with hands-on experience in automation, wireless power transfer, and innovative hardware–software projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground shadow-glow transition-smooth group px-8 py-6 text-lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-6 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;