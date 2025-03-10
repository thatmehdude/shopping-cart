import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white shadow-md">
                <div className="container mx-auto p-4 flex justify-between items-center ">
                    <Link to="/" className="text-2xl font-bold">ShopCart</Link>
                    <NavBar />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;