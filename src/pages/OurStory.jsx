import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function OurStory() {
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
      
      {/* Hero Header */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBWsRoRJBplJGV8m5xGvrq7CW6v5FRjN5F9nlEn3D4giwE_W-ls-vaV3zh25euvmHrNXyNrSwGnDTK0MHXpfRZ28rwa1mvAequcPqFa0JeDLvH77Vcnzc78_AzOtexSG-f5ReMgVPJEq3kn_GLLA8bdmYWiU-FepJnW9CuNHiQmClcqQ05w5ERAuNem6nO-i_XDB-81iiPYcu_pPgrAhAxC2Ko85_55HaBnpY70WKhR6O1CMgPMnTSfg7uh4M8EFxX9aEJFErp0SU')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translateY(${scrollY * 0.25}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary tracking-[0.25em] mb-4 block uppercase">
            Est. 2014 • London
          </span>
          <h1 className="font-display-lg text-[36px] sm:text-display-lg text-primary mb-6 italic leading-tight">
            A Symphony of Beans &amp; Ritual
          </h1>
          <p className="font-body-lg text-[16px] sm:text-body-lg text-on-surface-variant/90 max-w-2xl mx-auto leading-relaxed">
            From a single humble roaster to a sanctuary for the discerning, we believe coffee is more than caffeine—it's the silent witness to our finest moments.
          </p>
        </div>
      </header>

      {/* Narrative Section: The Philosophy */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
        <div className="space-y-6">
          <h2 className="font-display-lg text-[32px] sm:text-headline-lg text-primary leading-tight">
            The Slow-Living Philosophy
          </h2>
          <div className="h-1 w-20 bg-primary/45 rounded-full mb-6"></div>
          
          <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed text-sm sm:text-base">
            <p>
              In an age of instant gratification, <span className="text-tertiary font-semibold">Sip Happens</span> was born from the desire to pause. We curated a space where the rhythmic hiss of the steam wand and the deep aroma of freshly ground single-origin beans dictate the pace of the afternoon.
            </p>
            <p>
              Every roast profile we develop is a months-long conversation between our master roasters and the organic farmers who nurture the soil. We don't just source coffee; we honor the lineage of every cherry, ensuring fair trade practices and regenerative harvesting.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-[1px] bg-primary/40"></div>
              <span className="italic font-headline-md text-[20px] text-primary">Matthias Thorne, Founder</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl brew-pulse z-0"></div>
          <img 
            className="rounded-xl shadow-2xl relative z-10 border border-outline-variant/20 w-full object-cover max-h-[450px]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACdQr0GGcjJuawXCbSUsdUDOy4tLQfJ-m47U6BJhEzyz3NUwdtIpxNcjduw-Ef3FIUHmzFaqui2NrIOz0ffOVyXW31iWtw4Vb_niRCsJy-lpckK0jhR2yFbBkSpkFaQx2KDqEicOvY1jGSMaV8Mwoh9ElXesC5CJrOgqAroYwJVWOwDveRgX9PYeNaQhutS1Vg4uQrBz3Bws60c35OzJQoHhbGvHk-XSfDFbrT-T4FVItl99qQwOYr1OP-5dXqGEDJJUf-mnIEJMM" 
            alt="Barista brewing pour over coffee"
          />
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="bg-surface-container-lowest py-24 px-margin-mobile md:px-margin-desktop w-full overflow-hidden border-y border-outline-variant/5">
        <div className="max-w-container-max mx-auto text-center mb-16">
          <h2 className="font-headline-lg text-[32px] sm:text-headline-lg text-primary">Our Evolution</h2>
          <div className="h-1 w-24 bg-tertiary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12 max-w-5xl mx-auto px-4">
          {/* Vertical/Horizontal Timeline path bar */}
          <div className="absolute top-0 left-4 lg:left-0 lg:top-12 lg:w-full h-full lg:h-[1px] bg-outline-variant/20 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 group lg:text-center pl-10 lg:pl-0">
            <div className="absolute left-0 lg:relative w-10 h-10 rounded-full bg-surface-container border-2 border-primary lg:mx-auto mb-4 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
              <span className="text-primary group-hover:text-on-primary font-bold text-xs">2014</span>
            </div>
            <h3 className="font-headline-md text-[20px] text-primary mb-2">The First Roaster</h3>
            <p className="text-on-surface-variant text-sm max-w-[220px] lg:mx-auto leading-relaxed">
              Started in a small garage in East London with a 1kg manual drum roaster and a dream of perfect beans.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 group lg:text-center pl-10 lg:pl-0">
            <div className="absolute left-0 lg:relative w-10 h-10 rounded-full bg-surface-container border-2 border-secondary lg:mx-auto mb-4 flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
              <span className="text-secondary group-hover:text-on-secondary font-bold text-xs">2017</span>
            </div>
            <h3 className="font-headline-md text-[20px] text-primary mb-2">The Sanctuary Opens</h3>
            <p className="text-on-surface-variant text-sm max-w-[220px] lg:mx-auto leading-relaxed">
              Opened our flagship boutique lounge, a sanctuary combining glassmorphic steam counters and matte black steel.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 group lg:text-center pl-10 lg:pl-0">
            <div className="absolute left-0 lg:relative w-10 h-10 rounded-full bg-surface-container border-2 border-primary lg:mx-auto mb-4 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
              <span className="text-primary group-hover:text-on-primary font-bold text-xs">2021</span>
            </div>
            <h3 className="font-headline-md text-[20px] text-primary mb-2">Direct Trade Network</h3>
            <p className="text-on-surface-variant text-sm max-w-[220px] lg:mx-auto leading-relaxed">
              Formed direct micro-lot partnerships with 15 regenerative family farms in Ethiopia, Brazil, and Peru.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 group lg:text-center pl-10 lg:pl-0">
            <div className="absolute left-0 lg:relative w-10 h-10 rounded-full bg-surface-container border-2 border-secondary lg:mx-auto mb-4 flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
              <span className="text-secondary group-hover:text-on-secondary font-bold text-xs">2026</span>
            </div>
            <h3 className="font-headline-md text-[20px] text-primary mb-2">Digital Roastery</h3>
            <p className="text-on-surface-variant text-sm max-w-[220px] lg:mx-auto leading-relaxed">
              Expanding our web workshop to deliver fresh beans directly to your doorstep and teach slow brewing methods globally.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Atmosphere Gallery */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-[32px] sm:text-headline-lg text-primary mb-12 text-center">Capture the Atmosphere</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Main Large Item */}
          <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden group relative border border-outline-variant/10 min-h-[300px]">
            <img 
              className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACyqFp-RD66pHavET03vD5OQeY_9Id5jRcRRwr__3U8PTKTIJLTzWgdeWjCEHtlwLSJX0cAv8iKIiJ9xmJSr78AbiKQhPvnF9ngjT9hLRtARCY9-nc_HmjeWcghh7lBBK2sMb2b9veBFDW1y8U56L5hcORgb60lGwwdDGBrzMTwgj8DKv2Bb8-BI9OXVvc9t38mKMy76_Fa1zj21C6MWZKEYCs41IW3YeTlq4gpa5TllT5c9gX440ThP_wRIeNz55cnHyWEZXYzzM" 
              alt="Lounge Atrium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-primary font-headline-md text-[24px]">Our Main Atrium</span>
            </div>
          </div>

          {/* Small 1 */}
          <div className="rounded-xl overflow-hidden group relative border border-outline-variant/10 min-h-[180px]">
            <img 
              className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41lAH_fB_gupOpWy56tjYEYTX5AfPD9b9toq9fl_CcputVzBjdbW_Awlb41rpPqofgNlfrRa6_EbzN0swGz08lusq4m46Hg3Vcf9vO7Q7PuWKQyXmGyglb3XraJ5bdjAnfZDn-PZlN7ULmK8klAVb8pMB3cTnvwcoL8O8KDCgaudIkarRS1WUBgBs2nYFwRmE64VPdGt_qS8I0T3pyH6iIPTyCtltAjaPNYkMmL8tAX97oFtn6xX4nxqPQ9uZrVO8S2rH4XK2aio" 
              alt="Artisanal equipment details"
            />
          </div>

          {/* Small 2 */}
          <div className="rounded-xl overflow-hidden group relative border border-outline-variant/10 min-h-[180px]">
            <img 
              className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4UKK-jOUbb734Y7PmK3wt37TCiFk8xTi0-volDFKD3gles7poxy5ObUDrHuF8N68cEunqMab1Njray3owBDlCghQERslob5l9j08J3voA1esTCr3vAPfg7S8zvcEycl7uXIVlmeXFDv1OO5BdRlL9eHFiBEWXg4OHPVU3nYecXnh6J5F-SNqNmWpg2QEtWbdimbkcekHxQbmVZQTq12Vzl1p3a-eDBn2PFu_GhcT-X70pcwydC9RNBn4yuDtAOF7lXAA7-5FycmA" 
              alt="Poured Rosetta latte art"
            />
          </div>

          {/* Horizontal Span */}
          <div className="md:col-span-2 rounded-xl overflow-hidden group relative border border-outline-variant/10 min-h-[220px]">
            <img 
              className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV0CRrRUwpTGNfbym86anNJ0YEmURG_Q_ARXiicMubQDbzcQCVm84QcgG_F1O1XCDj1SJvjJOOtEzQJM4TuEjdB6rv5jbtVCtfKGV6qcuhkbUbEs_r08IskEQoeTBrqYp-_JIvSXtIzOJlPg0ZnsT6UsIoJOeMlAQ_IfJ0s91y7_PUSdpUlE_tAz4e_MZ4GcQXdx3L-lKPj39MmS2cTzu_00KyMZUSt-yd4AGTu4L_wArrdALPzAulP9pwvVIykrAz4s7bbSXc2es" 
              alt="Lounge exterior at night"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-primary font-headline-md text-[24px]">Late Night Rituals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-margin-mobile text-center bg-surface-container-low border-t border-outline-variant/5">
        <div className="max-w-3xl mx-auto glass-card p-8 sm:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl brew-pulse"></div>
          <h2 className="font-headline-lg text-[30px] sm:text-headline-lg text-primary mb-4">Experience the Ritual</h2>
          <p className="text-on-surface-variant font-body-md text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Join us for an sensory tasting session or simply find your new favorite corner. We've been waiting to brew for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-primary text-on-primary font-button text-button px-10 py-4 rounded-full hover:scale-105 transition-transform text-center shadow-lg shadow-primary/10"
            >
              Visit Our Roastery
            </Link>
            <Link 
              to="/shop" 
              className="w-full sm:w-auto border border-tertiary text-tertiary font-button text-button px-10 py-4 rounded-full hover:bg-tertiary/10 transition-colors text-center"
            >
              Browse the Shop
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
