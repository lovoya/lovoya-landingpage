import { MapPin, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Discover hidden places together',
    description: 'Find beautiful, intimate spots perfect for two — beyond the usual tourist trails.',
  },
  {
    icon: Heart,
    title: 'Map your memories',
    description: 'See your love story unfold on a world map — mark where you\'ve been and plan where you\'ll go next.',
  },
  {
    icon: Users,
    title: 'Save & relive your favorite moments',
    description: 'Collect every place, every memory — and look back whenever you want.',
  },
];

export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#f87367] to-[#ff9a8e] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
