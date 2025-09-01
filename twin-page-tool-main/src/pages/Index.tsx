import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RehamGroupSection from "@/components/RehamGroupSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import CustomersSection from "@/components/CustomersSection";
import CertificatesSection from "@/components/CertificatesSection";
import MembershipsSection from "@/components/MembershipsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import BrochureDownloadCTA from "@/components/BrochureDownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <RehamGroupSection />
      <AdvantagesSection />
      <ImpactSection />
      <QuoteSection />
      <ServicesSection />
      <CustomersSection />
      <CertificatesSection />
      <MembershipsSection />
      <TestimonialsSection />
      <BrochureDownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;