import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const incrementAndFetch = async () => {
      const hasVisited = sessionStorage.getItem('has-visited');
      
      if (!hasVisited) {
        await fetch('https://functions.poehali.dev/67f48dc3-e76f-4c00-a1d5-a66414c044be', {
          method: 'POST'
        });
        sessionStorage.setItem('has-visited', 'true');
      }
      
      const response = await fetch('https://functions.poehali.dev/67f48dc3-e76f-4c00-a1d5-a66414c044be');
      const data = await response.json();
      setVisits(data.visits);
    };

    incrementAndFetch();
  }, []);

  if (visits === null) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-purple-500/30">
      <Eye size={18} className="text-purple-400" />
      <span className="text-sm font-medium">
        {visits.toLocaleString('ru-RU')} {visits === 1 ? 'посещение' : 'посещений'}
      </span>
    </div>
  );
}
