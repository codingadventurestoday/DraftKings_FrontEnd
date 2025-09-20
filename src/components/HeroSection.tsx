import heroImage from '@/assets/hero-stadium.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Text shadow overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      
      {/* Content */}
      <div className="hero-content container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            <span className="text-gradient drop-shadow-2xl">DraftKings</span>
            <br />
            <span className="text-white drop-shadow-2xl">Deep Dive</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light drop-shadow-lg">
            Analyzing the odds, one line at a time
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-effect"
            >
              Explore the Data
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('data-analyze')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
            >
              Start Analysis
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="text-primary hover:text-primary/80"
        >
          <ChevronDown size={32} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;