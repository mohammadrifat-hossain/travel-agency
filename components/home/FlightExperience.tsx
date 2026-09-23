"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FlightExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const plane = planeRef.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    if (!container || !plane || !leftContent || !rightContent) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(plane, {
        scale: 2.6,
        y: "0%",
        transformOrigin: "top center",
        opacity: 1,
        zIndex: 30,
      });
      gsap.set(leftContent, { opacity: 0, x: -70 });
      gsap.set(rightContent, { opacity: 0, x: 70 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=55%",
          pin: true,
          scrub: 0.4,
          anticipatePin: 1,
        },
      });

      tl.to(plane, {
        scale: 0.95,
        y: "32vh",
        duration: 0.5,
        ease: "power2.out",
      }).to(
        [leftContent, rightContent],
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.25"
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-0 lg:min-h-screen bg-white text-black px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-center items-center relative overflow-hidden py-12 sm:py-16 lg:py-0"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <div
        ref={planeRef}
        className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-30 overflow-visible transform-gpu justify-center"
      >
        <div className="relative w-[650px] h-[450px] flex items-center justify-center">
          <Image
            src="/assets/airplane.png"
            alt="Airplane illustration"
            fill
            priority
            className="object-contain object-top"
          />
        </div>
      </div>

      <div className="max-w-[1500px] w-full h-full mx-auto relative z-10 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div
            ref={leftContentRef}
            className="lg:col-span-4 flex flex-col gap-5 sm:gap-6 z-20 text-left"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-tight">
              Premium Direct Flights To 500+ Cities
            </h3>

            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Experience seamless global travel with our verified airline partners. Enjoy priority check-in, luxury VIP lounges, and non-stop flight connections worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-primary pl-4">
                <span className="block text-2xl sm:text-3xl font-bold text-black">500+</span>
                <span className="text-xs text-gray-500 font-medium">Global Airports</span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block text-2xl sm:text-3xl font-bold text-black">99.8%</span>
                <span className="text-xs text-gray-500 font-medium">On-Time Arrival</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center items-center pointer-events-none my-2 lg:my-0">
            <div className="lg:hidden relative w-full max-w-[280px] sm:max-w-[360px] aspect-[4/3] flex items-center justify-center">
              <Image
                src="/assets/airplane.png"
                alt="Airplane illustration"
                fill
                priority
                className="object-contain object-center"
              />
            </div>
          </div>

          <div
            ref={rightContentRef}
            className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 z-20 text-left"
          >
            <div className="flex items-start gap-4 group cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-primary text-black font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                01
              </span>
              <div className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-bold text-black tracking-tight group-hover:text-black/80 transition-colors mb-1">
                  Best Fare Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  Real-time price tracking across 200+ global airlines ensuring you get the absolute lowest airfare.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-primary text-black font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                02
              </span>
              <div className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-bold text-black tracking-tight group-hover:text-black/80 transition-colors mb-1">
                  Flexible Flight Changes
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  Enjoy hassle-free date changes, zero cancellation penalties, and 24/7 instant travel support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-primary text-black font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                03
              </span>
              <div className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-bold text-black tracking-tight group-hover:text-black/80 transition-colors mb-1">
                  VIP Sky Lounge Access
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  Complimentary luxury lounge passes and priority seat upgrades for standard and business travelers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
