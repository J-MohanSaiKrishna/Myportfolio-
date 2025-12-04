import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Eduverse from "@/components/Eduverse";
import WhyMe from "@/components/WhyMe";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-black">
      {/* Unified Animated Background */}
      <div
        className="fixed inset-0 animate-bg-drift z-0"
        style={{
          backgroundImage: "url('/src/assets/ai-network-bg.jpg')",
          backgroundSize: '120%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50 z-0" />

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Eduverse />
        <WhyMe />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
