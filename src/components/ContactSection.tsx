import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink, Shield } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Get Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Explore the source code, contribute to the project, or learn more about our methodology
          </p>

          {/* GitHub Card */}
          <Card className="data-card mb-8 max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  View on GitHub
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Access the complete source code, contribute improvements, or fork the project for your own analysis
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 glow-effect"
                  onClick={() => window.open('https://github.com/codingadventurestoday/draftkings-deep-dive', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Open Repository
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Information */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>© 2024 All rights reserved by</span>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary hover:text-primary/80"
                  onClick={() => window.open('https://codingadventurestoday.com', '_blank')}
                >
                  codingadventurestoday
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
              
              <div className="hidden md:block w-1 h-4 bg-border rounded-full" />
              
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-foreground flex items-center gap-2"
                onClick={() => window.open('/disclaimer', '_blank')}
              >
                <Shield className="w-4 h-4" />
                Website Disclaimer
              </Button>
            </div>
          </div>

          {/* Additional Notice */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> This website is for educational and research purposes only. 
              Past performance does not guarantee future results. Please gamble responsibly and within your means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;