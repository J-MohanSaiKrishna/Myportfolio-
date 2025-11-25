import { Button } from "@/components/ui/button";
import { RippleContainer } from "@/components/RippleContainer";
import profileImage from "@/assets/profile.jpg";
import React from "react";

const Hero: React.FC = () => {
  return (
    <RippleContainer className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* unified background: deep indigo + soft texture */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950" />

      {/* soft texture overlay */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none bg-hero-texture" />

      {/* subtle decorative orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-16 top-16 w-72 h-72 rounded-full blur-3xl opacity-10 bg-gradient-to-r from-blue-500 to-cyan-400 animate-slow-float" />
        <div className="absolute right-8 bottom-8 w-80 h-80 rounded-full blur-3xl opacity-8 bg-gradient-to-r from-purple-600 to-pink-500 animate-slower-float" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 transform translate-x-1 translate-y-1 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 opacity-6 blur-2xl" />
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-white/6 shadow-[0_20px_40px_rgba(2,6,23,0.6)]">
                <img src={profileImage} alt="Mohan Sai Krishna" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white/6 backdrop-blur-md border border-white/8 rounded-lg px-4 py-2 shadow-md">
                <p className="text-xs font-medium text-white">Available for hire</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left space-y-6 order-2 md:order-1">
            <p className="text-sm text-indigo-300 font-semibold uppercase tracking-wide">Welcome to my portfolio</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Mohan Sai Krishna
            </h1>

            <p className="text-lg text-slate-200 max-w-xl">
              I’m a{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
                Full-Stack Developer
              </span>
              {` — building reliable apps with React, Node.js & cloud services.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 pt-2">
              <Button
                size="lg"
                className="px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-violet-500"
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


