import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  showIcons?: boolean;
}

const Navbar = ({ showIcons = true }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/Wishlist" },
    { name: "Sign Up", path: "/signup" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-6 mt-4 relative z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <h1 className="text-3xl font-bold tracking-wide text-black">
            Exclusive
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-bold text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-black underline underline-offset-8"
                    : "text-gray-800 hover:text-black hover:underline underline-offset-8"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 gap-2 w-52 lg:w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-xs outline-none w-full text-gray-700 placeholder-gray-400"
            />
            <Search
              size={18}
              className="text-gray-500 flex-shrink-0 cursor-pointer"
            />
          </div>

          {/* Icons */}
          {showIcons && (
            <>
              <button className="relative p-1 hover:text-red-500 transition-colors cursor-pointer">
                <Heart size={22} />
              </button>

              <button className="relative p-1 hover:text-red-500 transition-colors cursor-pointer">
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  2
                </span>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <h2 className="text-2xl font-bold">Menu</h2>

          <button className="cursor-pointer" onClick={closeMenu} aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 pt-6">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm outline-none w-full"
            />
            <Search size={18} className="text-gray-500" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <ul className="flex flex-col gap-5 px-5 py-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={closeMenu}
                className={`block text-lg font-semibold transition-colors ${
                  location.pathname === link.path
                    ? "text-red-500 underline underline-offset-8"
                    : "text-gray-800 hover:text-red-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icons */}
        {showIcons && (
          <div className="border-t px-5 py-6">
            <div className="flex items-center gap-6">
              <button className="relative hover:text-red-500 transition-colors cursor-pointer">
                <Heart size={24} />
              </button>

              <button className="relative hover:text-red-500 transition-colors cursor-pointer">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;