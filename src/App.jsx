import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import Routes from './Routes';

const App = () => {
  const router = createBrowserRouter(Routes);
  
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;