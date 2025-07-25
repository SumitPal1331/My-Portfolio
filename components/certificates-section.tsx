"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Calendar } from "lucide-react"
import { CardContent } from "@/components/ui/card"

export default function CertificatesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const certificates = [
    {
      title: "Ethical Hacking & CCNA",
      issuer: "DuCat Institute",
      period: "01/2021 - 02/2022",
      color: "cyan",
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Analytics Vidha",
      period: "07/2022",
      color: "purple",
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      period: "07/2025",
      color: "emerald",
    },
    {
      title: "API Testing Fundamentals Expert",
      issuer: "Postman",
      period: "",
      color: "purple",
    },
    {
      title: "NIELIT CCC",
      issuer: "NIELIT",
      period: "",
      color: "emerald",
    },
  ]

  return (
    <section id="certificates" ref={ref} className="py-20 px-4 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">
            Certificates
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div
                className={`h-2 bg-gradient-to-r from-${certificate.color}-500 to-${certificate.color === "cyan" ? "purple" : certificate.color === "purple" ? "emerald" : "cyan"}-500`}
              ></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${certificate.color}-500/20`}>
                    <Award className={`h-6 w-6 text-${certificate.color}-500`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
                </div>

                <div className="space-y-3 ml-2">
                  <p className="text-gray-300">{certificate.issuer}</p>

                  {certificate.period && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{certificate.period}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
