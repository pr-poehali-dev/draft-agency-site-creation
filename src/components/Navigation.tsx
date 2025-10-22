interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png" 
              alt="Logo" 
              className="w-12 h-12"
            />
            <h1 className="text-2xl font-black tracking-tight">DIGITAL ART AGENCY</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'team', 'earnings', 'subscribe', 'blog', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => onSectionClick(section)}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О нас'}
                {section === 'team' && 'Команда'}
                {section === 'earnings' && 'Заработок'}
                {section === 'subscribe' && 'Подписка'}
                {section === 'blog' && 'Блог'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;