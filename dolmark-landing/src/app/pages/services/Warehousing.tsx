
import { Link } from 'react-router-dom';

export default function Warehousing() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0F2C59] mb-6">Warehousing</h1>
        <p className="text-gray-600 mb-6">
          Customized warehousing and logistics solutions. Learn more about our
          contract warehousing, inventory management and value-added services.
        </p>
        <Link to="/" className="text-[#0F2C59] hover:underline mt-6 inline-block">← Back to home</Link>
      </div>
    </main>
  );
}
