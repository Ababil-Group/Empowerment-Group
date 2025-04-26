import LeadershipHiring from "@/components/pages/services/LeadershipHiring";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";
import { Search, Users, Briefcase, ChartBar, CheckCircle } from "lucide-react";
import SearchMethodlogy from "@/components/pages/services/SearchMethodology";

const leadershipServices = [
  {
    title: "Senior Management",
    description:
      "Recruiting experienced leaders for critical senior management positions.",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop",
  },
  {
    title: "Department Heads",
    description:
      "Identifying capable leaders to drive departmental excellence.",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=500&fit=crop",
  },
  {
    title: "Team Leaders",
    description: "Sourcing talented professionals to lead and inspire teams.",
    imageUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=500&fit=crop",
  },
  {
    title: "Project Leaders",
    description:
      "Finding skilled managers to drive project success and delivery.",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=500&fit=crop",
  },
  {
    title: "Technical Leaders",
    description:
      "Recruiting leaders with deep technical expertise and management skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=500&fit=crop",
  },
];

const methodologies = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Role Analysis",
    subtitle: " Define key leadership competencies and role requirements.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Talent Search",
    subtitle:
      "Identify high-potential leadership candidates through targeted sourcing.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Evaluation",
    subtitle:
      " Gauge candidate suitability through strategic screening and interviews.",
  },
  {
    icon: <ChartBar className="w-8 h-8 text-primary" />,
    title: "Assessment",
    subtitle: " Measure leadership potential, skills, and cultural alignment.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Selection",
    subtitle: " Finalize the best-fit candidate for successful placement.",
  },
];

export const metadata = {
  title: "Leadership Hiring - Empowerment Group",
  description:
    "Our Leadership Hiring services help organizations identify and attract exceptional talent for key leadership positions across various levels.",
};

export default function LeadershipHiringPage() {
  return (
    <>
      <LeadershipHiring />
      <WhatWeDo
        services={leadershipServices}
        title="Our Leadership Hiring Services"
        description="End-to-end solutions for crafting high-performing leadership teams."
      />
      <SearchMethodlogy methodologies={methodologies} />
      <CommonBanner
        title="Building Your Leadership Team?"
        text="We’ll help you find the leaders who move your vision forward."
        buttonText="Get Started"
        buttonLink="/contact-us"
      />
    </>
  );
}
