import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const HalloweenDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 left-10 text-6xl float-animation opacity-80">🎃</div>
      <div className="absolute top-20 right-20 text-5xl float-animation opacity-70" style={{ animationDelay: '0.5s' }}>👻</div>
      <div className="absolute top-40 left-1/4 text-4xl float-animation opacity-60" style={{ animationDelay: '1s' }}>🎃</div>
      <div className="absolute bottom-20 right-1/4 text-6xl glow-animation">🎃</div>
      <div className="absolute bottom-40 left-20 text-5xl float-animation opacity-75" style={{ animationDelay: '1.5s' }}>👻</div>
      <div className="absolute top-1/2 right-10 text-4xl float-animation opacity-65" style={{ animationDelay: '2s' }}>🎃</div>
      <div className="absolute top-1/3 left-1/3 text-3xl float-animation opacity-50" style={{ animationDelay: '0.8s' }}>👻</div>
      <div className="absolute bottom-1/3 right-1/3 text-5xl glow-animation opacity-80" style={{ animationDelay: '1.2s' }}>🎃</div>
    </div>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: 'Попов Михаил Максимович',
      role: 'Арт-директор',
      image: 'https://cdn.poehali.dev/files/d9877295-ced6-49af-95bc-9e805d360997.jpg',
    },
    {
      name: 'Агаев Наум',
      role: 'Дизайнер',
      image: 'https://cdn.poehali.dev/files/7da73c75-c1d3-4e73-8b49-9b63943c2438.jpg',
    },
  ];

  const blogPosts = [
    {
      title: 'Тренды цифрового искусства 2025',
      excerpt: 'Исследуем новейшие направления в мире дизайна и цифровой графики',
      date: '15 октября 2025',
    },
    {
      title: '10 секретов идеальной ретуши',
      excerpt: 'Профессиональные техники работы в Photoshop от наших экспертов',
      date: '10 октября 2025',
    },
    {
      title: 'Пиксельное искусство: возрождение классики',
      excerpt: 'Как пиксель-арт стал новым трендом в современном дизайне',
      date: '5 октября 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <HalloweenDecor />
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
                  onClick={() => scrollToSection(section)}
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
                  onClick={() => scrollToSection('contact')}
                >
                  Связаться с нами
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('blog')}
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

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">О НАС</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Дизайн</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Создаём уникальные визуальные концепции для брендов и проектов любой сложности
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wand2" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Ретушь</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Профессиональная обработка фотографий и изображений в Photoshop
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Grid3x3" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Пиксель-арт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Современная интерпретация пиксельной графики для игр и иллюстраций
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">НАША КОМАНДА</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="earnings" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">ЗАРАБОТОК</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Заработок на AVISO</CardTitle>
                <CardDescription className="text-base mt-2">
                  Разработка логотипов, баннеров, иллюстраций для брендов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://aviso.bz/?r=mnuua" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                    Перейти на AVISO
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Фриланс проекты</CardTitle>
                <CardDescription className="text-base mt-2">
                  Работа над коммерческими заказами от клиентов со всего мира
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground font-bold">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bell" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-black">ПОДПИШИТЕСЬ НА РАССЫЛКУ</CardTitle>
                <CardDescription className="text-lg mt-4">
                  Получайте свежие статьи, уроки и новости из мира цифрового искусства
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
                  <Input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="flex-1 h-12 text-base"
                  />
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
                  >
                    Подписаться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">БЛОГ</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">КОНТАКТЫ</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                <CardDescription className="text-base">
                  Расскажите о вашем проекте, и мы воплотим его в жизнь
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..." 
                      className="min-h-32 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  >
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
