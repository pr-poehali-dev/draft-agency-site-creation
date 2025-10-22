import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const SubscribeSection = () => {
  return (
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
  );
};

export default SubscribeSection;
