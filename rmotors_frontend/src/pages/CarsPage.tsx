// src/pages/CarsPage.tsx
import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import { Car } from '../types';
import { Search, ChevronDown, FilterX } from 'lucide-react';
import API_BASE_URL from '../api';  //import the base URL

const CarsPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
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

    fetch(`${API_BASE_URL}/vehicles/`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      })
      .catch(console.error);
  }, []);

  const uniqueMakes = Array.from(new Set(cars.map((car) => car.make))).sort();
  const uniqueModels = Array.from(new Set(cars.map((car) => car.model))).sort();

  useEffect(() => {
    let result = [...cars];
    if (filters.make) result = result.filter((car) => car.make === filters.make);
    if (filters.model) result = result.filter((car) => car.model === filters.model);
    if (filters.minPrice) result = result.filter((car) => car.price >= parseInt(filters.minPrice));
    if (filters.maxPrice) result = result.filter((car) => car.price <= parseInt(filters.maxPrice));
    if (filters.minYear) result = result.filter((car) => car.year >= parseInt(filters.minYear));
    if (filters.maxYear) result = result.filter((car) => car.year <= parseInt(filters.maxYear));
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (car) =>
          car.make.toLowerCase().includes(term) ||
          car.model.toLowerCase().includes(term) ||
          car.description.toLowerCase().includes(term) ||
          car.exterior_color.toLowerCase().includes(term) ||
          car.interior_color.toLowerCase().includes(term)
      );
    }
    setFilteredCars(result);
  }, [filters, searchTerm, cars]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({ make: '', model: '', minPrice: '', maxPrice: '', minYear: '', maxYear: '' });
    setSearchTerm('');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="bg-primary text-white py-12 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Our Collection</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover our handpicked selection of exceptional luxury vehicles, each representing the pinnacle of automotive excellence.
          </p>
        </div>
      </div>

      <div className="container-custom">
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by make, model, color..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-secondary text-white px-4 py-3 rounded-md flex items-center justify-center hover:bg-secondary/90"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <ChevronDown size={20} className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showFilters && (
            <div className="bg-neutral p-6 rounded-lg mb-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-primary mb-1">Make</label>
                  <select id="make" name="make" value={filters.make} onChange={handleFilterChange} className="w-full p-3 border rounded-md">
                    <option value="">All Makes</option>
                    {uniqueMakes.map((make) => <option key={make} value={make}>{make}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-primary mb-1">Model</label>
                  <select id="model" name="model" value={filters.model} onChange={handleFilterChange} className="w-full p-3 border rounded-md">
                    <option value="">All Models</option>
                    {uniqueModels.map((model) => <option key={model} value={model}>{model}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="minPrice" className="block text-sm font-medium text-primary mb-1">Min Price (£)</label>
                    <input type="number" id="minPrice" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} className="w-full p-3 border rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="maxPrice" className="block text-sm font-medium text-primary mb-1">Max Price (£)</label>
                    <input type="number" id="maxPrice" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} className="w-full p-3 border rounded-md" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="minYear" className="block text-sm font-medium text-primary mb-1">Min Year</label>
                    <input type="number" id="minYear" name="minYear" value={filters.minYear} onChange={handleFilterChange} className="w-full p-3 border rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="maxYear" className="block text-sm font-medium text-primary mb-1">Max Year</label>
                    <input type="number" id="maxYear" name="maxYear" value={filters.maxYear} onChange={handleFilterChange} className="w-full p-3 border rounded-md" />
                  </div>
                </div>
                <div className="md:col-span-3 flex justify-end">
                  <button onClick={resetFilters} className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                    <FilterX size={18} className="mr-2" /> Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filtered Car Results */}
        <div className="mb-6 text-neutral">
          Showing {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 p-8 rounded-lg inline-block mb-4">
              <Search size={48} className="text-gray-400 mx-auto" />
            </div>
            <h2 className="text-2xl font-medium mb-2 text-primary">No vehicles found</h2>
            <button onClick={resetFilters} className="btn btn-primary">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;
