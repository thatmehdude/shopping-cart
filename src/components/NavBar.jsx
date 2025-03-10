import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="bg-gray-300">
            <ul className="flex space-x-6 items-center text-black">
                <li>
                    <Link to="/" className="hover:text-indigo-800 transition-colors">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;