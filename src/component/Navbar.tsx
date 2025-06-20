import { useState } from "react";
import { Menu, X } from "lucide-react"; // أيقونات جميلة من lucide
import logo from "../imgs/360_F_448677702_KLkVl1wllKXe98PtmdHjqMDyFxARV1Yk.jpg";
import { Link } from "react-scroll"; // ضع صورة شعار الشركة في مجلد مناسب

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Services", "Skills", "Reviews"];

  return (
    <nav className="bg-white shadow-md  w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Roof Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-gray-800">RoofBuild</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link} className="hover:text-blue-600 cursor-pointer">
                <Link to={link}>{link}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2">
          <ul className="space-y-2 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link} className="hover:text-blue-600">
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
