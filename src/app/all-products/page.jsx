import FeaturedCard from "@/components/featuredProducs/featuredCard";

// get all products func 
const getAllProducts = async ()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    if(!res.ok){
        throw new Error("Failed to fetch all products")
    }
    return res.json()
}

const AllProducts = async() => {
    // all products 
    const allProducts = await getAllProducts()

    return (
        <div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 min-[980px]:grid-cols-3 min-[1130px]:grid-cols-4 my-16 px-4">
            {
                allProducts.map(product =><FeaturedCard key={product.id} product={product} />)
            }
            </div>
        </div>
    );
};

export default AllProducts;