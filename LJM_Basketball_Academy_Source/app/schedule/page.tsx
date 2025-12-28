import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

const scheduleByDay = {
  Monday: [
    {
      program: "Elementary (4th-6th Grade)",
      time: "3:00 PM - 4:30 PM",
      location: "Main Gym",
      ages: "Elementary 4th-6th",
    },
    {
      program: "Middle School (1st-3rd Grade)",
      time: "4:30 PM - 6:00 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "High School",
      time: "6:00 PM - 7:30 PM",
      location: "Main Gym",
      ages: "High School",
    },
    {
      program: "Wheelchair Basketball Club (Free)",
      time: "7:30 PM - 9:00 PM",
      location: "Main Gym",
      ages: "All Ages",
    },
  ],
  Tuesday: [
    {
      program: "Elementary (4th-6th Grade)",
      time: "3:00 PM - 4:30 PM",
      location: "Main Gym",
      ages: "Elementary 4th-6th",
    },
    {
      program: "Middle School (1st-3rd Grade)",
      time: "4:30 PM - 6:00 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "High School",
      time: "6:00 PM - 7:30 PM",
      location: "Main Gym",
      ages: "High School",
    },
    {
      program: "Wheelchair Basketball Club (Free)",
      time: "7:30 PM - 9:00 PM",
      location: "Main Gym",
      ages: "All Ages",
    },
  ],
  Wednesday: [
    {
      program: "Elementary (4th-6th Grade)",
      time: "3:00 PM - 4:30 PM",
      location: "Main Gym",
      ages: "Elementary 4th-6th",
    },
    {
      program: "Middle School (1st-3rd Grade)",
      time: "4:30 PM - 6:00 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "High School",
      time: "6:00 PM - 7:30 PM",
      location: "Main Gym",
      ages: "High School",
    },
    {
      program: "Wheelchair Basketball Club (Free)",
      time: "7:30 PM - 9:00 PM",
      location: "Main Gym",
      ages: "All Ages",
    },
  ],
  Thursday: [
    {
      program: "Elementary (4th-6th Grade)",
      time: "3:00 PM - 4:30 PM",
      location: "Main Gym",
      ages: "Elementary 4th-6th",
    },
    {
      program: "Middle School (1st-3rd Grade)",
      time: "4:30 PM - 6:00 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "High School",
      time: "6:00 PM - 7:30 PM",
      location: "Main Gym",
      ages: "High School",
    },
    {
      program: "Wheelchair Basketball Club (Free)",
      time: "7:30 PM - 9:00 PM",
      location: "Main Gym",
      ages: "All Ages",
    },
  ],
  Friday: [
    {
      program: "Elementary (4th-6th Grade)",
      time: "3:00 PM - 4:30 PM",
      location: "Main Gym",
      ages: "Elementary 4th-6th",
    },
    {
      program: "Middle School (1st-3rd Grade)",
      time: "4:30 PM - 6:00 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "High School",
      time: "6:00 PM - 7:30 PM",
      location: "Main Gym",
      ages: "High School",
    },
    {
      program: "Wheelchair Basketball Club (Free)",
      time: "7:30 PM - 9:00 PM",
      location: "Main Gym",
      ages: "All Ages",
    },
  ],
  Saturday: [
    {
      program: "Middle School (1st-3rd Grade)",
      time: "10:30 AM - 12:00 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "Middle School (1st-3rd Grade)",
      time: "4:00 PM - 5:30 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "Elementary Free Class",
      time: "5:30 PM - 7:00 PM",
      location: "Main Gym",
      ages: "Elementary",
    },
    {
      program: "Elementary (4th-6th Grade)",
      time: "7:00 PM - 8:30 PM",
      location: "Main Gym",
      ages: "Elementary 4th-6th",
    },
    {
      program: "Middle School Free Class",
      time: "8:30 PM - 10:00 PM",
      location: "Main Gym",
      ages: "Middle School",
    },
  ],
  Sunday: [
    {
      program: "Middle School (1st-3rd Grade)",
      time: "10:30 AM - 12:00 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "Middle School (1st-3rd Grade)",
      time: "4:00 PM - 5:30 PM",
      location: "Main Gym",
      ages: "Middle School 1st-3rd",
    },
    {
      program: "Elementary Free Class",
      time: "5:30 PM - 7:00 PM",
      location: "Main Gym",
      ages: "Elementary",
    },
    {
      program: "Elementary (4th-6th Grade)",
      time: "7:00 PM - 8:30 PM",
      location: "Main Gym",
      ages: "Elementary 4th-6th",
    },
    {
      program: "Middle School Free Class",
      time: "8:30 PM - 10:00 PM",
      location: "Main Gym",
      ages: "Middle School",
    },
  ],
}

export default function SchedulePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center">
                <Calendar className="h-12 w-12 text-secondary-foreground md:h-16 md:w-16" aria-hidden="true" />
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
                Practice Schedule
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
                View our weekly practice schedule and find the perfect time for your young athlete.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              {Object.entries(scheduleByDay).map(([day, sessions]) => (
                <Card key={day} className="border-2">
                  <CardHeader className="bg-accent/50">
                    <CardTitle className="text-2xl md:text-3xl">{day}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {sessions.map((session, index) => (
                        <div key={index} className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-xl font-semibold">{session.program}</h3>
                              <Badge className="text-sm">{session.ages}</Badge>
                            </div>
                            <div className="flex flex-col gap-2 text-base text-muted-foreground sm:flex-row sm:gap-6">
                              <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                                <span>{session.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                                <span>{session.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Notes */}
            <div className="mx-auto mt-12 max-w-5xl space-y-6">
              <Card className="border-2 border-primary/20 bg-accent/50">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-semibold md:text-2xl">Important Schedule Notes</h2>
                  <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>Please arrive 10 minutes early to allow time for check-in and warm-up.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>All participants must bring their own water bottle and appropriate athletic footwear.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>
                        Schedule changes due to facility availability will be announced via email and on our
                        announcements page.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>Make-up sessions are available for excused absences - please contact us to schedule.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
