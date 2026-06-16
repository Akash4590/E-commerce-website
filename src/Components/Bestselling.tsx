import ProductCard from "./Productcard";
import type { Product } from "./Productcard";;
import {assets} from "../assets/assets"
const bestSellingProducts: Product[] = [
  {
    id: 1,
    name: "The North Coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviewCount: 65,
    image:assets.cart1_img ,
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviewCount: 35,
    image:assets.cart2_img,
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
    originalPrice: undefined,
    rating: 5,
    reviewCount: 65,
    image: assets.cart4_img,
  },
];

const BestSelling = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
     <div className="flex items-end justify-between mb-4 sm:mb-6">
  <div>
    <div className="flex items-center gap-2 mb-2 sm:mb-3">
      <span className="w-3 h-6 sm:w-4 sm:h-8 bg-red-500 rounded-sm inline-block" />
      <span className="text-xs sm:text-sm font-semibold text-red-500">
        This Month
      </span>
    </div>

    <h2 className="text-lg sm:text-2xl font-bold text-black">
      Best Selling Products
    </h2>
  </div>

  <button className="px-4 sm:px-8 py-2 sm:py-3 bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-medium rounded transition-colors">
    View All
  </button>
</div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 cursor-pointer">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} showDiscount={false} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;