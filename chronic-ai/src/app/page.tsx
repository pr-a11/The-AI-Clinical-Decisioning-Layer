import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import UgcSection from "@/components/UgcSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <IntegrationsSection />
      <UgcSection />
      <CtaSection />
      <Footer />
      <ChatWidget />
    </main>
  );
}
