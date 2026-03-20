import HeroSection from "./components/HeroSection";
import HeaderSection from "./components/HeaderSection";
import TrustedSection from "./components/TrustedSection";
import FeaturesSection from "./components/FeaturesSection";
import TemplateSection from "./components/TemplateSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <TemplateSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
