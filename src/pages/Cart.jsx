// const Cart = () => {
//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold">Your Cart</h1>
//             <p className="mt-2">Your selected items will appear here</p>
//         </div>
//     );
// }

// export default Cart;

// src/pages/Cart.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  
  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
        <Link 
          to="/products"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row py-6 border-b border-gray-200 last:border-b-0">
              <div className="sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="sm:ml-6 flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <Link 
                      to={`/products/${item.id}`}
                      className="text-lg font-medium text-gray-800 hover:text-indigo-600 mb-1 block"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                  </div>
                  
                  <div className="mt-2 sm:mt-0 text-right">
                    <div className="text-lg font-bold text-indigo-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
                  <div className="flex items-center">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="border-t border-b border-gray-300 text-center w-10 py-1">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 sm:mt-0 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">$0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">${(totalPrice * 0.1).toFixed(2)}</span>
          </div>
          <div className="h-px bg-gray-200 my-4"></div>
          <div className="flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">${(totalPrice * 1.1).toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button 
          onClick={clearCart}
          className="px-6 py-3 border border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
        >
          Clear Cart
        </button>
        
        <button 
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;