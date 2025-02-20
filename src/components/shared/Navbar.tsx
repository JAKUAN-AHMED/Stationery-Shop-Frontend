import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import logo from "./../../assets/images/logo.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 fixed font-orbitron border-2 border-radius-2xl shadow-lg z-10 w-full">
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-black  font-orbitron text-[8px] md:text:sm lg:text-xl font-bold ml-2">
            ETHEREAL
          </span>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center w-1/3">
          <Input
            type="text"
            placeholder="Search"
            className="w-full bg-white rounded-full pl-4 pr-10 border-none"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>

        {/* Icons and Menu */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>

          <Link to="/login">
            <User size={24} />
          </Link>

          {/* Mobile Menu Button */}
          <Button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block py-2 px-4 text-[10px] hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="block py-2 px-4 text-[10px] hover:bg-gray-200"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-[10px] hover:bg-gray-200"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
