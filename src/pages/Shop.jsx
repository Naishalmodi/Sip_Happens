import React, { useState } from 'react';
import { products } from '../data/products';

export default function Shop({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [addedProductId, setAddedProductId] = useState('');
  const [favorites, setFavorites] = useState({});

  const categories = [
    'All',
    'Hot Coffee',
    'Cold Coffee',
    'Premium Beans',
    'Coffee Combos',
    'Limited Edition',
    'Desserts'
  ];

  const handleAddToCartWithFeedback = (item) => {
    onAddToCart(item);
    setAddedProductId(item.id);
    setTimeout(() => setAddedProductId(''), 2000);
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-screen">
      
      {/* Toast Notification */}
      {addedProductId && (
        <div className="fixed bottom-10 left-10 bg-secondary text-on-secondary px-6 py-4 rounded-xl shadow-2xl z-50 font-semibold flex items-center gap-2 animate-fade-in-up border border-secondary/20">
          <span className="material-symbols-outlined text-sm">check_circle</span>
          Added to your order selection!
        </div>
      )}

      {/* Header Section */}
      <section className="mb-12 text-center md:text-left">
        <span className="font-label-caps text-label-caps text-secondary mb-2 block tracking-widest uppercase">THE COFFEE REGISTRY</span>
        <h1 className="font-headline-lg text-[36px] sm:text-headline-lg text-primary mb-4">Shop Our Collection</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Discover our curated selection of artisanal brews and premium beans, sourced ethically from the world's most renowned estates.
        </p>
      </section>

      {/* Filter and Search Section */}
      <section className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-label-caps text-[10px] sm:text-label-caps tracking-wider whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-primary'
                  : 'glass-card text-on-surface-variant hover:border-primary/50 border border-outline-variant/10'
              }`}
            >
              {cat === 'Limited Edition' && (
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary brew-pulse inline-block mr-1.5"></span>
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search our roasts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-full py-3 px-6 pl-12 text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">
            search
          </span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full py-20 text-center">
            <span className="material-symbols-outlined text-[64px] text-outline-variant mb-4">search_off</span>
            <h3 className="font-headline-md text-headline-md text-primary">No roasts match your search</h3>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-sm mx-auto">
              Try adjusting your query or selecting another coffee collection category.
            </p>
          </div>
        ) : (
          filteredProducts.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-surface-container-low rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-outline-variant/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Media Container */}
                <div className="relative h-72 overflow-hidden bg-black">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={item.image} 
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.isBestseller && (
                      <span className="bg-tertiary/20 backdrop-blur-md text-tertiary px-3 py-1 rounded-full text-label-caps font-label-caps border border-tertiary/30">
                        Bestseller
                      </span>
                    )}
                    {item.isLimited && (
                      <span className="bg-error-container/20 backdrop-blur-md text-error px-3 py-1 rounded-full text-label-caps font-label-caps border border-error/30">
                        Limited
                      </span>
                    )}
                  </div>

                  {/* Favorite Toggle */}
                  <button 
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-4 right-4 glass-card w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all active:scale-90"
                    aria-label="Add to favorites"
                  >
                    <span 
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: favorites[item.id] ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      favorite
                    </span>
                  </button>

                  {/* Quick View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => setQuickViewProduct(item)}
                      className="bg-on-background text-background px-6 py-2.5 rounded-full font-button text-button shadow-xl hover:bg-primary hover:text-on-primary transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors pr-2">
                      {item.name}
                    </h3>
                    <span className="text-secondary font-bold text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button 
                  onClick={() => handleAddToCartWithFeedback(item)}
                  className={`w-full py-3.5 rounded-lg font-button text-button border transition-all duration-300 flex items-center justify-center gap-2 ${
                    addedProductId === item.id 
                      ? 'bg-secondary border-secondary text-on-secondary shadow-lg' 
                      : 'border-primary/30 text-primary hover:bg-primary hover:text-on-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {addedProductId === item.id ? 'check_circle' : 'shopping_cart'}
                  </span>
                  {addedProductId === item.id ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Subscription CTA Section */}
      <section className="mt-20 p-8 sm:p-12 rounded-xl glass-card relative overflow-hidden text-center border border-outline-variant/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-tertiary-container/20 -z-10"></div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Never Miss a Brew</h2>
        <p className="font-body-md text-on-surface-variant mb-6 max-w-xl mx-auto text-sm sm:text-base">
          Join our private list for early access to limited edition micro-batch drops and exclusive home brewing guide releases.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to roastery drops!'); }} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            required 
            placeholder="Your email address" 
            className="flex-grow bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-5 py-3 text-on-surface text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
          />
          <button type="submit" className="bg-primary text-on-primary px-8 py-3 rounded-lg font-button hover:bg-tertiary transition-all">Subscribe</button>
        </form>
      </section>

      {/* Quick View Modal Overlay */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={() => setQuickViewProduct(null)}></div>
          
          {/* Modal content */}
          <div className="relative w-full max-w-3xl bg-surface-container-low border border-outline-variant/15 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
            {/* Close */}
            <button 
              onClick={() => setQuickViewProduct(null)} 
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-on-surface hover:text-primary flex items-center justify-center transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Left Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black flex-shrink-0">
              <img 
                src={quickViewProduct.image} 
                alt={quickViewProduct.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>

            {/* Right Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">{quickViewProduct.category}</span>
                  <h3 className="font-headline-md text-headline-md text-primary mt-1 pr-6 leading-tight">{quickViewProduct.name}</h3>
                </div>

                <div className="text-secondary font-bold text-xl">₹{quickViewProduct.price}</div>
                
                <p className="text-on-surface-variant text-sm leading-relaxed">{quickViewProduct.details || quickViewProduct.description}</p>
                
                {/* Specific coffee properties if available */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/10 text-xs">
                  <div>
                    <span className="font-label-caps text-[10px] text-primary block uppercase mb-1">Roast Level</span>
                    <span className="text-on-surface font-semibold">{quickViewProduct.roast || 'Medium'}</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] text-primary block uppercase mb-1">Origin</span>
                    <span className="text-on-surface font-semibold">{quickViewProduct.origin || 'Single Estate'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/10">
                <button
                  onClick={() => {
                    handleAddToCartWithFeedback(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="w-full py-4 bg-primary text-on-primary font-button text-button rounded-lg hover:bg-primary-fixed-dim hover:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  Add to Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
