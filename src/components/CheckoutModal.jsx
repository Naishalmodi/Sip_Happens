import React, { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, cartItems, onOrderSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'Dine-in', // Dine-in, Takeaway, Delivery
    tableNumber: '',
    address: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [receiptData, setReceiptData] = useState(null);

  if (!isOpen) return null;

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const deliveryFee = formData.orderType === 'Delivery' ? 5.00 : 0.00;
  const tax = calculateSubtotal() * 0.08; // 8% tax
  const grandTotal = calculateSubtotal() + tax + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate payment / order processing
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const generatedOrderId = `SIP-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedOrderId);
      setReceiptData({
        orderId: generatedOrderId,
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        type: formData.orderType,
        items: [...cartItems],
        total: grandTotal.toFixed(2),
        destination: formData.orderType === 'Dine-in' ? `Table ${formData.tableNumber}` : (formData.orderType === 'Delivery' ? formData.address : 'Lounge Counter'),
        eta: formData.orderType === 'Delivery' ? '30-40 mins' : (formData.orderType === 'Dine-in' ? '8-12 mins' : '10-15 mins'),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      });
    }, 2500); // 2.5s brewing pulse simulation
  };

  const handleFinish = () => {
    onOrderSuccess(); // clear cart & close modal
    setSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      orderType: 'Dine-in',
      tableNumber: '',
      address: '',
      notes: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md" 
        onClick={success ? handleFinish : onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-surface-container-low border border-outline-variant/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Loading State Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-6">
            <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20 brew-pulse mb-6">
              <span className="material-symbols-outlined text-primary text-5xl">coffee_maker</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Brewing Your Order...</h3>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Our master baristas and roasters are securing your payment and scheduling your premium coffee ritual.
            </p>
          </div>
        )}

        {/* Success / Receipt Screen */}
        {success && receiptData && (
          <div className="w-full p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-y-auto">
            <span className="material-symbols-outlined text-secondary text-6xl mb-4 bg-secondary/10 p-4 rounded-full brew-pulse">
              check_circle
            </span>
            <span className="font-label-caps text-label-caps text-secondary mb-1">Ritual Booked</span>
            <h2 className="font-display-lg text-[36px] text-primary mb-6">Your Order Receipt</h2>

            {/* Receipt Content */}
            <div className="w-full max-w-md bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-6 text-left space-y-4 mb-8">
              <div className="flex justify-between text-xs text-on-surface-variant border-b border-outline-variant/10 pb-2">
                <span>ORDER ID: <strong>{receiptData.orderId}</strong></span>
                <span>{receiptData.date}</span>
              </div>

              {/* Items List */}
              <div className="space-y-2 border-b border-outline-variant/10 pb-3 max-h-36 overflow-y-auto">
                {receiptData.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">
                      {item.name} <strong className="text-primary text-xs">x{item.quantity}</strong>
                    </span>
                    <span className="text-on-surface font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Delivery / Prep Detail */}
              <div className="grid grid-cols-2 gap-y-2 text-sm border-b border-outline-variant/10 pb-3">
                <span className="text-on-surface-variant">Service Type:</span>
                <span className="text-on-surface font-semibold text-right">{receiptData.type}</span>
                <span className="text-on-surface-variant">Destination:</span>
                <span className="text-on-surface font-semibold text-right">{receiptData.destination}</span>
                <span className="text-on-surface-variant">Estimated Prep/ETA:</span>
                <span className="text-secondary font-bold text-right">{receiptData.eta}</span>
              </div>

              {/* Customer Info */}
              <div className="text-xs text-on-surface-variant space-y-1">
                <p>Guest Name: <strong className="text-on-surface">{receiptData.customerName}</strong></p>
                <p>Contact: <strong className="text-on-surface">{receiptData.phone} | {receiptData.email}</strong></p>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-2">
                <span className="font-label-caps text-label-caps text-primary">Paid Total</span>
                <span className="text-secondary font-bold text-xl">${receiptData.total}</span>
              </div>
            </div>

            <button 
              onClick={handleFinish}
              className="bg-primary text-on-primary font-button text-button px-12 py-4 rounded-full hover:scale-95 transition-transform"
            >
              Enjoy the Ritual
            </button>
          </div>
        )}

        {/* Normal Form Screen */}
        {!loading && !success && (
          <>
            {/* Form Side */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto border-b md:border-b-0 md:border-r border-outline-variant/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-[24px] text-primary">Details of Ritual</h3>
                <button onClick={onClose} className="md:hidden text-outline-variant hover:text-primary">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Guest Name"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Ritual Mode</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Dine-in', 'Takeaway', 'Delivery'].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFormData({ ...formData, orderType: mode })}
                        className={`py-3 rounded-lg font-label-caps text-[10px] tracking-wider uppercase border transition-all ${
                          formData.orderType === mode
                            ? 'bg-primary text-on-primary border-primary'
                            : 'bg-surface-container-lowest border-outline-variant/20 text-on-surface-variant hover:border-primary/50'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.orderType === 'Dine-in' && (
                  <div className="space-y-1 animate-fade-in-up">
                    <label className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Table Number</label>
                    <input 
                      type="number" 
                      name="tableNumber"
                      required
                      min="1"
                      max="50"
                      value={formData.tableNumber}
                      onChange={handleChange}
                      placeholder="Lounge Table Number (e.g. 12)"
                      className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>
                )}

                {formData.orderType === 'Delivery' && (
                  <div className="space-y-1 animate-fade-in-up">
                    <label className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Delivery Address</label>
                    <textarea 
                      name="address"
                      required
                      rows="2"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street, suite, zip-code for fresh bean delivery"
                      className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Special Coffee Notes</label>
                  <textarea 
                    name="notes"
                    rows="2"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Extra hot, extra foam, milk substitutes, grind size, etc."
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-button text-button rounded-lg hover:bg-primary-fixed-dim hover:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  Place Order (${grandTotal.toFixed(2)})
                </button>
              </form>
            </div>

            {/* Receipt Summary Side */}
            <div className="w-full md:w-[350px] bg-surface-container-lowest p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <h4 className="font-label-caps text-label-caps text-primary border-b border-outline-variant/10 pb-4 mb-4 uppercase tracking-widest">
                  Order Summary
                </h4>
                
                {/* Scrollable list inside summary */}
                <div className="space-y-4 max-h-[30vh] md:max-h-[50vh] overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start gap-4">
                      <div className="text-sm">
                        <h5 className="font-medium text-on-surface">{item.name}</h5>
                        <p className="text-xs text-on-surface-variant">Qty: {item.quantity} x ${item.price.toFixed(2)}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Calculation details */}
              <div className="border-t border-outline-variant/10 pt-4 mt-6 space-y-2 text-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-on-surface font-medium">${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT & Tax (8%)</span>
                  <span className="text-on-surface font-medium">${tax.toFixed(2)}</span>
                </div>
                {formData.orderType === 'Delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Courier Fee</span>
                    <span className="text-on-surface font-medium">$5.00</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-on-surface pt-4 border-t border-outline-variant/10 font-semibold text-lg">
                  <span className="text-primary font-bold">Total Cost</span>
                  <span className="text-secondary font-bold text-2xl">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
