"use client";

import React from "react";
import Reveal from "./Reveal";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  bg?: "white" | "black" | "gray" | "transparent" | string;
  overflow?: string;
}

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  bg = "white",
  overflow = "overflow-hidden",
}: SectionProps) {
  const bgStyles =
    bg === "white"
      ? "bg-white text-black"
      : bg === "black"
      ? "bg-black text-white"
      : bg === "gray"
      ? "bg-gray-50 text-black"
      : bg === "transparent"
      ? "bg-transparent"
      : bg;

  return (
    <section
      id={id}
      className={`w-full relative ${overflow} py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 ${bgStyles} ${className}`}
    >
      <div className={`max-w-[1500px] mx-auto relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
