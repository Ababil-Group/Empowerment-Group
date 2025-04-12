"use client"

import IndustiresLayout from "@/components/pages/industries/IndustriesLayout"
import SecondaryNav from "@/components/pages/industries/SecondaryNav"
import CommonBanner from "@/components/common/CommonBanner"
import { Search, Users, CheckCircle, BarChart, ClipboardCheck, HandshakeIcon } from 'lucide-react'
import { 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Cpu, 
  Brain, 
  Smartphone, 
  Users2 
} from 'lucide-react'

const TechnologyPage = () => {
  const specialities = [
    "Software Development",
    "Cloud Computing",
    "Artificial Intelligence",
    "Data Analytics",
    "Cybersecurity",
    "Enterprise Solutions",
    "Digital Transformation",
    "Mobile Technologies",
    "DevOps",
    "Blockchain",
    "IoT Solutions",
    "FinTech",
    "SaaS Platforms"
  ]

  const representativeSearches = [
    {
      icon: Code,
      title: "Chief Technology Officer",
      subtitle: "Leading Technology Company"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture Head",
      subtitle: "Enterprise Solutions Provider"
    },
    {
      icon: Database,
      title: "Data Science Director",
      subtitle: "Analytics Company"
    },
    {
      icon: Shield,
      title: "Security Director",
      subtitle: "Cybersecurity Firm"
    },
    {
      icon: Cpu,
      title: "Engineering Head",
      subtitle: "Software Development Company"
    },
    {
      icon: Brain,
      title: "AI Research Director",
      subtitle: "Tech Innovation Lab"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions Head",
      subtitle: "Digital Products Company"
    },
    {
      icon: Users2,
      title: "VP Human Resources",
      subtitle: "Technology Solutions Provider"
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
        title="Technology"
        description={[
          "The technology sector is at the forefront of innovation and digital transformation. Our expertise in this domain enables us to identify and place leaders who can drive technological advancement and business growth.",
          "We work with software companies, tech startups, and enterprise solution providers to find executives who understand both technology and business strategy, ensuring successful digital initiatives.",
          "Our comprehensive understanding spans across various segments including software development, AI/ML, cloud computing, and cybersecurity, ensuring we can support your specific leadership needs within this dynamic sector."
        ]}
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop"
        imageAlt="Technology Innovation"
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

export default TechnologyPage