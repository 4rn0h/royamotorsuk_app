export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  exteriorColor: string;
  interiorColor: string;
  fuelType: string;
  transmission: string;
  engineSize: string;
  description: string;
  features: string[];
  images: string[];
  status: 'Available' | 'Sold';
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  preferredContact: 'Email' | 'Phone' | 'WhatsApp';
  message: string;
  carId?: string;
}