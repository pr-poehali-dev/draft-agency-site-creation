import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onContactClick: () => void;
  onBlogClick: () => void;
}

const HeroSection = ({ onContactClick, onBlogClick }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ТВОРИМ ЦИФРОВОЕ ИСКУССТВО
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональное агентство дизайна и фотошопа. Превращаем идеи в пиксели с 2020 года.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                onClick={onContactClick}
              >
                Связаться с нами
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onBlogClick}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold"
              >
                Наш блог
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png" 
              alt="Digital Art" 
              className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
