import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  initials: string
  color?: "primary" | "secondary"
}

export function TestimonialCard({ content, author, role, initials, color = "primary" }: TestimonialCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return "border-primary [&_svg]:text-primary [&_.avatar-fallback]:bg-primary/10 [&_.avatar-fallback]:text-primary [&_.avatar]:border-primary"
      case "secondary":
        return "border-secondary [&_svg]:text-secondary [&_.avatar-fallback]:bg-secondary/10 [&_.avatar-fallback]:text-secondary [&_.avatar]:border-secondary"
      default:
        return "border-primary [&_svg]:text-primary [&_.avatar-fallback]:bg-primary/10 [&_.avatar-fallback]:text-primary [&_.avatar]:border-primary"
    }
  }

  return (
    <Card className={`border-t-4 shadow-lg h-full bg-white hover:shadow-xl transition-shadow ${getColorClasses()}`}>
      <CardContent className="p-6">
        <QuoteIcon className="h-8 w-8 opacity-20 mb-4" />
        <p className="text-gray-700 mb-6">{content}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3 border-2 avatar">
            <AvatarFallback className="avatar-fallback">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
