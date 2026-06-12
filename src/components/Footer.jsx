import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full rounded-t-[0.5rem] bg-surface-container-lowest border-t border-primary-container/20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-stack-sm">
          <div className="font-headline-md text-headline-md text-primary">Sip Happens</div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Elevating your daily ritual through artisanal roasting, sustainable farming, and mindful brewing in a cinematic lounge environment.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-primary mb-2">Explore</span>
          <Link 
            to="/our-story" 
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-transform hover:translate-x-1 duration-300 w-fit"
          >
            Our Story
          </Link>
          <Link 
            to="/brewing-guide" 
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-transform hover:translate-x-1 duration-300 w-fit"
          >
            Brewing Guide
          </Link>
          <Link 
            to="/whats-new" 
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-transform hover:translate-x-1 duration-300 w-fit"
          >
            What's New
          </Link>
          <Link 
            to="/shop" 
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-transform hover:translate-x-1 duration-300 w-fit"
          >
            Shop Collection
          </Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-primary mb-2">Support</span>
          <Link 
            to="/contact" 
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-transform hover:translate-x-1 duration-300 w-fit"
          >
            Contact Us
          </Link>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-transform hover:translate-x-1 duration-300 w-fit"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-transform hover:translate-x-1 duration-300 w-fit"
          >
            Terms of Service
          </a>
        </div>

        {/* Newsletter / Social */}
        <div className="flex flex-col gap-stack-sm">
          <span className="font-label-caps text-label-caps text-primary mb-2">Newsletter</span>
          
          {subscribed ? (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-primary text-sm font-semibold animate-fade-in-up">
              <span className="material-symbols-outlined text-sm mr-1">check_circle</span>
              Welcome to the Registry!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="relative w-full">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                required
                className="w-full bg-surface-container border border-outline-variant/20 rounded-lg py-3 pl-4 pr-12 text-on-surface text-sm focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-primary text-on-primary px-3 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          )}

          <div className="flex gap-4 mt-2">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary hover:scale-110 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a 
              href="https://x.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary hover:scale-110 transition-all"
              aria-label="X"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary hover:scale-110 transition-all"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.528 3.5 12 3.5 12 3.5s-7.528 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.472 20.5 12 20.5 12 20.5s7.528 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-6 border-t border-outline-variant/5">
        <p className="font-label-caps text-label-caps text-on-surface-variant/50 text-[10px] tracking-widest uppercase">
          © 2026 Sip Happens. Crafted for the Discerning Palette.
        </p>
      </div>
    </footer>
  );
}
