import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Download, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-overlay))]/95 via-[hsl(var(--hero-overlay))]/90 to-[hsl(var(--hero-overlay))]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-in fade-in slide-in-right duration-1000">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={profileImage} 
                  alt="Mohan Sai Krishna" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-effect rounded-2xl px-6 py-3 shadow-xl">
                <p className="text-sm font-semibold gradient-text">Available for Hire</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center md:text-left space-y-8 order-2 md:order-1 animate-in fade-in slide-in-left duration-1000">
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-accent font-semibold text-lg mb-2 tracking-wide uppercase">Welcome to my portfolio</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-shadow">
                Mohan Sai Krishna
              </h1>
              <p className="text-2xl md:text-3xl gradient-text font-bold">
                Computer Science Engineering Student
              </p>
              <div className="flex items-center gap-2 justify-center md:justify-start text-white/80">
                <MapPin className="h-5 w-5" />
                <p className="text-lg">Avanthi Institute of Engineering, Rajahmundry</p>
              </div>
            </div>

            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
              <p>
                Passionate <span className="font-semibold text-accent">Computer Science Engineering student</span> with expertise in <span className="font-semibold text-primary">Python, C, AWS Cloud</span>, and modern development practices.
              </p>
              <p className="italic text-white/70">
                💡 "Combining technical excellence with creativity to build innovative solutions"
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity group shadow-lg shadow-primary/30">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-2 border-primary/50 text-white hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/in/mohansaikrishnaj" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-2 border-primary/50 text-white hover:bg-primary/10" asChild>
                <a href="https://github.com/J-MohanSaiKrishna/portfolio-persuade" target="_blank" rel="noopener noreferrer" title="Open on GitHub">
                  {/* GitHub icon (inline SVG to avoid new imports) */}
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 0.5C5.4 0.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.6.8.5C20.6 22.3 24 17.8 24 12.5 24 5.9 18.6 0.5 12 0.5z" />
                  </svg>
                  Open on GitHub
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>6303308665</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>mskbtechcsc25@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
