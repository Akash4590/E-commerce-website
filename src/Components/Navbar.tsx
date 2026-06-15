import { Search, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  showIcons?: boolean;
}

const Navbar = ({ showIcons = true }: NavbarProps) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 py-6 mt-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Exclusive</h1>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="font-bold text-sm text-gray-800 hover:text-black hover:underline underline-offset-4"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-3 py-2 gap-2 w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-xs outline-none w-full"
            />
            <Search size={18} />
          </div>

          {/* Show only if enabled */}
          {showIcons && (
            <>
              <button className="relative p-1">
                <Heart size={22} />
              </button>

              <button className="relative p-1">
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;