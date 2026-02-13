"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Github, Linkedin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToNextSection = () => {
    const nextSection = sectionRef.current?.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">
              Sumit Pal
            </span>
          </h1>

          <div className="h-16 md:h-20 mb-6">
            <TypeAnimation
              sequence={[
                "Cybersecurity Engineer",
                1000,
                "Android Developer",
                1000,
                "AI/ML Engineer",
                1000,
                "Ethical Hacker",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-2xl md:text-4xl font-semibold text-gray-200"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Multidisciplinary engineer specializing in cybersecurity, Android development, and AI/ML. Passionate about
            integrating intelligent security into every layer of software development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 hover:bg-gray-800"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://linkedin.com/in/sumit-pal1331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/Z4eH4P8EZw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Code size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
            >
              <Github size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10"
      >
        <button
          onClick={scrollToNextSection}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </motion.div>
    </section>
  )
}
