import {
  ArrowRight,
  ArrowLeft,
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: 1, name: "Phones", icon: <Smartphone size={36} /> },
  { id: 2, name: "Computers", icon: <Monitor size={36} /> },
  { id: 3, name: "SmartWatch", icon: <Watch size={36} /> },
  { id: 4, name: "Camera", icon: <Camera size={36} /> },
  { id: 5, name: "HeadPhones", icon: <Headphones size={36} /> },
  { id: 6, name: "Gaming", icon: <Gamepad2 size={36} /> },
];

const Categories = () => {
  const [activeId, setActiveId] = useState(4);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-20 pb-14 mt-6 border-t border-b border-gray-200">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          {/* Small Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-8 bg-red-500 rounded-sm inline-block" />
            <span className="text-red-500 text-sm font-semibold">
              Categories
            </span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold text-black">
              Browse By Category
            </h2>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <ArrowLeft size={20} />
          </button>

          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveId(cat.id)}
            className={`h-[145px] flex flex-col items-center justify-center gap-4 rounded border transition-all duration-200 ${
              activeId === cat.id
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:text-red-500"
            }`}
          >
            <div>{cat.icon}</div>
            <span className="text-sm font-medium">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;