import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Send } from "lucide-react";
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Exclusive</h2>
            <p className="text-sm font-semibold mb-4">Subscribe</p>
            <p className="text-xs text-gray-400 mb-4">Get 10% off your first order</p>
            <div className="flex items-center border border-gray-500 rounded px-3 py-2 gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-xs outline-none flex-1 text-white placeholder-gray-500"
              />
              <button aria-label="Subscribe">
                <Send size={16} className="text-white hover:text-gray-300 transition-colors" />
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>
                <a href="mailto:exclusive@gmail.com" className="hover:text-white transition-colors">
                  exclusive@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+88015888889999" className="hover:text-white transition-colors">
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Account</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Download App</h3>
            <p className="text-xs text-gray-500 mb-3">Save $3 with App New User Only</p>

            {/* QR + Store Badges */}
            <div className="flex gap-3 mb-4">
              {/* QR Code placeholder */}
              <div className="w-20 h-20 bg-white rounded flex items-center justify-center flex-shrink-0 p-1">
    <img
      src={assets.Qr_code}
      alt="QR Code"
      className="w-full h-full object-contain"
    />
  </div>

              <div className="flex flex-col gap-2">
                <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded px-2 py-1.5 cursor-pointer">
                  <p className="text-[9px] text-gray-400">GET IT ON</p>
                  <p className="text-xs font-semibold text-white">Google Play</p>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded px-2 py-1.5 cursor-pointer">
                  <p className="text-[9px] text-gray-400">Download on the</p>
                  <p className="text-xs font-semibold text-white">App Store</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: <FaFacebookF size={18} />, label: "Facebook" },
                { icon: <FaTwitter size={18} />, label: "Twitter" },
                { icon: <FaInstagram size={18} />, label: "Instagram" },
                { icon: <FaLinkedinIn  size={18} />, label: "LinkedIn" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © Copyright Exclusive {new Date().getFullYear()}. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;