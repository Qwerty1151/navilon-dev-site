/**
 * This page expects your existing components to live in ../components
 * If your paths differ, adjust the imports below.
 */
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

