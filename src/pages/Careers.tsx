import React from "react";
import CareersHero from "../components/CareersHero";
import WhatMakesUsSpecial from "../components/WhatMakesUsSpecial";
import CoreValues from "../components/CoreValues";
import AdvancementOpportunities from "../components/AdvancementOpportunities";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
const CareersPage: React.FC = () => {
  return (
    <main className="flex flex-col">      
      <CareersHero />
      
      <section className="my-16">
        <WhatMakesUsSpecial />
      </section>

      <section className="my-16">
        <CoreValues />
      </section>

      <section className="my-16">
        <AdvancementOpportunities/>
      </section>

      <section className="my-16">
        <ContactSection/>
      </section>
      <section className="mt-16">
        <Footer/>
      </section>

    </main>
  );
};

export default CareersPage;
