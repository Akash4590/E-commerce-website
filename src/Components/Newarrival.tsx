
import {assets} from '../assets/assets'
const NewArrival = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-8 bg-red-500 rounded-sm inline-block" />
          <span className="text-red-500 text-sm font-semibold">Featured</span>
        </div>
        <h2 className="text-2xl font-bold text-black">New Arrival</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] h-auto md:h-[600px]">
        {/* Left Large Banner - PlayStation */}
        <div className="relative bg-black rounded-lg overflow-hidden flex items-end p-8 min-h-[300px] md:min-h-0">
          <img
            src={assets.PS5_c}
            alt="PlayStation 5"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0.1";
            }}
          />
          <div className="relative z-10">
            <h3 className="text-white text-xl font-semibold mb-2">PlayStation 5</h3>
            <p className="text-gray-300 text-xs mb-4 max-w-[200px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="#" className="text-white text-sm font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors">
              Shop Now
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-rows-2 gap-[32px] h-full">
          {/* Top Right - Women's Collections */}
          <div className="relative bg-black  rounded-lg overflow-hidden flex items-end p-8 min-h-[200px]">
            <img
              src={assets.Women_c}
              alt="Women's Collections"
className="absolute inset-0 w-full h-full object-contain opacity-70"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0.1";
              }}
            />
            <div className="relative z-10">
              <h3 className="text-white text-lg font-semibold mb-1">Women's Collections</h3>
              <p className="text-gray-300 text-xs mb-3 max-w-[200px]">
                Featured woman collections that give you another vibe.
              </p>
              <a href="#" className="text-white text-sm font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors">
                Shop Now
              </a>
            </div>
          </div>

          {/* Bottom Row - Two cards */}
          <div className="grid grid-cols-2 gap-[32px]">
            {/* Speakers */}
            <div className="relative bg-black rounded-lg overflow-hidden flex items-end p-6 min-h-[180px]">
              <img
                src={assets.Speaker_c}
                alt="Speakers"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0.1";
                }}
              />
              <div className="relative z-10">
                <h3 className="text-white text-sm font-semibold mb-1">Speakers</h3>
                <p className="text-gray-300 text-xs mb-2">Amazon wireless speakers</p>
                <a href="#" className="text-white text-xs font-semibold underline underline-offset-2 hover:text-gray-300 transition-colors">
                  Shop Now
                </a>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black  rounded-lg overflow-hidden flex items-end p-6 min-h-[180px]">
              <img
                src={assets.Gucci_c}
                alt="Perfume"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0.1";
                }}
              />
              <div className="relative z-10">
                <h3 className="text-white text-sm font-semibold mb-1">Perfume</h3>
                <p className="text-gray-300 text-xs mb-2">GUCCI INTENSE OUD EDP</p>
                <a href="#" className="text-white text-xs font-semibold underline underline-offset-2 hover:text-gray-300 transition-colors">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;