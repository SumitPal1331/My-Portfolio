"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Brain, Smartphone, Wrench, Lock, Code, Terminal, ExternalLink } from "lucide-react"

// Define skill URLs
const skillUrls: Record<string, string> = {
  // Languages
  Kotlin: "https://kotlinlang.org/",
  Java: "https://www.java.com/",
  Python: "https://www.python.org/",
  SQL: "https://www.w3schools.com/sql/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  LaTeX: "https://www.latex-project.org/",

  // Mobile Development
  "Android SDK": "https://developer.android.com/",
  "Jetpack Compose": "https://developer.android.com/jetpack/compose",
  Firebase: "https://firebase.google.com/",
  "RESTful APIs": "https://restfulapi.net/",
  "Room Database": "https://developer.android.com/training/data-storage/room",
  "MVVM Architecture": "https://developer.android.com/topic/architecture",

  // Cybersecurity
  "Penetration Testing": "https://owasp.org/www-project-web-security-testing-guide/",
  "Vulnerability Assessment": "https://www.nist.gov/cybersecurity",
  "OWASP Top 10": "https://owasp.org/www-project-top-ten/",
  "Network Security": "https://www.cisco.com/c/en/us/products/security/index.html",
  "API Security": "https://owasp.org/www-project-api-security/",
  "Red Teaming": "https://www.mitre.org/",

  // AI/ML & Data Science
  TensorFlow: "https://www.tensorflow.org/",
  PyTorch: "https://pytorch.org/",
  "Scikit-learn": "https://scikit-learn.org/",
  Pandas: "https://pandas.pydata.org/",
  NumPy: "https://numpy.org/",
  Jupyter: "https://jupyter.org/",
  "Data Visualization": "https://matplotlib.org/",
  "Anomaly Detection": "https://scikit-learn.org/stable/modules/outlier_detection.html",

  // Tools & Platforms
  Git: "https://git-scm.com/",
  "Android Studio": "https://developer.android.com/studio",
  "Burp Suite": "https://portswigger.net/burp",
  Wireshark: "https://www.wireshark.org/",
  Metasploit: "https://www.metasploit.com/",
  Linux: "https://www.linux.org/",
  Docker: "https://www.docker.com/",
  Postman: "https://www.postman.com/",

  // Security Practices
  "Secure SDLC": "https://owasp.org/www-project-integration-standards/",
  "Threat Modeling": "https://owasp.org/www-community/Threat_Modeling",
  Encryption: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines",
  "Auth & Authorization": "https://oauth.net/2/",
  "Protocol Analysis": "https://www.wireshark.org/",
}

const skills = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6 text-cyan-500" />,
    skills: ["Kotlin", "Java", "Python", "SQL", "JavaScript", "LaTeX"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-6 w-6 text-emerald-500" />,
    skills: ["Android SDK", "Jetpack Compose", "Firebase", "RESTful APIs", "Room Database", "MVVM Architecture"],
    color: "from-emerald-500 to-green-500",
  },
  {
    category: "Cybersecurity",
    icon: <Shield className="h-6 w-6 text-red-500" />,
    skills: ["Penetration Testing", "Vulnerability Assessment", "OWASP Top 10", "Network Security", "API Security", "Red Teaming"],
    color: "from-red-500 to-orange-500",
  },
  {
    category: "AI/ML & Data Science",
    icon: <Brain className="h-6 w-6 text-cyan-500" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Data Visualization", "Anomaly Detection"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="h-6 w-6 text-emerald-500" />,
    skills: ["Git", "Android Studio", "Burp Suite", "Wireshark", "Metasploit", "Linux", "Docker", "Postman"],
    color: "from-emerald-500 to-green-500",
  },
  {
    category: "Security Practices",
    icon: <Lock className="h-6 w-6 text-red-500" />,
    skills: ["Secure SDLC", "Threat Modeling", "Encryption", "Auth & Authorization", "Protocol Analysis"],
    color: "from-red-500 to-orange-500",
  },
]

export default function SkillsSection() {
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
    <section id="skills" ref={ref} className="py-20 px-4 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500">
            My Skills
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive set of technical skills across cybersecurity, Android development, and AI/ML that I've
            developed throughout my career.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.a
                    key={skillIndex}
                    href={skillUrls[skill] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} bg-opacity-10 border border-gray-700 hover:border-gray-500 flex items-center gap-1 group`}
                  >
                    {skill}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gray-800/30 rounded-xl p-6 border border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
            <Terminal className="h-5 w-5 text-cyan-500" />
            Technical Proficiency
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Cybersecurity</span>
                <span className="text-gray-400">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "90%" } : { width: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Android Development</span>
                <span className="text-gray-400">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">AI/ML Engineering</span>
                <span className="text-gray-400">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Penetration Testing</span>
                <span className="text-gray-400">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "90%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Secure SDLC</span>
                <span className="text-gray-400">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-2 rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Threat Modeling</span>
                <span className="text-gray-400">80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "80%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="bg-gradient-to-r from-red-500 to-cyan-500 h-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
