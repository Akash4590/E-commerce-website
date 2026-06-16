import { Heart, Eye } from "lucide-react";
import { assets } from "../../assets/assets";
interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  discount?: number;
}

const relatedProducts: RelatedProduct[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 4,
    reviewCount: 88,
    image: assets.Fy_pc,
    discount: 40,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviewCount: 75,
    image: assets.fy_monitor,
    discount: 35,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviewCount: 99,
    image: assets.fy_mouse,
    discount: 30,
  },
  {
    id: 4,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
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
        className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const RelatedItems = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-4 h-8 bg-red-500 rounded-sm inline-block flex-shrink-0" />
        <h2 className="text-lg font-semibold text-gray-900">Related Item</h2>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group relative bg-white">
            {/* Image Container */}
            <div className="relative bg-gray-100 rounded overflow-hidden aspect-square flex items-center justify-center">
              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded z-10">
                  -{product.discount}%
                </span>
              )}

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-50 transition-colors">
                  <Heart size={14} className="text-gray-700" />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-50 transition-colors">
                  <Eye size={14} className="text-gray-700" />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Add to Cart hover bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs font-medium text-center py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer hover:bg-gray-900">
                Add To Cart
              </div>
            </div>

            {/* Product Info */}
            <div className="pt-3">
              <h3 className="text-sm font-medium text-gray-900 truncate">
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
              <div className="flex items-center gap-1.5 mt-1">
                <StarRating rating={product.rating} />
                <span className="text-xs text-gray-400">({product.reviewCount})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedItems;