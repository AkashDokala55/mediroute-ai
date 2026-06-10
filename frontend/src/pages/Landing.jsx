import Navbar from "../components/landing/Navbar/Navbar";

import Hero from "../components/landing/Hero/Hero";

import Features from "../components/landing/Features/Features";

import HealthcareJourney from "../components/landing/HealthcareJourney/HealthcareJourney";

import TrustSection from "../components/landing/TrustSection/TrustSection";

import Testimonials from "../components/landing/Testimonials/Testimonials";

import Footer from "../components/landing/Footer/Footer";

import ScrollToTop from "../components/common/ScrollToTop";

import SectionReveal from "../components/common/SectionReveal";

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      
      <Navbar />

      <Hero />

      <SectionReveal>
        <Features />
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <HealthcareJourney />
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <TrustSection />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <Testimonials />
      </SectionReveal>

      {/* DO NOT WRAP FOOTER */}
      <SectionReveal delay={0.2}>
        <Footer />
      </SectionReveal>

      <ScrollToTop />
    </div>
  );
};

export default Landing;