import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Frontend Web Development",
    issuer: "Professional Certification",
    type: "Development",
    verified: true,
    icon: "/placeholder.svg?height=80&width=80&text=FE&fontsize=20&bg=3b82f6&fg=ffffff",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    type: "AI/Cloud",
    verified: true,
    icon: "/placeholder.svg?height=80&width=80&text=MS&fontsize=20&bg=8b5cf6&fg=ffffff",
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    type: "Data Analytics",
    verified: true,
    icon: "/placeholder.svg?height=80&width=80&text=GA&fontsize=20&bg=10b981&fg=ffffff",
  },
  {
    title: "Introduction to Data and Data Science",
    issuer: "Professional Certification",
    type: "Data Science",
    verified: true,
    icon: "/placeholder.svg?height=80&width=80&text=DS&fontsize=20&bg=14b8a6&fg=ffffff",
  },
  {
    title: "Certified International Financier (CIF)",
    issuer: "International Finance Institute",
    type: "Finance",
    verified: true,
    icon: "/placeholder.svg?height=80&width=80&text=CIF&fontsize=20&bg=f59e0b&fg=ffffff",
  },
]

const typeColors = {
  Development: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  "AI/Cloud": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
  "Data Analytics": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  "Data Science": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
  Finance: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
}

export default function CertificationsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Certifications & Awards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise across technology, data, and finance domains.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div
                    className={`h-16 w-16 rounded-lg flex items-center justify-center text-white font-bold text-xl ${
                      cert.type === "Development"
                        ? "bg-blue-500"
                        : cert.type === "AI/Cloud"
                          ? "bg-purple-500"
                          : cert.type === "Data Analytics"
                            ? "bg-green-500"
                            : cert.type === "Data Science"
                              ? "bg-emerald-500"
                              : "bg-orange-500"
                    }`}
                  >
                    {cert.type === "Development"
                      ? "💻"
                      : cert.type === "AI/Cloud"
                        ? "☁️"
                        : cert.type === "Data Analytics"
                          ? "📊"
                          : cert.type === "Data Science"
                            ? "🔬"
                            : "💰"}
                  </div>
                  {cert.verified && <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardTitle className="text-lg mb-2 leading-tight">{cert.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <Badge variant="secondary" className={typeColors[cert.type as keyof typeof typeColors]}>
                  {cert.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
