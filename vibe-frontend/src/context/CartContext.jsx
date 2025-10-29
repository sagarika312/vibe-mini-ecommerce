import { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };
  const removeOneFromCart = (id) => {
    setCart(prev => prev.map(item =>
      item._id === id ? { ...item, qty: item.qty - 1 } : item
    ).filter(item => item.qty > 0));
  };
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item._id !== id));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeOneFromCart, removeFromCart, notification }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
