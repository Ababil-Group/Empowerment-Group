"use client";

import IndustiresLayout from "@/components/pages/industries/IndustriesLayout";
import SecondaryNav from "@/components/pages/industries/SecondaryNav";
import CommonBanner from "@/components/common/CommonBanner";
import {
  Search,
  Users,
  CheckCircle,
  BarChart,
  ClipboardCheck,
  HandshakeIcon,
} from "lucide-react";
import {
  Building2,
  Home,
  AreaChart,
  Briefcase,
  LineChart,
  Building,
  MapPin,
  Users2,
} from "lucide-react";

const RealEstatePage = () => {
  const specialities = [
    "Residential Real Estate",
    "Commercial Property",
    "Real Estate Development",
    "Property Management",
    "Real Estate Investment",
    "Construction Management",
    "Asset Management",
    "Facilities Management",
    "Real Estate Advisory",
    "Project Management",
    "Real Estate Finance",
  ];

  const representativeSearches = [
    {
      icon: Building2,
      title: "Chief Operating Officer",
      subtitle: "Leading Industrial Manufacturing Company",
    },
    {
      icon: Home,
      title: "Plant Head",
      subtitle: "Major Heavy Engineering Corporation",
    },
    {
      icon: AreaChart,
      title: "VP Supply Chain",
      subtitle: "Industrial Equipment Manufacturer",
    },
    {
      icon: Briefcase,
      title: "Director of Engineering",
      subtitle: "Precision Manufacturing Company",
    },
    {
      icon: LineChart,
      title: "Head of R&D",
      subtitle: "Power Generation Equipment Manufacturer",
    },
    {
      icon: Building,
      title: "Technology Director",
      subtitle: "Industrial Automation Solutions Provider",
    },
    {
      icon: MapPin,
      title: "Business Head",
      subtitle: "Industrial IoT Solutions Company",
    },
    {
      icon: Users2,
      title: "VP Human Resources",
      subtitle: "Leading Process Industry Corporation",
    },
  ];

  const methodologies = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "A Strategic Approach to Securing Top Talent",
      subtitle:
        "We use a structured methodology to identify and attract exceptional candidates.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Requirements Analysis",
      subtitle:
        "We thoroughly understand client needs and role specifications.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Candidate Identification",
      subtitle: " We leverage our extensive network to find the best matches.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Screening Process",
      subtitle:
        " In-depth evaluation to assess candidates' qualifications and fit.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Assessment",
      subtitle: " Comprehensive evaluation of shortlisted candidates.",
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      title: "Selection",
      subtitle: "Managing the final selection and offer process.",
    },
  ];

  return (
    <>
      <IndustiresLayout
        title="Real Estate"
        description={[
          "The real estate sector is a dynamic and evolving industry that requires visionary leadership. Our expertise in this domain enables us to identify and place leaders who can drive growth and innovation in property development and management.",
          "We work with developers, property management firms, and real estate investment companies to find executives who understand market dynamics, regulatory requirements, and emerging trends in sustainable development.",
          "Our comprehensive understanding spans across various segments including residential, commercial, retail, and industrial real estate, ensuring we can support your specific leadership needs within this diverse sector.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop"
        imageAlt="Real Estate Development"
      />
      <SecondaryNav
        specialities={specialities}
        methodologies={methodologies}
        representativeSearches={representativeSearches}
      />
      <CommonBanner
        title="Reach out to our Senior Consultants"
        subtitle="for your leadership hiring needs"
        buttonText="Get In Touch"
        buttonLink="/contact-us"
      />
    </>
  );
};

export default RealEstatePage;
