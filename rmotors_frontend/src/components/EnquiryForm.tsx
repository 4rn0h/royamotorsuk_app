import React, { useState } from 'react';
import { Lead } from '../types';
import { Car, Mail, Phone, MessageCircle } from 'lucide-react';

interface EnquiryFormProps {
  carId?: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ carId }) => {
  const [formData, setFormData] = useState<Lead>({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'Email',
    message: '',
    carId,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredContact: 'Email',
        message: '',
        carId,
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Car className="text-cta w-8 h-8" />
        </div>
        <h3 className="text-2xl font-medium text-green-800 mb-2">Enquiry Sent Successfully!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your interest. Our team will contact you shortly via your preferred
          method of communication.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn btn-primary mt-2"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Contact Method
        </label>
        <select
          id="preferredContact"
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50"
        >
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary flex-1"
        >
          {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
        </button>
        
        <a
          href="https://wa.me/441234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
        >
          <MessageCircle size={20} className="mr-2" />
          WhatsApp Us
        </a>
      </div>
      
      <p className="text-sm text-gray-600 mt-4">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-cta hover:underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms" className="text-cta hover:underline">
          Terms & Conditions
        </a>
        .
      </p>
    </form>
  );
};

export default EnquiryForm;