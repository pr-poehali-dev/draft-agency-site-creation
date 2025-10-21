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
      image: 'https://cdn.poehali.dev/files/09435d09-eb50-4cf5-823d-bdb0d6525e37.jpg',
    },
    {
      name: 'Агаев Наум',
      role: 'Дизайнер',
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

      <section id="earnings" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">ЗАРАБОТОК НА AVISO</h3>
          <div className="text-center mb-8">
            <a 
              href="https://aviso.bz/?r=mnuua" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors underline"
            >
              <Icon name="ExternalLink" size={20} />
              Перейти на AVISO
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
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

            <Card className="border-2 border-accent/50 hover:border-accent transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ImagePlus" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Ретушь фотографий</CardTitle>
                <CardDescription className="text-base mt-2">
                  Профессиональная обработка и коррекция изображений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black text-accent mb-2">от 1,500₽</div>
                <p className="text-sm text-muted-foreground">за фото</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/50 hover:border-secondary transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Grid3x3" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Пиксель-арт</CardTitle>
                <CardDescription className="text-base mt-2">
                  Создание персонажей и ассетов для игр
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black text-secondary mb-2">от 3,000₽</div>
                <p className="text-sm text-muted-foreground">за ассет</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Rocket" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Полное сопровождение</CardTitle>
                <CardDescription className="text-base mt-2">
                  Комплексная разработка визуала для бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black text-primary mb-2">от 50,000₽</div>
                <p className="text-sm text-muted-foreground">в месяц</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4">ПРЕМИУМ ПОДПИСКА</h3>
            <p className="text-xl text-muted-foreground">
              Получите доступ к эксклюзивному контенту и премиум материалам
            </p>
          </div>
          
          <Card className="border-2 border-primary/30 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Crown" size={40} className="text-white" />
              </div>
              <CardTitle className="text-3xl flex items-center justify-center gap-3">
                Premium подписка
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm px-3 py-1 rounded-full">PRO</span>
              </CardTitle>
              <div className="text-5xl font-black text-primary mt-4">
                990₽<span className="text-xl text-muted-foreground">/месяц</span>
              </div>
              <CardDescription className="text-base mt-2">
                Отмена автопродления в любой момент. Первые 7 дней бесплатно
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Icon name="User" size={16} />
                    Имя
                  </label>
                  <Input 
                    placeholder="Ваше имя" 
                    className="border-2 h-12 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-2 h-12 text-lg"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold h-14 text-lg shadow-xl"
                >
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оформить подписку - 990₽/мес
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Первые 7 дней бесплатно. Отмена в любой момент.
                </p>
              </form>
              
              <div className="border-t pt-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                  Что включено в Premium:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Ежедневные</strong> мастер-классы по дизайну и фотошопу</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Доступ к библиотеке <strong>500+ премиум шаблонов</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Персональные консультации с экспертами</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Скидка <strong>50%</strong> на все наши услуги</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Приоритетная поддержка 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Закрытое сообщество профессионалов</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
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
              <p className="text-sm text-muted-foreground">misa32563@gmail.com</p>
            </div>
            <div className="space-y-2">
              <Icon name="Phone" size={24} className="mx-auto text-secondary" />
              <p className="font-bold">Телефон</p>
              <p className="text-sm text-muted-foreground">Не показан</p>
            </div>
            <div className="space-y-2">
              <Icon name="MapPin" size={24} className="mx-auto text-accent" />
              <p className="font-bold">Адрес</p>
              <p className="text-sm text-muted-foreground">Братск, Россия</p>
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