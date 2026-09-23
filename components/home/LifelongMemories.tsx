import Image from "next/image";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

interface ActivityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const activities: ActivityItem[] = [
  {
    id: "trekking",
    number: "01",
    title: "Mountain Trekking",
    description: "Explore majestic alpine peaks, scenic forest trails, and summit views.",
    image: "/assets/trekking.jpg",
  },
  {
    id: "rafting",
    number: "02",
    title: "River Rafting",
    description: "Conquer wild whitewater rapids guided by certified expedition experts.",
    image: "/assets/rafting.jpg",
  },
  {
    id: "windsurfing",
    number: "03",
    title: "Ocean Windsurfing",
    description: "Feel the sea breeze and ride tropical ocean waves in coastal paradise.",
    image: "/assets/windsurfing.jpg",
  },
];

export default function LifelongMemories() {
  return (
    <Section bg="white" containerClassName="max-w-[1400px]">
      {/* Subtle background map dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <SectionTitle className="!mb-6">
          Lifelong Memories Just
          <br />
          A Few Days Away
        </SectionTitle>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <button className="bg-black text-white hover:bg-black/85 transition-all duration-300 px-7 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-md hover:scale-105 active:scale-95 cursor-pointer">
            JOIN WITH US
          </button>
          <button className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-1.5 hover:opacity-70 transition-opacity cursor-pointer py-2">
            <span>LEARN MORE</span>
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-4 sm:mt-8">
        {/* Left Column: Suitcases Luggage (no humans) */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-[520px] aspect-square rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-lg bg-gray-50 border border-black/5">
            <Image
              src="/assets/luggages.jpg"
              alt="Colorful set of travel luggage suitcases"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column: Activity List */}
        <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 pl-0 lg:pl-2">
          {/* "What Excites You Most?" Header label in 1 single line */}
          <div className="flex items-center gap-4 w-full">
            <span className="text-base sm:text-lg font-semibold text-black tracking-tight whitespace-nowrap">
              What Excites You Most?
            </span>
            <div className="h-[1.5px] bg-black/25 flex-1 min-w-[20px]" />
          </div>

          {/* List of Activities */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {activities.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-semibold text-black/70 w-6 flex-shrink-0">
                  {item.number}
                </span>

                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-tight group-hover:text-black/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
