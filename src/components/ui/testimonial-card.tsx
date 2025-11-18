import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  position: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={cn(
        "flex flex-col shrink-0 mr-[20px] rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px] w-full",
        "transition-colors duration-300",
        "!cursor-none hover:!cursor-none",
        className
      )}
    >
      <p className="sm:text-md mb-auto text-sm text-muted-foreground">
        {text}
      </p>
      <div className="flex items-center gap-3 mt-5">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-none mt-1">
            {author.position}
          </p>
        </div>
      </div>
    </Card>
  )
}