"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Linkedin, Facebook } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import AnimateInView from "@/components/animation/AnimateInView";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/components/animation/variants";
import PageTransition from "@/components/animation/PageTransition";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const images = ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg"];

const containerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const t = useTranslations("hero");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  if (!mounted) return null;

  return (
    <PageTransition>
      <motion.section
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative min-h-[80vh] flex items-center bg-white py-6 md:py-12 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <AnimateInView
              variants={fadeInRight}
              delay={0.6}
              className="relative mt-0 mb-8 md:mb-0 md:mt-0 order-1 md:order-2">
              <div
                className="absolute -right-8 top-8 w-full h-full rounded-2xl 
                          bg-primary/20 blur-lg transform"
              />
              <Carousel
                setApi={setApi}
                className="relative w-full overflow-hidden rounded-2xl shadow-[2px_4px_16px_rgba(0,0,0,0.15)]"
                opts={{
                  loop: true,
                  align: "center",
                  skipSnaps: false,
                  dragFree: false,
                }}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      {/* Adjusted image heights for better proportions */}
                      <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px]">
                        <Image
                          src={image}
                          alt={`Carousel Image ${index + 1}`}
                          fill
                          priority
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
                        activeIndex === index ? "bg-black" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </AnimateInView>

            {/* Content section */}
            <AnimateInView
              variants={fadeInLeft}
              delay={0.6}
              className="space-y-2 md:space-y-8 order-2 md:order-1">
              <AnimateInView variants={fadeInUp} delay={0.7}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t("title")}
                  <span className="block text-primary mt-0.5 md:mt-2">
                    {t("subtitle")}
                  </span>
                </h1>
              </AnimateInView>

              <AnimateInView variants={fadeInUp} delay={0.8}>
                <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-lg">
                  Expert consulting solutions tailored to drive growth,
                  innovation, and sustainable success for your organization.
                </p>
              </AnimateInView>

              <AnimateInView variants={fadeInUp} delay={0.9}>
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 md:pt-4">
                  <div className="flex flex-row items-center justify-between w-full sm:w-auto gap-3 md:gap-4">
                    <Button
                      size="lg"
                      className="w-auto text-sm sm:text-base md:text-xl bg-black hover:bg-primary/90 text-white 
                                flex items-center justify-center gap-2 md:gap-3 rounded-full 
                                py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8
                                transition-all duration-300 ease-in-out transform hover:scale-105 
                                relative overflow-hidden group">
                      <span className="relative z-10">Get in Touch</span>
                      <span className="bg-white p-1 sm:p-1.5 md:p-2 rounded-full relative z-10">
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-black" />
                      </span>
                      <div
                        className="absolute inset-0 bg-primary transform scale-0 origin-right 
                                    transition-transform duration-300 ease-out group-hover:scale-100"
                      />
                    </Button>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-3 sm:gap-3 md:gap-4">
                      <a
                        href="https://x.com/empowerment4492"
                        className="text-gray-600 hover:text-primary transition-colors"
                        target="_blank">
                        <Twitter className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/empowerment-group-limited"
                        className="text-gray-600 hover:text-primary transition-colors"
                        target="_blank">
                        <Linkedin className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </a>
                      <a
                        href="https://www.facebook.com/empowermentuk"
                        className="text-gray-600 hover:text-primary transition-colors"
                        target="_blank">
                        <Facebook className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            </AnimateInView>
          </div>
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default Hero;
