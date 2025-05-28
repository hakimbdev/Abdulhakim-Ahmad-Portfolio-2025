import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { ErrorFallbackImage } from "@/components/error-fallback-image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <ErrorFallbackImage
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-102"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-4xl mb-2">
              {title.includes("AI")
                ? "🤖"
                : title.includes("Data")
                  ? "📊"
                  : title.includes("iOrbit")
                    ? "🚀"
                    : title.includes("SDG")
                      ? "🎯"
                      : title.includes("Multilingual")
                        ? "🌍"
                        : "⚡"}
            </div>
            <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300">{title}</h4>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={link} target="_blank">
            <div className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-white dark:hover:bg-black transition-colors">
              <ExternalLink className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-100 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:text-blue-600 transition-colors group/link"
        >
          <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
          View Project
        </Link>
      </CardFooter>
    </Card>
  )
}
