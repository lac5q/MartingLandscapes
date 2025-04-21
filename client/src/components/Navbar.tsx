import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mr-2">
                <i className="fas fa-leaf text-white"></i>
              </div>
              <span className="font-montserrat font-bold text-2xl text-primary">Martin Gardening</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="font-montserrat font-medium text-gray-700 hover:text-primary transition"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/80 text-white">
                Get a Quote
              </Button>
            </a>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white pb-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 px-3">
            <a
              href="#contact"
              className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md font-montserrat font-medium hover:bg-primary/80 transition"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
