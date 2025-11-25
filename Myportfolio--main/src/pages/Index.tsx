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
    <div className="min-h-screen">
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
  );
};

export default Index;
