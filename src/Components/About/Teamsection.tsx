import { useState } from "react";

import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { assets } from "../../assets/assets";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: assets.Tom_1,
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Managing Director",
    image: assets.Emma_2,
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Product Designer",
    image: assets.will_3,
  },
];

const totalDots = 5;

const SocialLinks = () => (
  <div className="flex items-center gap-3 mt-3">
    <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black transition-colors">
      <FaTwitter size={16} />
    </a>
    <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black transition-colors">
      <FaInstagram size={16} />
    </a>
    <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-black transition-colors">
      <FaLinkedinIn size={16} />
    </a>
  </div>
);

const TeamSection = () => {
  const [activeDot, setActiveDot] = useState(1);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 pb-16">
      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col">
            {/* Photo */}
            <div className="w-full aspect-[4/4] bg-gray-100 rounded-sm overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.parentElement!.style.background = "#f3f4f6";
                  target.style.display = "none";
                }}
              />
            </div>

            {/* Info */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{member.role}</p>
              <SocialLinks />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-12">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveDot(i)}
            aria-label={`Page ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeDot
                ? "w-4 h-4 bg-red-500 ring-2 ring-red-200"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;