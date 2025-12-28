import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { ReviewLightbox } from "@/components/review-lightbox"

export const metadata = {
  title: "Reviews | LJM Basketball Academy",
  description: "Read real feedback from parents whose children attended our basketball academy.",
}

const reviewImages = [
  { src: "/images/reviews/rv1.png", alt: "Parent review screenshot 1" },
  { src: "/images/reviews/rv2.png", alt: "Parent review screenshot 2" },
  { src: "/images/reviews/rv3.png", alt: "Parent review screenshot 3" },
  { src: "/images/reviews/rv4.png", alt: "Parent review screenshot 4" },
  { src: "/images/reviews/rv5.png", alt: "Parent review screenshot 5" },
  { src: "/images/reviews/rv6.png", alt: "Parent review screenshot 6" },
]

export default function ReviewsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
                Parent Reviews
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
                Read real feedback from parents whose children attended our basketball academy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">Review Gallery</h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Authentic feedback from our basketball academy parents
            </p>

            <ReviewLightbox images={reviewImages} />

            {/* Caption */}
            <p className="mt-8 text-center text-sm text-muted-foreground">Actual parent review screenshots</p>
          </div>
        </section>

        {/* Highlighted Text Reviews Section */}
        <section className="bg-accent/50 py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">Highlighted Reviews</h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              What parents are saying about LJM Basketball Academy
            </p>

            <div className="mx-auto max-w-4xl space-y-6">
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="font-semibold">Parent of 5th Grader</span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">Regular Member</span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">December 2024</span>
                  </div>
                  <p className="mb-4 text-base leading-relaxed text-foreground">
                    My child has been attending LJM Basketball Academy for 6 months now, and the improvement has been
                    incredible. The coaches are patient, skilled, and really know how to work with kids. The facilities
                    at 254 Buljeong-ro are clean and well-maintained. Highly recommended for any parent looking for
                    quality basketball training!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Friendly Coaching</Badge>
                    <Badge variant="secondary">Great Communication</Badge>
                    <Badge variant="secondary">Clean Facilities</Badge>
                  </div>
                </CardContent>
              </Card>

              
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="font-semibold">Parent of Middle Schooler</span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">1st Visit</span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">November 2024</span>
                  </div>
                  <p className="mb-4 text-base leading-relaxed text-foreground">
                    We just started at LJM and already feel welcomed. The staff took time to understand my child's skill
                    level and paired them with the right group. The Saturday free class is a wonderful opportunity for
                    beginners. The location in Seongnam-si is very convenient for us!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Beginner-Friendly</Badge>
                    <Badge variant="secondary">Welcoming Atmosphere</Badge>
                    <Badge variant="secondary">Convenient Location</Badge>
                  </div>
                </CardContent>
              </Card>

              
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="font-semibold">Parent of Elementary Student</span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">Regular Member</span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">October 2024</span>
                  </div>
                  <p className="mb-4 text-base leading-relaxed text-foreground">
                    The coaches at LJM really care about the kids. They focus on fundamentals while keeping it fun and
                    engaging. Communication is excellent - I can easily reach them at 010-8895-0541 or via email. My son
                    looks forward to every practice session. Worth every penny!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Excellent Communication</Badge>
                    <Badge variant="secondary">Fun Learning</Badge>
                    <Badge variant="secondary">Skill Development</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Placeholder for more reviews */}
              <Card className="border-2 border-dashed bg-accent/30">
                <CardContent className="flex min-h-[200px] items-center justify-center p-6">
                  <div className="text-center text-muted-foreground">
                    <p className="text-lg font-medium">More reviews coming soon</p>
                    <p className="mt-2 text-sm">Add your own review text here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Join Our Community?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90">
                Experience the quality training that parents are raving about. Contact us today to get started!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
