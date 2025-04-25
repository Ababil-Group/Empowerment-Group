import ExecutiveSearch from "@/components/pages/services/ExecutiveSearch";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";
import { Search, Users, Briefcase, ChartBar, CheckCircle } from "lucide-react";
import SearchMethodlogy from "@/components/pages/services/SearchMethodology";

const executiveSearchServices = [
  {
    title: "C-Suite Search",
    description:
      "Identifying and attracting top-tier C-level executives to drive organizational success.",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=500&fit=crop",
  },
  {
    title: "Leadership Assessment",
    description:
      "Comprehensive evaluation of leadership capabilities and potential.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
  },
  {
    title: "Industry Expertise",
    description:
      "Deep understanding of sector-specific leadership requirements and talent pools.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop",
  },
  {
    title: "Global Talent Search",
    description:
      "Access to international executive talent networks and markets.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop",
  },
  {
    title: "Executive Integration",
    description:
      "Ensuring smooth onboarding and transition of new executive hires.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop",
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
    title: "Candidate Sourcing",
    subtitle: "Identifying potential candidates through multiple channels",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Screening Process",
    subtitle: "Thorough evaluation of candidate qualifications",
  },
  {
    icon: <ChartBar className="w-8 h-8 text-primary" />,
    title: "Assessment",
    subtitle: "In-depth interviews and skill validation",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Selection",
    subtitle: "Final candidate shortlisting and presentation",
  },
];

export const metadata = {
  title: "Executive Search - Empowerment Group",
  description:
    "Our Executive Search practice specializes in identifying and attracting top-tier leadership talent for organizations across industries.",
};

export default function ExecutiveSearchPage() {
  return (
    <>
      <ExecutiveSearch />
      <WhatWeDo
        services={executiveSearchServices}
        title="Our Executive Search Services"
        description="Expert solutions for identifying and securing exceptional leadership talent."
      />
      <SearchMethodlogy methodologies={methodologies} />
      <CommonBanner
        title="Looking for Executive Talent?"
        text="Let us help you find the perfect leadership fit for your organization."
        buttonText="Get Started"
        buttonLink="/contact-us"
      />
    </>
  );
}
