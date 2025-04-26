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
      subtitle: " Leading Sanitaryware Manufacturer",
    },
    {
      icon: PaintBucket,
      title: "Group Head – Materials",
      subtitle: " Top Decorative Paints Brand",
    },
    {
      icon: Columns,
      title: "Senior Vice President – Exports",
      subtitle: " Prominent Ceramics Manufacturer",
    },
    {
      icon: Globe,
      title: "Country Manager, India",
      subtitle: " Global Premium Sanitaryware Brand",
    },
    {
      icon: DoorOpen,
      title: "Executive Vice President – Business",
      subtitle: " Diversified Conglomerate – Doors & Windows Division",
    },
    {
      icon: BarChart3,
      title: "Vice President – Sales",
      subtitle: " Leading ACP (Aluminium Composite Panel) Manufacturer",
    },
    {
      icon: Calculator,
      title: "Chief Financial Officer (CFO)",
      subtitle: " Renowned Plywood Manufacturer",
    },
    {
      icon: Users2,
      title: "Chief Human Resources Officer (CHRO)",
      subtitle: "Global Leader in Partitions & False Ceilings",
    },
  ];

  const methodologies = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Role Discovery",
      subtitle: "Deep dive into client needs and position requirements.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Talent Mapping",
      subtitle:
        " Identify top candidates through targeted outreach and networks.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Screening",
      subtitle: " Thorough evaluation of skills, experience, and alignment.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Candidate Assessment",
      subtitle: " In-depth analysis of shortlisted candidates for best fit.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Selection & Offer",
      subtitle: " Support final selection and manage the offer process.",
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      title: "Onboarding Support",
      subtitle: "Ensure a seamless integration into the organization.",
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
        title="Connect with Our Senior Consultants"
        subtitle="For expert support with your leadership hiring needs.
Button: Get In Touch"
        buttonText="Get In Touch"
        buttonLink="/contact-us"
      />
    </>
  );
};

export default BuildingMaterialsPage;
