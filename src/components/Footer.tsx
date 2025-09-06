const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold gradient-text">
                NIRANJAN
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about custom ROM development, Linux kernel optimization, and embedded systems, with hands-on experience in automation, wireless power transfer, and innovative hardware–software projects.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-smooth text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 niranjankannan2003@gmail.com</p>
                <p>📍 India</p>
                <p>💼 Available for projects</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground w-full text-center">
                © {currentYear} Niranjan BR. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;