import Image from "next/image";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Reveal from "../Reveal";

interface DestinationCard {
  id: string;
  name: string;
  image: string;
  isOffset?: boolean;
}

const destinations: DestinationCard[] = [
  {
    id: "tanzania",
    name: "Tanzania",
    image: "/assets/tanzania.jpg",
    isOffset: false,
  },
  {
    id: "colombia",
    name: "Colombia",
    image: "/assets/colombia.jpg",
    isOffset: true,
  },
  {
    id: "bahrain",
    name: "Bahrain",
    image: "/assets/bahrain.jpg",
    isOffset: false,
  },
  {
    id: "mauritius",
    name: "Mauritius",
    image: "/assets/mauritius.jpg",
    isOffset: true,
  },
];

export default function DiscoverNature() {
  return (
    <Section bg="white">
      <Reveal direction="up" delay={0.1}>
        <SectionTitle>
          Discover the touch of Nature
        </SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 items-start pb-8">
        {destinations.map((destination, index) => (
          <Reveal
            key={destination.id}
            direction="up"
            delay={0.15 * index + 0.2}
            className={destination.isOffset ? "lg:mt-12" : "lg:mt-0"}
          >
            <div
              className="relative group rounded-[28px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden bg-gray-100 aspect-[3/4] w-full shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 bg-white/95 backdrop-blur-md text-black px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-md border border-black/5 group-hover:bg-white transition-colors duration-300">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{destination.name}</span>
              </div>

              <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] md:rounded-[36px] border border-black/5 pointer-events-none" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
