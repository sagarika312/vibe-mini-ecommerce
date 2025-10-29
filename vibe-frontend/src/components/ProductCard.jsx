export default function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="border border-gray-700 p-4 rounded-lg shadow-md text-center bg-white bg-opacity-10 backdrop-blur-sm animate-fade-in-up hover:scale-105 transition-transform duration-300">
      <h2 className="text-lg font-semibold text-white">{product.name}</h2>
      <p className="text-gray-300">${product.price}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-3 py-1 rounded mt-2 hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}
