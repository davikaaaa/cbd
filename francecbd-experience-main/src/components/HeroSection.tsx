import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24">
      <div className="content-container text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span 
            className="inline-block text-white/70 text-sm tracking-[0.3em] uppercase animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Premium CBD • France
          </span>
          
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            L'Excellence du
            <span className="block gradient-text font-medium">CBD Français</span>
          </h1>
          
          <p 
            className="text-white/90 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '600ms' }}
          >
            Découvrez notre sélection de CBD premium, cultivé avec passion et 
            conforme à la législation française.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up"
            style={{ animationDelay: '800ms' }}
          >
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Découvrir nos produits
            </Button>
          </div>
        </div>
      </div>

      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 animate-float"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
