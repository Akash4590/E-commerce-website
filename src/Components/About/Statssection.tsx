import { useState } from "react";
import { Store, DollarSign, ShoppingBag, Banknote } from "lucide-react";

interface Stat {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: <Store size={32} strokeWidth={1.5} />,
    value: "10.5k",
    label: "Sallers active our site",
  },
  {
    id: 2,
    icon: <DollarSign size={32} strokeWidth={1.5} />,
    value: "33k",
    label: "Mopnthly Pruduct Sale",
  },
  {
    id: 3,
    icon: <ShoppingBag size={32} strokeWidth={1.5} />,
    value: "45.5k",
    label: "Customer active in our site",
  },
  {
    id: 4,
    icon: <Banknote size={32} strokeWidth={1.5} />,
    value: "25k",
    label: "Anual gross sale in our site",
  },
];

const StatsSection = () => {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
        {stats.map((stat) => {
          const isActive = stat.id === activeId;
          return (
            <button
              key={stat.id}
              onClick={() => setActiveId(stat.id)}
              className={`flex flex-col items-center justify-center gap-4 py-10 px-6 rounded border transition-all duration-200 text-center ${
                isActive
                  ? "bg-red-500 text-white border-red-500 shadow-lg"
                  : "bg-white text-gray-800 border-gray-200 hover:border-red-300 hover:shadow-md cursor-pointer"
              }`}
            >
              {/* Icon circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                  isActive
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-gray-200 bg-gray-50 text-gray-800"
                }`}
              >
                {stat.icon}
              </div>

              <div>
                <p className={`text-2xl font-bold mb-1 ${isActive ? "text-white" : "text-gray-900"}`}>
                  {stat.value}
                </p>
                <p className={`text-xs ${isActive ? "text-white/90" : "text-gray-500"}`}>
                  {stat.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;