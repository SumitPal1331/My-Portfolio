"use client"

import { motion } from "framer-motion"
import { Code, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 md:mb-0"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="relative w-8 h-8 flex items-center justify-center"
            >
              <Code className="absolute text-cyan-500" size={20} />
            </motion.div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">
              Sumit Pal
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0"
          >
            <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-1 text-gray-400"
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by Sumit Pal</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-center text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Sumit Pal. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
