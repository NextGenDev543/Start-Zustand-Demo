import { getAllProducts } from "@/lib/getAllProducts";
import { ProductType } from "@/lib/types";
import ProductCard from "./product-card";

const Products = async () => {
    const products: ProductType[] = await getAllProducts();
    return (
        <div className="mt-4 flex flex-col items-center gap-10">
            <h1 className="text-2xl font-semibold">Welcome to my store</h1>
            <div className="flex items-center justify-center gap-10 flex-wrap">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default Products;
