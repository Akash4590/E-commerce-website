import { Truck, Headphones, ShieldCheck } from "lucide-react";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <Truck size={40} strokeWidth={1.5} />,
    title: "FREE AND FAST DELIVERY",
    subtitle: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <Headphones size={40} strokeWidth={1.5} />,
    title: "24/7 CUSTOMER SERVICE",
    subtitle: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    title: "MONEY BACK GUARANTEE",
    subtitle: "We return money within 30 days",
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center gap-4">
            {/* Icon circle */}
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center relative">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white">
                {feature.icon}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;