"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductType } from "@/lib/types";
import Image from "next/image";
import { Button } from "./ui/button";

const CartProductCard = ({ product }: { product: ProductType }) => {
    return (
        <div>
            <Card className="w-[350px] h-[500px] flex flex-col justify-between">
                <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-[100%] h-[180px] relative">
                        <Image src={product.image} className="flex object-contain" alt="" fill />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Remove From Cart</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CartProductCard;
