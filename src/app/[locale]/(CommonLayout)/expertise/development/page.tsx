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
  Building,
  Landmark,
  Construction,
  HardHat,
  LineChart,
  PlaneTakeoff,
  Map, // Changed from Road to Map
  Users2,
} from "lucide-react";

const DevelopmentPage = () => {
  const specialities = [
    "Infrastructure Development",
    "Urban Development",
    "Project Planning",
    "Construction Management",
    "Transportation Projects",
    "Public Works",
    "Environmental Planning",
    "Sustainable Development",
    "Smart City Development",
    "Industrial Development",
    "Rural Development",
    "Economic Development",
    "Project Finance",
  ];

  const representativeSearches = [
    {
      icon: Building,
      title: "Chief Operating Officer",
      subtitle: "Leading Industrial Manufacturing Company",
    },
    {
      icon: Landmark,
      title: "Plant Head",
      subtitle: "Major Heavy Engineering Corporation",
    },
    {
      icon: Construction,
      title: "VP Supply Chain",
      subtitle: "Industrial Equipment Manufacturer",
    },
    {
      icon: HardHat,
      title: "Director of Engineering",
      subtitle: "Precision Manufacturing Company",
    },
    {
      icon: LineChart,
      title: "Head of R&D",
      subtitle: "Power Generation Equipment Manufacturer",
    },
    {
      icon: PlaneTakeoff,
      title: "Technology Director",
      subtitle: "Industrial Automation Solutions Provider",
    },
    {
      icon: Map,
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
      subtitle: "Understanding client needs and role specifications",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Candidate Identification",
      subtitle: "Leveraging our network to find potential matches",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Screening Process",
      subtitle: "In-depth evaluation of candidates",
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Assessment",
      subtitle: "Detailed assessment of shortlisted candidates",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Selection",
      subtitle: "Final selection and offer management",
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      title: "Onboarding",
      subtitle: "Ensuring smooth transition into the role",
    },
  ];

  return (
    <>
      <IndustiresLayout
        title="Development"
        description={[
          "The development sector is key to shaping our cities and infrastructure. Our expertise allows us to identify and place leaders who drive sustainable development and foster innovation.",
          "We collaborate with development authorities, infrastructure companies, and urban planning organizations to find executives who understand the complexities of large-scale projects and lead with vision and purpose.",
          "Our deep understanding spans key areas, including infrastructure, urban development, and transportation, ensuring we can meet your leadership needs within this dynamic sector.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=500&fit=crop"
        imageAlt="Development Projects"
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

export default DevelopmentPage;
