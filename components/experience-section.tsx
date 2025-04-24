"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, CheckCircle2 } from "lucide-react"

export default function ExperienceSection() {
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

  return (
    <section id="experience" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">
            Work Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                  <h3 className="text-xl font-semibold text-white mb-2">Penetration Tester (Red Team)</h3>
                  <p className="text-cyan-500 mb-2">CyberSapiens United LLP | Internship</p>
                  <p className="text-gray-400 mb-4">10/2023 - 04/2024, INDIA</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Worked on Live Websites to find vulnerabilities and exploit them</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">
                        Used tools like Nessus, Nmap, Dirbuster, EnumforLinux, Smbclient for footprinting
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">
                        Exploited SSH, FTP, SMB Ports and worked on File Upload Vulnerability
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">
                        Used SQL Injections to upload and retrieve information on target websites
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">
                        Exploited XSS (Cross Site Scripting) including reflected, stored, blind and time delay XSS
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-4 border-gray-900">
                <Shield className="h-6 w-6 text-cyan-500" />
              </div>

              <div className="flex-1 md:pl-8 hidden md:block"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
