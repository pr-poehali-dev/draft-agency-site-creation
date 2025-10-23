import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      toast({
        title: 'Ошибка',
        description: 'Введите пароль',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/900e76c5-ea2c-4313-87b5-6997aa02357f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        localStorage.setItem('admin-authenticated', 'true');
        onLoginSuccess();
        toast({
          title: 'Успешно!',
          description: 'Добро пожаловать в админ-панель'
        });
      } else {
        toast({
          title: 'Ошибка',
          description: 'Неверный пароль',
          variant: 'destructive'
        });
        setPassword('');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Ошибка подключения к серверу',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png" 
              alt="Logo" 
              className="w-20 h-20"
            />
          </div>
          <CardTitle className="text-3xl font-black">АДМИН-ПАНЕЛЬ</CardTitle>
          <CardDescription className="text-base mt-2">
            Введите пароль для доступа
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Пароль</label>
              <Input
                type="password"
                placeholder="Введите пароль"
                className="h-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="w-full font-bold"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Проверка...
                </>
              ) : (
                <>
                  <Icon name="Lock" size={20} className="mr-2" />
                  Войти
                </>
              )}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/'}
              className="text-sm"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Вернуться на главную
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
