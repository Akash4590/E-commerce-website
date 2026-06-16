import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { assets } from "../assets/assets";

interface Category {
  id: number;
  name: string;
  hasChildren?: boolean;
}

const categories: Category[] = [
  { id: 1, name: "Woman's Fashion", hasChildren: true },
  { id: 2, name: "Men's Fashion", hasChildren: true },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Home & Lifestyle" },
  { id: 5, name: "Medicine" },
  { id: 6, name: "Sports & Outdoor" },
  { id: 7, name: "Baby's & Toys" },
  { id: 8, name: "Groceries & Pets" },
  { id: 9, name: "Health & Beauty" },
];

interface Slide {
  id: number;
  brand: string;
  brandIcon: string;
  title: string;
  highlight: string;
  cta: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    brand: "iPhone 14 Series",
    brandIcon: "",
    title: "Up to 10%",
    highlight: "off Voucher",
    cta: "Shop Now",
    image: assets.hero_img,
  },
  {
    id: 2,
    brand: "Latest Arrivals",
    brandIcon: "",
    title: "Up to 20%",
    highlight: "off Selected",
    cta: "Shop Now",
    image: assets.hero_img,
  },
  {
    id: 3,
    brand: "Summer Sale",
    brandIcon: "",
    title: "Up to 30%",
    highlight: "off All Items",
    cta: "Shop Now",
    image: assets.hero_img,
  },
  {
    id: 4,
    brand: "Spring Sale",
    brandIcon: "",
    title: "Up to 30%",
    highlight: "off All Items",
    cta: "Shop Now",
    image: assets.hero_img,
  },
  {
    id: 5,
    brand: "Winter Sale",
    brandIcon: "",
    title: "Up to 40%",
    highlight: "off All Items",
    cta: "Shop Now",
    image: assets.hero_img,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () =>
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setActiveSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  const current = slides[activeSlide];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 flex gap-8">
      {/* Category Sidebar */}
      <aside className="font-bold text-gray-600 hidden lg:block w-56 flex-shrink-0 border-r border-gray-300 pr-6 -mt-6 -mb-6 pt-10">
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <a
                href="#"
                className="flex items-center justify-between text-sm text-gray-700 hover:text-black transition-colors group"
              >
                <span>{cat.name}</span>

                {cat.hasChildren && (
                  <ChevronRight
                    size={14}
                    className="text-gray-400 group-hover:text-black transition-colors"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Banner */}
      <div  className= "w-full lg:w-[895px] relative bg-black rounded overflow-hidden min-h-[320px] lg:min-h-[380px] pl-4 mt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full px-10 py-10 gap-6">
          {/* Left Content */}
          <div className="text-white z-10 flex-1 max-w-xs">
            {/* Brand */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img
                  src={assets.apple_logo}
                  alt="Apple Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <span className="text-gray-300 text-sm">
                {current.brand}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-1">
              {current.title}
            </h2>

            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              {current.highlight}
            </h2>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white text-sm font-medium underline underline-offset-4 hover:text-gray-300 transition-all group"
            >
              {current.cta}
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Banner Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={current.image}
              alt="Promo Banner"
              className="max-h-64 lg:max-h-72 object-contain drop-shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 transition-colors z-10 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 transition-colors z-10 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? "w-5 h-2 bg-red-500"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;