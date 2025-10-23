import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/33c60dc6-2ec9-4ddc-9259-f6eaaa3a3ee2');
      const data = await response.json();
      
      if (response.ok) {
        setContacts(data.contacts);
        setTotal(data.total);
      } else {
        toast({
          title: 'Ошибка',
          description: 'Не удалось загрузить заявки',
          variant: 'destructive'
        });
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/3586da98-8112-4452-8f6b-6f3d193bc24c.png" 
                alt="Logo" 
                className="w-12 h-12"
              />
              <h1 className="text-2xl font-black">АДМИН-ПАНЕЛЬ</h1>
            </div>
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
            >
              <Icon name="Home" size={20} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black mb-2">Заявки клиентов</h2>
            <p className="text-muted-foreground">
              Всего получено: <span className="font-bold text-foreground">{total}</span> {total === 1 ? 'заявка' : 'заявок'}
            </p>
          </div>
          <Button onClick={loadContacts} disabled={isLoading}>
            <Icon name="RefreshCw" size={20} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Обновить
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Icon name="Loader2" size={40} className="animate-spin text-primary" />
          </div>
        ) : contacts.length === 0 ? (
          <Card>
            <CardContent className="py-20 text-center">
              <Icon name="Inbox" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">Заявок пока нет</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {contacts.map((contact) => (
              <Card key={contact.id} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{contact.name}</CardTitle>
                      <CardDescription className="mt-1">
                        <div className="flex flex-col gap-1 mt-2">
                          <div className="flex items-center gap-2">
                            <Icon name="Mail" size={16} />
                            <a href={`mailto:${contact.email}`} className="hover:underline">
                              {contact.email}
                            </a>
                          </div>
                          {contact.phone && (
                            <div className="flex items-center gap-2">
                              <Icon name="Phone" size={16} />
                              <a href={`tel:${contact.phone}`} className="hover:underline">
                                {contact.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      {formatDate(contact.created_at)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2 text-muted-foreground">Сообщение:</p>
                    <p className="whitespace-pre-wrap">{contact.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
