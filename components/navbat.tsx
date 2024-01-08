import CartButton from "./cart-button";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b-2">
            <a href="/">
                <h1 className="text-xl font-bold">Zustand Demo</h1>
            </a>
            <a href="/cart">
                <CartButton />
            </a>
        </div>
    );
};

export default Navbar;
