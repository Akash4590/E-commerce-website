import ProductCard from "./Productcard";
import type { Product } from "./Productcard";
import { assets } from "../assets/assets";

const bestSellingProducts: Product[] = [
  {
    id: 1,
    name: "The North Coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviewCount: 65,
    image: assets.cart1_img,
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviewCount: 35,
    image: assets.cart2_img,
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviewCount: 65,
    image: assets.cart3_img,
  },
  {
    id: 4,
    name: "Small BookShelf",
    price: 360,
    rating: 5,
    reviewCount: 65,
    image: assets.cart4_img,
  },
];

const BestSelling = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8 sm:items-end">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-8 bg-red-500 rounded-sm inline-block" />
            <span className="text-red-500 text-sm font-semibold">
              This Month
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
            Best Selling
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            Products
          </h2>
        </div>

        {/* View All Button */}
       <button
  className="
    flex-shrink-0
    w-[120px] sm:w-[140px]
    h-10 sm:h-11
    px-4
    bg-red-500 hover:bg-red-600
    text-white text-sm sm:text-base
    font-medium
    rounded-md
    whitespace-nowrap
    flex items-center justify-center
    transition-colors
  "
>
 <span className="whitespace-nowrap text-sm sm:text-base font-medium">
    View All
  </span>
</button>
      </div>

      {/* Products */}
      <div className="flex flex-wrap justify-center lg:justify-between gap-5 sm:gap-6">
        {bestSellingProducts.map((product) => (
          <div
            key={product.id}
            className="w-[160px] sm:w-[220px] lg:w-[255px] flex-shrink-0"
          >
            <ProductCard
              product={product}
              showDiscount={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;