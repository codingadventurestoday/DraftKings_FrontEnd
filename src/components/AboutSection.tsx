import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import footballField from '@/assets/football-field.jpg';
import spreadIcon from '@/assets/spread-icon.png';
import overUnderIcon from '@/assets/over-under-icon.png';
import moneylineIcon from '@/assets/moneyline-icon.png';

const AboutSection = () => {
  const scrollToDataAnalyze = () => {
    const dataSection = document.getElementById('data-analyze');
    if (dataSection) {
      dataSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bettingTypes = [
    {
      iconImage: spreadIcon,
      title: 'Spread',
      description: 'Point spread betting levels the playing field by giving the underdog a head start and the favorite a deficit to overcome.'
    },
    {
      iconImage: overUnderIcon,
      title: 'Over/Under',
      description: 'Total points betting focuses on whether the combined score of both teams will be over or under a set number.'
    },
    {
      iconImage: moneylineIcon,
      title: 'Moneyline',
      description: 'Straight-up winner betting where you simply pick which team will win the game, regardless of the point spread.'
    },
    {
      icon: Clock,
      title: 'Line Movement',
      description: 'Track how betting lines change throughout the week based on betting action, injuries, and other factors.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Main About Content */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Uncovering the Truth Behind the Lines
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Welcome to DraftKings Deep Dive, where we pull back the curtain on the NFL betting landscape. 
            Every week, millions of dollars are wagered, driven by the intricate odds set by sportsbooks like DraftKings. 
            But how accurate are these predictions, really?
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Our mission is simple: to meticulously analyze DraftKings' historical betting lines for moneylines, 
            over/unders, and point spreads. We track their performance game by game, season after season, 
            to reveal their true predictive prowess. Are they consistently sharp, or do opportunities to gain 
            an edge emerge? Join us as we go beyond the hype and dive deep into the data, providing unbiased 
            insights for every NFL fan and bettor.
          </p>
          
          {/* Quick Navigation Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[
              { name: 'Spread', icon: spreadIcon },
              { name: 'Over/Under', icon: overUnderIcon },
              { name: 'Moneyline', icon: moneylineIcon }
            ].map((type, index) => (
              <Button
                key={type.name}
                onClick={scrollToDataAnalyze}
                className="flex flex-col items-center p-6 h-auto bg-card hover:bg-card/80 border border-border glow-effect"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <img src={type.icon} alt={type.name} className="w-12 h-12 object-contain" />
                </div>
                <span className="text-foreground font-semibold">{type.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Football Field Section */}
      <div className="relative field-section py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat stadium-pattern"
          style={{ backgroundImage: `url(${footballField})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bettingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card 
                  key={type.title} 
                  className="data-card animate-bounce-in border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {type.iconImage ? (
                        <img src={type.iconImage} alt={type.title} className="w-12 h-12 object-contain" />
                      ) : (
                        <Icon className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;