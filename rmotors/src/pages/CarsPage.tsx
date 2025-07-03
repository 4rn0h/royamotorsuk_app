// src/pages/CarsPage.tsx
import React, { useState, useEffect } from 'react';
import { cars } from '../data/mockData';
import CarCard from '../components/CarCard';
import { Car } from '../types';
import { Search, ChevronDown, FilterX } from 'lucide-react';

const CarsPage: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = 'Our Collection | RoyaMotorsUK';
  }, []);

  // Get unique makes and models for filter dropdowns
  const uniqueMakes = Array.from(new Set(cars.map((car) => car.make))).sort();
  const uniqueModels = Array.from(new Set(cars.map((car) => car.model))).sort();

  // Apply filters
  useEffect(() => {
    let result = [...cars];

    // Apply make filter
    if (filters.make) {
      result = result.filter((car) => car.make === filters.make);
    }

    // Apply model filter
    if (filters.model) {
      result = result.filter((car) => car.model === filters.model);
    }

    // Apply price filters
    if (filters.minPrice) {
      result = result.filter((car) => car.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((car) => car.price <= parseInt(filters.maxPrice));
    }

    // Apply year filters
    if (filters.minYear) {
      result = result.filter((car) => car.year >= parseInt(filters.minYear));
    }
    if (filters.maxYear) {
      result = result.filter((car) => car.year <= parseInt(filters.maxYear));
    }

    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (car) =>
          car.make.toLowerCase().includes(term) ||
          car.model.toLowerCase().includes(term) ||
          car.description.toLowerCase().includes(term) ||
          car.exteriorColor.toLowerCase().includes(term) ||
          car.interiorColor.toLowerCase().includes(term)
      );
    }

    setFilteredCars(result);
  }, [filters, searchTerm]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited (assuming you have error state for filters)
    // if (errors[name]) {
    //   setErrors((prev) => {
    //     const newErrors = { ...prev };
    //     delete newErrors[name];
    //     return newErrors;
    //   });
    // }
  };

  const resetFilters = () => {
    setFilters({
      make: '',
      model: '',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: '',
    });
    setSearchTerm('');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="bg-primary text-white py-12 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Our Collection</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover our handpicked selection of exceptional luxury vehicles, each representing the
            pinnacle of automotive excellence.
          </p>
        </div>
      </div>

      <div className="container-custom">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by make, model, color..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-secondary text-white px-4 py-3 rounded-md flex items-center justify-center hover:bg-secondary/90"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <ChevronDown
                size={20}
                className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {showFilters && (
            <div className="bg-neutral p-6 rounded-lg mb-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-primary mb-1">
                    Make
                  </label>
                  <select
                    id="make"
                    name="make"
                    value={filters.make}
                    onChange={handleFilterChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
                  >
                    <option value="">All Makes</option>
                    {uniqueMakes.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-primary mb-1">
                    Model
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={filters.model}
                    onChange={handleFilterChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
                  >
                    <option value="">All Models</option>
                    {uniqueModels.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="minPrice" className="block text-sm font-medium text-primary mb-1">
                      Min Price (£)
                    </label>
                    <input
                      type="number"
                      id="minPrice"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      placeholder="Min"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
                    />
                  </div>
                  <div>
                    <label htmlFor="maxPrice" className="block text-sm font-medium text-primary mb-1">
                      Max Price (£)
                    </label>
                    <input
                      type="number"
                      id="maxPrice"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      placeholder="Max"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="minYear" className="block text-sm font-medium text-primary mb-1">
                      Min Year
                    </label>
                    <input
                      type="number"
                      id="minYear"
                      name="minYear"
                      value={filters.minYear}
                      onChange={handleFilterChange}
                      placeholder="Min"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
                    />
                  </div>
                  <div>
                    <label htmlFor="maxYear" className="block text-sm font-medium text-primary mb-1">
                      Max Year
                    </label>
                    <input
                      type="number"
                      id="maxYear"
                      name="maxYear"
                      value={filters.maxYear}
                      onChange={handleFilterChange}
                      placeholder="Max"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
                    />
                  </div>
                </div>
                <div className="md:col-span-3 flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors text-primary" // Corrected: Removed inline comment
                  >
                    <FilterX size={18} className="mr-2" />
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-neutral">
            Showing {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}
          </p>
        </div>

        {/* Car Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 p-8 rounded-lg inline-block mb-4">
              <Search size={48} className="text-gray-400 mx-auto" />
            </div>
            <h2 className="text-2xl font-medium mb-2 text-primary">No vehicles found</h2>
            <p className="text-primary mb-6">
              We couldn't find any vehicles matching your current filters.
            </p>
            <button onClick={resetFilters} className="btn btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;