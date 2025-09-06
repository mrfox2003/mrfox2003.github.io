const Home = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center">
    <div className="mb-8">
      <img
        src={require("@/assets/niranjan-profile.jpg")}
        alt="Niranjan BR"
        className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto object-cover shadow-elegant border-4 border-primary/30"
      />
    </div>
    <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">Niranjan BR</h1>
    <p className="text-xl md:text-2xl text-muted-foreground mb-6">Custom ROM & Kernel Dev • Embedded Systems</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <a href="/projects" className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded shadow-glow transition-smooth text-lg">View Projects</a>
      <a href="/contact" className="border border-primary text-primary px-8 py-4 rounded transition-smooth text-lg">Get In Touch</a>
    </div>
  </section>
);

export default Home;
