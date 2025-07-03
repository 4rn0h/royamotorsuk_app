import React from 'react';
import { Car } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-accent rounded-full p-2">
        <Car className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute -bottom-1 -right-1 bg-cta rounded-full w-3 h-3"></div>
    </div>
  );
};

export default Logo;