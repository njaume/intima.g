import Image from "next/image";
interface IRCardProps {
  title: string;
  image: string;
  subtitle: string;
  loading?: boolean;
}
const ProductCard = (props: IRCardProps) => {
  const { title, image, subtitle, loading } = props;
  return (
    <div className={"w-full select-none cursor-pointer rounded-lg shadow-3xl"}>
      <figure className="relative rounded-md w-full h-[264px]">
        <Image src={image} alt={title} fill quality={100} />
      </figure>
      <div className="text-left px-6 py-10 font-lato">
        <h3 className="font-lato text-pink_primary text-xl">{title}</h3>
        <p className="text-base">{`${subtitle}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
