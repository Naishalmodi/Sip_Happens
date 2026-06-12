import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home({ onAddToCart }) {
  const [scrollY, setScrollY] = useState(0);
  const [addedItemName, setAddedItemName] = useState('');

  // Filtering best sellers for the frontpage showcase
  const bestSellers = products.filter(p => p.isBestseller).slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCartWithFeedback = (item) => {
    onAddToCart(item);
    setAddedItemName(item.name);
    setTimeout(() => setAddedItemName(''), 2000);
  };

  return (
    <main className="overflow-x-hidden">
      
      {/* Toast Notification for Adding to Cart */}
      {addedItemName && (
        <div className="fixed bottom-10 left-10 bg-secondary text-on-secondary px-6 py-4 rounded-xl shadow-2xl z-50 font-semibold flex items-center gap-2 animate-fade-in-up border border-secondary/20">
          <span className="material-symbols-outlined text-sm">shopping_cart</span>
          {addedItemName} added to selection!
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Hero Image Container */}
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2M0GbC-JgtzQZMFsxZdbAmNJ2XISzXC9Ut19Ock9Zk2KWVlLaQRunuQonw7RW1N9p6IP3OHDniDgvG78ydGFBeRddCuJ9o1jBF-M2xdz6kAKJ_5BRjOSROeseojIddkv_HaEOqnafbEm59n2qii4aOTYNaJOU6LHz3HmFwK6rUVgxwaTmxgNODb5tNiLND7Tg6tNwCDWOZ955eWNAMef7ie3yDwH2qOlf3zFNb4gfkSJ_n4LnOZ_neT0Z0-TlmcZRQcNJSXo-x9A')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Editorial Overlay */}
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-[0.3em] uppercase animate-fade-in-up">
            Slow Roasted • Mindfully Brewed
          </span>
          <h1 className="font-display-lg text-[40px] sm:text-display-lg text-primary mb-6 animate-fade-in-up leading-tight">
            Every Sip Tells a Story
          </h1>
          <p className="font-body-lg text-[16px] sm:text-body-lg text-on-surface-variant mb-12 italic max-w-2xl mx-auto">
            “Brewed for moments that matter. A sanctuary of slow living, glassmorphism, and artisanal warmth.”
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/shop" 
              className="brew-pulse font-button text-button bg-primary text-on-primary px-10 py-5 rounded-full hover:bg-primary-fixed-dim hover:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              Order Now
            </Link>
            <Link 
              to="/shop" 
              className="font-button text-button border border-secondary text-secondary px-10 py-5 rounded-full hover:bg-secondary/15 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-primary text-4xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-label-caps text-label-caps text-tertiary mb-2 uppercase tracking-[0.2em]">Our Favorites</span>
          <h2 className="font-headline-lg text-[32px] sm:text-headline-lg text-on-surface">Top Selling Masterpieces</h2>
          <div className="h-1 w-20 bg-primary/45 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
          {bestSellers.map((item) => (
            <div 
              key={item.id} 
              className="glass-card group p-6 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant/10 flex flex-col justify-between"
            >
              <div>
                {/* Image and badge */}
                <div className="relative overflow-hidden rounded-lg aspect-square mb-6 bg-surface-container-lowest">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={item.image} 
                    alt={item.name}
                  />
                  <div className="absolute top-4 right-4 bg-primary/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-primary/20">
                    <span className="font-label-caps text-label-caps text-on-primary font-bold">₹{item.price}</span>
                  </div>
                </div>

                <h3 className="font-headline-md text-[24px] text-primary mb-2">{item.name}</h3>
                <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Add to Cart button */}
              <button 
                onClick={() => handleAddToCartWithFeedback(item)}
                className="w-full font-button text-button py-4 border border-primary/30 text-primary rounded-lg hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Gallery Section */}
      <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-start mb-16">
            <span className="font-label-caps text-label-caps text-tertiary mb-2 uppercase tracking-[0.2em]">The Experience</span>
            <h2 className="font-headline-lg text-[32px] sm:text-headline-lg text-on-surface">Curated Aesthetics</h2>
            <div className="h-1 w-20 bg-secondary/45 rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter h-auto lg:h-[600px]">
            {/* Left Big Panel */}
            <div className="lg:col-span-8 h-[350px] lg:h-full rounded-xl overflow-hidden relative group border border-outline-variant/10">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBOfzrsGwGGO5iPs5xI7kcUoHZeB935k5c50MFxQm-HnOlN6wiCxx_tRPOTJ5RIzR8IcwksfKKybmkh9GtCNL2xVfFvY-NNm4kqSo7-Dqg5ormUKeDB90NHOk4Mhg0F5BZNqPP7eQNnbucl-ZCaUnwKQLEtB6Xhxv4O_dVwpcq87P4_6jEd36cgF_glLzDjZFNDybyOv6FTZBt0cusdSlc70JQzNIlrdgyzmVlR2orvO55dIC_koRK55mFq9UveTNeQYilLbpniQ" 
                alt="Barista at espresso machine"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-500 flex items-end p-8">
                <div>
                  <span className="font-label-caps text-label-caps text-secondary block mb-1">Slow Brew Bar</span>
                  <h4 className="font-headline-md text-on-surface text-[24px]">V60 Precision Extraction</h4>
                </div>
              </div>
            </div>

            {/* Right Stacked Panels */}
            <div className="lg:col-span-4 flex flex-col gap-gutter h-auto lg:h-full">
              {/* Top half */}
              <div className="h-[250px] lg:h-1/2 rounded-xl overflow-hidden relative group border border-outline-variant/10">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAHZDJtSZcaTk2ji5E6g99k6xND6TLBM8ubKvYywlsUM7UdCd11fuRFQB4A7HwLS6W4kP4jobanf3d1sZHozCqYVL6fzDvoOiRe6n-947OPkYIZVpjl8EiwIvVEB2gbeoXvlnXIlZWIx9iHlAa8W83cM0JUm6kFKQYIjPWbWqQIfnvt7icqRidhe1qzp5ySBDhyD7SnKMgf02Ya2-se76GD0jd-7pKqhIJORMLfBuCoXi_FzISTojJkD4xkvW_XwxyEhun7xReCOE" 
                  alt="Coffee cups on marble table"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-end p-6">
                  <h4 className="font-headline-md text-on-surface text-[20px]">Artisanal Ceremonies</h4>
                </div>
              </div>
              
              {/* Bottom half */}
              <div className="h-[250px] lg:h-1/2 rounded-xl overflow-hidden relative group border border-outline-variant/10">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_-diYziroShJ3HUzf50R-GvvrVc49Sm4edfS2DgW9lwIzaccpeTkVzQlNN2CMNs6R9d5zNU3xRUbXO8AeXPSGLsUgonrlS0zR6DAPbAsLqJSCuDQmqFZKb_yNtpnMQyLGtB1s58ixRU-hZ04oAmkq49ZcuGT9TH2TDsuLy2KQzJdsY7hPsGMGM2OB82KIAesVeolUTuzVwrM978wum2VxbJUV3n8rJ_OUb5JzQgSV-QemSE97mUMk-9SFV15jVZ7b3AEdOIOL9O4" 
                  alt="Coffee shop interior"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-end p-6">
                  <h4 className="font-headline-md text-on-surface text-[20px]">The Sanctuary Lounge</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter signup module */}
      <section className="py-24 px-margin-mobile text-center">
        <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 rounded-2xl border-t border-primary/20 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl brew-pulse"></div>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Join the Sip Registry</h2>
          <p className="font-body-md text-on-surface-variant mb-8 text-sm sm:text-base">
            Receive exclusive early-access allocations of private microlot imports and invitations to digital cupping workshops.
          </p>
          <div className="max-w-md mx-auto">
            <Link 
              to="/contact" 
              className="inline-block font-button text-button bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-fixed-dim transition-all duration-200"
            >
              Subscribe or Inquire
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
