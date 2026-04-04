import Hero from "../components/Hero";
import PMSSection from "../components/PMSSection";
import FIPSection from "../components/FIPSection";
import TigerFramework from "../components/TigerFramework";
import TeamSection from "../components/TeamSection";
import BlogsSection from "../components/BlogsSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SectorOpportunities from "../components/SectorOpportunities";
// import InvestmentStats from "../components/InvestmentStats";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TigerFramework />
      <PMSSection />
      {/* <InvestmentStats /> */}
      <FIPSection />
      <SectorOpportunities />
      <Testimonials />
      <TeamSection />
      <BlogsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
