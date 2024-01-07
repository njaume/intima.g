import { Button } from "@/frontend/components/ui/button";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="grid grid-cols-2 gap-20 mt-[200px] mb-[120px]">
      <div className="col-span-1">
        <h1 className="text-pink_primary font-bold whitespace-pre-line">
          Your place for inmersive lectures
        </h1>
        <div className="mt-10">
          <p>
            Create short stories, interact with your favourite characters & make
            decisions.
          </p>
          <Button className="mt-10 bg-red_primary">Try it now</Button>
        </div>
      </div>
      <div className="col-span-1 relative 2xl:h-[600px]">
        <Image src={"/assets/hero.png"} width={800} height={600} alt="Intima.g" />
      </div>
    </section>
  );
}
