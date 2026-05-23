import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollY = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 z-50 pointer-events-none w-full max-w-fit md:px-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-border/50 shadow-elegant transition-all duration-500 pointer-events-auto glass backdrop-blur-glass bg-background/50 scale-100">
        {/* Logo/Initials - Desktop only */}
        <div
          className="px-3 py-1 text-sm font-bold gradient-text cursor-pointer hover:opacity-80 transition-smooth hidden md:block"
          onClick={() => scrollToSection("home")}
        >
          NR
        </div>

        <div className="h-4 w-[1px] bg-border/50 mx-1 hidden md:block"></div>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 relative group ${
                activeSection === item.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-primary rounded-full -z-10 animate-in fade-in zoom-in duration-300" />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="hidden md:block h-4 w-[1px] bg-border/50 mx-1"></div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          <Button
            variant="ghost"
            className="p-2 text-primary hover:bg-primary/10 rounded-full md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          <Button
            variant="outline"
            className="hidden md:flex h-8 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-xs"
            onClick={() => scrollToSection("contact")}
          >
            Connect
          </Button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-80 glass border-border/50">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="py-4 border-b border-border/20">
              <div className="text-2xl font-bold gradient-text">NIRANJAN</div>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex-1 py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-smooth text-lg font-medium ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary border-l-4 border-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="py-4 border-t border-border/20 space-y-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navigation;