import Hero from "../components/Hero";
import PMSSection from "../components/PMSSection";
import FIPSection from "../components/FIPSection";
import TigerFramework from "../components/TigerFramework";
import TeamSection from "../components/TeamSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SectorOpportunities from "../components/SectorOpportunities";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PMSSection />
      <SectorOpportunities />
      <FIPSection />
      <TigerFramework />
      <TeamSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
