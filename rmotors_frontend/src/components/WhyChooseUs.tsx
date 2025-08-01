// src/components/WhyChooseUs.tsx
import React from 'react';
import { Award, ShieldCheck, Truck, UserCheck } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    // The Feature card itself is on a light background (bg-neutral from .card)
    // So its internal text needs to be dark (text-primary)
    <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg bg-neutral"> {/* Explicitly added bg-neutral and text-primary to ensure dark text on light background */}
      <div className="bg-accent/10 text-accent p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-primary">{title}</h3> {/* Explicitly set text-primary */}
      <p className="text-primary">{description}</p> {/* Changed text-gray-600 to text-primary */}
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    // The section itself is bg-muted, so its direct children's text needs to be dark
    <section className="section bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-medium mb-4 text-primary">Why Choose RoyaMotorsUK</h2> {/* Explicitly set text-primary */}
          <p className="text-primary"> {/* Changed text-gray-600 to text-primary */}
            We are committed to providing an exceptional experience for our clients in Kenya
            and Tanzania, offering the finest vehicles with unparalleled service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<Award size={28} />}
            title="Premium Selection"
            description="We source only the finest luxury vehicles from the UK, each meticulously inspected to ensure exceptional quality."
          />
          <Feature
            icon={<ShieldCheck size={28} />}
            title="Secure Transactions"
            description="Our transparent process ensures your investment is protected, with secure payment options and full documentation."
          />
          <Feature
            icon={<Truck size={28} />}
            title="Complete Logistics"
            description="We handle all shipping, customs clearance, and delivery directly to your location in Kenya or Tanzania."
          />
          <Feature
            icon={<UserCheck size={28} />}
            title="Personalized Service"
            description="Our dedicated team provides tailored assistance throughout your journey, ensuring your complete satisfaction."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;