import { useState } from 'react';
import API from '../api/api';
import { useCart } from '../context/CartContext';
import ReceiptModal from '../components/ReceiptModal';

export default function Checkout() {
  const { cart } = useCart();
  const [form, setForm] = useState({ name: '', email: '' });
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/checkout', { cartItems: cart });
    setReceipt(res.data);
  };

  return (
    <div className="p-6 text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border border-gray-600 bg-gray-800 bg-opacity-50 p-2 w-full rounded text-white placeholder-gray-400" required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="border border-gray-600 bg-gray-800 bg-opacity-50 p-2 w-full rounded text-white placeholder-gray-400" required />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Checkout</button>
      </form>
      <ReceiptModal receipt={receipt} onClose={() => setReceipt(null)} />
    </div>
  );
}