"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, fadeInItem } from "@/components/animation/variants"
import { Shield, Target, Users, Lightbulb } from "lucide-react"


const cultureItems = [
  {
    id: 1,
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "We uphold honesty and transparency, building strong, lasting relationships.",
  },
  {
    id: 2,
    icon: Target,
    title: "Excellence",
    description:
      "We go beyond expectations to deliver outstanding results, every time.",
  },
  {
    id: 3,
    icon: Users,
    title: "Collaboration",
    description:
      "We believe success is a team effort—and we grow stronger together.",
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We challenge the status quo to deliver bold, forward-thinking solutions.",
  },
];

const OurCulture = () => {


  return (
    <section id="ourculture" className="py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Culture
          </h2>
          <p className="text-lg text-gray-600">
            Driven by values. Defined by purpose. We cultivate a culture rooted
            in continuous learning, innovation, and a shared commitment to
            excellence.
          </p>
        </motion.div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInItem}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default OurCulture