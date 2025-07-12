// src/components/CarCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Car as CarType } from '../types';
import { Calendar, Gauge, Fuel, Settings } from 'lucide-react';

interface CarCardProps {
  car: CarType;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(car.price);

  const imageUrl =
    car.images && car.images.length > 0
      ? car.images[0].image?.startsWith('http')
        ? car.images[0].image
        : `http://127.0.0.1:8000${car.images[0].image}`
      : null;

  return (
    <div className="card group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative overflow-hidden h-64 bg-gray-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-500">
            No Image Available
          </div>
        )}

        {car.status?.toLowerCase() === 'sold' && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded font-medium text-sm">
            Sold
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-heading font-medium mb-2 text-primary">
          {car.make} {car.model}
        </h3>
        <p className="text-lg font-medium text-cta mb-4">{formattedPrice}</p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-primary text-sm">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center">
            <Gauge size={16} className="mr-2" />
            <span>{car.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center">
            <Fuel size={16} className="mr-2" />
            <span>{car.fuel_type}</span>
          </div>
          <div className="flex items-center">
            <Settings size={16} className="mr-2" />
            <span>{car.transmission}</span>
          </div>
        </div>

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
