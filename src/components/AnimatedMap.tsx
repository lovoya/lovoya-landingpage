import { useEffect, useState } from 'react';
import { MapPin, Heart } from 'lucide-react';

interface Location {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function AnimatedMap() {
  const [locations] = useState<Location[]>([
    { id: 1, x: 15, y: 25, delay: 0 },
    { id: 2, x: 45, y: 35, delay: 0.5 },
    { id: 3, x: 70, y: 20, delay: 1 },
    { id: 4, x: 30, y: 60, delay: 1.5 },
    { id: 5, x: 85, y: 50, delay: 2 },
    { id: 6, x: 60, y: 70, delay: 2.5 },
  ]);

  const [connections, setConnections] = useState<Array<[Location, Location]>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newConnections: Array<[Location, Location]> = [];
      for (let i = 0; i < locations.length - 1; i++) {
        newConnections.push([locations[i], locations[i + 1]]);
      }
      setConnections(newConnections);
    }, 3000);

    return () => clearTimeout(timer);
  }, [locations]);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Animated connections between locations */}
        {connections.map((connection, index) => {
          const [start, end] = connection;
          return (
            <line
              key={`line-${index}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#f87367"
              strokeWidth="0.3"
              strokeDasharray="2,2"
              className="animate-pulse"
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            />
          );
        })}

        {/* Location pins */}
        {locations.map((location) => (
          <g key={location.id}>
            {/* Pulsing circle */}
            <circle
              cx={location.x}
              cy={location.y}
              r="3"
              fill="#f87367"
              className="animate-ping"
              style={{
                animationDelay: `${location.delay}s`,
                animationDuration: '2s',
              }}
            />
            {/* Solid pin */}
            <circle
              cx={location.x}
              cy={location.y}
              r="1.5"
              fill="#f87367"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.5s ease-in forwards',
                animationDelay: `${location.delay}s`,
              }}
            />
          </g>
        ))}

        {/* Decorative heart paths */}
        <g opacity="0.3">
          <path
            d="M 25 15 Q 28 10, 32 15 Q 36 10, 39 15 Q 35 20, 32 23 Q 29 20, 25 15"
            fill="none"
            stroke="#f87367"
            strokeWidth="0.3"
            className="animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          />
          <path
            d="M 75 65 Q 78 60, 82 65 Q 86 60, 89 65 Q 85 70, 82 73 Q 79 70, 75 65"
            fill="none"
            stroke="#f87367"
            strokeWidth="0.3"
            className="animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '2s' }}
          />
        </g>
      </svg>

      {/* Floating location markers with icons */}
      <div className="absolute top-[20%] left-[25%] animate-float">
        <MapPin className="w-6 h-6 text-[#f87367]/40" />
      </div>
      <div className="absolute top-[60%] right-[20%] animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-5 h-5 text-[#f87367]/40" />
      </div>
      <div className="absolute bottom-[30%] left-[15%] animate-float" style={{ animationDelay: '2s' }}>
        <MapPin className="w-5 h-5 text-[#f87367]/40" />
      </div>
    </div>
  );
}
