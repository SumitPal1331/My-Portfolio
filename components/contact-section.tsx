"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { sendEmail } from "@/actions/send-email"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await sendEmail(formData)

      setFormStatus(result)
      setIsSubmitted(true)
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries, collaborations, or opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-cyan-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:sumitpal1331@gmail.com"
                    className="font-medium text-white hover:text-cyan-400 transition-colors truncate block"
                    title="sumitpal1331@gmail.com"
                  >
                    sumitpal1331@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:8800891331" className="font-medium text-white hover:text-purple-400 transition-colors">
                    8800891331
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium text-white">Ghaziabad, India</p>
                </div>
              </CardContent>
            </Card>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/sumit-pal1331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-500"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://leetcode.com/u/Z4eH4P8EZw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-500"
                  >
                    <path d="M16 12l-8 8-4-4M16 4l-4 4" />
                    <path d="M4 12h16" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <Card className="bg-gray-800/50 border-gray-700 p-8 text-center">
                <div
                  className={`p-4 rounded-full inline-flex mx-auto mb-4 ${formStatus?.success ? "bg-green-500/20" : "bg-red-500/20"}`}
                >
                  {formStatus?.success ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {formStatus?.success ? "Message Sent!" : "Error"}
                </h4>
                <p className="text-gray-300 mb-4">
                  {formStatus?.message || "Thank you for reaching out. I'll get back to you as soon as possible."}
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
