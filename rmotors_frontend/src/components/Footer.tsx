import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Landmark } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-heading">RoyaMotorsUK</span>
            </div>
            <p className="text-gray-300 mb-6">
              Luxury automotive excellence delivering exceptional vehicles from the UK to
              East Africa, with unparalleled service and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/RoyaMotorsUK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/RoyaMotorsUK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/RoyaMotorsUK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-300 hover:text-accent transition-colors">
                  Our Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-gray-300">UK Office:</p>
                  <a href="tel:+447964595923" className="text-white hover:text-accent">
                    +44 7964 595923
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-gray-300">East Africa Office:</p>
                  <a href="tel:+254710966523" className="text-white hover:text-accent">
                    +254 710 966523
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-accent mt-1" />
                <a href="mailto:info@royamotorsuk.com" className="text-white hover:text-accent">
                  info@royamotorsuk.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  39 Kinross drive,Bletchley, 
                  Milton Keynes,MK3 7UF
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours and Payment Methods */}
          <div>
            <h4 className="text-lg font-medium mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-white">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-white">By Appointment</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">We Accept</h4>
              <div className="flex items-center space-x-3">
                {/* Visa Logo */}
                <div className="bg-muted/10 p-2 rounded flex items-center justify-center h-12 w-16">
                  <svg
                    viewBox="0 0 750 471"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <rect width="750" height="471" rx="40" fill="#0E4595"/>
                    <path d="M278.198 334.227L311.559 138.465H364.918L331.535 334.227H278.198Z" fill="white"/>
                    <path d="M524.308 142.688C513.736 138.722 497.172 134.466 476.485 134.466C423.761 134.466 386.621 161.017 386.324 199.07C386.027 227.199 412.838 242.891 433.078 252.255C453.847 261.85 460.83 267.97 460.731 276.538C460.599 289.66 444.145 295.655 428.808 295.655C407.451 295.655 396.105 292.688 378.582 285.379L371.706 282.267L364.217 326.091C376.68 331.555 399.726 336.29 423.655 336.535C479.744 336.535 516.156 310.288 516.57 269.654C516.771 247.385 502.565 230.437 471.781 216.467C453.13 207.411 441.708 201.368 441.829 192.198C441.829 184.061 451.497 175.36 472.386 175.36C489.835 175.089 502.474 178.854 512.322 182.82L517.104 185.079L521.886 177.82C519.989 177.341 518.045 177.063 516.087 176.991C511.947 176.991 506.517 179.061 504.028 180.303L504.028 180.302Z" fill="white"/>
                    <path d="M661.615 138.465H620.384C607.611 138.465 598.053 141.951 592.443 154.699L513.198 334.102H569.229C569.229 334.102 578.391 309.98 580.463 304.684C586.586 304.684 640.017 304.768 647.799 304.768C649.395 311.621 654.291 334.102 654.291 334.102H703.803L661.615 138.465ZM596.198 264.872C600.611 253.593 617.457 210.149 617.457 210.149C617.772 210.67 622.466 222.015 625.161 229.365L628.768 246.243C630.903 256.042 641.12 302.771 641.12 302.771H596.198V264.872Z" fill="white"/>
                    <path d="M45.8789 138.465L45.1973 142.539C66.2883 147.645 85.1265 155.033 101.619 164.225L148.965 333.916H205.42L289.424 138.465H232.902L180.662 271.961L175.096 244.832C174.838 244.004 174.56 243.173 174.274 242.342L156.108 154.992C152.878 142.596 143.51 138.897 131.921 138.465H45.8789Z" fill="white"/>
                  </svg>
                </div>

                {/* MasterCard Logo */}
                <div className="bg-muted/10 p-2 rounded flex items-center justify-center h-12 w-16">
                  <svg
                    viewBox="0 0 750 471"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <rect width="750" height="471" rx="40" fill="black"/>
                    <path d="M88.13 373.67V348.82C88.13 339.29 82.33 333.08 72.81 333.08C67.81 333.08 62.46 334.74 58.73 340.08C55.83 335.52 51.73 333.08 45.48 333.08C40.7599 332.876 36.2525 335.054 33.48 338.88V333.08H25.61V372.84H33.48V350.09C33.48 343.09 37.62 339.74 43.42 339.74C49.22 339.74 53.05 343.47 53.05 350.09V372.84H60.92V350.09C60.92 343.09 65.06 339.74 70.86 339.74C76.66 339.74 80.49 343.47 80.49 350.09V372.84H88.36V373.67ZM217.35 334.32H202.85V322.32H195V334.32H186.72V341.32H195V359.99C195 369.1 198.31 374.49 208.25 374.49C211.015 374.411 213.705 373.416 216.1 371.59L213.61 364.59C211.376 365.987 208.785 366.706 206.15 366.66C202.01 366.66 199.94 364.17 199.94 360.03V341.32H208.25V334.32H199.94V327.69H217.35V334.32ZM291.07 333.08C286.709 332.983 282.619 335.186 280.3 338.88V333.08H272.43V372.84H280.3V350.51C280.3 343.88 283.61 339.74 289 339.74C290.819 339.814 292.624 340.092 294.38 340.57L296.87 333.08C294.971 332.601 293.027 332.323 291.07 333.08ZM179.66 337.22C175.52 334.32 169.72 333.08 163.51 333.08C153.57 333.08 147.36 337.64 147.36 345.51C147.36 352.14 151.92 355.86 160.61 357.11L164.75 357.52C169.31 358.35 172.21 360.01 172.21 362.08C172.21 364.98 168.9 367.08 162.68 367.08C157.93 367.178 153.278 365.724 149.43 362.94L145.29 369.15C151.09 373.29 158.13 374.15 162.27 374.15C173.87 374.15 180.08 368.77 180.08 361.31C180.08 354.31 175.08 350.96 166.41 349.71L162.27 349.3C157.71 348.47 154.81 346.81 154.81 344.33C154.81 341.43 158.12 339.33 164.34 339.33C169.34 339.33 174.29 341.4 176.78 342.64L179.66 337.22ZM299.77 353.79C299.77 365.79 307.64 374.5 320.47 374.5C326.27 374.5 330.41 373.26 334.55 369.94L330.41 363.73C327.479 366.104 323.832 367.419 320.06 367.46C313.06 367.46 307.64 362.08 307.64 354.21C307.64 346.34 313.44 340.96 320.47 340.96C323.242 341.002 325.889 342.316 327.76 344.69L331.9 338.48C327.76 335.16 323.61 333.92 317.81 333.92C305.38 333.08 299.77 341.78 299.77 353.79ZM244.26 333.08C239.899 332.983 235.809 335.186 233.49 338.88V333.08H225.62V372.84H233.49V350.51C233.49 343.88 236.8 339.74 242.19 339.74C244.009 339.814 245.814 340.092 247.57 340.57L250.06 333.08C248.161 332.601 246.217 332.323 244.26 333.08ZM213.61 353.79C213.61 346.33 218.17 340.54 226.04 340.54C233.5 340.54 238.04 346.33 238.04 353.79C238.04 361.66 233.08 367.04 226.04 367.04C218.17 367.45 213.61 361.66 213.61 353.79ZM402.85 333.08C398.489 332.983 394.399 335.186 392.08 338.88V333.08H384.21V372.84H392.08V350.51C392.08 343.88 395.39 339.74 400.78 339.74C402.599 339.814 404.404 340.092 406.16 340.57L408.65 333.08C406.751 332.601 404.807 332.323 402.85 333.08ZM372.19 353.79V333.92H364.32V353.79C364.32 361.25 359.76 367.04 351.89 367.04C343.92 367.04 339.36 361.25 339.36 353.79V333.92H331.49V353.79C331.49 365.79 339.36 374.5 352.19 374.5C358 374.5 362.14 373.26 366.28 369.94L362.14 363.73C359.209 366.104 355.562 367.419 351.79 367.46C344.79 367.46 339.36 362.08 339.36 354.21V333.92H347.23V354.21C347.23 361.66 351.79 367.45 358.82 367.45C365.85 367.45 370.31 361.66 370.31 353.79H372.19Z" fill="white"/>
                    <path d="M170.55 32.39H314.27V266.81H170.55V32.39Z" fill="#FF5F00"/>
                    <path d="M185.05 149.6C185.06 103.913 205.96 60.7376 241.79 32.39C180.662 -15.6714 92.862 -8.68523 40.1035 48.438C-12.655 105.561 -12.655 193.639 40.1035 250.762C92.862 307.885 180.662 314.871 241.79 266.81C205.96 238.462 185.06 195.287 185.05 149.6Z" fill="#EB001B"/>
                    <path d="M483.26 149.6C483.301 206.647 450.757 258.706 399.456 283.656C348.154 308.606 287.109 315.148 242.26 279.894C278.098 251.553 299.002 208.374 299.002 162.684C299.002 117.374 278.098 74.195 242.26 45.854C287.109 10.6 348.154 17.142 399.456 42.092C450.757 67.042 483.301 119.101 483.26 176.148V149.6Z" fill="#F79E1B"/>
                  </svg>
                </div>

                {/* Bank Transfer */}
                <div className="bg-muted/10 p-2 rounded flex items-center justify-center h-12 w-16">
                  <Landmark size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-dark py-4 border-t border-gray-700">
        <div className="container-custom text-center text-gray-400">
          <p>© {new Date().getFullYear()} RoyaMotorsUK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;