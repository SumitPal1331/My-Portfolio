"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, MapPin, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
              About Me
            </h2>

            <div className="relative w-64 h-80 mb-8 rounded-xl overflow-hidden border-4 border-gray-800 shadow-xl">
              <Image
                src="/images/sumit-mountain.jpg"
                alt="Sumit Pal"
                width={256}
                height={320}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                {"I'm a multidisciplinary engineer specializing in cybersecurity, Android development, and AI/ML with proven expertise in building secure, scalable mobile applications."}
              </p>
              <p>
                As an experienced Ethical Hacker with hands-on Red Team operations, I bring a security-first mindset to every project. My skills span Kotlin, Jetpack Compose, and Firebase for Android, combined with TensorFlow, PyTorch, and Scikit-learn for AI/ML.
              </p>
              <p>
                {"I'm passionate about integrating intelligent security into every layer of software development, from API vulnerabilities to ML-powered threat detection."}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-emerald-500">
              Personal Info
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-cyan-500/20 p-2 rounded-full">
                    <User className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="font-medium">Sumit Pal</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Ghaziabad, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium truncate" title="sumitpal1331@gmail.com">
                      sumitpal1331@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-cyan-500/20 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">8800891331</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-200">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Hindi</span>
                    <span className="text-gray-400 text-sm">Native</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">English</span>
                    <span className="text-gray-400 text-sm">Professional</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "85%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-gradient-to-r from-purple-500 to-emerald-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
