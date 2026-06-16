import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
interface TimeLeft {
  hours: number;
  days: number;
  minutes: number;
  seconds: number;
}

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return prev;
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const CircleBlock = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center gap-1">
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
        <span className="text-black font-bold text-lg">{pad(value)}</span>
      </div>
      <span className="text-white text-xs">{label}</span>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-black rounded-lg overflow-hidden relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 gap-8">
        {/* Left Text */}
        <div className="flex-1 z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-400 text-sm font-semibold">Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-8">
            Enhance Your<br />Music Experience
          </h2>

          {/* Countdown Circles */}
          <div className="flex items-center gap-4 mb-8">
            <CircleBlock label="Hours" value={timeLeft.hours} />
            <CircleBlock label="Days" value={timeLeft.days} />
            <CircleBlock label="Minutes" value={timeLeft.minutes} />
            <CircleBlock label="Seconds" value={timeLeft.seconds} />
          </div>

          <button className="px-10 py-3 bg-green-400 hover:bg-green-500 text-black text-sm font-semibold rounded transition-colors cursor-pointer">
            Buy Now!
          </button>
        </div>

        {/* Speaker Image */}
        <div className="flex-1 flex items-center justify-center z-10">
          <img
            src={assets.speaker_img}
            alt="Speaker"
            className="max-h-64 md:max-h-80 object-contain drop-shadow-2xl cursor-pointer"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80 pointer-events-none" />
      </div>
    </section>
  );
};

export default PromoBanner;