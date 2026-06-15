import { assets } from "../../assets/assets";
const OurStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — Text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Our Story
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Launced in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sallers and 300 brands and serves 3 millioons customers across
            the region.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a very
            fast. Exclusive offers a diverse assotment in categories ranging from
            consumer.
          </p>
        </div>

        {/* Right — Image */}
        <div className="w-full overflow-hidden rounded-sm">
          <img
            src={assets.About_1st}
            alt="Our Story"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.parentElement!.className =
                target.parentElement!.className + " bg-pink-200 min-h-[400px]";
              target.style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;