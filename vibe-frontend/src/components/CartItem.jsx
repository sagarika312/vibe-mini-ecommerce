import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { addToCart, removeOneFromCart, removeFromCart } = useCart();
  return (
    <div className="flex justify-between items-center border-b border-gray-700 py-2 text-white">
      <span>{item.name} (x{item.qty})</span>
      <span>${item.price * item.qty}</span>
      <div className="flex items-center">
        <button onClick={() => removeOneFromCart(item._id)} className="text-red-500 hover:text-red-400 transition-colors px-2">-</button>
        <button onClick={() => addToCart(item)} className="text-green-500 hover:text-green-400 transition-colors px-2">+</button>
        <button onClick={() => removeFromCart(item._id)} className="text-red-500 ml-2 hover:text-red-400 transition-colors">Remove All</button>
      </div>
    </div>
  );
}
