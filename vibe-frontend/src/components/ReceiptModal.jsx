export default function ReceiptModal({ receipt, onClose }) {
  if (!receipt) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
        <h2 className="text-xl font-bold mb-4">Receipt</h2>
        <p>Total: ${receipt.total}</p>
        <p>Time: {receipt.timestamp}</p>
        <button onClick={onClose} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
}