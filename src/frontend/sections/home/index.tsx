import HomeTrendingNow from "./TrendingNow";
import HomeFeatures from "./features";
import HomeHero from "./hero";

export default function HomePage() {
  return (
    <div className="w-full ">
      <HomeHero />
      <HomeFeatures />
      <HomeTrendingNow />
    </div>
  );
}
