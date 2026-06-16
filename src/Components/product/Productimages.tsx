import { useState } from "react";
import { assets } from "../../assets/assets";
interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductImagesProps {
  product: Product;
}

const ProductImages = ({ product }: ProductImagesProps) => {
  const thumbnails = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnail Strip */}
      <div className="flex flex-col gap-3">
        {thumbnails.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-[110px] h-[110px] flex-shrink-0 bg-gray-100 rounded overflow-hidden border-2 transition-all duration-200 ${
              activeIndex === i
                ? "border-gray-800"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img
              src={assets.Fy_pc}
              alt={`${product.name} ${i + 1}`}
              className="w-full h-full object-contain p-2"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[460px]">
        <img
          src={thumbnails[activeIndex]}
          alt={product.name}
          className="w-full h-full object-contain p-8 max-h-[460px]"
        />
      </div>
    </div>
  );
};

export default ProductImages;