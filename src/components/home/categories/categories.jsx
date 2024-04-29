import Title from "@/components/shared/title/title";

const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch product categories");
  }
  return res.json();
};

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="my-16 px-4">
      {/* heading */}
      <Title title="categories" subTitle="find products by category" />
      {/* all categories */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 min-[980px]:grid-cols-3">
        {categories &&
          categories.map((category, idx) => (
            <div className="flex justify-center items-center min-h-[150px] bg-gradient-to-r from-blue-300 to-red-300 rounded-md cursor-pointer" key={idx}>
              <h3 className="text-3xl text-white font-bold capitalize">{category}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
