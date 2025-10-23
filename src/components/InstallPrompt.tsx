import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      const dismissed = localStorage.getItem('pwa-prompt-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowPrompt(true), 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-in slide-in-from-bottom-4">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-5 text-white">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-start gap-4 pr-8">
          <div className="bg-white/20 p-3 rounded-xl">
            <Download size={24} />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">Установить приложение?</h3>
            <p className="text-sm text-white/90 mb-4">
              Быстрый доступ к АГ.ДФ прямо с главного экрана
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={handleInstall}
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm"
              >
                Установить
              </button>
              <button
                onClick={handleDismiss}
                className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm"
              >
                Не сейчас
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
