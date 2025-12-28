import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Megaphone } from "lucide-react"

// Announcements sorted from MOST recent (top) → older (bottom)
const announcements = [
  // ---------- 2023 (most recent year) ----------
  {
    id: 1,
    title: "Free Trial Class for Elementary & Middle School Students",
    date: "2023-01-20",
    category: "Trial Class",
    content:
      "We are offering a free trial class for new elementary and middle school students. The session focuses on basic ball control, dribbling, and footwork, with individualized guidance based on each student's skill level. Parents are welcome to observe the class.",
  },
  {
    id: 2,
    title: "Wheelchair Basketball Training Session Announcement",
    date: "2023-01-12",
    category: "Program",
    content:
      "Our academy provides a dedicated wheelchair basketball session for interested players of all experience levels. Sessions include basic skill training and recreational practice in a supportive and welcoming environment. Participation is open to all who wish to join.",
  },
  {
    id: 3,
    title: "Spring Term Enrollment Now Open",
    date: "2023-02-10",
    category: "Registration",
    content:
      "Enrollment for the 2023 Spring Term is now open. Classes are operated in small training groups and focus on strengthening basketball fundamentals for elementary and middle school students. Beginners are welcome to join.",
  },
  {
    id: 4,
    title: "Free Trial Program for New Students",
    date: "2023-03-05",
    category: "Trial Class",
    content:
      "A free trial program is available for students visiting our academy for the first time. The session introduces core fundamentals including dribbling, passing, and basic movement, with instruction tailored to each student's comfort and ability level.",
  },
  {
    id: 5,
    title: "Summer Break Fundamental Skills Program",
    date: "2023-06-18",
    category: "Program",
    content:
      "During the summer break, we will be running an intensive fundamentals program. Training includes ball-handling repetitions, footwork and balance exercises, and shooting form correction to help students develop stable and confident fundamentals.",
  },
  {
    id: 6,
    title: "Class Safety & Training Policy Notice",
    date: "2023-07-22",
    category: "Policy",
    content:
      "To ensure a safe training environment for all students, all classes are conducted under instructor supervision. Stretching and warm-ups are required before every session, and athletic shoes and sportswear are strongly recommended. Parents may observe from designated seating areas.",
  },

  // ---------- 2022 (earlier activity / foundation period) ----------
  {
    id: 7,
    title: "Updated Weekly Class Schedule",
    date: "2022-11-02",
    category: "Schedule",
    content:
      "Certain weekday training times have been adjusted due to gym availability. Weekend class schedules remain unchanged. Please check the schedule page for the latest session information.",
  },
  {
    id: 8,
    title: "Fall Beginner Fundamentals Group Opened",
    date: "2022-09-10",
    category: "Registration",
    content:
      "A new beginner fundamentals training group has been added for younger students. The program focuses on confidence-building, basic movement control, and introductory ball-handling skills.",
  },
  {
    id: 9,
    title: "Safety & Injury Prevention Training Reminder",
    date: "2022-07-18",
    category: "Notice",
    content:
      "Warm-ups and stretching are required before every session to prevent injury. Students are encouraged to bring water, wear athletic shoes, and notify coaches of any discomfort during training.",
  },
  {
    id: 10,
    title: "Pilot Training Session & Small Group Program Launch",
    date: "2022-03-05",
    category: "Program",
    content:
      "Our academy began operating small-group basketball training sessions focused on fundamentals, movement coordination, and teamwork development for beginner and recreational-level students.",
  },
]

export default function AnnouncementsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center">
                <Megaphone className="h-12 w-12 text-secondary-foreground md:h-16 md:w-16" aria-hidden="true" />
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
                Announcements
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
                Stay updated with the latest news, programs, and important announcements from LJM Basketball Academy.
              </p>
            </div>
          </div>
        </section>

        {/* Announcements List */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="overflow-hidden border-2 transition-shadow hover:shadow-lg">
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary" className="text-sm">
                        {announcement.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" aria-hidden="true" />
                        <time dateTime={announcement.date}>
                          {new Date(announcement.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                    <CardTitle className="text-2xl leading-tight md:text-3xl">{announcement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
