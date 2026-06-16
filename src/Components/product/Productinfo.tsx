import { useState } from "react";
import {
  Minus,
  Plus,
  Heart,
  Truck,
  RefreshCw,
} from "lucide-react";

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["#4A90D9", "#E74C3C"];

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  originalPrice?: number;
  discount?: number;
}

interface ProductInfoProps {
  product: Product;
}

const StarRating = ({
  rating,
  count,
}: {
  rating: number;
  count: number;
}) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
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

    <span className="text-sm text-gray-500">
      ({count} Reviews)
    </span>

    <span className="text-gray-300">|</span>

    <span className="text-sm text-green-500 font-medium">
      In Stock
    </span>
  </div>
);

const ProductInfo = ({
  product,
}: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] =
    useState(0);

  const [selectedSize, setSelectedSize] =
    useState("M");

  const [quantity, setQuantity] = useState(1);

  const increment = () =>
    setQuantity((q) => q + 1);

  const decrement = () =>
    setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900">
        {product.name}
      </h1>

      {/* Rating */}
      <StarRating rating={4} count={150} />

      <div className="border-b border-gray-200" />

      {/* Price */}
      <p className="text-2xl font-normal text-gray-900">
        ${product.price}.00
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {product.description}
      </p>

      <div className="border-b border-gray-200" />

      {/* Colours */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-900 w-16">
          Colours:
        </span>

        <div className="flex items-center gap-2">
          {colors.map((color, i) => (
            <button
              key={i}
              onClick={() =>
                setSelectedColor(i)
              }
              className={` w-5 h-5 rounded-full ${
                selectedColor === i
                  ? "ring-2 ring-offset-2 ring-gray-400"
                  : "" 
              }`}
              style={{
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-900 w-16">
          Size:
        </span>

        <div className="flex items-center gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                setSelectedSize(size)
              }
              className={`w-9 h-9 text-xs cursor-pointer font-medium rounded border ${
                selectedSize === size
                  ? "bg-red-500 text-white border-red-500"
                  : "border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Buy */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-11">
          <button
            onClick={decrement}
            className="w-10 h-full flex items-center justify-center border-r cursor-pointer"
          >
            <Minus size={14} />
          </button>

          <span className="w-12 text-center">
            {quantity}
          </span>

          <button
            onClick={increment}
            className="w-10 h-full flex items-center justify-center bg-red-500 text-white cursor-pointer"
          >
            <Plus size={14} />
          </button>
        </div>

        <button className="flex-1 h-11 bg-red-500 text-white rounded cursor-pointer">
          Buy Now
        </button>

        <button className="w-11 h-11 border border-gray-300 rounded flex items-center justify-center cursor-pointer">
          <Heart size={18} />
        </button>
      </div>

      {/* Delivery */}
      <div className="border border-gray-200 rounded overflow-hidden mt-2">
        <div className="flex items-start gap-4 px-5 py-4 border-b border-gray-200">
          <Truck
            size={36}
            strokeWidth={1.5}
            className="text-gray-800 flex-shrink-0 mt-0.5 cursor-pointer"
          />

          <div>
            <p className="text-sm font-medium">
              Free Delivery
            </p>

            <p className="text-xs text-gray-600 underline">
              Enter your postal code for Delivery
              Availability
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 px-5 py-4">
          <RefreshCw
            size={36}
            strokeWidth={1.5}
            className="text-gray-800 flex-shrink-0 mt-0.5 cursor-pointer"
          />

          <div>
            <p className="text-sm font-medium">
              Return Delivery
            </p>

            <p className="text-xs text-gray-600">
              Free 30 Days Delivery Returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;