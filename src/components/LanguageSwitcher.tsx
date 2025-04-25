"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "hr", name: "Hrvatski", flag: "https://flagcdn.com/w20/hr.png" },
] as const;

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current language from URL
  const currentLang = pathname.split("/")[1] as "en" | "hr";
  const activeLang =
    languages.find((l) => l.code === currentLang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: (typeof languages)[number]["code"]) => {
    if (lang === currentLang) return;

    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    router.push(`/${lang}${pathWithoutLang}`);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white
          px-3 py-2 rounded-md text-sm font-medium
          hover:bg-gray-50 dark:hover:bg-gray-700
          border border-gray-200 dark:border-gray-700
          transition-colors duration-200
          focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-red-500
        `}>
        <Image
          src={activeLang.flag}
          alt={`${activeLang.name} flag`}
          width={20}
          height={16}
          className="object-cover rounded-sm"
        />
        <span>{activeLang.name}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="
          absolute right-0 mt-2 w-40 origin-top-right
          bg-white dark:bg-gray-800 rounded-md shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none z-50
        ">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={lang.code === currentLang}
                className={`
                  flex items-center gap-2 w-full px-4 py-2 text-sm
                  ${
                    lang.code === currentLang
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-400 cursor-not-allowed"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                `}>
                <Image
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  width={20}
                  height={16}
                  className="object-cover rounded-sm"
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
