
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../common/SearchBar';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-swiss-dark tracking-tight">
              Helveti<span className="text-swiss-blue">Compta</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-item ${isActive('/') && location.pathname === '/' ? 'active font-medium text-swiss-blue' : ''}`}>
              Accueil
            </Link>
            <Link to="/formation" className={`nav-item ${isActive('/formation') ? 'active font-medium text-swiss-blue' : ''}`}>
              Formation
            </Link>
            <Link to="/abacus" className={`nav-item ${isActive('/abacus') ? 'active font-medium text-swiss-blue' : ''}`}>
              Abacus
            </Link>
            <Link to="/yooz" className={`nav-item ${isActive('/yooz') ? 'active font-medium text-swiss-blue' : ''}`}>
              Yooz
            </Link>
            <Link to="/templates" className={`nav-item ${isActive('/templates') ? 'active font-medium text-swiss-blue' : ''}`}>
              Templates
            </Link>
            <Link to="/lexique" className={`nav-item ${isActive('/lexique') ? 'active font-medium text-swiss-blue' : ''}`}>
              Lexique
            </Link>
            <Link to="/ressources" className={`nav-item ${isActive('/ressources') ? 'active font-medium text-swiss-blue' : ''}`}>
              Ressources
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <SearchBar />
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-white/90 backdrop-blur-lg shadow-subtle transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          <SearchBar />
          <nav className="flex flex-col space-y-2 mt-4">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md ${location.pathname === '/' ? 'bg-swiss-muted text-swiss-blue font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/formation" 
              className={`px-4 py-2 rounded-md ${isActive('/formation') ? 'bg-swiss-muted text-swiss-blue font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Formation
            </Link>
            <Link 
              to="/abacus" 
              className={`px-4 py-2 rounded-md ${isActive('/abacus') ? 'bg-swiss-muted text-swiss-blue font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Abacus
            </Link>
            <Link 
              to="/yooz" 
              className={`px-4 py-2 rounded-md ${isActive('/yooz') ? 'bg-swiss-muted text-swiss-blue font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Yooz
            </Link>
            <Link 
              to="/templates" 
              className={`px-4 py-2 rounded-md ${isActive('/templates') ? 'bg-swiss-muted text-swiss-blue font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/lexique" 
              className={`px-4 py-2 rounded-md ${isActive('/lexique') ? 'bg-swiss-muted text-swiss-blue font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Lexique
            </Link>
            <Link 
              to="/ressources" 
              className={`px-4 py-2 rounded-md ${isActive('/ressources') ? 'bg-swiss-muted text-swiss-blue font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Ressources
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
