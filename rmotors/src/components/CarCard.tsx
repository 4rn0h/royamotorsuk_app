// src/components/CarCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Car as CarType } from '../types';
import { Calendar, Gauge, Fuel, Settings } from 'lucide-react';

interface CarCardProps {
  car: CarType;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  // Format price with commas
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(car.price);

  return (
    <div className="card group"> {/* .card applies bg-neutral */}
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {car.status === 'Sold' && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded font-medium text-sm">
            Sold
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-heading font-medium mb-2 text-primary"> {/* Added text-primary */}
          {car.make} {car.model}
        </h3>
        <p className="text-lg font-medium text-cta mb-4">{formattedPrice}</p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm text-primary"> {/* Changed text-gray-600 to text-primary */}
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center text-sm text-primary"> {/* Changed text-gray-600 to text-primary */}
            <Gauge size={16} className="mr-2 text-primary" />
            <span>{car.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center text-sm text-primary"> {/* Changed text-gray-600 to text-primary */}
            <Fuel size={16} className="mr-2 text-primary" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-primary"> {/* Changed text-gray-600 to text-primary */}
            <Settings size={16} className="mr-2 text-primary" />
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/cars/${car.id}`}
          className="btn btn-primary w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;