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
        <section className="max-w-7xl mx-auto px-4 py-8 sm:py-10 lg:py-12 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8">
            
            {/* ================= Left Contact Info ================= */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-7 lg:p-8 flex flex-col">
              
              {/* Call To Us */}
              <div className="pb-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone size={18} className="text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Call To Us
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  We are available 24/7, 7 days a week.
                </p>

                <p className="text-sm font-medium text-gray-800 break-all">
                  Phone: +8801611112222
                </p>
              </div>

              <div className="border-b border-gray-200"></div>

              {/* Write To Us */}
              <div className="pt-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail size={18} className="text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Write To Us
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Fill out our form and we will contact you within 24 hours.
                </p>

                <p className="text-sm text-gray-800 break-all mb-2">
                  customer@exclusive.com
                </p>

                <p className="text-sm text-gray-800 break-all">
                  support@exclusive.com
                </p>
              </div>
            </div>

            {/* ================= Contact Form ================= */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-7 lg:p-10">
              
              {/* Top Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-400 transition"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-400 transition"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone *"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-400 transition"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={8}
                className="w-full bg-gray-100 rounded-lg px-4 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-400 transition resize-none mb-6"
              />

              {/* Button */}
              <div className="flex justify-center sm:justify-end">
                <button
                  onClick={handleSubmit}
                  className="
                    w-full sm:w-auto
                    px-10 py-3.5
                    bg-red-500 hover:bg-red-600 active:bg-red-700
                    text-white text-sm font-medium
                    rounded-lg shadow-md hover:shadow-lg
                    transition-all duration-300
                    cursor-pointer
                  "
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