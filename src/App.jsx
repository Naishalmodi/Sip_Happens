import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Shop from './pages/Shop';
import BrewingGuide from './pages/BrewingGuide';
import WhatsNew from './pages/WhatsNew';
import ContactUs from './pages/ContactUs';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';

// Scroll to top helper on page navigate
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('siphappens_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Sync cart to localStorage
  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem('siphappens_cart', JSON.stringify(items));
  };

  const handleAddToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      const updated = cartItems.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCart(updated);
    } else {
      const updated = [...cartItems, { ...product, quantity: 1 }];
      saveCart(updated);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    const updated = cartItems.map((item) => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    saveCart(updated);
  };

  const handleRemoveItem = (productId) => {
    const updated = cartItems.filter((item) => item.id !== productId);
    saveCart(updated);
  };

  const handleOrderSuccess = () => {
    saveCart([]); // Clear cart
    setIsCheckoutOpen(false); // Close checkout modal
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Shell Layout */}
      <div className="flex flex-col min-h-screen">
        
        {/* Navigation Header */}
        <Header 
          cartCount={totalCartCount} 
          onCartClick={() => setIsCartOpen(true)} 
        />

        {/* Content Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/brewing-guide" element={<BrewingGuide />} />
            <Route path="/whats-new" element={<WhatsNew />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>

        {/* Shared Footer */}
        <Footer />
        
        {/* Sliding Shopping Cart Drawer */}
        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={() => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }}
        />

        {/* Dynamic Order & Checkout Modal */}
        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cartItems={cartItems}
          onOrderSuccess={handleOrderSuccess}
        />

      </div>
    </Router>
  );
}
