import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

const Routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "products",
                element: <Products />,
            },
        ],
    },
];

export default Routes;
