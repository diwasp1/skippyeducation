import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: "primary" | "secondary";
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  color = "primary",
}: ServiceCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return "border-primary bg-primary/5 hover:bg-primary/10 [&_svg]:text-primary hover:border-primary/80";
      case "secondary":
        return "border-secondary bg-secondary/5 hover:bg-secondary/10 [&_svg]:text-secondary hover:border-secondary/80";
      default:
        return "border-primary bg-primary/5 hover:bg-primary/10 [&_svg]:text-primary hover:border-primary/80";
    }
  };

  return (
    <Card
      className={`border-b-4 shadow-lg h-full transition-all hover:shadow-xl ${getColorClasses()}`}>
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl text-primary font-bold mb-2">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        <Link
          href={href}
          className={`uppercase border-b-2 border-primary text-primary pb-1 text-md font-medium tracking-wide hover:text-secondary hover:border-secondary transition`}>
          Learn more
        </Link>
      </CardContent>
    </Card>
  );
}
