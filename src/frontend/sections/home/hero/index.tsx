import { Button } from "@/frontend/components/ui/button";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="grid grid-cols-2 gap-20 my-20">
      <div className="col-span-1">
        <h1 className="text-pink_primary text-[50px] md:text-[60px] lg:text-[72px] font-bold whitespace-pre-line">
          Your place for inmersive lectures
        </h1>
        <div className="mt-10">
          <p>
            Create short stories, interact with your favourite characters & make
            decisions.
          </p>
          <Button className="mt-10">Try it now</Button>
        </div>
      </div>
      <div className="col-span-1 relative h-[664px]">
        <Image src={"/assets/hero.png"} fill objectFit="fill" alt="Intima.g" />
      </div>
    </section>
  );
}
