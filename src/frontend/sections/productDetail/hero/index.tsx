import { Badge } from "@/frontend/components/ui/badge";
import { Button } from "@/frontend/components/ui/button";
import Image from "next/image";

export default function ProductDetailHero() {
  return (
    <section className="w-full gap-20 mt-[200px] mb-[120px]">
      <div className="col-span-1">
        <h1 className="text-pink_primary font-bold whitespace-pre-line">
          Boxing Champ
        </h1>
        <div className="mt-10">
          <p>
            Nighttime Reflections: As the fire burns down, you and Li start
            sharing deeper reflections about life, the universe, and your place
            in it.
          </p>

          <h3 className="mt-20 mb-5 text-pink_primary">Feature Included</h3>
          <div className="flex items-start gap-5">
            <Badge>Pick a path</Badge>
            <Badge>Image generation</Badge>
          </div>
          <Button className="mt-10 bg-red_primary">Start now</Button>
        </div>
      </div>
    </section>
  );
}
