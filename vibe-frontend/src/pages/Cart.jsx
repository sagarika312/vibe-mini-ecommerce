import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      {cart.map(item => <CartItem key={item._id} item={item} removeFromCart={removeFromCart} />)}
      <h2 className="text-xl font-bold mt-4">Total: ${total}</h2>
    </div>
  );
}