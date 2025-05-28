import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import CertificationsSection from "./components/certifications"
import EducationSection from "./components/education"
import ExperienceSection from "./components/experience"
import { ThemeToggle } from "@/components/theme-toggle"
import { ErrorFallbackImage } from "@/components/error-fallback-image"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                devavdol
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80 hover:text-blue-600">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80 hover:text-blue-600">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80 hover:text-blue-600">
                Projects
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80 hover:text-blue-600">
                Education
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80 hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <ThemeToggle />
            <Link
              href="https://drive.google.com/file/d/1-8o6C2-KRxZazYRVUfhznC79XdrOcvR3/view?usp=drive_link"
              target="_blank"
            >
              <Button variant="outline" className="hidden sm:flex">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                      <ErrorFallbackImage
                        src="https://res.cloudinary.com/dc5qncppu/image/upload/v1748265942/pp1_ek8kwj.jpg"
                        alt="Abdulhakim Ahmad"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                      <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted">
                  <div className="relative w-8 h-8 mr-2">
                    <ErrorFallbackImage
                      src="https://res.cloudinary.com/dc5qncppu/image/upload/v1748265942/pp1_ek8kwj.jpg"
                      alt="Profile"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  Available for new opportunities
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Abdulhakim Ahmad
                </h1>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                    AI-For-Education & SDGs Advocate | EdTech Strategist
                  </p>
                  <p className="text-lg text-muted-foreground">Software Engineer | Data Analyst | CEO at iOrbit Labs</p>
                </div>
                <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed">
                  Education Technologist leveraging AI, software engineering, and data analytics to drive educational
                  reform aligned with UN Sustainable Development Goals. Building inclusive, intelligent, and impactful
                  learning experiences through innovative technology solutions.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://linkedin.com/in/abdulhakim-ahmad-413b2514b" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://github.com/hakimbdev" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-950"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </Link>
                <Link href="mailto:aahmaddadani@gmail.com">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Federal Capital Territory, Nigeria
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +234 806 255 8567
                </div>
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />

        <section id="projects" className="py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Showcasing innovative solutions in EdTech, AI, and web development that drive educational impact.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AI-Powered Learning Platform"
                description="Personalized learning platform using AI to adapt content delivery and enhance student engagement by 40%."
                image="https://res.cloudinary.com/dc5qncppu/image/upload/v1748432504/young-man-office-with-virtual-mask-computer_sfcuzh.jpg"
                link="https://github.com"
                tags={["React.js", "AI/ML", "EdTech", "Node.js"]}
              />
              <ProjectCard
                title="Educational Data Analytics Dashboard"
                description="Comprehensive dashboard providing actionable insights for educational institutions using advanced data models."
                image="https://res.cloudinary.com/dc5qncppu/image/upload/v1748431361/Educational_Data_Analytics_Dashboard_yqg4am.jpg"
                link="https://github.com"
                tags={["Data Analytics", "React.js", "Python", "Visualization"]}
              />
              <ProjectCard
                title="iOrbit Labs Platform"
                description="Technology company platform offering AI, cybersecurity, and web development solutions for enterprises."
                image="https://res.cloudinary.com/dc5qncppu/image/upload/v1748432708/Green_And_Yellow_Modern_Company_Logo_kake8t.png"
                link="https://github.com"
                tags={["Next.js", "AI", "Cybersecurity", "Full-Stack"]}
              />
              <ProjectCard
                title="SDG Education Tracker"
                description="Application tracking progress on UN Sustainable Development Goals in education sector."
                image="https://res.cloudinary.com/dc5qncppu/image/upload/v1748431642/Sustainable_Development_Goals_ba4kbm.png"
                link="https://github.com"
                tags={["React.js", "Data Visualization", "SDGs", "Impact"]}
              />
              <ProjectCard
                title="Multilingual EdTech Solution"
                description="Educational platform supporting multiple languages including Arabic, Hausa, and English for inclusive learning."
                image="https://res.cloudinary.com/dc5qncppu/image/upload/v1748431361/mutlti_lingual_ztybls.jpg"
                link="https://github.com"
                tags={["Internationalization", "React.js", "EdTech", "Accessibility"]}
              />
              <ProjectCard
                title="AI Prompt Engineering Tool"
                description="Tool for optimizing AI prompts to enhance productivity and educational content generation."
                image="https://res.cloudinary.com/dc5qncppu/image/upload/v1748431358/AI_Prompt_Engineering_Tool_eyaf8o.jpg"
                link="https://github.com"
                tags={["AI", "Prompt Engineering", "Productivity", "NLP"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Tech Stack & Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expertise across the full technology spectrum, from AI and data analytics to modern web development.
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        <CertificationsSection />

        <EducationSection />

        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Let's Work Together
                </h2>
                <p className="text-muted-foreground">
                  Open to consulting, collaborations, and new opportunities in EdTech, AI, Software Development, or
                  Global Education Projects.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Abdulhakim Ahmad. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
