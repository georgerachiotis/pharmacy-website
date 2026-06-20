import React from 'react';
import { branches, carePoints, gianniDimouInterior, services } from './data/pharmacyData.js';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { IntroBand } from './components/IntroBand.jsx';
import { PharmaciesSection } from './components/PharmaciesSection.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { CareSection } from './components/CareSection.jsx';
import { LocationsSection } from './components/LocationsSection.jsx';
import { ContactSection } from './components/ContactSection.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onCloseMenu={closeMenu}
      />

      <main>
        <Hero />
        <IntroBand />
        <PharmaciesSection branches={branches} />
        <ServicesSection services={services} carePhoto={gianniDimouInterior} />
        <CareSection carePoints={carePoints} />
        <LocationsSection branches={branches} />
        <ContactSection branches={branches} />
      </main>

      <Footer />
    </>
  );
}
