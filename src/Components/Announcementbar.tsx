import { ChevronDown } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <p className="text-center text-xs sm:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <a href="#" className="font-semibold underline hover:text-gray-300 transition-colors">
            ShopNow
          </a>
        </p>
        <div className="absolute right-0 flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
          <span className="text-xs sm:text-sm">English</span>
          <ChevronDown size={14} />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;