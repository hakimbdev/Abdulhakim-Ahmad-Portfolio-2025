import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master's degree",
    field: "Educational/Instructional Technology",
    institution: "National Open University of Nigeria (NOUN)",
    period: "April 2023 - September 2025",
    status: "In Progress",
    description:
      "Advanced studies in educational technology, focusing on AI integration in learning environments and instructional design.",
    image: "/placeholder.svg?height=120&width=120&text=NOUN&fontsize=24&bg=3b82f6&fg=ffffff",
  },
  {
    degree: "Bachelor's degree",
    field: "English Education",
    institution: "Bayero University, Kano",
    period: "January 2014 - November 2018",
    status: "Completed",
    description: "Comprehensive education in English language teaching, pedagogy, and educational methodologies.",
    image: "/placeholder.svg?height=120&width=120&text=BUK&fontsize=24&bg=8b5cf6&fg=ffffff",
  },
]

const languages = [
  {
    language: "English",
    proficiency: "Native/Fluent",
    flag: "/placeholder.svg?height=24&width=36&text=EN&fontsize=10&bg=ef4444&fg=ffffff",
  },
  {
    language: "Hausa",
    proficiency: "Native or Bilingual",
    flag: "/placeholder.svg?height=24&width=36&text=HA&fontsize=10&bg=10b981&fg=ffffff",
  },
  {
    language: "Arabic",
    proficiency: "Limited Working",
    flag: "/placeholder.svg?height=24&width=36&text=AR&fontsize=10&bg=f59e0b&fg=ffffff",
  },
  {
    language: "German",
    proficiency: "Limited Working",
    flag: "/placeholder.svg?height=24&width=36&text=DE&fontsize=10&bg=3b82f6&fg=ffffff",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Education & Languages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in education and technology, with multilingual capabilities for global impact.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`h-24 w-24 rounded-lg flex items-center justify-center text-white font-bold text-2xl ${
                          edu.institution.includes("NOUN") ? "bg-blue-500" : "bg-purple-500"
                        }`}
                      >
                        {edu.institution.includes("NOUN") ? "🎓" : "📖"}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <Badge
                            variant={edu.status === "In Progress" ? "default" : "secondary"}
                            className={
                              edu.status === "In Progress"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                : ""
                            }
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        <p className="text-lg font-medium text-muted-foreground mb-2">{edu.field}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.institution}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Languages</h3>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-6 w-9 rounded flex items-center justify-center text-xs font-bold text-white ${
                            lang.language === "English"
                              ? "bg-red-500"
                              : lang.language === "Hausa"
                                ? "bg-green-500"
                                : lang.language === "Arabic"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                          }`}
                        >
                          {lang.language === "English"
                            ? "🇬🇧"
                            : lang.language === "Hausa"
                              ? "🇳🇬"
                              : lang.language === "Arabic"
                                ? "🇸🇦"
                                : "🇩🇪"}
                        </div>
                        <span className="font-medium">{lang.language}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {lang.proficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
