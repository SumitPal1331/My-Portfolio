"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Blocks, Building, ExternalLink, ShoppingCart, Network, Shield } from "lucide-react"
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
      title: "Secure Android E-Commerce Application",
      description:
        "Built end-to-end encrypted Android shopping app with 10,000+ test users, implementing secure payment gateway integration. Designed MVVM architecture with Firebase Authentication, Firestore, and Cloud Functions. Implemented certificate pinning, ProGuard obfuscation, and runtime security checks. Integrated ML-based fraud detection system reducing fraudulent transactions by 35%.",
      period: "2025",
      technologies: ["Kotlin", "Firebase", "Jetpack Compose", "OAuth2.0"],
      image: "",
      color: "emerald",
      link: "",
      icon: "shopping",
    },
    {
      title: "ML-Powered Network Intrusion Detection System",
      description:
        "Developed machine learning model achieving 94% accuracy in detecting network anomalies and malicious traffic patterns. Processed and analyzed 500K+ network packets using feature engineering and ensemble learning techniques. Created real-time alerting dashboard for SOC teams with automated threat classification and incident prioritization.",
      period: "2025",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      image: "/images/network-intrusion-detection.jpg",
      color: "cyan",
      link: "https://network-ids.vercel.app/",
      icon: "network",
    },
    {
      title: "API Security Testing Framework",
      description:
        "Automated REST API security testing framework identifying authentication, authorization, and injection vulnerabilities. Reduced manual testing time by 60% through custom scripts for OWASP API Security Top 10 validation.",
      period: "2025",
      technologies: ["Python", "Burp Suite", "OWASP ZAP", "Postman"],
      image: "",
      color: "red",
      link: "",
      icon: "shield",
    },
    {
      title: "Indian Bank Finder",
      description:
        "A comprehensive web application that allows users to easily search and find IFSC codes, branch details, and other banking information for Indian banks. Features include instant search, detailed bank information, and a user-friendly interface for seamless navigation.",
      period: "2025",
      technologies: ["Next.js", "React", "Tailwind CSS", "API Integration", "Responsive Design"],
      image: "/images/indian-bank-ifsc-code.jpg",
      color: "purple",
      link: "https://indianbankfinder.vercel.app/",
      icon: "building",
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
                <div className="relative overflow-hidden bg-gray-900/80 flex items-center justify-center min-h-[200px]">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4 bg-white"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center justify-center md:hidden">
                        {project.icon === "network" && <Network className={`h-16 w-16 text-cyan-500 opacity-50`} />}
                        {project.icon === "building" && <Building className={`h-16 w-16 text-purple-500 opacity-50`} />}
                        {project.icon === "shopping" && <ShoppingCart className={`h-16 w-16 text-emerald-500 opacity-50`} />}
                        {project.icon === "shield" && <Shield className={`h-16 w-16 text-red-500 opacity-50`} />}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center p-8">
                      {project.icon === "shopping" && <ShoppingCart className="h-20 w-20 text-emerald-500 opacity-60" />}
                      {project.icon === "network" && <Network className="h-20 w-20 text-cyan-500 opacity-60" />}
                      {project.icon === "shield" && <Shield className="h-20 w-20 text-red-500 opacity-60" />}
                      {project.icon === "building" && <Building className="h-20 w-20 text-purple-500 opacity-60" />}
                    </div>
                  )}
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

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-${project.color}-500 to-${project.color === "emerald" ? "cyan" : project.color === "purple" ? "cyan" : "purple"}-500 hover:from-${project.color}-600 hover:to-${project.color === "emerald" ? "cyan" : project.color === "purple" ? "cyan" : "purple"}-600 text-white transition-colors`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </a>
                  )}
                </CardContent>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
