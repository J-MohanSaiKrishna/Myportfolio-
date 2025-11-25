import { RippleContainer } from "@/components/RippleContainer";
import React from "react";

const Footer: React.FC = () => {
  return (
    <RippleContainer className="relative py-12 px-4 border-t border-white/6 bg-gradient-to-t from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Creator Signature */}
          <p className="text-base md:text-lg text-slate-300 font-medium italic">
            Designed & Built by{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              Mohan Sai Krishna
            </span>
            {" "}with Purpose & Passion
          </p>

          {/* Copyright */}
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} All rights reserved
          </p>

          {/* Divider */}
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent mx-auto" />

          {/* Tech Stack Badge */}
          <p className="text-xs text-slate-500">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </RippleContainer>
  );
};

export default Footer;
