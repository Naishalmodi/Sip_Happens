import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function WhatsNew() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      
      {/* Animated Hero Banner */}
      <section className="relative h-[650px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover hero-zoom opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiVgi5fMDnYmkArjAHVGd44cIwinKTi_ceGAJfu6BtyYb4vu9HBfl3jjhnO0lJbBc_9Jv72iLuVAH48d_5-N88LVnv3BUapyoZcScNSZvpBtEZtQclvxqfqAcyvRucREQVGeQdEqXmgFH_JTFRQtiCmh_l8wgDM7fTqOIWWAIf8ZZaAcBrJ3GSXCAyvF90HyTkqQs-KwLJLQocvUQrYcImwU72QHOY1UoxceTeOV0ms2StbQ373TxFFuSwH5894fqSt2rER7VFIMQ" 
            alt="Golden Hour Blend drip pour"
            style={{
              transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.15}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-tertiary bg-tertiary/10 border border-tertiary/20 px-4 py-1.5 rounded-full mb-6 inline-block tracking-widest">
            Seasonal Release
          </span>
          <h1 className="font-display-lg text-[40px] sm:text-display-lg text-primary max-w-2xl mb-6 leading-none">
            The Golden Hour Blend
          </h1>
          <p className="font-body-lg text-[16px] sm:text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Experience the ephemeral transition of light through a curation of sun-dried Ethiopian beans, featuring notes of wild honey and blood orange.
          </p>
          <div className="flex">
            <Link 
              to="/shop" 
              className="bg-primary text-on-primary font-button text-button px-8 py-4 rounded-full flex items-center gap-2 hover:bg-tertiary hover:text-on-tertiary transition-all duration-300 brew-pulse"
            >
              Discover the Notes <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Highlights */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="font-headline-lg text-[32px] sm:text-headline-lg text-primary">Limited Edition Curations</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Available for a fleeting moment this season.</p>
          </div>
          <Link 
            to="/shop" 
            className="text-tertiary font-button text-button flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            View Shop Collection <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Feature Card - Velvet Cloud */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[450px] glass-card border border-outline-variant/10">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-4hXK5vRxbNUfYLWfjwtklR51oDukdpydRSsxCQYLmWP36l4tABSmI7-nruc-0RhyQ1aulC5GfcCjlbXQC-NmVvPqCoJqAeSg_9nyjDIRLzD9ik1oz_VlApq_a8xuYdAeqoXHjoQ4RKkxVTfXNjXlNGIax0bht6fE6swPm0n3_QON_8peqyAHTbXXZ9QLS6c_Ey44uBHYBinZRd4-iitCONE_hH9Q4E3PguzxS_7Jr060VbvuV0OjieHjuTMmKs0TTWh6EaIE5QY" 
              alt="Cold brew cream layers"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <span className="font-label-caps text-label-caps text-secondary mb-2 block tracking-wider">Member Exclusive</span>
              <h3 className="font-headline-md text-on-surface text-[24px] mb-2">Velvet Cloud Cold Brew</h3>
              <p className="font-body-md text-on-surface-variant max-w-md mb-6 text-sm sm:text-base leading-relaxed">
                A 24-hour slow-steeped concentrate topped with our signature sea salt foam. Silky, bold, and transformative.
              </p>
              <Link 
                to="/shop" 
                className="w-fit border border-secondary text-secondary px-6 py-3 rounded-full font-button text-button hover:bg-secondary hover:text-on-secondary transition-all"
              >
                Claim Offer / Shop
              </Link>
            </div>
          </div>

          {/* Secondary Square Card - Micro Batch */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-[450px] glass-card border border-outline-variant/10">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGGrTCNmgOz3o95yHtLH3uzdWU4Kk036nW_B_Knck6B_KeEvLrtWp0DF9j95MBbHgLZk2GjmHJ_m701yfi4Hy8Y7qDS18Dz7d2x9B28uIk0S3R3ZIuM-ajlFaKeLClNLyx08BoQshd6DnQPqXtN3jj0oDSiZTEi_K8mIgdpc_2bSY8SK6fKlAHL4DMmgIvNS_cHGU-toZZ-6qO7-2d7wz_fCZ7zn9gz9WZD9MvIQgSweC_SUjSz7ZrLNtBMCdho5NzUWI-j4ti69M" 
              alt="Roasted coffee beans close up"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <h3 className="font-headline-md text-on-surface text-[24px] mb-2">The Micro-Batch Series</h3>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
                Explore rare varietals harvested on the volcanic slopes of Mount Kenya. Only 50 packages available.
              </p>
              <Link 
                to="/shop" 
                className="w-fit border border-primary text-primary px-6 py-3 rounded-full font-button text-button hover:bg-primary hover:text-on-primary transition-all"
              >
                Shop Beans
              </Link>
            </div>
          </div>

          {/* Smaller Horizontal Cards - Lavender Latte */}
          <div className="md:col-span-6 group relative overflow-hidden rounded-xl h-[280px] glass-card border border-outline-variant/10">
            <div className="flex h-full flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="font-headline-md text-[20px] text-primary mb-2">Honey Lavender Latte</h4>
                <p className="font-body-md text-xs text-on-surface-variant mb-4 leading-relaxed">
                  Calming notes of organic dried lavender and local wildflower honey paired with light blonde espresso.
                </p>
                <span className="font-label-caps text-[10px] text-tertiary font-bold tracking-wider">Limited Release</span>
              </div>
              <div className="w-full sm:w-1/2 h-full overflow-hidden bg-black relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsg3JqwObu4YM_bn7uYXRQBcDfGsW4vZhnKU24kqQBTBtYSnBYXWrA7rro5aX20vmIZj2SzfdGtJNlM-9dTJpJ9HItoCLE4BEgXhTtNBAy19IvNkhIhmbC4yidAitRoofkxOUJM0N48PPw9k7gpgb0ab_WfTRUj3Xhe8sthbwFJfeltWWSkNkqD3gEzdqvVS_wEl0FSjZC71iYxf2iFS8ZrhiqNFHj0vDEH_EG2rmBhnQ24wibWyvO7Y-6Dk74r0v6S6J7zl8OX0I" 
                  alt="Lavender latte flower art"
                />
              </div>
            </div>
          </div>

          {/* Pastry Pairing */}
          <div className="md:col-span-6 group relative overflow-hidden rounded-xl h-[280px] glass-card border border-outline-variant/10">
            <div className="flex h-full flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 h-full overflow-hidden bg-black relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkducgli8ExDDEVxN5_4SMhGUd0Aj23_4eJdDxZwCut0AaWJoJuemz0T6zf-xnGQORCf6yLnvxYqGd58dK3l8e5EpwSuqjVP3r0L3VmAWZ0Qjd-oZbLZx2G0QKbAVR9tPaRTJhfQfaDTSMRcgbSeYYHemcYmlwILEPJBHEqnoliognDQ62lkWDohrZrZ3TFkZQT0Na8RlNf8bOcHiOEwvvr8BL4Sh0R87dWOUrvf7dYlvRl9ldMOth4OqgobluD9_l5HvnHRvwFtc" 
                  alt="Fresh croissant bakery plate"
                />
              </div>
              <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="font-headline-md text-[20px] text-primary mb-2">The Artisanal Pairing</h4>
                <p className="font-body-md text-xs text-on-surface-variant mb-4 leading-relaxed">
                  A fresh, double-baked flaky almond croissant prepared daily by our pastry chef, paired with any seasonal pour-over.
                </p>
                <span className="font-label-caps text-[10px] text-tertiary font-bold tracking-wider">₹950 Morning Special</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Feature: The Brewing Process */}
      <section className="py-24 bg-surface-container-lowest border-y border-primary-container/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <div className="mb-16">
            <span className="material-symbols-outlined text-primary text-[50px] brew-pulse rounded-full p-5 bg-primary/5 mb-4">
              coffee_maker
            </span>
            <h2 className="font-headline-lg text-[32px] sm:text-headline-lg text-primary">Precision in Every Pour</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed text-sm sm:text-base">
              Our new lounge slow-bar extraction method utilizes V60 precision mechanics to unlock flavor profiles usually hidden in traditional quick roasts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-xl bg-surface-container-low/40 border border-outline-variant/5">
              <h5 className="font-label-caps text-label-caps text-tertiary mb-2 block tracking-widest">Phase 01</h5>
              <p className="font-headline-md text-[22px] text-on-surface mb-2 font-semibold">The Bloom</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Releasing trapped carbon dioxide gases to ensure complete water saturation and bright, vibrant acidity.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low/40 border border-outline-variant/5">
              <h5 className="font-label-caps text-label-caps text-tertiary mb-2 block tracking-widest">Phase 02</h5>
              <p className="font-headline-md text-[22px] text-on-surface mb-2 font-semibold">Pulse Pouring</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Introducing controlled turbulence to extract deep sugars, complex sweetness, and chocolate undertones.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low/40 border border-outline-variant/5">
              <h5 className="font-label-caps text-label-caps text-tertiary mb-2 block tracking-widest">Phase 03</h5>
              <p className="font-headline-md text-[22px] text-on-surface mb-2 font-semibold">Thermal Stability</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Maintaining a stable 94°C temperature profile throughout the extraction process for a perfectly balanced body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Hook */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="glass-card rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between border border-outline-variant/20 shadow-2xl gap-8">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">Be the First to Know</h2>
            <p className="font-body-md text-on-surface-variant mt-2 text-sm sm:text-base">
              Join our elite digital registry for early access notifications about private micro-batch bean allocations.
            </p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            <input 
              type="email" 
              required
              className="bg-background border border-primary-container/50 rounded-lg px-6 py-4 font-body-md text-on-surface text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all w-full lg:w-80" 
              placeholder="email@example.com"
            />
            <button type="submit" className="bg-tertiary text-on-tertiary font-button text-button px-8 py-4 rounded-lg hover:scale-105 transition-transform whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
