// src/components/FeaturedCars.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/mockData'; // Assuming this exists
import CarCard from './CarCard'; // Assuming this exists
import { ChevronRight } from 'lucide-react';

const FeaturedCars: React.FC = () => {
  // Get the first 3 cars as featured
  const featuredCars = cars.slice(0, 3);

  return (
    <section className="section bg-neutral">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-medium mb-3 text-primary">Featured Vehicles</h2> {/* <--- ADDED text-primary */}
            <p className="text-gray-600 text-primary"> {/* <--- ADDED text-primary */}
              Discover our handpicked selection of exceptional luxury vehicles, each
              representing the pinnacle of automotive excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/cars"
            className="flex items-center text-cta hover:text-cta/80 font-medium transition-colors text-lg"
          >
            View All Collection
            <ChevronRight size={20} className="ml-1" />
          </Link>
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/cars" className="btn btn-primary">
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;