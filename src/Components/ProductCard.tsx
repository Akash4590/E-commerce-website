import { Heart, Eye } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  colors?: string[];
}

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
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
};

const ProductCard = ({ product, showDiscount = true }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded overflow-hidden">
      {/* Image Container */}
      <div className="relative bg-gray-100 rounded-md overflow-hidden aspect-square flex items-center justify-center">
        {/* Discount Badge */}
        {showDiscount && product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded z-10">
            -{product.discount}%
          </span>
        )}
        {/* New Badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded z-10">
            NEW
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
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "";
            target.className = "hidden";
          }}
        />

        {/* Add to Cart hover bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs font-medium text-center py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer hover:bg-gray-900">
          Add To Cart
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-semibold text-red-500">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Color dots */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            {product.colors.map((color, i) => (
              <button
                key={i}
                className="w-3.5 h-3.5 rounded-full border-2 border-white ring-1 ring-gray-300 hover:ring-gray-500 transition-all"
                style={{ backgroundColor: color }}
                aria-label={`Color ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;