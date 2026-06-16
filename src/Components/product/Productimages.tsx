import { useState } from "react";

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
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
      {/* Thumbnail Strip */}
      <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible justify-center lg:justify-start">
        {thumbnails.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-[110px] lg:h-[110px]
              flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border-2
              transition-all duration-200 ${
                activeIndex === i
                  ? "border-gray-800"
                  : "border-transparent hover:border-gray-300"
              }`}
          >
            <img
              src={src}
              alt={`${product.name} ${i + 1}`}
              className="w-full h-full object-contain p-2 cursor-pointer"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center h-[320px] sm:h-[420px] lg:min-h-[500px]">
        <img
          src={thumbnails[activeIndex]}
          alt={product.name}
          className="w-full h-full object-contain p-4 sm:p-6 lg:p-8 max-h-full transition-all duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductImages;