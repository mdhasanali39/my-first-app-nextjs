import Title from "../shared/title/title";
import FeaturedCard from "./featuredCard";

const getFeaturedProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }
  return res.json();
};

const FeaturedProducts = async () => {
  const featuredProductsData = await getFeaturedProducts();

  return (
    <div className="px-4">

      {/* heading */}
      <Title title="featured" subTitle="All Featured Products"/>

    {/* featured products  */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 min-[980px]:grid-cols-3 min-[1130px]:grid-cols-4">
        {featuredProductsData &&
          featuredProductsData.map((product) => (
            <FeaturedCard key={product.id} product={product}/>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
