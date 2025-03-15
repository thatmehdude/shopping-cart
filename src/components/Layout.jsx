import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => { 
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white shadow-md">
                <div className="container mx-auto p-4 flex justify-between items-center ">
                    <Link to="/" className="text-2xl font-bold">Darrow's Republic War Store</Link>
                    <NavBar />
                </div>
            </header>
            <main className="flex-grow container px-4 py-8">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>
                    The home page is what I want, however, I did not have enough time to get more images, so i will be using the fakestoreapi for the products
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;