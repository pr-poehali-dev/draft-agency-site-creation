import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">АГ.ДФ БИЗНЕС</h1>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition">
                О нас
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-6">
            Агентство дизайна и фотошопа
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Создаем профессиональные дизайны, логотипы и ретушируем фотографии
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Начать проект
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Наши услуги</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={24} className="text-purple-400" />
                </div>
                <CardTitle className="text-white">Дизайн</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-200">
                  Создание логотипов, баннеров и фирменного стиля
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wand2" size={24} className="text-purple-400" />
                </div>
                <CardTitle className="text-white">Ретушь</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-200">
                  Профессиональная обработка фотографий в Photoshop
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Image" size={24} className="text-purple-400" />
                </div>
                <CardTitle className="text-white">Иллюстрации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-200">
                  Уникальные цифровые иллюстрации для любых задач
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-4xl font-bold text-white mb-6">О нас</h3>
          <p className="text-purple-200 text-lg leading-relaxed">
            Мы - команда профессиональных дизайнеров и фотошоп-мастеров. 
            Работаем с 2020 года и помогаем брендам создавать уникальный визуальный стиль.
            Каждый проект для нас - это возможность воплотить ваши идеи в жизнь.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-4xl font-bold text-white mb-6">Свяжитесь с нами</h3>
          <p className="text-purple-200 mb-8">
            Готовы начать проект? Напишите нам!
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Icon name="Mail" size={20} className="mr-2" />
              Email
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-white hover:bg-purple-500/20">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="container mx-auto text-center text-purple-300">
          <p>&copy; 2024 АГ.ДФ БИЗНЕС. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
