import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/548e8026-47b9-4690-858d-1a024de7d04d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Успешно отправлено!',
          description: 'Мы свяжемся с вами в ближайшее время',
        });
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Не удалось отправить сообщение',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Произошла ошибка при отправке. Попробуйте позже',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Имя <span className="text-red-500">*</span>
        </label>
        <Input 
          placeholder="Ваше имя" 
          className="h-12"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <Input 
          type="email" 
          placeholder="your@email.com" 
          className="h-12"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Телефон</label>
        <Input 
          type="tel" 
          placeholder="+7 (999) 123-45-67" 
          className="h-12"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Сообщение <span className="text-red-500">*</span>
        </label>
        <Textarea 
          placeholder="Расскажите о вашем проекте..." 
          className="min-h-32 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button 
        type="submit" 
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" size={20} className="mr-2" />
            Отправить
          </>
        )}
      </Button>
    </form>
  );
}
