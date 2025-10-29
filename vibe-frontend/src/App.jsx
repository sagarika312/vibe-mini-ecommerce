import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
          <nav className="flex justify-between p-4 bg-gray-800 bg-opacity-80 text-white backdrop-blur-sm">
            <Link to="/" className="hover:text-purple-300 transition-colors">Products</Link>
            <div>
              <Link to="/cart" className="mr-4 hover:text-purple-300 transition-colors">Cart</Link>
              <Link to="/checkout" className="hover:text-purple-300 transition-colors">Checkout</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
