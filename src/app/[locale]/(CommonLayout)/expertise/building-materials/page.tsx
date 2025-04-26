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
  Wrench,
  PaintBucket,
  Columns,
  Globe,
  DoorOpen,
  BarChart3,
  Calculator,
  Users2,
} from "lucide-react";

const BuildingMaterialsPage = () => {
  const specialities = [
    "Sanitaryware",
    "Ceramics",
    "Paints, Chemicals & Adhesives",
    "Architectural Fittings",
    "Glass",
    "Interior & Exterior Solutions",
    "Doors & Windows",
    "Plywood, Veneers, Laminates & MDF",
    "Stone & Graphite",
    "Elevators & Escalators",
    "Piping, Cables & UPVC",
    "Modular Kitchens & Office Furniture",
  ];

  const representativeSearches = [
    {
      icon: Wrench,
      title: "Technical Director",
      subtitle: "A Leading Sanitary Ware Manufacturer",
    },
    {
      icon: PaintBucket,
      title: "Group Head Material",
      subtitle: "One of The Leaders in Decorative Paints",
    },
    {
      icon: Columns,
      title: "Senior Vice President Exports",
      subtitle: "A Leading Ceramics Player",
    },
    {
      icon: Globe,
      title: "Country Manager, India",
      subtitle: "A Globally-Known Premium Ranged Sanitary Ware Player",
    },
    {
      icon: DoorOpen,
      title: "Executive Vice President of Business",
      subtitle: "A Leading Conglomerate for Their Doors & Windows BU",
    },
    {
      icon: BarChart3,
      title: "Vice President Sales",
      subtitle: "A Leading ACP Manufacturer",
    },
    {
      icon: Calculator,
      title: "CFO",
      subtitle: "A leading plywood manufacturer",
    },
    {
      icon: Users2,
      title: "CHRO",
      subtitle:
        "A Leading Partition & False Ceiling Manufacturer with Global Footprints",
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
        title="Building Materials"
        description={[
          "As a vital pillar of construction and infrastructure, the building materials industry demands visionary leadership.",
          "With deep sector insight, we help manufacturers, suppliers, and distributors recruit executives who drive innovation, navigate regulations, and lead sustainable growth.",
          "From cement and steel to timber, glass, and advanced composites our expertise covers the full spectrum of industry talent needs.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
        imageAlt="Building Materials Industry"
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

export default BuildingMaterialsPage;
