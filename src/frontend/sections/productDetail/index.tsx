import SimilarStories from "./Similar";
import ProductDetailHero from "./hero";

export default function ProductDetailPage() {
  return (
    <div className="w-full flex flex-col">
      <ProductDetailHero /> <SimilarStories />
    </div>
  );
}
