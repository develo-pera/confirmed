import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsMarqueeProps {
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsMarquee({
  testimonials,
  className
}: TestimonialsMarqueeProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      // "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="relative w-[100%]">
        <div className="relative w-[100%] overflow-hidden">
          <div className="group overflow-hidden p-2">
            <div className="flex w-[max-content] marquee-animation group-hover:[animation-play-state:paused]">
              {
                [1, 2].map((repeatIndex) => (
                  <div className="flex" key={repeatIndex}>
                    {
                      testimonials.map((testimonial, i) => (
                        <TestimonialCard
                          key={`${i}`}
                          {...testimonial}
                        />
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
      </div>
    </section>
  )
}