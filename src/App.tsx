import { AmbientProvider } from './components/AmbientContext';
import AmbientBackground from './components/AmbientBackground';
import AmbientSwitcher from './components/AmbientSwitcher';
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

function Dashboard() {
  return (
    <div className="relative h-dvh flex flex-col overflow-hidden md:overflow-hidden">
      {/* Background layer (z-depth 0) */}
      <AmbientBackground />

      {/* Top bar (z-depth 1 — lightest float) */}
      <TopBar />

      {/* ===== DESKTOP: fixed spatial layout, no scroll ===== */}
      <div className="hidden lg:flex flex-1 min-h-0 relative">
        <div className="absolute inset-0 flex">
          {/* Left column — stacked cards */}
          <div className="w-[300px] xl:w-[340px] flex flex-col gap-4 p-5 pl-8 xl:pl-10 overflow-hidden">
            <SleepCard delay={0.15} />
            <StressCard delay={0.25} />
            <TrendChart delay={0.35} />
          </div>

          {/* Center — hero orb + quick actions (z-depth 3 — foreground) */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5 relative z-20">
            <LiquidOrb
              score={recoveryData.score}
              status={recoveryData.status}
              message={recoveryData.message}
            />
            <QuickActions delay={0.6} />
          </div>

          {/* Right column — stacked cards */}
          <div className="w-[300px] xl:w-[340px] flex flex-col gap-4 p-5 pr-8 xl:pr-10 overflow-hidden">
            <HeartCard delay={0.2} />
            <BreathingCard delay={0.3} />
            <HabitCard delay={0.4} />
            <ForecastCard delay={0.5} />
          </div>
        </div>
      </div>

      {/* ===== TABLET: 2-col with orb on top, no scroll ===== */}
      <div className="hidden md:flex lg:hidden flex-1 min-h-0 flex-col overflow-hidden">
        {/* Orb hero */}
        <div className="flex justify-center py-6 relative z-20">
          <LiquidOrb
            score={recoveryData.score}
            status={recoveryData.status}
            message={recoveryData.message}
          />
        </div>
        <div className="px-6 pb-4">
          <QuickActions delay={0.5} />
        </div>
        {/* 2-col cards, scrollable if needed on very short tablets */}
        <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
          <div className="grid grid-cols-2 gap-4">
            <SleepCard delay={0.15} />
            <HeartCard delay={0.2} />
            <StressCard delay={0.25} />
            <BreathingCard delay={0.3} />
            <HabitCard delay={0.35} />
            <ForecastCard delay={0.4} />
            <div className="col-span-2">
              <TrendChart delay={0.45} />
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE: vertical scroll, premium app feel ===== */}
      <div className="flex md:hidden flex-1 min-h-0 flex-col overflow-y-auto pb-24">
        {/* Hero orb */}
        <div className="flex justify-center py-8 relative z-20">
          <LiquidOrb
            score={recoveryData.score}
            status={recoveryData.status}
            message={recoveryData.message}
          />
        </div>

        <div className="px-5 mb-6">
          <QuickActions delay={0.5} />
        </div>

        {/* Stacked glass cards */}
        <div className="flex flex-col gap-4 px-5 pb-6">
          <SleepCard delay={0.15} />
          <HeartCard delay={0.2} />
          <StressCard delay={0.25} />
          <BreathingCard delay={0.3} />
          <HabitCard delay={0.35} />
          <TrendChart delay={0.4} />
          <ForecastCard delay={0.45} />
        </div>
      </div>

      {/* Floating controls */}
      <AmbientSwitcher />
      <BottomNavMobile />
    </div>
  );
}

export default function App() {
  return (
    <AmbientProvider>
      <Dashboard />
    </AmbientProvider>
  );
}
