import ExecutiveSearch from "@/components/pages/services/ExecutiveSearch";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";
import { Search, Users, Briefcase, ChartBar, CheckCircle } from "lucide-react";
import SearchMethodlogy from "@/components/pages/services/SearchMethodology";

const executiveSearchServices = [
  // update content
  {
    title: "C-Suite Search",
    description:
      "Connecting you with high-caliber C-level executives to lead with impact.",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=500&fit=crop",
  },
  {
    title: "Leadership Assessment",
    description:
      "Thorough evaluation of executive capabilities, readiness, and potential.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
  },
  {
    title: "Industry Expertise",
    description:
      "Sector-specific insights to match the right leaders with the right roles.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop",
  },
  {
    title: "Global Talent Access",
    description:
      "Reach top executive talent across international markets and networks.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop",
  },
  {
    title: "Executive Integration",
    description:
      "Seamless onboarding and transition support for long-term leadership success.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop",
  },
];

const methodologies = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Our Search Methodology",
    subtitle:
      "A proven, structured process for finding and securing top-tier talent.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Our Screening & Selection Process",
    subtitle:
      "A rigorous, step-by-step approach to ensure the perfect talent match.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Requirements Analysis",
    subtitle: " Deep dive into client needs and role expectations.",
  },
  {
    icon: <ChartBar className="w-8 h-8 text-primary" />,
    title: " Candidate Sourcing",
    subtitle:
      "Targeted identification through extensive networks and channels.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Screening",
    subtitle:
      "Final  Detailed review of qualifications, experience, and cultural fit.",
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
        title="Executive Search Services"
        description="Targeted solutions to attract and secure exceptional leadership talent."
      />
      <SearchMethodlogy methodologies={methodologies} />
      <CommonBanner
        title="In Search of Executive Talent?"
        text="We’ll help you find the right leader to drive your success."
        buttonText="Get Started"
        buttonLink="/contact-us"
      />
    </>
  );
}
