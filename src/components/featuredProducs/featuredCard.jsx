import Image from "next/image";
import Button from "../shared/button/button";
import {
  FaStar,
  FaRegStar,
  FaRegStarHalfStroke,
  FaCartPlus,
} from "react-icons/fa6";
const FeaturedCard = ({ product }) => {
  const rating = parseFloat(product?.rating?.rate);

  const getStars = () => {
    const finalRating = [];
    for (let i = 0; i < 5; i++) {
      const number = i + 0.5;
      finalRating.push(
        <span key={i}>
          {rating >= number + 1 ? (
            <FaStar className="text-blue-400" />
          ) : rating >= number ? (
            <FaRegStarHalfStroke className="text-blue-400" />
          ) : (
            <FaRegStar className="text-blue-400" />
          )}
        </span>
      );
    }
    return finalRating;
  };

  return (
    <div className="relative border bg-white p-5 pb-20 rounded-md shadow-md drop-shadow-md  group">
      {/* product image  */}
      <div className="relative w-full aspect-[16/9] my-4 rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="rounded-md group-hover:scale-110 transition duration-300"
        />
      </div>
      {/* product info  */}
      <div className="mt-8">
        <h2 className="font-semibold">
          {product?.title?.length > 27
            ? product?.title?.slice(0, 27) + "..."
            : product?.title}
        </h2>
        <p className="text-2xl text-blue-400 font-semibold my-4">
          $ {product.price}
        </p>
        {/* Ratings */}
        <div className="flex gap-2 items-center">
          <div className="flex gap-1">{getStars().map((star) => star)}</div>
          <span className="text-blue-500 opacity-75">
            rated by {product.rating.count}
          </span>
        </div>
        {/* action */}
        <div className="mt-5 absolute bottom-4">
          <Button btnName="Add to cart" icon={FaCartPlus} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
