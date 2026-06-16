import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, Eye } from "lucide-react";
import AnnouncementBar from "../Components/Announcementbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { assets } from "../assets/assets";

interface WishlistProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
}

interface RecommendedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  discount?: number;
  isNew?: boolean;
}

const initialWishlist: WishlistProduct[] = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image:assets.wishP_1,
    discount: 35,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image: assets.wishP_2,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: assets.wishP_3,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image: assets.wishP_4,
  },
];

const recommendedProducts: RecommendedProduct[] = [
  {
    id: 1,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    rating: 5,
    reviewCount: 65,
    image: assets.Fy_pc,
    discount: 35,
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    reviewCount: 65,
    image: assets.fy_monitor,
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    rating: 5,
    reviewCount: 65,
    image: assets.fy_mouse,
    isNew: true,
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    reviewCount: 65,
    image: assets.fy_keyboard,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-3.5 h-3.5 ${
          star <= Math.round(rating)
            ? "text-yellow-400"
            : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Wishlist = () => {
  const [wishlist, setWishlist] =
    useState<WishlistProduct[]>(initialWishlist);

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const moveAllToBag = () => {
    setWishlist([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        {/* Wishlist Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-base font-medium text-gray-900">
            Wishlist ({wishlist.length})
          </h2>

          <button
            onClick={moveAllToBag}
            className="px-8 py-2.5 border border-gray-400 hover:border-gray-700 text-sm font-medium text-gray-800 rounded transition-colors cursor-pointer"
          >
            Move All To Bag
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {wishlist.map((product) => (
            <div key={product.id} className="flex flex-col">
              <Link to={`/productDetails/${product.id}`}>
                {/* Image */}
                <div className="relative bg-gray-100 rounded-sm overflow-hidden aspect-square flex items-center justify-center group cursor-pointer">
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded z-10">
                      -{product.discount}%
                    </span>
                  )}

                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-50 transition-colors z-10 cursor-pointer"
                    aria-label="Remove"
                  >
                    <Trash2
                      size={14}
                      className="text-gray-600"
                    />
                  </button>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).style.display = "none";
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="pt-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-red-500">
                      ${product.price}
                    </span>

                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Add To Cart */}
              <button className="w-full bg-black hover:bg-gray-900 text-white text-xs font-medium py-2.5 flex items-center justify-center gap-2 transition-colors mt-2 cursor-pointer">
                <ShoppingCart size={13} />
                Add To Cart
              </button>
            </div>
          ))}
        </div>

        {/* Just For You Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-4 h-8 bg-red-500 rounded-sm inline-block flex-shrink-0" />
            <h2 className="text-base font-semibold text-gray-900">
              Just For You
            </h2>
          </div>

          <button className="px-8 py-2.5 border border-gray-400 hover:border-gray-700 text-sm font-medium text-gray-800 rounded transition-colors cursor-pointer">
            See All
          </button>
        </div>

        {/* Recommended Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative bg-gray-100 rounded-sm overflow-hidden aspect-square flex items-center justify-center group">
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded z-10">
                    -{product.discount}%
                  </span>
                )}

                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded z-10">
                    NEW
                  </span>
                )}

                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50 transition-colors z-10">
                  <Eye
                    size={14}
                    className="text-gray-600"
                  />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>

              <button className="w-full bg-black hover:bg-gray-900 text-white text-xs font-medium py-2.5 flex items-center justify-center gap-2 transition-colors cursor-pointer">
                <ShoppingCart size={13} />
                Add To Cart
              </button>

              <div className="pt-3">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-red-500">
                    ${product.price}
                  </span>

                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 mt-1.5">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-400">
                    ({product.reviewCount})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;