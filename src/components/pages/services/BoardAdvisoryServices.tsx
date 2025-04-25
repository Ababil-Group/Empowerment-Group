"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/animation/PageTransition";
import {
  organizationContainerVariants,
  organizationItemVariants,
} from "@/components/animation/variants";
import { useScrollTop } from "@/hooks/useScrollTop";

const BoardAdvisoryServices = () => {
  useScrollTop();

  return (
    <>
      <PageTransition>
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={organizationContainerVariants}
          className="bg-primary text-white">
          <div className="container mx-auto px-4 md:px-5 lg:px-7 max-w-8xl py-4 md:py-6">
            <motion.div variants={organizationItemVariants}>
              <Breadcrumb className="mb-4 md:mb-6">
                <BreadcrumbList className="text-xs md:text-sm">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="text-white/80 hover:text-white">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/60" />
                  <BreadcrumbPage className="text-white font-medium">
                    Services
                  </BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Centered Title */}
            <motion.h1
              variants={organizationItemVariants}
              className="text-2xl md:text-4xl font-bold text-center">
              Board Advisory Services
            </motion.h1>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <motion.section
          variants={organizationContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Column (Image) */}
              <motion.div
                variants={organizationItemVariants}
                className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden order-1">
                <Image
                  src="/images/board-advisory.jpg"
                  alt="Board Advisory Services"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </motion.div>
              <motion.div
                variants={organizationItemVariants}
                className="space-y-3 md:space-y-4 order-2">
                <motion.div
                  variants={organizationItemVariants}
                  className="space-y-3 text-sm sm:text-base text-gray-600">
                  <motion.p
                    variants={organizationItemVariants}
                    className="leading-relaxed">
                    We partner with organizations to build and sustain
                    high-performing boards through expert guidance in board
                    composition, succession planning, and governance.
                  </motion.p>

                  <motion.p
                    variants={organizationItemVariants}
                    className="leading-relaxed">
                    Backed by decades of cross-industry experience, our tailored
                    solutions enhance board effectiveness and strengthen
                    corporate governance.
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={organizationItemVariants}
                  className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-3 md:pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="relative overflow-hidden border-2 border-primary text-primary
                           hover:bg-primary hover:text-white px-6 py-3 rounded-full 
                           w-full xs:w-auto text-base transition-all duration-300">
                    <Link href="/#allservices">All Services</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </PageTransition>
    </>
  );
};

export default BoardAdvisoryServices;
