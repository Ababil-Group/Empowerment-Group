"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, fadeInItem } from "@/components/animation/variants"
import { Shield, Target, Users, Lightbulb } from "lucide-react"


const cultureItems = [
  {
    id: 1,
    icon: Shield,
    title: "Trust & Integrity",
    description: "We maintain the highest standards of integrity in all our interactions and build lasting relationships based on trust."
  },
  {
    id: 2,
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering superior results that exceed expectations."
  },
  {
    id: 3,
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster a collaborative environment that drives success."
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace innovation and creative thinking to provide cutting-edge solutions for our clients."
  }
]

const OurCulture = () => {


  return (
    <section id="ourculture" className="py-24">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Culture
          </h2>
          <p className="text-lg text-gray-600">
            Our values define who we are and guide our decisions. We foster a culture 
            of continuous learning and innovation.
          </p>
        </motion.div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInItem}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default OurCulture