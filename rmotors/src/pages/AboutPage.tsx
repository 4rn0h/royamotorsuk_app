// src/pages/AboutPage.tsx
import React, { useEffect } from 'react';
import { Award, Users, MapPin, Shield } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | RoyaMotorsUK';
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-primary text-white py-12 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Connecting discerning clients in East Africa with exceptional luxury vehicles from the UK.
          </p>
        </div>
      </div>

      <div className="container-custom">
        {/* Company Story - This section is on the body's dark background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-heading font-medium mb-6">
              Our <span className="text-accent">Story</span>
            </h2>
            <p className="text-neutral mb-6">
              RoyaMotorsUK was founded in 2020 by a team of automotive enthusiasts with a shared
              vision: to bridge the gap between the finest luxury vehicles in the UK and discerning
              clients in East Africa.
            </p>
            <p className="text-neutral mb-6">
              With decades of combined experience in the luxury automotive sector and international
              logistics, our founders recognized the demand for a premium service that could navigate
              the complexities of sourcing, shipping, and delivering high-end vehicles to Kenya and
              Tanzania.
            </p>
            <p className="text-neutral">
              Today, RoyaMotorsUK stands as the premier luxury vehicle sourcing company connecting
              these markets, offering an unparalleled service that combines automotive expertise with
              white-glove customer care.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg"
              alt="RoyaMotorsUK team"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Mission and Values - This section has bg-neutral (light) */}
        <div className="bg-neutral py-16 rounded-lg mb-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-heading font-medium mb-4 text-primary">
                Our Mission & Values
              </h2>
              <p className="text-primary">
                At RoyaMotorsUK, we are driven by our commitment to excellence in every aspect of our
                service, guided by core values that define everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium mb-4 text-primary">Our Mission</h3>
                <p className="text-primary mb-6">
                  To provide unparalleled access to the world's finest vehicles, delivering them
                  seamlessly from the UK to East Africa with exceptional service, integrity, and
                  attention to detail.
                </p>
                <p className="text-primary">
                  We aim to exceed expectations at every step, creating lasting relationships with our
                  clients built on trust, transparency, and a shared appreciation for automotive
                  excellence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium mb-4 text-primary">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-accent text-primary rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-primary">
                      <strong className="font-medium">Excellence:</strong> We pursue the highest
                      standards in everything we do, from vehicle selection to customer service.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent text-primary rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-primary">
                      <strong className="font-medium">Integrity:</strong> We operate with complete
                      transparency and honesty in all our dealings.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent text-primary rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-primary">
                      <strong className="font-medium">Innovation:</strong> We continuously seek better
                      ways to serve our clients through technology and service improvements.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent text-primary rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-primary">
                      <strong className="font-medium">Personalization:</strong> We recognize that each
                      client is unique, and we tailor our services to meet individual needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - Simplified */}
        {/* Commented out the entire team section */}
        {/*
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-medium mb-4">Our Team</h2>
            <p className="text-neutral">
              Meet the experts behind RoyaMotorsUK, dedicated to providing you with exceptional
              service and automotive expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <h3 className="text-xl font-medium">James Wilson</h3>
              <p className="text-cta">Founder & CEO</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium">Sarah Johnson</h3>
              <p className="text-cta">Operations Director</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium">David Mwangi</h3>
              <p className="text-cta">East Africa Director</p>
            </div>
          </div>
        </div>
        */}

        {/* Stats Section - Cards are bg-white (light) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-accent/10 text-accent p-4 rounded-full inline-block mb-4">
              <Award size={28} />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <p className="text-primary">Years of Excellence</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-accent/10 text-accent p-4 rounded-full inline-block mb-4">
              <Users size={28} />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <p className="text-primary">Satisfied Clients</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-accent/10 text-accent p-4 rounded-full inline-block mb-4">
              <MapPin size={28} />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">2</div>
            <p className="text-primary">Office Locations</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-accent/10 text-accent p-4 rounded-full inline-block mb-4">
              <Shield size={28} />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-primary">Secure Transactions</p>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default AboutPage;