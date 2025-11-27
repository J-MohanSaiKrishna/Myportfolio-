import { Button } from "@/components/ui/button";
import { RippleContainer } from "@/components/RippleContainer";
import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const quotes = [
    "Crafting digital experiences from database to user interface — one elegant solution at a time.",
    "Bridging frontend beauty with backend power to build scalable, robust applications.",
    "Where creativity meets code: transforming ideas into full-stack reality.",
    "From pixels to APIs, architecting the complete web development journey.",
    "Building the future, one stack at a time — React, Node.js, and beyond.",
    "Turning coffee into code and problems into innovative full-stack solutions.",
    "Mastering both sides of the web to deliver seamless, end-to-end experiences.",
    "Code is poetry, and I write in both frontend and backend languages.",
    "Creating digital ecosystems where frontend elegance meets backend efficiency.",
    "Full-stack mindset: thinking in components, databases, and everything in between."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Change quote every 4 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <RippleContainer
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      id="home"
    >
      {/* Animated Background with Drift Effect */}
      <div
        className="absolute inset-0 animate-bg-drift"
        style={{
          backgroundImage: "url('/src/assets/ai-network-bg.jpg')",
          backgroundSize: '120%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          opacity: 0.5,
        }}
      />

      {/* Top animated gradient bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-800 to-red-600 animate-gradient-shift z-50"></div>

      {/* Dark overlay with pulsing effect */}
      <div className="absolute inset-0 bg-black/30 animate-bg-pulse" />

      {/* Animated scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scanline  blur-sm"></div>
      </div>

      {/* Grid overlay with glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'glow 3s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="text-center space-y-6">
            {/* Creator Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-full animate-in fade-in duration-700 shadow-lg shadow-red-500/20">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-sm text-red-200 font-medium">Creator of Eduverse</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight relative">
              {"Mohan Sai Krishna".split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-in fade-in slide-in-from-bottom-4 hover:text-red-300 transition-colors duration-200"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animationDuration: '0.6s',
                    animationFillMode: 'both'
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
              {/* Animated Highlight Bar */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse" />
              </div>
            </h1>

            {/* Signature One-Liner */}
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto italic animate-in fade-in duration-700" style={{ animationDelay: '0.9s' }}>
              "Crafting intelligent experiences that learn from you."
            </p>

            <div className="min-h-[100px] flex items-center justify-center overflow-hidden">
              <div className="text-lg text-slate-200 max-w-2xl">
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
                  Full-Stack Developer
                </span>
                {" — "}
                <div className="inline-block relative overflow-hidden h-[80px] align-middle" style={{ minWidth: '500px' }}>
                  <div
                    className="transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateY(-${currentQuoteIndex * 80}px)`,
                    }}
                  >
                    {quotes.map((quote, index) => (
                      <div
                        key={index}
                        className="h-[80px] flex items-center justify-start"
                      >
                        <span className="inline-block">{quote}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 pt-2">
              <Button
                size="lg"
                className="px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Get in touch with Mohan"
              >
                Get in touch
              </Button>

              <a href="/#work" className="inline-block text-sm text-slate-200/80 hover:text-white transition" aria-label="See my work">
                See my work →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <div className="w-10 h-14 rounded-2xl border-2 border-white/10 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
        <p className="text-xs text-slate-300/60">Scroll</p>
      </div>
    </RippleContainer>
  );
};

export default Hero;
