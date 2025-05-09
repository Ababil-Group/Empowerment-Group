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
  BookOpen,
  GraduationCap,
  School,
  Presentation, // Changed from ChalkboardTeacher to Presentation
  Globe,
  Users2,
} from "lucide-react";

const EducationPage = () => {
  const specialities = [
    "K-12 Education",
    "Higher Education",
    "EdTech",
    "Vocational Training",
    "Corporate Training",
    "Educational Publishing",
    "Online Learning",
    "Special Education",
    "Educational Administration",
    "Curriculum Development",
    "Educational Research",
    "Student Services",
    "Teacher Training",
  ];

  const representativeSearches = [
    {
      icon: GraduationCap,
      title: "Chief Operating Officer",
      subtitle: "Leading Industrial Manufacturing Company",
    },
    {
      icon: School,
      title: "Plant Head",
      subtitle: "Major Heavy Engineering Corporation",
    },
    {
      icon: BookOpen,
      title: "VP Supply Chain",
      subtitle: "Industrial Equipment Manufacturer",
    },
    {
      icon: Presentation,
      title: "Director of Engineering",
      subtitle: "Precision Manufacturing Company",
    },
    {
      icon: Globe,
      title: "Head of R&D",
      subtitle: "Power Generation Equipment Manufacturer",
    },
    {
      icon: Users2,
      title: "Technology Director",
      subtitle: "Industrial Automation Solutions Provider",
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
        title="Education"
        description={[
          "The education sector plays a crucial role in shaping the future. Our expertise allows us to identify and place leaders who can drive academic excellence and foster innovation.",
          "We collaborate with educational institutions, EdTech companies, and training providers to find executives who understand the complexities of the education landscape and lead with vision and integrity.",
          "Our deep understanding spans key segments, including K-12, higher education, vocational training, and online learning, ensuring we can address your specific leadership needs in this dynamic sector.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=500&fit=crop"
        imageAlt="Education Sector"
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

export default EducationPage;
