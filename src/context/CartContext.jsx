import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    // get cart from localStorage or initialize as an empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // add item to cart
    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
          // Check if item is already in cart
          const existingItem = prevCart.find(item => item.id === product.id);
          
          if (existingItem) {
            // Update quantity if item exists
            return prevCart.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
            );
          } else {
            // Add new item if it doesn't exist
            return [...prevCart, { ...product, quantity }];
          }
        });
      };

      // remove item from cart
      const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
      };

      // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );

};