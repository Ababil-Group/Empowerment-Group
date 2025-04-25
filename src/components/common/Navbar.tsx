"use client";

import React, { HTMLAttributes, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from "../LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft } from "lucide-react";

const Navbar: React.FC<HTMLAttributes<HTMLElement>> = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Reset active menu when pathname changes
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Empowerment Group"
                  width={120}
                  height={32}
                  priority
                  className="h-6 w-auto sm:h-8 md:h-10" // Smaller on mobile
                />
              </Link>
            </div>

            {!isMobile && (
              <div className="hidden md:block h-8 w-[2px] bg-gray-300" />
            )}

            {/* Main Navigation */}
            {!isMobile && (
              <div className="hidden md:block">
                <NavigationMenu
                  value={activeMenu}
                  onValueChange={setActiveMenu}>
                  <NavigationMenuList className="flex items-center md:gap-1 lg:gap-4">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`text-lg font-semibold relative group ${
                          isActive("/about-us") ? "text-primary" : ""
                        }`}>
                        About Us
                        {isActive("/about-us") && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="border-t-2 border-t-primary">
                        <ul className="min-w-[400px] p-4 space-y-3">
                          <li>
                            <Link
                              className="block p-2 text-base font-medium hover:bg-accent rounded-md"
                              href="/about-us">
                              Our Organization
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 hover:bg-accent rounded-md font-medium"
                              href="/about-us#journey">
                              Our Journey
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 hover:bg-accent rounded-md font-medium"
                              href="/about-us#ourculture">
                              Our Culture
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`text-lg font-semibold relative group ${
                          isActive("/services") ? "text-primary" : ""
                        }`}>
                        Services
                        {isActive("/services") && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="border-t-2 border-t-primary">
                        <ul className="grid w-[400px] gap-3 p-4">
                          <li>
                            <Link
                              className="block p-2 text-base font-medium hover:bg-accent rounded-md"
                              href="/services/board-advisory">
                              Board Advisory Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 hover:bg-accent rounded-md font-medium"
                              href="/services/executive-search">
                              Executive Search
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 hover:bg-accent rounded-md font-medium"
                              href="/services/leadership">
                              Leadership Hiring
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`text-lg font-semibold relative group ${
                          isActive("/expertise") ? "text-primary" : ""
                        }`}>
                        Expertise
                        {isActive("/expertise") && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="border-t-2 border-t-primary">
                        <div className="w-[600px] p-6 flex">
                          {/* Left side - Title */}
                          <div className="w-1/4 p-2 rounded-lg">
                            <div className="flex items-center gap-2 group cursor-default">
                              <h4 className="font-bold text-base text-gray-900 group-hover:text-primary transition-colors">
                                Industries
                              </h4>
                              <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                          </div>

                          {/* Right side - Industries list */}
                          <div className="w-3/4">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 relative">
                              <div className="absolute left-1/2 top-2 bottom-2 w-[2px] bg-gray-200" />

                              <Link
                                className="block p-2 hover:bg-accent rounded-md font-medium"
                                href="/expertise/building-materials">
                                Building Materials
                              </Link>
                              <Link
                                className="block p-2 hover:bg-accent rounded-md font-medium"
                                href="/expertise/education">
                                Education
                              </Link>
                              <Link
                                className="block p-2 hover:bg-accent rounded-md font-medium"
                                href="/expertise/industrial">
                                Industrial
                              </Link>
                              <Link
                                className="block p-2 hover:bg-accent rounded-md font-medium"
                                href="/expertise/development">
                                Development
                              </Link>
                              <Link
                                className="block p-2 hover:bg-accent rounded-md font-medium"
                                href="/expertise/real-estate">
                                Real Estate
                              </Link>
                              <Link
                                className="block p-2 hover:bg-accent rounded-md font-medium"
                                href="/expertise/technology">
                                Technology
                              </Link>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <NavigationMenuViewport />
                </NavigationMenu>
              </div>
            )}
          </div>

          {/* Right section */}
          <div className="flex gap-2 items-center">
            <Button
              asChild
              variant="default"
              className="relative bg-black text-white overflow-hidden transition-all duration-300 
              h-7 md:h-10 text-xs md:text-base group rounded-full 
              mr-14 md:mr-0 px-2 md:px-6">
              <Link
                href="/contact-us"
                className="relative flex items-center justify-center px-2 md:px-6">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-primary/90 transform scale-0 origin-top-right transition-transform duration-300 ease-out group-hover:scale-100 rounded-full" />
              </Link>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
