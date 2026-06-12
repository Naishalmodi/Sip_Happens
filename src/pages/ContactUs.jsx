import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry about Brews',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Open default email client with inquiry details
      const mailtoSubject = encodeURIComponent(formData.subject);
      const mailtoBody = encodeURIComponent(`Hello Sip Happens,\n\nI would like to inquire about the following:\n\nSubject: ${formData.subject}\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nWarm regards,\n${formData.name}`);
      window.location.href = `mailto:naishals24@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Inquiry about Brews', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-screen">
      
      {/* Hero Section */}
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-4 block">GET IN TOUCH</span>
        <h1 className="font-headline-lg text-[32px] sm:text-headline-lg text-on-background mb-4 leading-tight">
          Rituals, Conversations, &amp; Coffee
        </h1>
        <div className="h-1 w-20 bg-secondary/45 rounded-full mx-auto mb-6"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant text-sm sm:text-base">
          Whether you're seeking a specific roast, wholesale partnerships, or want to host a private tasting, we’re here to perfect your experience.
        </p>
      </header>

      {/* Main Interaction Grid (Bento Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        
        {/* Contact Form Section */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-xl shadow-2xl border border-outline-variant/10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
              <span className="material-symbols-outlined text-secondary text-[64px] mb-4 bg-secondary/10 p-5 rounded-full brew-pulse">
                mark_email_read
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Message Dispatched</h3>
              <p className="font-body-md text-on-surface-variant max-w-xs mx-auto text-sm leading-relaxed">
                Thank you for reaching out. A Sip Happens concierge will review your message and connect with you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-[11px] text-primary uppercase tracking-wider block">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg text-on-surface px-4 py-3 text-sm focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-[11px] text-primary uppercase tracking-wider block">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg text-on-surface px-4 py-3 text-sm focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-[11px] text-primary uppercase tracking-wider block">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg text-on-surface px-4 py-3 text-sm focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all"
                >
                  <option value="Inquiry about Brews">Inquiry about Brews</option>
                  <option value="Private Event Request">Private Event Request</option>
                  <option value="Wholesale Partnerships">Wholesale Partnerships</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-[11px] text-primary uppercase tracking-wider block">How can we help?</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your coffee journey..."
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg text-on-surface px-4 py-3 text-sm focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto bg-primary text-on-primary font-button text-button px-10 py-4 rounded-full flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(222,193,175,0.3)] transition-all focus:outline-none"
              >
                Send Message
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Info & Timings Section */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">
          
          {/* Location & Timing Card */}
          <div className="bg-primary-container p-6 sm:p-8 rounded-xl border-t border-secondary/20 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500"></div>
            <h3 className="font-headline-md text-headline-md text-primary mb-6">The Lounge</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
                <div>
                  <p className="font-label-caps text-[10px] text-secondary mb-1 uppercase tracking-wider">Address</p>
                  <p className="text-on-surface text-sm leading-relaxed">
                    Ground Floor, Luxuria Business Hub,<br/>Near Rajpath Club, S.G. Highway,<br/>Ahmedabad, Gujarat 380054
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  schedule
                </span>
                <div className="w-full">
                  <p className="font-label-caps text-[10px] text-secondary mb-1 uppercase tracking-wider">Hours of Ritual</p>
                  <div className="grid grid-cols-2 gap-2 text-on-surface text-sm">
                    <span>Mon — Fri</span>
                    <span className="text-right font-medium">07:00 — 19:00</span>
                    <span>Sat — Sun</span>
                    <span className="text-right font-medium">09:00 — 21:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Direct Card */}
          <div className="bg-surface-container p-6 sm:p-8 rounded-xl border border-outline-variant/20 flex-1">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Direct Line</h3>
            
            <div className="space-y-4">
              <a href="tel:+919409564018" className="flex items-center gap-4 group w-fit">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-[20px]">call</span>
                </div>
                <span className="text-on-surface-variant group-hover:text-primary transition-colors text-sm sm:text-base font-medium">
                  +91 9409564018
                </span>
              </a>
              <a href="https://wa.me/919409564018" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-[20px]">forum</span>
                </div>
                <span className="text-on-surface-variant group-hover:text-primary transition-colors text-sm sm:text-base font-medium">
                  Chat on WhatsApp
                </span>
              </a>
              <a href="mailto:naishals24@gmail.com" className="flex items-center gap-4 group w-fit">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
                </div>
                <span className="text-on-surface-variant group-hover:text-primary transition-colors text-sm sm:text-base font-medium">
                  naishals24@gmail.com
                </span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/10">
              <p className="font-label-caps text-[10px] text-on-surface-variant mb-4 uppercase tracking-wider">Follow the Brew</p>
              <div className="flex gap-4">
                <a href="#" onClick={(e) => e.preventDefault()} className="w-11 h-11 rounded-lg bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center hover:scale-110 hover:text-secondary transition-all">
                  <span className="material-symbols-outlined text-[20px]">brand_awareness</span>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="w-11 h-11 rounded-lg bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center hover:scale-110 hover:text-secondary transition-all">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="w-11 h-11 rounded-lg bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center hover:scale-110 hover:text-secondary transition-all">
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-16 relative rounded-2xl overflow-hidden h-[450px] border border-outline-variant/10 group">
        <div className="absolute inset-0 bg-background/25 z-10 pointer-events-none mix-blend-overlay"></div>
        
        {/* Floating Card */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 glass-card p-6 rounded-lg max-w-xs shadow-2xl border border-secondary/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-secondary brew-pulse"></div>
            <h4 className="font-headline-md text-[18px] text-on-surface font-semibold">Ahmedabad Lounge</h4>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Located near Rajpath Club, S.G. Highway. Come experience our luxury, custom-designed dark wood coffee lounge.
          </p>
        </div>

        {/* Mock Dark Map */}
        <div className="w-full h-full bg-[#121212] relative overflow-hidden">
          <img 
            className="w-full h-full object-cover opacity-45 grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV2pkdLdx_MmqyXLPhM0s8Hgsf3mlqGsa8Pe02ELSKWw9vYHYMXK-EWdSXxioBo-lPVXfS6YZeIm-zsiQcMEddtX5I29-Mfam5Fo556Bv4GnlVcNYhx-UEh47zk22I2efDu1ek3gFGMb5ij9az3h87smntnp1_3p0EKArupHRKRzOMbP6eBZmcJDp_JrQqLmDAGSwfQEnUvmjHqXNHoR1suWvKAqWi6bUiFksq_Ojo8lN-jG8XMTP10KO8QUh9kDOAcWlBIg37-DE" 
            alt="Dark stylized city map"
          />
          {/* Pulse marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/30 rounded-full blur-xl animate-pulse"></div>
              <span className="material-symbols-outlined text-secondary text-5xl relative z-30" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
