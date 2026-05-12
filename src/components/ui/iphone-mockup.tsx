"use client";

import React from "react";
import { motion } from "framer-motion";

interface IPhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export const IPhoneMockup = ({ children, className = "" }: IPhoneMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer Frame */}
      <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-[#1a1a1a] rounded-[45px] md:rounded-[55px] p-2.5 shadow-2xl border-[6px] border-[#333]">
        {/* Antenna lines / Details */}
        <div className="absolute top-24 -left-[6px] w-[6px] h-12 bg-[#222] rounded-l-md" />
        <div className="absolute top-40 -left-[6px] w-[6px] h-20 bg-[#222] rounded-l-md" />
        <div className="absolute top-32 -right-[6px] w-[6px] h-24 bg-[#222] rounded-r-md" />
        
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 border border-white/5 flex items-center justify-end px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mr-1" />
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full rounded-[38px] md:rounded-[48px] overflow-hidden bg-black">
          {children}
        </div>
      </div>
      
      {/* Subtle Glow */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-50" />
    </div>
  );
};
