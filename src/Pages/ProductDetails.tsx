import { useParams } from "react-router-dom";
import AnnouncementBar from "../Components/Announcementbar";
import Navbar from "../Components/Navbar";
import Breadcrumb from "../Components/About/Breadcrumb";
import ProductImages from "../Components/product/Productimages";
import ProductInfo from "../Components/product/Productinfo";
import RelatedItems from "../Components/product/Relateditems";
import Footer from "../Components/Footer";
import { products } from "../data/products"; 

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <Breadcrumb
          items={[
            { label: "Account", href: "/" },
            { label: "Products", href: "/wishlist" },
            { label: product.name },
          ]}
        />

        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            <ProductImages product={product} />
            <ProductInfo product={product} />
          </div>
        </section>

        <RelatedItems />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;