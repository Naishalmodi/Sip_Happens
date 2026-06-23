import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ cartCount, onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Shop', path: '/shop' },
    { name: 'Brewing Guide', path: '/brewing-guide' },
    { name: 'What\'s New', path: '/whats-new' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface/90 border-b border-outline-variant/10 shadow-lg' 
        : 'bg-surface/15 border-b border-outline-variant/5 shadow-[0_0_20px_rgba(222,193,175,0.05)]'
    } backdrop-blur-[20px]`}>
      <nav className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-24'
      } max-w-container-max mx-auto`}>
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <svg className={`w-8 h-8 text-secondary transition-all duration-500 ${
            isScrolled ? 'scale-90 rotate-[-5deg]' : 'scale-100 rotate-0'
          }`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 40H75V60C75 71.0457 66.0457 80 55 80H45C33.9543 80 25 71.0457 25 60V40Z" fill="#DEB173" fillOpacity="0.15" stroke="#DEB173" strokeWidth="3" />
            <path d="M75 45H83C86.866 45 90 48.134 90 52C90 55.866 86.866 59 83 59H75" stroke="#DEB173" strokeWidth="3" strokeLinecap="round" />
            <path d="M40 25C40 25 43 18 43 15C43 12 40 10 40 10" stroke="#DEB173" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 25C50 25 53 18 53 15C53 12 50 10 50 10" stroke="#DEB173" strokeWidth="3" strokeLinecap="round" />
            <path d="M60 25C60 25 63 18 63 15C63 12 60 10 60 10" stroke="#DEB173" strokeWidth="3" strokeLinecap="round" />
            <rect x="20" y="85" width="60" height="5" rx="2.5" fill="#DEB173" />
          </svg>
          <span className={`font-headline-md font-bold text-primary tracking-tight transition-all duration-300 ${
            isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
          }`}>
            Sip Happens
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-label-caps text-label-caps tracking-widest pb-2 transition-all duration-300 ${
                  isActive
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                } group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart Trigger */}
          <button 
            onClick={onCartClick}
            className="relative p-2 text-primary hover:text-secondary hover:scale-110 transition-all duration-200 focus:outline-none"
            aria-label="Open Shopping Bag"
          >
            <span className="material-symbols-outlined text-[28px] pointer-events-none">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(233,195,73,0.4)] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Checkout CTA */}
          <Link 
            to="/shop" 
            className="hidden sm:inline-block font-button text-button bg-primary text-on-primary px-6 py-3 rounded-full hover:bg-primary-fixed-dim hover:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(222,193,175,0.15)]"
          >
            Order Online
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary focus:outline-none z-50"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 w-80 h-full bg-surface-container-lowest/95 backdrop-blur-md border-l border-outline-variant/10 z-40 lg:hidden transform transition-transform duration-300 ease-out flex flex-col justify-between p-8 ${
          mobileMenuOpen ? 'translate-x-0 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-10 mt-4">
            <span className="font-headline-md text-xl font-bold text-primary">Sip Happens</span>
          </div>

          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-label-caps text-label-caps tracking-widest py-3 border-b border-outline-variant/5 flex items-center justify-between transition-colors ${
                    isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-button text-button bg-primary text-on-primary text-center py-4 rounded-full hover:bg-primary-fixed-dim transition-colors shadow-lg shadow-primary/10"
          >
            Order Online Now
          </Link>
          <p className="text-[10px] text-on-surface-variant/40 text-center uppercase tracking-widest">
            Crafted for the Discerning Palette
          </p>
        </div>
      </div>
    </header>
  );
}
