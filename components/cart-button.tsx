"use client";

import { ShoppingCart } from "lucide-react";

const CartButton = () => {
    return (
        <div className="relative">
            <ShoppingCart />
            <div className="w-[20px] h-[20px] bg-teal-400 rounded-full flex items-center justify-center absolute left-4 bottom-3">
                <p className="text-white z-10">2</p>
            </div>
        </div>
    );
};

export default CartButton;
