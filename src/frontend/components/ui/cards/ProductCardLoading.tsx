const ProductCardLoading = () => {
  return (
    <div
      className={
        "animate-pulse w-full p-4 bg-gray-300 shadow-xl select-none cursor-pointer"
      }
    >
      <figure className="relative rounded-md w-full h-[264px] animate-pulse"></figure>
      <div className="text-left animate-pulse">
        <h2 className="font-extrabold text-orange_primary text-sm"></h2>
        <div className="font-bold text-black_primary"></div>
      </div>
    </div>
  );
};

export default ProductCardLoading;
