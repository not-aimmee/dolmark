import React from 'react';
import { Link } from 'react-router-dom';

export default function FoodBeverage(): JSX.Element {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0F2C59] mb-6">Food & Beverage</h1>
        <p className="text-gray-600 mb-6">
          Versatile 3PL warehousing solutions tailored for the food and beverage industry.
          We provide specialized logistics and distribution services to meet your industry needs.
        </p>
        <Link to="/" className="text-[#0F2C59] hover:underline mt-6 inline-block">← Back to home</Link>
      </div>
    </main>
  );
}
