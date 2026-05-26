---
name: Sip Happens
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d2c4bc'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9b8e87'
  outline-variant: '#4f453f'
  surface-tint: '#dec1af'
  primary: '#dec1af'
  on-primary: '#3f2c20'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#705a4c'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#fabc46'
  on-tertiary: '#422c00'
  tertiary-container: '#402b00'
  on-tertiary-container: '#c48c15'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdeab'
  tertiary-fixed-dim: '#fabc46'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered to evoke the sensory experience of a high-end, boutique coffee lounge. It targets a discerning audience that values ritual, quality, and the "slow-living" aesthetic. The personality is sophisticated yet approachable—combining the heritage of traditional coffee culture with the friction-less polish of a modern premium startup.

The visual direction utilizes a **Cinematic Minimalist** approach. It leans heavily on high-quality photography, expansive whitespace, and a layered depth model. We integrate **Glassmorphism** to represent the translucency of steam and glassware, paired with **Tactile** elements that mimic the matte finishes of professional espresso machinery and artisanal ceramics. The emotional response should be one of warmth, luxury, and "hushed" exclusivity.

## Colors

The palette is rooted in the deep, organic tones of the roasting process. 

- **Primary (Espresso Brown):** Used for deep backgrounds and primary brand moments. It provides more warmth than a standard black.
- **Secondary (Soft Gold):** Reserved for high-value interactions, subtle glows, and premium signifiers.
- **Tertiary (Caramel):** Used for hover states and secondary accents to provide a "roasted" warmth.
- **Neutral (Matte Black):** The foundation for structural elements, providing a modern, sleek contrast.
- **Surface (Cream Beige):** Used primarily for typography on dark backgrounds and as a high-contrast background for editorial sections.

The default color mode is **dark**, creating a "night-cafe" atmosphere that allows the gold and cream elements to shimmer.

## Typography

This design system uses a high-contrast typographic pairing to balance tradition and modernity. 

**Playfair Display** serves as the editorial voice. It should be used for headlines and hero statements. Tighten letter-spacing on larger sizes to maintain a "fashion-magazine" density. 

**Montserrat** provides a clean, geometric counterpoint for functional text. Its wide stance ensures legibility against dark, textured backgrounds. Use the "Label-caps" style for categorization and overlines to add a structured, professional feel to the layout.

## Layout & Spacing

The layout philosophy is a **Fixed-Fluid Hybrid**. Content is housed within a 12-column grid that maxes out at 1280px to maintain editorial control over line lengths and image cropping. 

On desktop, we utilize generous margins (64px) to create a "gallery" feel. Spacing follows an 8px linear scale, but emphasizes larger "stack" values (48px+) to allow the high-end photography room to breathe. Components should be grouped with tight internal padding but separated by significant external margins to emphasize distinct "chapters" of the user journey.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Glassmorphism**, rather than traditional heavy shadows.

1.  **Base:** Matte Black (#1A1A1A).
2.  **Surface:** Espresso Brown (#3D2B1F) with a subtle 1px inner border of Soft Gold at 10% opacity.
3.  **Floating:** Glassmorphic containers using a background blur of 20px and a 15% white fill.
4.  **Interactive:** Elements in a focused state gain a "Soft Gold" outer glow (shadow: 0 0 20px rgba(212, 175, 55, 0.2)) to mimic a soft light source hitting the object.

Shadows, where used, are extremely diffused and "long," with low opacity to prevent a "muddy" appearance on dark backgrounds.

## Shapes

The shape language is **Rounded Modern**. We avoid sharp corners to maintain the "cozy" and organic feel of the brand. Standard containers use a 0.5rem (8px) radius, while larger hero cards or imagery blocks scale up to 1.5rem (24px). Buttons and input fields should maintain a consistent 0.5rem radius to feel substantial and "tactile."

## Components

- **Buttons:** Primary buttons are Solid Cream (#F5F5DC) with Espresso text. Secondary buttons are Ghost-style with a Soft Gold border and Soft Gold text. Hover states trigger a subtle caramel glow.
- **Cards:** Use a "Frosted Glass" effect for overlays on imagery. Base cards use Espresso Brown with a very subtle Soft Gold top-border (1px).
- **Inputs:** Dark backgrounds (#121212) with a 1px Espresso Brown border. On focus, the border transitions to Soft Gold with a faint outer glow.
- **Chips/Labels:** Use the "Label-caps" typography. Backgrounds should be low-opacity Soft Gold (10%) with a solid Gold border.
- **Lists:** Separated by thin, 1px lines of Espresso Brown at 40% opacity. Icons within lists should always be Soft Gold.
- **Specialty Component (The "Brew Pulse"):** A loading or active state indicator using a soft, pulsing Caramel glow to represent a brewing process.