import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BrewingGuide() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Grind the Beans',
      description: 'Choose a medium-fine grind size, similar to coarse sea salt. Freshness is paramount—grind only what you intend to brew immediately to preserve the delicate aromatic oils.',
      tags: ['BURR GRINDER', '20G BEANS'],
      icon: 'settings_input_component',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByCVIUJ3YgkJ_TxSVqT8JIjEfGZrOvtJqirwGEKaq8FLHbB1CocFpmkaZn-iG2QCalD2kjkw7169Ah8rX0w9Of1j4mpZny0b4oT0ZI_reHGyYyyksnaiZY2bUADfr9AikE4Oan3N25eiu1oILH7uX8tgPgWi-F8OzlpWswmxjBZOyZBDV6S0a7jTaqGx7UowfHcTJBQW1xn4OLeUGsYIJB7qrDdwVjszoX1etmxMie_a6zBY-O8w-7ewgdHFr2oqdDX92yipqWXqg',
    },
    {
      step: '02',
      title: 'Heat the Water',
      description: 'Target a temperature between 195°F and 205°F (90°C-96°C). Boiling water will scorch the grounds and extract bitterness, while cooler water won\'t extract the full complexity of the roast.',
      tags: ['GOOSENECK KETTLE', '93° CELSIUS'],
      icon: 'device_thermostat',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM1i1io2DEmpS5tzqXvWBBEyHPDBcFQdEl-Xm2MT5mNtsXnO5LVJ106lY0dvukmvJe__ujvNNM-WN6dIwHHEyrVRqF5fzm-_gFJMWETi3DaQJfuj4pBd9a5ZuUgDf7h1bBw2XdMalQU3nV3ccO5HsqJNTNcALeKzbs6jM_yChpeYoBT61XDGEvcCMhqw_7TBt2hSL2yXT3vSjv9RtITcSu4939I77UH1qmaT8LMWY6M9c5j4EksFNGIn3zQIE5jUGmcg2fRZpIppo',
    },
    {
      step: '03',
      title: 'Brew Perfectly',
      description: 'Begin with a 30-second bloom, pouring just enough water to saturate the grounds (around 40g). Follow with slow, concentric circles, maintaining a steady flow for a total brew time of 3:30 minutes.',
      tags: ['THE BLOOM', '3:30 TIMER'],
      icon: 'hourglass_empty',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAud6nVhyV5z458t1uiZO_QoHlrGK7SmY7i4A0T-rb4lKwHV5JOo9aFhaPheo7jq3ZV6SFnhBpWN8lqulDHh2nniQhuv5LzGUMJKGSEwDx-Pgzi94XUtwH82g6FcVt77Q1VaLF5NiyJbdEMM3Aj_Oyc58be167XTqEYiX0zxDKIXsnUrr9gUkZnRW5tjV7VQ58iFAAnC_f9eOnpc1Wm3NKliY9d3OH5-awgs6WQ7NADEc6Zc6NoazsninOzEJ8y1VPK1Frv9CV5CaI',
      hasSteam: true
    },
    {
      step: '04',
      title: 'Pour into Mug',
      description: 'Swirl the carafe gently to aerate and equalize the brew\'s temperature. Pour into a pre-warmed ceramic vessel to maintain the thermal profile and enhance the tactile experience.',
      tags: ['PRE-WARMED', 'CERAMIC MUG'],
      icon: 'coffee',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHtJSix4TN9-fuiy3Nlrt_3-6PMZveohFYRAU39_J6GAiMu-WK3cr52CSMQK8B77phfE888l4u8l0VGsBbpT1HRc2lK6g3jrpcWq4RfBtLQvdr-wOnyepW0giMKGOXTUZVuOFd6xcp8Zkym_jRYS4FZzx3puZ5TfcjKTBwKf3OOn6MIBjcLPLitmWMPI8MIpHtFMFVUoN4slBM1bXcDCUSBwwS32Gx7HXHE6J2iIfqVx9kKxgCBz8dSg-ZpQYGGqtozXrJhdep_mY',
    },
    {
      step: '05',
      title: 'Enjoy the Aroma',
      description: 'Pause. Before your first sip, inhale the complex bouquet of notes—from floral jasmine to deep, roasted caramel. Savor the moment; you\'ve crafted excellence.',
      tags: ['AROMATIC NOTES', 'SLOW LIVING'],
      icon: 'local_fire_department',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4ER0BNA231sbP587PzFaVP3MrhO7bbt3p5QlChqpQOS-bvuzYzh4ICE4BXJV_2KoJmGSDQb-YSCSHxKWRyJqVnDazyZxrFl4r_vjDq7Zgkh9TcLEoIBkJcuJxjK7mhvgHKADve4yaJNmbDHB22yyTi9LRbdX4fATpI6sdnuOqwnM7jodeiNp4HQpYyDe8WDMUufSDC7eg32Kc54g4iIuw516MfIVHrT3gQjCi9sSN66HjV4aSbRZllF8IcbC1BA12xeBJ4fSrG3g',
    }
  ];

  return (
    <main className="overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[550px] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtBOay_BRwPjCjrEL8F3dBFM8BoM939gJLkb5hso6j6T4JFTUw607HuZ1yRpTDphBrfSbQa9dLCfh8phFvU4KELQgHcY3E_5X0B6QL31EtmM8_pSflBEkduL0y6gJpp6gSOO_iwEwybB1_TXjx-W-bKsTnZRB1_DagagheXleFQDwUYG0Bo5NCoylfcu333pjiRxW8wR0R0lX8WewNHX7Movn0mMfFdjfU0iGsdD6E0C3ggXEgmLtl5hFteYxc6BHaIOEOvFQq3lY')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translateY(${scrollY * 0.25}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-margin-mobile">
          <span className="font-label-caps text-label-caps text-tertiary mb-4 block tracking-[0.3em] uppercase">
            The Ritual of Perfection
          </span>
          <h1 className="font-display-lg text-[36px] sm:text-display-lg text-primary-fixed mb-6 max-w-3xl mx-auto leading-tight">
            Brewing Guide
          </h1>
          <p className="font-body-lg text-[16px] sm:text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Unlock the full potential of your beans with our curated guide to the perfect artisan cup.
          </p>
        </div>
      </section>

      {/* Brewing Steps Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        {/* Timeline Path Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-container to-transparent opacity-30"></div>
        
        <div className="grid grid-cols-1 gap-24 relative">
          {steps.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={item.step} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 animate-fade-in-up`}
              >
                {/* Text Block */}
                <div 
                  className={`flex-1 flex flex-col justify-center ${
                    isEven ? 'lg:text-right lg:items-end order-2 lg:order-1' : 'lg:text-left lg:items-start order-2'
                  }`}
                >
                  <span className="font-label-caps text-label-caps text-secondary mb-2 block tracking-widest uppercase">
                    Step {item.step}
                  </span>
                  <h2 className="font-headline-lg text-[28px] sm:text-headline-lg text-primary mb-4 leading-tight">
                    {item.title}
                  </h2>
                  <p className={`font-body-md text-on-surface-variant mb-6 text-sm sm:text-base leading-relaxed ${isEven ? 'lg:max-w-md' : 'lg:max-w-md'}`}>
                    {item.description}
                  </p>
                  <div className="flex gap-3">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3.5 py-1.5 glass-card rounded-full font-label-caps text-[10px] text-tertiary border border-outline-variant/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Block */}
                <div 
                  className={`relative w-full lg:w-[450px] aspect-square flex-shrink-0 ${
                    isEven ? 'order-1 lg:order-2' : 'order-1'
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl bg-surface-container">
                    <img 
                      className="w-full h-full object-cover" 
                      src={item.image} 
                      alt={item.title}
                    />
                  </div>
                  
                  {/* Floating Icon */}
                  <div 
                    className={`absolute -bottom-6 w-16 h-16 glass-card rounded-xl flex items-center justify-center border border-primary/20 shadow-lg ${
                      isEven ? '-right-6' : '-left-6'
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {item.icon}
                    </span>
                  </div>

                  {/* Steam Animation Elements */}
                  {item.hasSteam && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none">
                      <div className="steam-particle w-1.5 h-8 bg-primary/20 blur-md rounded-full mb-2"></div>
                      <div className="steam-particle w-1 h-12 bg-primary/10 blur-md rounded-full delay-700"></div>
                      <div className="steam-particle w-1.5 h-6 bg-primary/30 blur-md rounded-full delay-300"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/10 mt-12">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center">
          <h2 className="font-headline-lg text-[30px] sm:text-headline-lg text-primary mb-4 leading-tight">
            Ready to start your ritual?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Explore our premium selection of single-origin beans, roasted daily for the perfect cup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/shop" 
              className="bg-primary text-on-primary font-button text-button px-10 py-5 rounded-lg hover:bg-primary-fixed transition-all duration-300 shadow-lg shadow-primary/10"
            >
              Shop Whole Beans
            </Link>
            <Link 
              to="/shop" 
              className="border border-tertiary text-tertiary font-button text-button px-10 py-5 rounded-lg hover:bg-tertiary/5 transition-all duration-300"
            >
              Brewing Equipment
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
