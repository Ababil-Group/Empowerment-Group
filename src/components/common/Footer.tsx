import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Empowerment Group</h3>
            <p className="text-gray-400 mb-4">
              Delivering expert consulting and innovative solutions to
              businesses across the globe.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/empowermentuk"
                className="hover:text-blue-500 transition-colors"
                target="_blank">
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/empowerment4492"
                className="hover:text-blue-500 text-xl transition-colors"
                target="_blank">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/empowerment-group-limited"
                className="hover:text-blue-500 text-xl transition-colors"
                target="_blank">
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/empowerment.group25/"
                className="hover:text-blue-500 text-xl transition-colors"
                target="_blank">
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@EmpowermentGroupLimited"
                className="hover:text-blue-500 text-xl transition-colors"
                target="_blank">
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@empowerment.group25?lang=en"
                className="hover:text-blue-500 text-xl transition-colors"
                target="_blank">
                <FaTiktok />
              </a>
              <a
                href="https://www.pinterest.com/empowermentgroup25/"
                className="hover:text-blue-500 text-xl transition-colors"
                target="_blank">
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors">
                <Link href="/services/board-advisory">Board Advisory</Link>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                <Link href="/services/executive-search">
                  Executive Talent Search
                </Link>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                <Link href="/services/leadership">Leadership Recruitment</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="w-full border p-2 rounded-lg">
                <span className="text-[12px]">
                  Corporate Headquarter - Qatar:
                </span>
                <p className="text-sm">
                  World Wide Business Centre, D Ring Rd, Doha, Qatar
                </p>
              </li>
              <li className="w-full border  p-2 rounded-lg">
                <span className="text-[12px] ">Head Office - Romania:</span>
                <p className="text-sm">
                  Municipiul Slobozia, Starda VIILOR,Nr.3,Bloc R3,Scara, A,Etaj
                  P,Ap.1,Judet Ialomita, Romania
                </p>
              </li>
              <li>Phone: +40 784 805 998 </li>
              <li>Email: info@empowerment.group</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Empowerment Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
