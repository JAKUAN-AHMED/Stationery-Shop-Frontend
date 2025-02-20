import { useState } from "react";
import logo from "./../../assets/images/logo.svg";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gray-900 font-orbitron text-white py-12 relative">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
          {/* Left: Branding */}
          <div className="text-center lg:text-left">
            <img src={logo} alt="Logo" className="h-12 mx-auto lg:mx-0" />
            <p className="mt-4 text-gray-400 text-[8px] md:text-sm lg:text-base max-w-md">
              Explore premium stationery that fuels creativity and enhances your
              workflow. Stay ahead with innovative tools and stylish designs.
            </p>
          </div>

          {/* Center: Newsletter Subscription */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-[8px] md:text-sm lg:text-base mt-1">
              Join our newsletter for exclusive deals and creative inspiration!
            </p>
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 pl-5 bg-gray-800 text-white rounded-full border border-gray-700 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="absolute top-1 right-1 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white flex items-center gap-2 transition duration-300">
                Subscribe <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Help Section */}
          <div>
            <h4 className="text-sm font-semibold">Help</h4>
            <ul className="mt-4 space-y-3 text-gray-400 text-[8px] md:text-sm lg:text-base">
              <li className="hover:text-blue-500 transition cursor-pointer">
                Track Order
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Shipping Policy
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Return & Refunds
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="mt-4 space-y-3 text-gray-400 text-[8px] md:text-sm lg:text-base">
              <li className="hover:text-blue-500 transition cursor-pointer">
                New Arrivals
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Best Sellers
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Gift Cards
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                All Products
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
              >
                <Facebook size={32} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
              >
                <Instagram size={32} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"
              >
                <Youtube size={32} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"
              >
                <Twitter size={32} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition transform hover:scale-110"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="text-gray-400 text-[8px] md:text-sm lg:text-base mt-3">
              Email: support@ethereal.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-[8px] md:text-sm lg:text-base">
            © {currentYear} The Ethereal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
