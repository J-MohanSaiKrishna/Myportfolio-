import { Button } from "@/components/ui/button";
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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-shadow whitespace-nowrap">
                Mohan Sai Krishna
              </h1>
            </div>

            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            </div>

            <div className="pt-4" />

            <div className="pt-6" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <Button 
          size="lg" 
          className="gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </Button>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 animate-bounce">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
