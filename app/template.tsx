import Background from "@/components/background";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <div className="relative">
        <div className=" mx-auto overflow-hidden relative z-10">
          {/* <Navbar /> */}
          {children}
          <Footer/>
        </div>
        <div className="w-full h-screen absolute inset-0 z-0 bg-[linear-gradient(292.63deg,#F9F9F9_0.19%,#E5E8FF_99.81%)]">
          <Background />
        </div>
        
      </div>
    </>
  );
}
