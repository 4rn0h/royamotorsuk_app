import React, { useEffect, useState } from 'react';
import { Car } from '../types';
import CarCard from './CarCard';

const FeaturedCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://4rn0h.pythonanywhere.com/api/vehicles/')
      .then(res => res.json())
      .then((data) => {
        setCars(data.slice(0, 3)); // Show 3 featured cars
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching featured cars:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-primary">Loading featured vehicles...</p>;

  return (
    <section className="section bg-neutral">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8 text-primary text-center">
          Featured Vehicles
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Discover our handpicked selection of exceptional luxury vehicles, each
          representing the pinnacle of automotive excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {cars.map((car) => (
            <div key={car.id} className="flex justify-center">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
