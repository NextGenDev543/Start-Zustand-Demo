export type ProductType = {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export type CartProductType = {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
};

export type CartType = {
    products: CartProductType[];
    totalItems: number;
    totalPrice: number;
};

export type ActionTypes = {
    addToCart: (item: CartProductType) => void;
    removeFromCart: (item: CartProductType) => void;
};
