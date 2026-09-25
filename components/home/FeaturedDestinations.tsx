"use client";

import { useEffect } from "react";
import Image from "next/image";
import Section from "../Section";
import { MapPin, Star, Calendar, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Destination {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  tag: string;
}

const featuredDestinations: Destination[] = [
  {
    id: "dubai-journey",
    title: "Dubai Luxury Journey",
    location: "Dubai, UAE",
    duration: "5 Days - 4 Nights",
    price: "$699",
    rating: 4.8,
    image: "/assets/hero-bg.jpg",
    tag: "Luxury Retreat",
  },
  {
    id: "serengeti-safari",
    title: "Serengeti Wilderness Safari",
    location: "Tanzania, East Africa",
    duration: "7 Days - 6 Nights",
    price: "$2,450",
    rating: 4.9,
    image: "/assets/tanzania.jpg",
    tag: "Wildlife Expedition",
  },
  {
    id: "cartagena-coast",
    title: "Cartagena Tropical Getaway",
    location: "Colombia, South America",
    duration: "6 Days - 5 Nights",
    price: "$1,890",
    rating: 4.8,
    image: "/assets/colombia.jpg",
    tag: "Coastal Culture",
  },
  {
    id: "mauritius-resort",
    title: "Mauritius Crystal Lagoon",
    location: "Mauritius Island",
    duration: "8 Days - 7 Nights",
    price: "$3,100",
    rating: 5.0,
    image: "/assets/mauritius.jpg",
    tag: "Island Sanctuary",
  },
];

export default function FeaturedDestinations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll(".destination-card");
      cards.forEach((card) => {
        const img = card.querySelector(".parallax-card-image");
        if (img) {
          gsap.fromTo(
            img,
            { y: "-35%" },
            {
              y: "35%",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section bg="white" overflow="overflow-visible" containerClassName="max-w-[1400px]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-1/2 lg:-translate-y-1/2 flex flex-col gap-6 self-start">
          <div>
            <span className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">
              TOP HANDPICKED GETAWAYS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Explore Our Most Featured Destinations
            </h2>
          </div>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
            Immerse yourself in handpicked luxury stays, guided expeditions, and breathtaking natural wonders across the globe tailored specifically for your wanderlust.
          </p>

          <div className="pt-2">
            <button className="w-fit bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-md hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5">
              <span>EXPLORE ALL DESTINATIONS</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-12">
          {featuredDestinations.map((item) => (
            <div
              key={item.id}
              className="destination-card group relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-black shadow-[0_16px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.2)] transition-all duration-500 h-[480px] sm:h-[540px] md:h-[580px] cursor-pointer"
            >
              <div className="parallax-card-image absolute -top-40 -bottom-40 inset-x-0 w-full h-[calc(100%+320px)] pointer-events-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center scale-125 transition-transform duration-700 ease-out group-hover:scale-130"
                />
              </div>

              <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/10">
                {item.tag}
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-9 bg-gradient-to-t from-black via-black/75 to-transparent flex flex-col justify-end gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-white/90" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                    <Calendar className="w-4 h-4 text-white/80" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/60 font-medium leading-none mb-0.5">Duration</span>
                      <span className="text-xs sm:text-sm font-semibold text-white leading-none">{item.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />
                      <span>{item.rating}</span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-2xl sm:text-3xl font-semibold text-white leading-none">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-white/70 font-normal">/ Traveler</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
