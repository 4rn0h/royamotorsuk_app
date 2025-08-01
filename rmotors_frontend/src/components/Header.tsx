import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UserCircle } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowDropdown(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/cars', label: 'Our Collection' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary text-white transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'py-3 shadow-md' : 'py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between relative">
        {/* Left: Logo and desktop nav */}
        <div className="flex items-center space-x-6">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="hidden lg:flex space-x-4">
            {navLinks.slice(0, 2).map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium text-sm hover:text-accent ${
                  location.pathname === path ? 'text-accent' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center brand name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold whitespace-nowrap">
          ROYAMOTORSUK
        </div>

        {/* Right: Desktop nav, user, CTA, menu toggle */}
        <div className="flex items-center space-x-4">
          <nav className="hidden lg:flex space-x-4">
            {navLinks.slice(2).map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium text-sm hover:text-accent ${
                  location.pathname === path ? 'text-accent' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* User icon dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="hover:text-accent"
              aria-label="User menu"
            >
              <UserCircle size={22} />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-muted text-primary rounded-md shadow-lg py-1 z-50 border">
                {user ? (
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="tel:+447964595923"
            className="hidden lg:flex items-center bg-accent text-primary text-xs font-medium px-3 py-1.5 rounded hover:bg-accent/90"
          >
            <Phone size={14} className="mr-1" /> +44 7964 595923
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-dark text-white px-4 pt-4 pb-6 space-y-3">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block py-2 font-medium hover:text-accent ${
                location.pathname === path ? 'text-accent' : ''
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Auth links */}
          <div className="pt-2">
            {user ? (
              <button
                onClick={logout}
                className="w-full text-left py-2 font-medium hover:text-accent"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block py-2 font-medium hover:text-accent"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-2 font-medium hover:text-accent"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Call to action */}
          <a
            href="tel:+447964595923"
            className="inline-flex items-center bg-accent text-primary text-sm font-medium px-4 py-2 rounded hover:bg-accent/90"
          >
            <Phone size={16} className="mr-1" />
            +44 7964 595923
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
