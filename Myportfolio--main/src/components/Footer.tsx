import { RippleContainer } from "@/components/RippleContainer";
import React from "react";

const Footer: React.FC = () => {
  return (
    <RippleContainer className="relative py-12 px-4 border-t border-white/6 bg-gradient-to-t from-slate-950 via-indigo-950 to-slate-900 text-white">
      {/* subtle top texture continuation so hero -> footer feels seamless */}
      <div className="absolute inset-0 -z-10 opacity-18 bg-hero-texture" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-2xl font-bold text-white">Mohan Sai Krishna</p>
          <p className="text-white/70">Computer Science Engineering Student</p>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30" />

        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Mohan Sai Krishna. All rights reserved.</p>
        <p className="text-xs text-white/50">Built with passion, powered by innovation</p>
      </div>
    </RippleContainer>
  );
};

export default Footer;

