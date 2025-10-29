import { useEffect, useState } from 'react';
import API from '../api/api';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart, notification } = useCart();

  useEffect(() => {
    API.get('/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {products.map(p => <ProductCard key={p._id} product={p} addToCart={addToCart} />)}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
          {notification}
        </div>
      )}
    </div>
  );
}
