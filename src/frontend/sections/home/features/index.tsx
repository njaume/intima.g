import React from "react";
import { GRID_LAYOUT_CLASSES } from "@/constants";
import FeatureCard from "@/frontend/components/ui/cards/FeatureCard";
const items = [
  {
    key: "fpkey1",
    title: "Select your gear",
    image: "/product-surf-board.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    key: "fpkey4",
    title: "Receive it",
    image: "/product-surf-board.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    key: "fpkey2",
    title: "Enjoy",
    image: "/product-surf-board.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    key: "fpkey3",

    title: "Return",
    image: "/product-surf-board.png",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const HomeFeatures = () => {
  return (
    <div className="my-20">
      <h2 className={`mb-11 text-orange_primary`}>{"Create your own experience"}</h2>
      <div className={"grid grid-cols-3 gap-10"}>
        {items.map((item) => {
          return (
            <div key={item.key} className="col-span-full lg:col-span-1">
              <FeatureCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFeatures;
