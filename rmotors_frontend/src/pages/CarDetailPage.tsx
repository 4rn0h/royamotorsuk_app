import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import EnquiryForm from '../components/EnquiryForm';
import { Car } from '../types';
import {
  ArrowLeft, Calendar, Gauge, Fuel, Settings, PaintBucket, Palette,
  Users, DollarSign, Truck, MessageCircle, Share2,
} from 'lucide-react';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'features' | 'enquiry'>('details');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/vehicles/${id}/`)
      .then((res) => res.json())
      .then(setCar)
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    document.title = car
      ? `${car.make} ${car.model} | RoyaMotorsUK`
      : 'Car Not Found | RoyaMotorsUK';
  }, [car]);

  if (!car) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-3xl font-medium mb-4">Vehicle Not Found</h1>
        <p className="text-gray-600 mb-6">The vehicle you are looking for is not available.</p>
        <Link to="/cars" className="btn btn-primary">Return to Collection</Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(car.price);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom mb-6">
        <Link to="/cars" className="inline-flex items-center text-gray-600 hover:text-primary">
          <ArrowLeft size={18} className="mr-2" /> Back to Collection
        </Link>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageGallery
                images={car.images.map((img) => img.image)}
                alt={`${car.make} ${car.model}`}
              />

              <div className="border-b border-gray-200">
                <div className="flex">
                  {['details', 'features', 'enquiry'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-6 py-4 text-sm font-medium border-b-2 ${
                        activeTab === tab
                          ? 'border-accent text-accent'
                          : 'border-transparent text-primary hover:text-accent hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab(tab as typeof activeTab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'details' && (
                  <div>
                    <h2 className="text-2xl font-medium mb-4 text-primary">Vehicle Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center">
                        <Calendar size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-primary">Year</p>
                          <p className="font-medium text-primary">{car.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Gauge size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-primary">Mileage</p>
                          <p className="font-medium text-primary">{car.mileage.toLocaleString()} miles</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Fuel size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-primary">Fuel Type</p>
                          <p className="font-medium text-primary">{car.fuel_type}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Settings size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-primary">Transmission</p>
                          <p className="font-medium text-primary">{car.transmission}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <PaintBucket size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-primary">Exterior Color</p>
                          <p className="font-medium text-primary">{car.exterior_color}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Palette size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-primary">Interior Color</p>
                          <p className="font-medium text-primary">{car.interior_color}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-primary">Engine</p>
                          <p className="font-medium text-primary">{car.engine_size}</p>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-medium mb-4 text-primary">Description</h2>
                    <p className="text-primary leading-relaxed mb-6">{car.description}</p>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div>
                    <h2 className="text-2xl font-medium mb-6 text-primary">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {car.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-primary">
                          <div className="bg-accent/10 text-accent rounded-full p-1 mt-1 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'enquiry' && (
                  <div>
                    <h2 className="text-2xl font-medium mb-6 text-primary">Enquire About This Vehicle</h2>
                    <EnquiryForm carId={car.id.toString()} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h1 className="text-3xl font-medium mb-2 text-primary">{car.make} {car.model}</h1>
                <div className="flex items-center mb-6">
                  <div className="text-2xl font-medium text-cta">{formattedPrice}</div>
                  {car.status === 'Sold' && (
                    <div className="ml-3 bg-red-600 text-white px-2 py-1 rounded text-xs uppercase font-bold">Sold</div>
                  )}
                </div>

                <div className="flex flex-col space-y-3 mb-6">
                  <a href="https://wa.me/+447964595923" target="_blank" rel="noopener noreferrer" className="btn bg-green-600 hover:bg-green-700 text-white flex items-center justify-center">
                    <MessageCircle size={20} className="mr-2" /> Chat on WhatsApp
                  </a>
                  <button onClick={() => setActiveTab('enquiry')} className="btn btn-primary">
                    Enquire Now
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: `${car.make} ${car.model} | RoyaMotorsUK`,
                          text: `Check out this ${car.year} ${car.make} ${car.model} at RoyaMotorsUK`,
                          url: window.location.href,
                        }).catch(() => alert('Sharing canceled or failed.'));
                      } else {
                        alert('Sharing not supported on this browser.');
                      }
                    }}
                    className="btn btn-outline text-primary hover:text-white"
                  >
                    <Share2 size={20} className="mr-2" /> Share
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-accent/20">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <DollarSign size={20} className="mr-2 text-accent" />
                  <span className="text-primary">Payment Information</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  We offer flexible payment options including bank transfer, credit card, and financing arrangements.
                </p>
                <div className="bg-accent/5 p-3 rounded border border-accent/10 mb-4">
                  <p className="text-sm text-gray-700">Price shown is in GBP. Contact us for pricing in KES, TZS, or USD.</p>
                </div>
                <Link to="/contact" className="text-accent hover:underline font-medium flex items-center">
                  Contact us for payment details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-accent/20">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Truck size={20} className="mr-2 text-accent" />
                  <span className="text-primary">Shipping & Delivery</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide comprehensive shipping services from the UK to Kenya and Tanzania, including all customs clearance and documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Estimated Shipping Time:</span>
                    <span className="font-medium text-primary">4-6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Shipping Insurance:</span>
                    <span className="font-medium text-primary">Included</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-700">Delivery Location:</span>
                    <span className="font-medium text-primary">To Your Door</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default CarDetailPage;
