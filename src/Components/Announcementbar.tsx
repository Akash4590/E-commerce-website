import { ChevronDown } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Empty div for desktop alignment */}
        <div className="hidden sm:block w-20"></div>

        {/* Announcement Text */}
        <p className="text-[11px] sm:text-sm text-center">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <a
            href="#"
            className="font-semibold underline hover:text-gray-300 transition-colors ml-1"
          >
            Shop Now
          </a>
        </p>

        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors text-xs sm:text-sm">
          <span>English</span>
          <ChevronDown size={14} />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;