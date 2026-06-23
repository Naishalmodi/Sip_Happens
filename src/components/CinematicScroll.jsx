import React, { useEffect, useState, useRef } from 'react';

export default function CinematicScroll() {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const stages = [
    {
      title: '01 / Sourcing the Seed',
      headline: 'The Journey of Origin',
      description: 'Our beans are ethically hand-picked from high-altitude estates in Sidama, Ethiopia, and Huehuetenango, Guatemala, selecting only pristine cherries at the absolute peak of ripeness.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGGrTCNmgOz3o95yHtLH3uzdWU4Kk036nW_B_Knck6B_KeEvLrtWp0DF9j95MBbHgLZk2GjmHJ_m701yfi4Hy8Y7qDS18Dz7d2x9B28uIk0S3R3ZIuM-ajlFaKeLClNLyx08BoQshd6DnQPqXtN3jj0oDSiZTEi_K8mIgdpc_2bSY8SK6fKlAHL4DMmgIvNS_cHGU-toZZ-6qO7-2d7wz_fCZ7zn9gz9WZD9MvIQgSweC_SUjSz7ZrLNtBMCdho5NzUWI-j4ti69M',
      glow: 'from-orange-950/20 to-transparent'
    },
    {
      title: '02 / The Slow Roast',
      headline: 'Awakening Complex Profiles',
      description: 'Slow-batch drum roasted to precise profiles. We apply gentle thermal energy to caramelize natural sugars, coaxing out notes of dark cocoa, citrus zest, and stone fruits.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtBOay_BRwPjCjrEL8F3dBFM8BoM939gJLkb5hso6j6T4JFTUw607HuZ1yRpTDphBrfSbQa9dLCfh8phFvU4KELQgHcY3E_5X0B6QL31EtmM8_pSflBEkduL0y6gJpp6gSOO_iwEwybB1_TXjx-W-bKsTnZRB1_DagagheXleFQDwUYG0Bo5NCoylfcu333pjiRxW8wR0R0lX8WewNHX7Movn0mMfFdjfU0iGsdD6E0C3ggXEgmLtl5hFteYxc6BHaIOEOvFQq3lY',
      glow: 'from-yellow-950/25 to-transparent',
      embers: true
    },
    {
      title: '03 / Handcrafted Brew',
      headline: 'The Alchemy of Extraction',
      description: 'Water at exactly 94°C meets freshly ground coffee. The initial bloom expels trapped carbon dioxide gasses, followed by concentric pouring to extract a balanced, aromatic body.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByCVIUJ3YgkJ_TxSVqT8JIjEfGZrOvtJqirwGEKaq8FLHbB1CocFpmkaZn-iG2QCalD2kjkw7169Ah8rX0w9Of1j4mpZny0b4oT0ZI_reHGyYyyksnaiZY2bUADfr9AikE4Oan3N25eiu1oILH7uX8tgPgWi-F8OzlpWswmxjBZOyZBDV6S0a7jTaqGx7UowfHcTJBQW1xn4OLeUGsYIJB7qrDdwVjszoX1etmxMie_a6zBY-O8w-7ewgdHFr2oqdDX92yipqWXqg',
      glow: 'from-amber-950/20 to-transparent',
      steam: true
    },
    {
      title: '04 / Liquid Luxury',
      headline: 'The Perfect Pour',
      description: 'Served in pre-warmed, matte-black ceramic cups. Rich mahogany hues with thick velvety crema. A sensory masterpiece crafted for those who value the art of slow living.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQhDfocID0fzJuq0NgdEF_Y591Cdt7YHOs9wj6tPueAt1hY14VnxlNZaiz6OUxoEoctwycLDd7Zd_OmyInxx1z157yeVEWSYjoAawVg25IEotqe2TEYkzJA_H3vSA4MgLpaEQN37C1q-neWjHmj5GGfM-OumET7onn0Jghb7G3WuHisI6ixlZyAF39c0ykvlbYGlKQJEFq5Ld5NXSu2sI4HQ7E9kzPHA3G64N67Fi2uXRIv2GetsiX4JW0jiTeMShpO2kqAw2SoD4',
      glow: 'from-stone-900/40 to-transparent'
    }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current;
          if (container) {
            const rect = container.getBoundingClientRect();
            const containerHeight = rect.height;
            const viewportHeight = window.innerHeight;
            
            // Calculate how far we've scrolled inside the container
            // relativeScroll is 0 when container starts stickiness (container top meets screen top)
            // and is containerHeight - viewportHeight when it finishes.
            const relativeScroll = -rect.top;
            const scrollRange = containerHeight - viewportHeight;

            if (scrollRange > 0) {
              const currentProgress = Math.max(0, Math.min(1, relativeScroll / scrollRange));
              setProgress(currentProgress);
              
              // Map progress to active stage index
              const index = Math.min(stages.length - 1, Math.floor(currentProgress * stages.length));
              setActiveStage(index);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call initial position check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-background/50">
      
      {/* Sticky Screen Viewport for Desktop */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full items-center overflow-hidden max-w-container-max mx-auto px-margin-desktop gap-24">
        
        {/* Left Side: Story Narrator */}
        <div className="w-[45%] flex gap-10">
          
          {/* Progress Timeline Tracker */}
          <div className="relative w-1.5 h-[350px] bg-surface-container rounded-full overflow-hidden flex-shrink-0">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary transition-all duration-100 rounded-full"
              style={{ height: `${progress * 100}%` }}
            />
            {/* Step Checkpoints */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col justify-between py-2 z-10 pointer-events-none">
              {stages.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center -translate-x-0.5 ${
                    i <= activeStage 
                      ? 'bg-primary border-primary scale-110' 
                      : 'bg-surface-container-low border-outline-variant/30 scale-90'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Story Text Box */}
          <div className="flex flex-col justify-center h-[350px]">
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 absolute flex flex-col max-w-md ${
                  i === activeStage 
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                    : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'
                }`}
              >
                <span className="font-label-caps text-label-caps text-secondary mb-2 tracking-[0.25em] uppercase">
                  {stage.title}
                </span>
                <h3 className="font-display-lg text-[36px] text-primary mb-4 font-bold leading-tight">
                  {stage.headline}
                </h3>
                <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed italic">
                  “{stage.description}”
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Immersive Visuals Card */}
        <div className="w-[55%] h-[550px] relative flex items-center justify-center">
          
          {/* Background Ambient Radial Glow */}
          <div className={`absolute w-[450px] h-[450px] rounded-full blur-[100px] transition-all duration-1000 -z-10 bg-gradient-to-tr ${
            stages[activeStage].glow
          }`} />

          {/* Glassmorphic Card Frame */}
          <div className="w-full h-full glass-card p-4 rounded-2xl border border-outline-variant/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center justify-center bg-surface-container-lowest/10">
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className={`absolute inset-4 rounded-xl overflow-hidden transition-all duration-700 ease-out ${
                  i === activeStage 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img 
                  src={stage.image} 
                  alt={stage.headline} 
                  className="w-full h-full object-cover"
                />
                
                {/* Stage-specific Ambient Particle Overlays */}
                {stage.embers && i === activeStage && (
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent pointer-events-none mix-blend-color-dodge">
                    <div className="absolute bottom-4 left-1/4 w-2 h-2 rounded-full bg-secondary/80 animate-ping delay-100"></div>
                    <div className="absolute bottom-8 left-2/4 w-1.5 h-1.5 rounded-full bg-secondary/60 animate-ping delay-500"></div>
                    <div className="absolute bottom-10 left-3/4 w-2 h-2 rounded-full bg-secondary/50 animate-ping delay-300"></div>
                  </div>
                )}
                
                {stage.steam && i === activeStage && (
                  <div className="absolute inset-x-0 bottom-0 top-1/2 flex justify-center gap-6 pointer-events-none">
                    <div className="steam-particle w-1.5 h-12 bg-primary/20 blur-md rounded-full"></div>
                    <div className="steam-particle w-1 h-16 bg-primary/10 blur-md rounded-full delay-300"></div>
                    <div className="steam-particle w-2 h-10 bg-primary/30 blur-md rounded-full delay-700"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Alternative View for Mobile / Tablet (Sequential list) */}
      <div className="lg:hidden w-full py-16 px-margin-mobile flex flex-col gap-12">
        <div className="text-center mb-6">
          <span className="font-label-caps text-label-caps text-secondary mb-2 block tracking-wider">THE BEAN JOURNEY</span>
          <h2 className="font-headline-lg text-[28px] text-primary">Cinematic Story</h2>
          <div className="h-1 w-16 bg-primary/45 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="flex flex-col gap-10">
          {stages.map((stage, i) => (
            <div 
              key={i} 
              className="glass-card rounded-xl border border-outline-variant/10 p-6 flex flex-col gap-6"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                <img 
                  src={stage.image} 
                  alt={stage.headline} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <span className="font-label-caps text-[10px] text-secondary tracking-widest block mb-2 uppercase">
                  {stage.title}
                </span>
                <h3 className="font-headline-md text-xl text-primary mb-3">
                  {stage.headline}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
