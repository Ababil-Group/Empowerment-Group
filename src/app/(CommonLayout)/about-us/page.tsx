import React from "react";
import OurOrganization from "@/components/pages/about-us/OurOrganization";
import OurJourney from "@/components/pages/home/OurJourney";
import CommonBanner from "@/components/common/CommonBanner";
import OurCulture from "@/components/pages/about-us/OurCulture";

export const metadata = {
  title: "About Us - Empowerment Group",
  description:
    "Empowerment Group is a leading recruitment consultancy offering professional recruitment and talent acquisition services to companies in India and abroad.",
};

export default function About() {
  return (
    <>
      <OurOrganization />
      <OurJourney />
      <OurCulture />
      <CommonBanner
        title="Our Values"
        subtitle="Our values are the guiding principles that help us in our decision making and define our culture."
        buttonText="Get Started"
        buttonLink="/contact-us"
      />
    </>
  );
}
