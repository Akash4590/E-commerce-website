import { ChevronDown } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="hidden sm:block bg-black text-white px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Spacer */}
        <div className="w-20"></div>

        {/* Announcement Text */}
        <p className="text-sm text-center flex-1">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <a
            href="#"
            className="font-semibold underline hover:text-gray-300 transition-colors ml-1"
          >
            Shop Now
          </a>
        </p>

        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors text-sm">
          <span>English</span>
          <ChevronDown size={14} />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;