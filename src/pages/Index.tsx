import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: 'Анна Петрова',
      role: 'Арт-директор',
      image: 'https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png',
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Дизайнер',
      image: 'https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png',
    },
    {
      name: 'Мария Сидорова',
      role: 'Ретушёр',
      image: 'https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png',
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
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
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
              {['home', 'about', 'team', 'blog', 'contact'].map((section) => (
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
                  Современная интерпретация пиксельной графики для игр и веб-проектов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">НАША КОМАНДА</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">БЛОГ</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <div className="h-48 bg-gradient-to-br from-primary via-accent to-secondary"></div>
                <CardHeader>
                  <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-primary font-bold">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-black mb-12 text-center">КОНТАКТЫ</h3>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
              <CardDescription className="text-base">
                Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в течение 24 часов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    className="border-2 min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  size="lg"
                >
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Icon name="Mail" size={24} className="mx-auto text-primary" />
              <p className="font-bold">Email</p>
              <p className="text-sm text-muted-foreground">info@digitalart.agency</p>
            </div>
            <div className="space-y-2">
              <Icon name="Phone" size={24} className="mx-auto text-secondary" />
              <p className="font-bold">Телефон</p>
              <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-2">
              <Icon name="MapPin" size={24} className="mx-auto text-accent" />
              <p className="font-bold">Адрес</p>
              <p className="text-sm text-muted-foreground">Москва, Россия</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/20">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Digital Art Agency. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
