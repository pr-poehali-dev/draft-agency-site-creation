import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png" 
              alt="Logo" 
              className="w-10 h-10"
            />
            <span className="font-bold">DIGITAL ART AGENCY</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Digital Art Agency. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
