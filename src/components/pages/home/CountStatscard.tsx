import React, { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { headingVariants, paragraphVariants } from '@/components/animation/contentVariants'

const CountStatscard = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)

  useEffect(() => {
    if (!containerRef.current || !isInView) return

    animate(0, 30, {
      duration: 2,
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count1")!.textContent = `${Math.floor(value)}+`
        }
      }
    })

    animate(0, 2500, {
      duration: 2,
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count2")!.textContent = `${Math.floor(value)}+`
        }
      }
    })

    animate(0, 150, {
      duration: 2, 
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count3")!.textContent = `${Math.floor(value)}+`
        }
      }
    })

    animate(0, 98, {
      duration: 2,
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count4")!.textContent = `${Math.floor(value)}%`
        }
      }
    })
  }, [isInView])

  return (
    <section className="relative px-4 md:px-6 pt-8 md:pt-12 lg:pt-24"> 
      {/* Background */}
      <div className="relative py-8 md:py-12 lg:py-24"> 
        <motion.div 
          className="text-center max-w-[90%] md:max-w-3xl mx-auto mt-8 md:mt-12 lg:mt-16 px-4" 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-2xl md:text-4xl font-bold mb-4"
            variants={headingVariants}
          >
            An integral part of corporate India&apos;s journey
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600"
            variants={paragraphVariants}
          >
            Trusted advisors to multinationals, leading Indian businesses and leadership professionals
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="py-12 md:py-16 lg:py-24" ref={containerRef}> 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto w-full px-4">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="aspect-square rounded-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center bg-white hover:shadow-lg transition-shadow">
                    <motion.p 
                      id={`count${index + 1}`} 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5,
                        delay: 0.2 + index * 0.1
                      }}
                    >
                      0+
                    </motion.p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      {index === 0 && "Years of Excellence"}
                      {index === 1 && "Successful Placements"}
                      {index === 2 && "Expert Consultants"}
                      {index === 3 && "Client Satisfaction"}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountStatscard
