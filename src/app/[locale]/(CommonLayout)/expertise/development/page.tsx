"use client"

import IndustiresLayout from "@/components/pages/industries/IndustriesLayout"
import SecondaryNav from "@/components/pages/industries/SecondaryNav"
import CommonBanner from "@/components/common/CommonBanner"
import { Search, Users, CheckCircle, BarChart, ClipboardCheck, HandshakeIcon } from 'lucide-react'
import { 
  Building, 
  Landmark, 
  Construction, 
  HardHat, 
  LineChart, 
  PlaneTakeoff, 
  Map, // Changed from Road to Map
  Users2 
} from 'lucide-react'

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
    "Project Finance"
  ]

  const representativeSearches = [
    {
      icon: Building,
      title: "Project Director",
      subtitle: "Major Infrastructure Development Company"
    },
    {
      icon: Landmark,
      title: "Urban Planning Head",
      subtitle: "City Development Authority"
    },
    {
      icon: Construction,
      title: "Construction Director",
      subtitle: "Leading Development Corporation"
    },
    {
      icon: HardHat,
      title: "Head of Operations",
      subtitle: "Infrastructure Development Firm"
    },
    {
      icon: LineChart,
      title: "Chief Strategy Officer",
      subtitle: "Urban Development Agency"
    },
    {
      icon: PlaneTakeoff,
      title: "Aviation Infrastructure Head",
      subtitle: "Airport Development Company"
    },
    {
      icon: Map, 
      title: "Transportation Director",
      subtitle: "Highway Development Corporation"
    },
    {
      icon: Users2,
      title: "VP Human Resources",
      subtitle: "Development Authority"
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
        title="Development"
        description={[
          "The development sector plays a crucial role in shaping our cities and infrastructure. Our expertise in this domain enables us to identify and place leaders who can drive sustainable development and innovation.",
          "We work with development authorities, infrastructure companies, and urban planning organizations to find executives who understand the complexities of large-scale development projects and can lead with vision.",
          "Our comprehensive understanding spans across various segments including infrastructure, urban development, and transportation, ensuring we can support your specific leadership needs within this diverse sector."
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
  )
}

export default DevelopmentPage