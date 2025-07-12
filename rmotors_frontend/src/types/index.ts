export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  exterior_color: string;
  interior_color: string;
  fuel_type: string;
  transmission: string;
  engine_size: string;
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