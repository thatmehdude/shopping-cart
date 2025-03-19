import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const NavBar = () => {
    const { cart } = useContext(CartContext);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="bg-gray-300">
            <ul className="flex space-x-6 items-center text-black px-1.5">
                <li>
                    <Link to="/" className="hover:text-indigo-800 transition-colors">Home</Link>
                </li>
                <li>
                    <Link to="/products" className="hover:text-indigo-800 transition-colors">Products</Link>
                </li>
                <li>
                    <Link to="/cart" className="relative hover:text-indigo-800 transition-colors">
                        Cart
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;