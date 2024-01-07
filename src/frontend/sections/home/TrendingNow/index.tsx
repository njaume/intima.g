import React from "react";
import ProductCard from "@/frontend/components/ui/cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/frontend/components/ui/carousel";
const items = [
  {
    key: "fpkey1",
    title: "Select your gear",
    image: "/assets/hero.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    key: "fpkey4",
    title: "Receive it",
    image: "/assets/hero.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    key: "fpkey2",
    title: "Enjoy",
    image: "/assets/hero.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    key: "fpkey3",

    title: "Return",
    image: "/assets/hero.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const HomeTrendingNow = () => {
  return (
    <div className="my-20">
      <h2 className={`mb-11 text-orange_primary`}>{"Trending Now"}</h2>
      <div className={"w-full"}>
        <Carousel>
          <CarouselContent className="">
            {items.map((item) => {
              return (
                <CarouselItem
                  key={item.key}
                  className="md:basis-1/2 lg:basis-1/3 p-10"
                >
                  <ProductCard {...item} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeTrendingNow;
