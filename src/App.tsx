import TopBar from './components/TopBar';
import LiquidOrb from './components/LiquidOrb';
import SleepCard from './components/SleepCard';
import StressCard from './components/StressCard';
import HeartCard from './components/HeartCard';
import BreathingCard from './components/BreathingCard';
import HabitCard from './components/HabitCard';
import ForecastCard from './components/ForecastCard';
import TrendChart from './components/TrendChart';
import QuickActions from './components/QuickActions';
import BottomNavMobile from './components/BottomNavMobile';
import { recoveryData } from './data/mockHealthData';

function App() {
  return (
    <div className="relative min-h-dvh">
      {/* Atmospheric background — serene, layered light diffusion */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #edeae5 0%, #e6e4e0 40%, #eae7e2 100%)' }} />
        {/* Warm green-teal wash — upper left */}
        <div
          className="absolute top-[-15%] left-[8%] w-[65vw] h-[65vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(185,210,198,0.32) 0%, rgba(195,200,210,0.12) 45%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Cool lavender wash — lower right */}
        <div
          className="absolute bottom-[-10%] right-[0%] w-[55vw] h-[55vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(195,190,215,0.22) 0%, rgba(205,198,190,0.08) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Warm accent — center right */}
        <div
          className="absolute top-[35%] right-[15%] w-[30vw] h-[30vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,205,195,0.18) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Subtle light bloom — hero area */}
        <div
          className="absolute top-[10%] left-[30%] w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <TopBar />

      {/* Main content */}
      <main className="px-5 md:px-8 lg:px-12 pb-28 md:pb-20 max-w-[1440px] mx-auto">
        {/* Hero — Liquid Orb */}
        <section className="flex justify-center py-10 md:py-14 lg:py-16">
          <LiquidOrb
            score={recoveryData.score}
            status={recoveryData.status}
            message={recoveryData.message}
          />
        </section>

        {/* Quick Actions */}
        <section className="mb-10 md:mb-12">
          <QuickActions delay={0.6} />
        </section>

        {/* Cards Grid — floating spatial layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          <div className="lg:col-span-2">
            <SleepCard delay={0.15} />
          </div>
          <StressCard delay={0.25} />

          <HeartCard delay={0.3} />
          <BreathingCard delay={0.35} />
          <HabitCard delay={0.4} />

          <div className="lg:col-span-2">
            <TrendChart delay={0.45} />
          </div>
          <ForecastCard delay={0.5} />
        </section>
      </main>

      <BottomNavMobile />
    </div>
  );
}

export default App;
