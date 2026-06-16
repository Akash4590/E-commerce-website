import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./Productcard";
import type { Product } from "./Productcard";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const flashProducts: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 4,
    reviewCount: 88,
    image: assets.Product1_img,
    discount: 40,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviewCount: 75,
    image: assets.Product2_img,
    discount: 35,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 4,
    reviewCount: 99,
    image: assets.Product3_img,
    discount: 30,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4,
    reviewCount: 99,
    image: assets.Product4_img,
    discount: 25,
  },
  {
    id: 5,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    originalPrice: 700,
    rating: 5,
    reviewCount: 68,
    image: assets.Product4_img,
    discount: 20,
  },
];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }

        if (days < 0) return prev;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const TimeBlock = ({
    label,
    value,
  }: {
    label: string;
    value: number;
  }) => (
    <div className="flex flex-col items-center">
      <span className="text-xs text-gray-500 font-medium mb-1">
        {label}
      </span>
      <span className="text-2xl font-bold text-black">
        {pad(value)}
      </span>
    </div>
  );

  const Colon = () => (
    <span className="text-red-500 text-xl font-bold mt-4">:</span>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 pt-16 pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-8 bg-red-500 rounded-sm"></span>
            <span className="text-red-500 text-sm font-semibold">
              Today's
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <h2 className="text-3xl font-bold text-black">
              Flash Sales
            </h2>

            <div className="flex items-center gap-3">
              <TimeBlock label="Days" value={timeLeft.days} />
              <Colon />
              <TimeBlock label="Hours" value={timeLeft.hours} />
              <Colon />
              <TimeBlock label="Minutes" value={timeLeft.minutes} />
              <Colon />
              <TimeBlock label="Seconds" value={timeLeft.seconds} />
            </div>
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition cursor-pointer">
            <ArrowLeft size={18} />
          </button>

          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition cursor-pointer">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {flashProducts.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showDiscount
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <Link to="/Wishlist">
  <button className="px-12 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition-colors cursor-pointer">
    View All Products
  </button>
</Link>
      </div>
    </section>
  );
};

export default FlashSales;