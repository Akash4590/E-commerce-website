import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import AnnouncementBar from "../Components/Announcementbar";
import Breadcrumb from "../Components/About/Breadcrumb";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
            {/* ================= Left Contact Info ================= */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col">
              {/* Call To Us */}
              <div className="pb-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone size={18} className="text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Call To Us
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  We are available 24/7, 7 days a week.
                </p>

                <p className="text-sm font-medium text-gray-800">
                  Phone: +8801611112222
                </p>
              </div>

              {/* Divider */}
              <div className="border-b border-gray-200 my-2"></div>

              {/* Write To Us */}
              <div className="pt-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail size={18} className="text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Write To Us
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Fill out our form and we will contact you within 24 hours.
                </p>

                <p className="text-sm text-gray-800 mb-2">
                  customer@exclusive.com
                </p>

                <p className="text-sm text-gray-800">
                  support@exclusive.com
                </p>
              </div>
            </div>

            {/* ================= Contact Form ================= */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10">
              {/* Top Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none shadow-sm focus:ring-2 focus:ring-red-400 transition-all"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none shadow-sm focus:ring-2 focus:ring-red-400 transition-all"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone *"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none shadow-sm focus:ring-2 focus:ring-red-400 transition-all"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={9}
                className="w-full bg-gray-100 rounded-lg px-4 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none shadow-sm focus:ring-2 focus:ring-red-400 transition-all resize-none mb-6"
              />

              {/* Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-12 py-3.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;