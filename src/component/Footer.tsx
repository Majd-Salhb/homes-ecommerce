// components/Footer.jsx
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Description */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Premium Roofing Co.
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We are a specialized company in designing and installing residential
            and commercial roofs using the highest quality materials. Trusted by
            our clients for over 10 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Our Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>Metal Roof Installation</li>
            <li>Waterproofing & Insulation</li>
            <li>Roof Maintenance</li>
            <li>Modern Roof Designs</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhone /> +963 988 123 456
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@roofingco.com
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp /> WhatsApp
            </li>
            <li className="flex gap-4 mt-4 text-xl">
              <a href="#" className="hover:text-yellow-400">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} All rights reserved | Premium Roofing Co.
      </div>
    </motion.footer>
  );
};

export default Footer;
