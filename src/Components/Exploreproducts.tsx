import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./Productcard";
import type { Product } from "./Productcard";
import {assets} from '../assets/assets'
const exploreProducts: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    originalPrice: undefined,
    rating: 3,
    reviewCount: 35,
    image:assets.product_1,
  },
  {
    id: 2,
    name: "Canon EOS DSLR Camera",
    price: 360,
    originalPrice: undefined,
    rating: 4,
    reviewCount: 95,
    image: assets.product_2,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    originalPrice: 960,
    rating: 5,
    reviewCount: 325,
    image: assets.product_3,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    originalPrice: undefined,
    rating: 4,
    reviewCount: 145,
    image:assets.product_4,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    originalPrice: 1160,
    rating: 5,
    reviewCount: 65,
    image: assets.product_5,
    colors: ["#FF0000", "#000000"],
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    originalPrice: 1360,
    rating: 5,
    reviewCount: 35,
    image: assets.product_6,
    colors: ["#FFD700", "#000080"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    originalPrice: 1160,
    rating: 4,
    reviewCount: 55,
    image:assets.product_7,
    colors: ["#000000", "#FF0000"],
    discount: 15,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    originalPrice: undefined,
    rating: 4,
    reviewCount: 55,
    image: assets.product_8,
    colors: ["#006400", "#8B4513"],
  },
];

const ExploreProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-8 bg-red-500 rounded-sm inline-block" />
            <span className="text-red-500 text-sm font-semibold">Our Products</span>
          </div>
          <h2 className="text-2xl font-bold text-black">Explore Our Products</h2>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-6" />

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {exploreProducts.map((product) => (
          <ProductCard key={product.id} product={product} showDiscount />
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-10">
        <button className="px-12 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;