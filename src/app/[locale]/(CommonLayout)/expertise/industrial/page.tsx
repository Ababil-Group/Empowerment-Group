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
  Factory,
  Cog,
  Truck,
  Wrench,
  Battery,
  Cpu,
  LineChart,
  Users2,
} from "lucide-react";

const IndustrialPage = () => {
  const specialities = [
    "Heavy Engineering",
    "Industrial Automation",
    "Power Generation Equipment",
    "Material Handling Equipment",
    "Industrial Manufacturing",
    "Process Industries",
    "Machine Tools",
    "Industrial Electronics",
    "Industrial IoT",
    "Precision Engineering",
    "Industrial Equipment",
    "Manufacturing Systems",
    "Industrial Robotics",
  ];

  const representativeSearches = [
    {
      icon: Factory,
      title: "Chief Operating Officer",
      subtitle: "Leading Industrial Manufacturing Company",
    },
    {
      icon: Cog,
      title: "Plant Head",
      subtitle: "Major Heavy Engineering Corporation",
    },
    {
      icon: Truck,
      title: "VP Supply Chain",
      subtitle: "Industrial Equipment Manufacturer",
    },
    {
      icon: Wrench, // Changed from Tool to Wrench
      title: "Director of Engineering",
      subtitle: "Precision Manufacturing Company",
    },
    {
      icon: Battery,
      title: "Head of R&D",
      subtitle: "Power Generation Equipment Manufacturer",
    },
    {
      icon: Cpu,
      title: "Technology Director",
      subtitle: "Industrial Automation Solutions Provider",
    },
    {
      icon: LineChart,
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
      title: "Requirements Analysis",
      subtitle:
        "In-depth understanding of client needs and role specifications.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Candidate Identification",
      subtitle: "Utilizing our network to pinpoint potential candidates.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Screening Process",
      subtitle:
        " Comprehensive evaluation of candidates’ qualifications and fit.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Assessment",
      subtitle: "Thorough assessment of shortlisted candidates.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Selection",
      subtitle: " Final candidate selection and offer management.",
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      title: "Onboarding",
      subtitle: " Ensuring a smooth transition and integration into the role.",
    },
  ];

  return (
    <>
      <IndustiresLayout
        title="Industrial"
        description={[
          "The industrial sector is the cornerstone of manufacturing and technological progress. With our deep expertise, we specialize in identifying and placing leaders who drive operational excellence and foster innovation.",
          "We collaborate with manufacturing firms, automation providers, and equipment manufacturers to find executives with the right blend of technical expertise and strong leadership capabilities.",
          "Our extensive knowledge spans critical industrial segments, including heavy engineering, automation, process industries, and emerging technologies like Industrial IoT, ensuring we meet your specific leadership needs.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=500&h=500&fit=crop"
        imageAlt="Industrial Manufacturing"
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

export default IndustrialPage;
