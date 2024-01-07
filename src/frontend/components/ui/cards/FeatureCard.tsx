import Image from "next/image";
interface IRCardProps {
  title: string;
  image: string;
  subtitle: string;
}
const FeatureCard = (props: IRCardProps) => {
  const { title, image, subtitle } = props;
  return (
    <div className="w-full select-none cursor-pointer flex items-center gap-6">
      <figure className="relative rounded-full min-w-[91px] h-[91px] overflow-hidden bg-orange_primary">
        <Image src={image} objectFit={"contain"} alt={title} fill />
      </figure>
      <div className="text-left">
        <h4 className="text-pink_primary">{title}</h4>
        <p className="text-black_primary mt-2">{`${subtitle}`}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
