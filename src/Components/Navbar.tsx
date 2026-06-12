import { Search, Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const navLinks = ["Home", "Contact", "About", "Sign Up"];

  return (
    <nav className="bg-white border-b border-gray-200 py-6 mt-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-bold tracking-wide text-black">
            Exclusive
          </h1>
        </div>

        {/* Nav Links */}
       <ul className="hidden md:flex items-center gap-8 lg:gap-10">
  {navLinks.map((link) => (
    <li key={link}>
      <a
        href="#"
        className="font-bold text-sm text-gray-800 hover:text-black hover:underline underline-offset-4 transition-colors"
      >
        {link}
      </a>
    </li>
  ))}
</ul>

        {/* Search + Icons */}
        <div className="flex items-center gap-4 lg:gap-5">
          {/* Search */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-3 py-2 gap-2 w-52 lg:w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-xs outline-none w-full text-gray-600 placeholder-gray-400"
            />
            <Search
              size={18}
              className="text-gray-500 flex-shrink-0 cursor-pointer"
            />
          </div>

          {/* Wishlist */}
          <button
            className="relative p-1 hover:text-red-500 transition-colors"
            aria-label="Wishlist"
          >
            <Heart size={22} />
          </button>

          {/* Cart */}
          <button
            className="relative p-1 hover:text-red-500 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;