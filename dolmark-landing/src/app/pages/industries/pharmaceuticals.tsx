
import { Link } from 'react-router-dom';

export default function Healthcare() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0F2C59] mb-6">Healthcare</h1>
        <p className="text-gray-600 mb-6">
          Temperature-controlled healthcare and pharmaceutical logistics solutions.
          We ensure compliance and safety for all healthcare supply chain needs.
        </p>
        <Link to="/" className="text-[#0F2C59] hover:underline mt-6 inline-block">← Back to home</Link>
      </div>
    </main>
  );
}
