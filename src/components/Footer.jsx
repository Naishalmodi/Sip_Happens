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
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="text-primary hover:text-secondary hover:scale-110 transition-all"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="text-primary hover:text-secondary hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-[20px]">brand_awareness</span>
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="text-primary hover:text-secondary hover:scale-110 transition-all"
              aria-label="Contact"
            >
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
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
