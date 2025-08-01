import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Odhiambo',
    location: 'Nairobi, Kenya',
    quote: 'The service from RoyaMotorsUK was exceptional from start to finish. My Range Rover arrived in pristine condition, exactly as promised. Their attention to detail and personal touch made the process seamless.',
  },
  {
    id: 2,
    name: 'Amina Salim',
    location: 'Dar es Salaam, Tanzania',
    quote: 'I was hesitant about importing a luxury vehicle, but RoyaMotorsUK guided me through every step. My Bentley arrived on time, and the team even assisted with local registration. Truly a five-star experience.',
  },
  {
    id: 3,
    name: 'David Kariuki',
    location: 'Mombasa, Kenya',
    quote: 'This is my second purchase from RoyaMotorsUK, and they continue to exceed expectations. The selection of vehicles is unmatched, and their knowledge of the luxury market is impressive. Highly recommended!',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-primary text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-heading font-medium mb-4">Client Testimonials</h2>
          <p className="text-gray-300">
            Discover what our clients in Kenya and Tanzania have to say about their
            experience with RoyaMotorsUK.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-muted/5 p-8 md:p-12 rounded-lg relative">
            <Quote className="text-accent absolute top-8 left-8 w-12 h-12 opacity-30" />
            
            <div className="text-center">
              <p className="text-lg md:text-xl italic mb-6 relative">
                "{currentTestimonial.quote}"
              </p>
              <div>
                <h4 className="text-xl font-medium text-accent">{currentTestimonial.name}</h4>
                <p className="text-gray-300">{currentTestimonial.location}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-muted/10 hover:bg-accent hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent' : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-muted/10 hover:bg-accent hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;