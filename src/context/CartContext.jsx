import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true); // Open cart when item is added
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice, isCartOpen, setIsCartOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

