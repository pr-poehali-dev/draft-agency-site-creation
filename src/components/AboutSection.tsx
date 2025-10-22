import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
