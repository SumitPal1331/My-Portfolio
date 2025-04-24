import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ProjectsSection from "@/components/projects-section"
import CertificatesSection from "@/components/certificates-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingSpinner from "@/components/loading-spinner"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </Suspense>
      <Footer />
    </main>
  )
}
