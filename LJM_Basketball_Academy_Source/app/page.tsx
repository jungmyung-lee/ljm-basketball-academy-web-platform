import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Target, Heart, Trophy } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-gym-photo.png')" }}
          />
          <div className="absolute inset-0 bg-secondary/80" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Building Champions On & Off the Court
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/95 sm:text-xl md:text-2xl">
                Join our community-focused youth basketball program where young athletes develop skills, teamwork, and
                character.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-base md:text-lg">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-base text-white hover:bg-white/20 hover:text-white md:text-lg"
                >
                  <Link href="/schedule">View Schedule</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                We believe basketball is more than a game—it's a platform for young people to grow, learn, and thrive.
                Our academy is dedicated to developing well-rounded athletes who excel in sports and in life.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Skill Development</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Expert coaching focused on fundamental skills and advanced techniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Teamwork</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Building strong communication and collaboration skills through team play.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Character</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Fostering respect, discipline, and sportsmanship in every session.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Achievement</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Celebrating growth and success both on and off the basketball court.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-accent/50 py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Our Programs
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Age-appropriate programs designed to meet young athletes where they are and help them reach their
                potential.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:mt-16">
              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    Elementary
                  </div>
                  <h3 className="text-2xl font-bold">Elementary 4th–6th Grade</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Building basketball fundamentals with focus on coordination, teamwork, and developing a love for the
                    game.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• Weekday & weekend sessions</li>
                    <li>• Basic skills training</li>
                    <li>• Team play introduction</li>
                    <li>• Fun learning environment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    Middle School
                  </div>
                  <h3 className="text-2xl font-bold">Middle School 1st–3rd Year</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Advancing skills with structured training, team strategies, and competitive game opportunities.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• Multiple weekly sessions</li>
                    <li>• Skill development focus</li>
                    <li>• Position training</li>
                    <li>• Game strategy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    High School
                  </div>
                  <h3 className="text-2xl font-bold">High School 1st–3rd Year</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Advanced training for serious athletes focusing on competitive play, tactics, and preparation for
                    next level.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• Intensive training sessions</li>
                    <li>• Advanced techniques</li>
                    <li>• Competitive gameplay</li>
                    <li>• Leadership development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    All Ages
                  </div>
                  <h3 className="text-2xl font-bold">Wheelchair Basketball</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Weekly wheelchair basketball sessions open to players of all experience levels.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• Weekly sessions</li>
                    <li>• Community focused</li>
                    <li>• All skill levels welcome</li>
                    <li>• Free program</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Our Community
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                See our young athletes in action, learning, growing, and having fun together.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b7.jpeg"
                  alt="Young basketball players practicing dribbling drills with coach"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b2.jpeg"
                  alt="LJM Basketball Academy facility at 254 Buljeong-ro"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b5.jpeg"
                  alt="Students taking a break during basketball training"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b6.jpeg"
                  alt="Basketball practice session in progress"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b8.jpeg"
                  alt="Coach leading basketball drill with youth athletes"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b4.jpeg"
                  alt="Students practicing on the basketball court"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                Ready to Join Our Community?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Register your child today and help them grow into a confident, skilled, and caring young athlete.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="text-base md:text-lg">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
