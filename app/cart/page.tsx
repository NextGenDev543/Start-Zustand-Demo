import CartProductCard from "@/components/cart-product-card";
import { getAllProducts } from "@/lib/getAllProducts";

const CartPage = async () => {
    const data = await getAllProducts();
    return (
        <div className="flex flex-col justify-center p-4 items-center gap-y-10">
            <h1 className="text-xl font-bold">Your Cart</h1>
            <div className="flex items-center gap-4 flex-wrap">
                <CartProductCard product={data[0]} />
                <CartProductCard product={data[0]} />
            </div>
        </div>
    );
};

export default CartPage;
