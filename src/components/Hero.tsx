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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8 animate-slide-up">
            <img
              src={profileImage}
              alt="Niranjan BR"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 sm:mb-6 object-cover shadow-elegant animate-pulse-glow border-2 sm:border-4 border-primary/30"
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg text-muted-foreground">Hi, I am</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-glow gradient-text leading-tight">
                Niranjan BR
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground space-y-3 sm:space-y-2">
                <p className="leading-snug">Electrical & Electronics Engineering Student</p>
                <div className="flex flex-wrap justify-center gap-2 text-sm sm:text-base lg:text-lg">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 glass rounded-full text-primary border border-primary/30 whitespace-nowrap">
                    Custom ROM Developer
                  </span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 glass rounded-full text-accent border border-accent/30 whitespace-nowrap">
                    Linux Kernel Developer
                  </span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 glass rounded-full text-primary-glow border border-primary-glow/30 whitespace-nowrap">
                    Tech Enthusiast
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Passionate about custom ROM development, Linux kernel optimization, and embedded systems, with hands-on experience in automation, wireless power transfer, and innovative hardware–software projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground shadow-glow transition-smooth group px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
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