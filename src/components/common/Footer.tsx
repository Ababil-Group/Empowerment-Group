import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  // FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("title1")}</h3>
            <p className="mb-4 text-gray-400">{t("desc")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/empowermentuk"
                className="transition-colors hover:text-blue-500"
                target="_blank">
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/empowerment4492"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaTwitter />
              </a>
              {/* <a
                href="https://www.linkedin.com/company/empowerment-group-limited"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaLinkedinIn />
              </a> */}
              <a
                href="https://www.instagram.com/empowerment.group25/"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@EmpowermentGroupLimited"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@empowerment.group25?lang=en"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaTiktok />
              </a>
              <a
                href="https://www.pinterest.com/empowermentgroup25/"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("title2")}</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Projects
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 transition-colors hover:text-white">
                  {t("nav1")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("title3")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 transition-colors hover:text-white">
                <Link href="/services/board-advisory">{t("nav2")}</Link>
              </li>
              <li className="text-gray-400 transition-colors hover:text-white">
                <Link href="/services/executive-search">{t("nav3")}</Link>
              </li>
              <li className="text-gray-400 transition-colors hover:text-white">
                <Link href="/services/leadership">{t("nav4")}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("nav1")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="w-full p-2 border rounded-lg">
                <span className="text-[12px]">{t("location1.title")}</span>
                <p className="text-sm">{t("location1.address")}</p>
              </li>
              <li className="w-full p-2 border rounded-lg">
                <span className="text-[12px] ">{t("location2.title")}</span>
                <p className="text-sm">{t("location2.address")}</p>
              </li>
              <li>{t("phone")}: +40 784 805 998 </li>
              <li>{t("email")}: info@empowerment.group</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <p className="text-center text-gray-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
