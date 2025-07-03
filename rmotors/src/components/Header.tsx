import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary text-white ${
        isScrolled || isMenuOpen ? 'py-3 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <Logo />
        </Link>

        {/* Brand Name - Mobile */}
        <span className="lg:hidden text-xl font-heading font-bold tracking-wide text-white absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          ROYAMOTORSUK
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-grow justify-center">
          {/* Left Nav Group */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-accent ${
                location.pathname === '/' ? 'text-accent' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/cars"
              className={`font-medium transition-colors hover:text-accent ${
                location.pathname === '/cars' ? 'text-accent' : ''
              }`}
            >
              Our Collection
            </Link>
          </div>

          {/* Brand Name - Desktop */}
          <span className="text-xl font-heading font-bold tracking-wide text-white px-8 whitespace-nowrap">
            ROYAMOTORSUK
          </span>

          {/* Right Nav Group */}
          <div className="flex space-x-8">
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-accent ${
                location.pathname === '/about' ? 'text-accent' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-accent ${
                location.pathname === '/contact' ? 'text-accent' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center ml-8">
          <a
            href="tel:+447964595923"
            className="flex items-center px-4 py-2 bg-accent text-primary rounded font-medium hover:bg-accent/90 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            +44 7964 595923
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-dark text-white p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`px-4 py-2 font-medium transition-colors hover:text-accent ${
                location.pathname === '/' ? 'text-accent' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/cars"
              className={`px-4 py-2 font-medium transition-colors hover:text-accent ${
                location.pathname === '/cars' ? 'text-accent' : ''
              }`}
            >
              Our Collection
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 font-medium transition-colors hover:text-accent ${
                location.pathname === '/about' ? 'text-accent' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 font-medium transition-colors hover:text-accent ${
                location.pathname === '/contact' ? 'text-accent' : ''
              }`}
            >
              Contact
            </Link>
            <a
              href="tel:+447964595923"
              className="flex items-center px-4 py-2 bg-accent text-primary rounded font-medium hover:bg-accent/90 transition-colors w-fit"
            >
              <Phone size={18} className="mr-2" />
              +44 7964 595923
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;