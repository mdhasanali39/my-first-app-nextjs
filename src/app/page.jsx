import FeaturedProducts from "@/components/featuredProducs/featuredProducts";
import Hero from "@/components/hero/Hero";
import Categories from "@/components/home/categories/categories";

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <Categories/>
    </div>
  );
};

export default Home;