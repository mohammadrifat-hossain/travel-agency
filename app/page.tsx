import Hero from "../components/home/Hero";
import DiscoverNature from "../components/home/DiscoverNature";
import LifelongMemories from "../components/home/LifelongMemories";
import FlightExperience from "../components/home/FlightExperience";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white font-sans">
      <Hero />
      <DiscoverNature />
      <LifelongMemories />
      <FlightExperience />
    </div>
  );
}
