import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'For Employers', path: '/employers' },
    { name: 'For Candidates', path: '/candidates' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary text-xl font-bold">
            C
          </div>
          <span className="text-2xl font-heading font-bold text-primary tracking-tight">
            Career<span className="text-secondary">Collab</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive(link.path) 
                  ? 'text-primary border-b-2 border-secondary' 
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={onOpenModal}
            className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded hover:bg-[#0f3459] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-3 text-lg font-medium border-b border-gray-50 ${
                isActive(link.path) ? 'text-secondary' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={onOpenModal}
            className="mt-6 w-full py-3 bg-primary text-white font-bold rounded shadow-lg"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;