"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Blocks } from "lucide-react"
import { CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "Enhancing Supply Chain Transparency with Blockchain Technology",
      description:
        "A blockchain-based solution to improve transparency and traceability in supply chains, reducing fraud and ensuring product authenticity.",
      period: "12/2024 - 01/2025",
      technologies: ["Blockchain", "Smart Contracts", "Web3", "React"],
      image: "/images/blockchain.jpg",
      color: "cyan",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">
            Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center justify-center md:hidden">
                    <Blocks className="h-16 w-16 text-cyan-500 opacity-50" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span>{project.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-${project.color}-500/10 border border-${project.color}-500/30 text-${project.color}-400`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
