import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const experiences = [
  {
    title: "AI Prompt Engineer & Web Developer",
    company: "Brilliant Esystems Nigeria Limited",
    location: "Kano State, Nigeria",
    period: "July 2023 - Present",
    duration: "1 year 11 months",
    description: [
      "Designed and deployed AI prompts to enhance user productivity by 40%",
      "Built and maintained responsive web apps using React.js",
      "Collaborated with cross-functional teams to deliver scalable EdTech solutions",
    ],
    current: true,
  },
  {
    title: "Chief Executive Officer",
    company: "iOrbit Labs",
    location: "Abuja, Federal Capital Territory, Nigeria",
    period: "April 2019 - Present",
    duration: "6 years 2 months",
    description: [
      "Founded and lead a technology company specializing in Generative AI, Data Analysis, Web Development, and Cybersecurity",
      "Empowered businesses to harness cutting-edge technologies for streamlined operations and growth",
      "Built multidisciplinary team delivering tailored digital products and services",
      "Developed AI-powered automation and actionable data insights for modern enterprises",
    ],
    current: true,
  },
  {
    title: "Technical Support Specialist",
    company: "Alpha Dominion",
    location: "Nasarawa State, Nigeria",
    period: "October 2022 - May 2023",
    duration: "8 months",
    description: [
      "Assisted users with technical issues related to software and hardware, ensuring timely resolutions",
      "Managed installations and upgrades of operating systems and application software",
      "Developed and maintained comprehensive documentation for IT processes and user manuals",
    ],
    current: false,
  },
  {
    title: "Freelance Information Technology Consultant",
    company: "IT Minds",
    location: "Niger State, Nigeria",
    period: "September 2021 - July 2022",
    duration: "11 months",
    description: [
      "Provided consulting services to small businesses, focusing on network setup and troubleshooting",
      "Delivered training sessions for clients on the effective use of technology and software applications",
    ],
    current: false,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through technology leadership, innovation, and educational impact.
          </p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  >
                    Current
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {exp.period} • {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-2">•</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
