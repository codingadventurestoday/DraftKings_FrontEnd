import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DataAnalyzeSection from '@/components/DataAnalyzeSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <DataAnalyzeSection />
      <ContactSection />
    </div>
  );
};

export default Index;
