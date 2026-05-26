import React from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-surface-container-lowest border-l border-outline-variant/15 z-50 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[28px]">shopping_bag</span>
            <h2 className="font-headline-md text-[24px] text-on-surface">Your Selection</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors focus:outline-none"
            aria-label="Close Cart"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-[64px] text-outline-variant mb-4 brew-pulse rounded-full p-6 bg-surface-container-low">coffee</span>
              <p className="font-headline-md text-[20px] text-primary">Your cup is empty</p>
              <p className="font-body-md text-on-surface-variant text-sm mt-2 max-w-[250px]">
                Explore our collection of single-origin beans and hot brews to start your ritual.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/5 hover:border-outline-variant/10 transition-colors relative group"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-[16px] text-primary leading-tight pr-6">{item.name}</h3>
                    <p className="text-xs text-on-surface-variant mt-1">{item.category}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-surface-container-lowest border border-outline-variant/10 rounded-full py-1 px-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary disabled:opacity-30 disabled:hover:text-on-surface-variant transition-colors focus:outline-none"
                      >
                        <span className="material-symbols-outlined text-[16px]">remove</span>
                      </button>
                      <span className="font-body-md text-sm text-on-surface px-3 font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-secondary font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>

                {/* Remove button */}
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-2 right-2 text-outline hover:text-error transition-colors focus:outline-none opacity-50 group-hover:opacity-100"
                  aria-label="Remove item"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-outline-variant/10 bg-surface-container-low flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Est. Subtotal</span>
              <span className="font-headline-md text-headline-md text-primary font-bold">${calculateTotal()}</span>
            </div>
            
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Taxes and coffee lounge serving fees are computed at checkout. Complimentary premium shipping is applied to artisanal bean pouches.
            </p>

            <button 
              onClick={onCheckout}
              className="w-full py-4 bg-primary text-on-primary font-button text-button rounded-lg hover:bg-primary-fixed-dim hover:scale-[0.98] transition-all duration-200 shadow-[0_5px_15px_rgba(222,193,175,0.2)] flex items-center justify-center gap-2 mt-2"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_cart_checkout</span>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
