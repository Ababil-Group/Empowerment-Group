"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "ro", name: "Română", flag: "https://flagcdn.com/w20/ro.png" },
] as const;

const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current language from URL
  const currentLang = pathname.split("/")[1] as "en" | "ro";
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

  const handleLanguageChange = (lang: string) => {
    if (lang === currentLang) return;

    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    router.push(`/${lang}${pathWithoutLang}`);
    setIsOpen(false);
  };

  // Mobile version - simplified
  if (mobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium">
          <div className="flex items-center gap-2">
            <Image
              src={activeLang.flag}
              alt={`${activeLang.name} flag`}
              width={24}
              height={18}
              className="object-cover rounded-sm"
            />
            <span>{activeLang.name}</span>
          </div>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="pl-12 pb-2 space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={lang.code === currentLang}
                className={`flex items-center gap-2 w-full px-4 py-2 text-left ${
                  lang.code === currentLang ? "opacity-50" : ""
                }`}>
                <Image
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  width={24}
                  height={18}
                  className="object-cover rounded-sm"
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white text-primary px-3 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition">
        <Image
          src={activeLang.flag}
          alt={`${activeLang.name} flag`}
          width={20}
          height={16}
          className="object-cover rounded-sm"
        />
        <span className="hidden sm:inline">{activeLang.name}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={lang.code === currentLang}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm ${
                  lang.code === currentLang
                    ? "bg-gray-100 cursor-not-allowed opacity-70"
                    : "hover:bg-gray-100"
                }`}>
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
