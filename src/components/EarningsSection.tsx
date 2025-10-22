import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EarningsSection = () => {
  const handleAvisoClick = () => {
    sessionStorage.setItem('visitedAviso', 'true');
    window.open('https://aviso.bz/?r=mnuua', '_blank');
  };

  return (
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
              <Button 
                onClick={handleAvisoClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Перейти на AVISO
              </Button>
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
  );
};

export default EarningsSection;