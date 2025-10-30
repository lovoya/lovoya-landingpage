import CountdownTimer from './components/CountdownTimer';
import EmailSignup from './components/EmailSignup';
import Features from './components/Features';
import AnimatedMap from './components/AnimatedMap';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30">
      {/* Global Animated Map Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedMap />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(248,115,103,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,142,0.06),transparent_50%)]"></div>

        {/* Subtle world map pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f87367' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden" style={{ position: 'relative', zIndex: 10 }}>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="inline-block mb-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#f87367] to-[#ff9a8e] bg-clip-text text-transparent">
              Lovoya
            </h1>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Find the little moments — together.
            <br />
            <span className="bg-gradient-to-r from-[#f87367] to-[#ff9a8e] bg-clip-text text-transparent">
              Anywhere.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            Discover new places made for two.
            <br />
            Create memories that last.
          </p>

          {/* Email Signup */}
          <div className="pt-8 animate-fade-in-delay">
            <EmailSignup />
          </div>

          {/* Countdown Timer */}
          <div className="pt-12 animate-fade-in-delay-2">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-semibold">
              Launching in
            </p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-transparent to-white/50" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Everything you need to create
            <br />
            <span className="text-[#f87367]">meaningful memories</span>
          </h3>
          <Features />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12 bg-white/80 backdrop-blur-sm border-t border-gray-100" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2025 Lovoya. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="hover:text-[#f87367] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#imprint"
              className="hover:text-[#f87367] transition-colors"
            >
              Imprint
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
