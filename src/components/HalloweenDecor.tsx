const HalloweenDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 left-10 text-6xl float-animation opacity-80">🎃</div>
      <div className="absolute top-20 right-20 text-5xl float-animation opacity-70" style={{ animationDelay: '0.5s' }}>👻</div>
      <div className="absolute top-40 left-1/4 text-4xl float-animation opacity-60" style={{ animationDelay: '1s' }}>🎃</div>
      <div className="absolute bottom-20 right-1/4 text-6xl glow-animation">🎃</div>
      <div className="absolute bottom-40 left-20 text-5xl float-animation opacity-75" style={{ animationDelay: '1.5s' }}>👻</div>
      <div className="absolute top-1/2 right-10 text-4xl float-animation opacity-65" style={{ animationDelay: '2s' }}>🎃</div>
      <div className="absolute top-1/3 left-1/3 text-3xl float-animation opacity-50" style={{ animationDelay: '0.8s' }}>👻</div>
      <div className="absolute bottom-1/3 right-1/3 text-5xl glow-animation opacity-80" style={{ animationDelay: '1.2s' }}>🎃</div>
    </div>
  );
};

export default HalloweenDecor;
