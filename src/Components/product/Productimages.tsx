import { useState } from "react";

const thumbnails = [
  "/images/product-thumb-1.jpg",
  "/images/product-thumb-2.jpg",
  "/images/product-thumb-3.jpg",
  "/images/product-thumb-4.jpg",
];

const ProductImages = () => {
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
              src={src}
              alt={`Product view ${i + 1}`}
              className="w-full h-full object-contain p-2"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "";
                (e.target as HTMLImageElement).parentElement!.style.background = "#f3f4f6";
              }}
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[460px]">
        <img
          src={thumbnails[activeIndex]}
          alt="Product main"
          className="w-full h-full object-contain p-8 max-h-[460px]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0";
          }}
        />
      </div>
    </div>
  );
};

export default ProductImages;