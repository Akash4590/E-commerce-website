
import AnnouncementBar from "../Components/Announcementbar";
import Navbar from "../Components/Navbar";
import Breadcrumb from "../Components/About/Breadcrumb";
import ProductImages from "../Components/product/Productimages";
import ProductInfo from "../Components/product/Productinfo";
import RelatedItems from "../Components/product/Relateditems"
import Footer from "../Components/Footer"
const ProductDetail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Account", href: "/" },
            { label: "Gaming", href: "/" },
            { label: "Havic HV G-92 Gamepad" },
          ]}
        />

        {/* Product Section */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            {/* Left — Images */}
            <ProductImages />

            {/* Right — Info */}
            <ProductInfo />
          </div>
        </section>

        {/* Related Items */}
        <RelatedItems />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;