"use client"

import IndustiresLayout from "@/components/pages/industries/IndustriesLayout"
import SecondaryNav from "@/components/pages/industries/SecondaryNav"
import CommonBanner from "@/components/common/CommonBanner"
import { Search, Users, CheckCircle, BarChart, ClipboardCheck, HandshakeIcon } from 'lucide-react'
import { 
  Building2, 
  Home, 
  AreaChart, 
  Briefcase, 
  LineChart, 
  Building, 
  MapPin, 
  Users2 
} from 'lucide-react'

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
    "Urban Planning",
    "Retail Real Estate"
  ]

  const representativeSearches = [
    {
      icon: Building2,
      title: "Chief Executive Officer",
      subtitle: "Leading Real Estate Development Company"
    },
    {
      icon: Home,
      title: "Head of Residential",
      subtitle: "Premium Real Estate Developer"
    },
    {
      icon: AreaChart,
      title: "Chief Investment Officer",
      subtitle: "Real Estate Investment Firm"
    },
    {
      icon: Briefcase,
      title: "Director of Operations",
      subtitle: "Property Management Company"
    },
    {
      icon: LineChart,
      title: "Head of Sales",
      subtitle: "Commercial Real Estate Group"
    },
    {
      icon: Building,
      title: "Project Director",
      subtitle: "Major Development Corporation"
    },
    {
      icon: MapPin,
      title: "Regional Director",
      subtitle: "International Real Estate Consultancy"
    },
    {
      icon: Users2,
      title: "VP Human Resources",
      subtitle: "Leading Property Development Group"
    }
  ]

  const methodologies = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Requirements Analysis",
      subtitle: "Understanding client needs and role specifications"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Candidate Identification",
      subtitle: "Leveraging our network to find potential matches"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Screening Process",
      subtitle: "In-depth evaluation of candidates"
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Assessment",
      subtitle: "Detailed assessment of shortlisted candidates"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Selection",
      subtitle: "Final selection and offer management"
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      title: "Onboarding",
      subtitle: "Ensuring smooth transition into the role"
    }
  ]

  return (
    <>
      <IndustiresLayout
        title="Real Estate"
        description={[
          "The real estate sector is a dynamic and evolving industry that requires visionary leadership. Our expertise in this domain enables us to identify and place leaders who can drive growth and innovation in property development and management.",
          "We work with developers, property management firms, and real estate investment companies to find executives who understand market dynamics, regulatory requirements, and emerging trends in sustainable development.",
          "Our comprehensive understanding spans across various segments including residential, commercial, retail, and industrial real estate, ensuring we can support your specific leadership needs within this diverse sector."
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
  )
}

export default RealEstatePage