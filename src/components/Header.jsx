import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ cartCount, onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Shop', path: '/shop' },
    { name: 'Brewing Guide', path: '/brewing-guide' },
    { name: 'What\'s New', path: '/whats-new' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/15 backdrop-blur-[20px] border-b border-outline-variant/10 shadow-[0_0_20px_rgba(222,193,175,0.05)]">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-headline-md text-[26px] md:text-headline-md font-bold text-primary tracking-tight hover:opacity-90 transition-opacity"
        >
          Sip Happens
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-label-caps text-label-caps tracking-widest pb-1 transition-all duration-300 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.name}
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
            className="lg:hidden p-2 text-primary hover:text-secondary focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-20 right-0 w-72 h-[calc(100vh-5rem)] bg-surface-container-lowest border-l border-outline-variant/10 z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label-caps text-label-caps tracking-widest py-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-primary border-l-2 border-primary pl-3'
                    : 'text-on-surface-variant hover:text-primary pl-0'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="font-button text-button bg-primary text-on-primary text-center py-4 rounded-lg hover:bg-primary-fixed-dim transition-colors"
          >
            Order Online Now
          </Link>
        </div>
      </div>
    </header>
  );
}
