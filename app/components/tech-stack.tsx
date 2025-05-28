import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "AI & Machine Learning",
    skills: ["AI Prompt Engineering", "Machine Learning", "Natural Language Processing", "Azure AI", "Educational AI"],
    color: "from-purple-500 to-pink-500",
    icon: "/placeholder.svg?height=48&width=48&text=AI&fontsize=16&bg=8b5cf6&fg=ffffff",
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "UI/UX Design", "Responsive Design"],
    color: "from-blue-500 to-cyan-500",
    icon: "/placeholder.svg?height=48&width=48&text=FE&fontsize=16&bg=3b82f6&fg=ffffff",
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Data Analytics", "Python", "Database Design", "API Development", "Data Visualization"],
    color: "from-green-500 to-emerald-500",
    icon: "/placeholder.svg?height=48&width=48&text=BE&fontsize=16&bg=10b981&fg=ffffff",
  },
  {
    category: "EdTech & Strategy",
    skills: [
      "Educational Technology",
      "Instructional Design",
      "SDG Implementation",
      "Project Management",
      "EdTech Strategy",
    ],
    color: "from-orange-500 to-red-500",
    icon: "/placeholder.svg?height=48&width=48&text=Ed&fontsize=16&bg=f59e0b&fg=ffffff",
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Azure", "Google Analytics", "Cybersecurity", "Network Setup", "Technical Support"],
    color: "from-gray-500 to-slate-500",
    icon: "/placeholder.svg?height=48&width=48&text=Tools&fontsize=16&bg=64748b&fg=ffffff",
  },
  {
    category: "Business & Finance",
    skills: [
      "International Finance",
      "Business Consulting",
      "Team Leadership",
      "Strategic Planning",
      "Entrepreneurship",
    ],
    color: "from-indigo-500 to-purple-500",
    icon: "/placeholder.svg?height=48&width=48&text=Biz&fontsize=16&bg=4f46e5&fg=ffffff",
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech, index) => (
        <Card key={tech.category} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="mb-4 flex items-center gap-3">
            <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">
                {tech.category === "AI & Machine Learning"
                  ? "🤖"
                  : tech.category === "Frontend Development"
                    ? "💻"
                    : tech.category === "Backend & Data"
                      ? "🗄️"
                      : tech.category === "EdTech & Strategy"
                        ? "📚"
                        : tech.category === "Tools & Platforms"
                          ? "🔧"
                          : "💼"}
              </span>
            </div>
            <div>
              <div className={`h-1 w-12 bg-gradient-to-r ${tech.color} rounded-full mb-2`}></div>
              <h3 className="text-lg font-semibold">{tech.category}</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-sm font-medium text-muted-foreground ring-1 ring-inset ring-muted-foreground/20 hover:bg-muted/80 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
