"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "../Reveal";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden font-sans select-none bg-black">
      <div
        className="absolute -inset-y-24 inset-x-0 z-0 pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollY * 0.4}px, 0)`,
          willChange: "transform",
        }}
      >
        <Image
          src="/assets/hero-bg.jpg"
          alt="Resort Pool"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.1] saturate-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 min-h-screen">
        <div className="w-fit mx-auto flex flex-col items-center">
          <Reveal direction="up" delay={0.1} className="w-full text-left">
            <h1
              className="text-[10vw] lg:text-[120px] xl:text-[136px] 2xl:text-[144px] font-semibold uppercase tracking-tight leading-[0.82] text-transparent"
              style={{
                WebkitTextStroke: "2.5px var(--color-primary, #E6F13A)",
              }}
            >
              Discover Where
            </h1>
          </Reveal>

          <div className="relative z-30 w-full flex items-center gap-4 sm:gap-6 md:gap-8 -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-22 xl:-mt-26">
            <Reveal direction="left" delay={0.15} className="z-30 relative">
              <div
                className="relative z-30 w-[32vw] sm:w-[30vw] md:w-[28vw] max-w-[450px] h-[44vh] pointer-events-none flex-shrink-0 flex items-center"
                style={{
                  transform: `translate3d(${-scrollY * 0.7}px, 0, 0) scale(${1 + scrollY * 0.0012})`,
                  willChange: "transform",
                }}
              >
                <Image
                  src="/assets/plane3.png"
                  alt="Airplane illustration"
                  width={520}
                  height={310}
                  priority
                  className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] scale-[1.7]"
                />
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.25} className="z-10">
              <h2 className="text-[10vw] lg:text-[120px] xl:text-[136px] 2xl:text-[144px] font-semibold uppercase tracking-tight leading-[0.82] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)] z-10 whitespace-nowrap">
                You Want
              </h2>
            </Reveal>
          </div>

          <div className="relative z-0 w-full flex flex-col md:flex-row md:items-center -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-22 xl:-mt-26 gap-4 sm:gap-8 md:gap-10">
            <Reveal direction="up" delay={0.4} className="z-0">
              <h2 className="text-[10vw] lg:text-[120px] xl:text-[136px] 2xl:text-[144px] font-semibold uppercase tracking-tight leading-[0.82] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
                Go Next
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.55} className="max-w-[340px] sm:max-w-[380px] md:max-w-[410px] z-10 md:text-left">
              <p className="text-white text-xs sm:text-sm md:text-[16px] lg:text-[20px] font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Travelers is one of the most popular Travel agency for those who want to explore the world and try to make adventure.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal direction="up" delay={0.7} className="w-full max-w-[1100px] mx-auto mt-10 md:mt-20 mb-2">
          <div className="w-full bg-primary rounded-[32px] sm:rounded-[40px] px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 flex-1 w-full text-black">
              <div className="flex flex-col lg:pr-6 lg:border-r border-black/20">
                <label className="text-black font-semibold text-base md:text-lg tracking-tight mb-1">
                  Destination
                </label>
                <div className="border-b border-black/40 pb-1 flex items-center justify-between">
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Search location"
                    className="w-full bg-transparent text-black placeholder:text-black/60 text-sm md:text-base font-medium focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:px-6 lg:border-r border-black/20">
                <label className="text-black font-semibold text-base md:text-lg tracking-tight mb-1">
                  Type
                </label>
                <div className="border-b border-black/40 pb-1 flex items-center justify-between cursor-pointer group">
                  <span className="text-black/90 text-sm md:text-base font-medium">
                    Adventure
                  </span>
                  <svg
                    className="w-4 h-4 text-black transition-transform group-hover:translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col lg:px-6 lg:border-r border-black/20">
                <label className="text-black font-semibold text-base md:text-lg tracking-tight mb-1">
                  Date
                </label>
                <div className="border-b border-black/40 pb-1 flex items-center justify-between cursor-pointer group">
                  <span className="text-black/90 text-sm md:text-base font-medium">
                    Type date
                  </span>
                  <svg
                    className="w-4 h-4 text-black transition-transform group-hover:translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col lg:px-6">
                <label className="text-black font-semibold text-base md:text-lg tracking-tight mb-1">
                  Guest
                </label>
                <div className="border-b border-black/40 pb-1 flex items-center justify-between cursor-pointer group">
                  <span className="text-black/90 text-sm md:text-base font-medium">
                    1 person date
                  </span>
                  <svg
                    className="w-4 h-4 text-black transition-transform group-hover:translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              aria-label="Find Trip"
              className="flex-shrink-0 w-20 h-20 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-black text-white flex flex-col items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group ml-0 lg:ml-2"
            >
              <div className="flex flex-col items-center mb-1">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                <div className="w-3.5 sm:w-4 h-[2px] bg-white -mt-0.5" />
              </div>

              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-center">
                Find Trip
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}