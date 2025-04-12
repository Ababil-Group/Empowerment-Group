"use client";

import Hero from "@/components/pages/home/Hero";
import CountStatscard from "@/components/pages/home/CountStatscard";
import OurPeople from "@/components/pages/home/OurPeople";
import OurJourney from "@/components/pages/home/OurJourney";
import IndustrySpecialization from "@/components/pages/home/IndustrySpecialisation";
import OurServices from "@/components/pages/home/OurServices";
import CommonBanner from "@/components/common/CommonBanner";
import { useScrollTop } from "@/hooks/useScrollTop";

export default function Home() {
  useScrollTop();

  return (
    <main>
      <Hero />
      <CountStatscard />
      <OurPeople />
      <OurJourney />
      <IndustrySpecialization />
      <OurServices />
      <CommonBanner
        title="Transform Your Business"
        subtitle="Expert consulting solutions tailored to drive growth, innovation, and sustainable success for your organization."
        buttonText="Get Started"
        buttonLink="/contact-us"
      />
    </main>
  );
}
