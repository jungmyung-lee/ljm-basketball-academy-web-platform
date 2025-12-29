import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Megaphone } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "초·중등 무료 체험반 안내",
    date: "2023-01-20",
    category: "체험수업",
    content:
      "처음 참가하시는 초등·중등 학생을 대상으로 무료 체험 수업을 진행합니다. 기초 볼 핸들링, 드리블, 풋워크를 중심으로 진행되며, 개인의 수준에 맞춰 세심한 지도가 이루어집니다. 학부모님의 참관도 가능합니다.",
  },
  {
    id: 2,
    title: "휠체어 농구 수업 안내",
    date: "2023-01-12",
    category: "프로그램",
    content:
      "휠체어 농구에 관심 있는 모든 분들을 위한 수업을 운영합니다. 경험 유무와 관계없이 참여 가능하며, 기초 기술 훈련과 자유로운 연습을 통해 즐겁고 따뜻한 분위기 속에서 농구를 경험할 수 있습니다.",
  },
  {
    id: 3,
    title: "2023 봄학기 수강생 모집",
    date: "2023-02-10",
    category: "모집",
    content:
      "2023년 봄학기 수강 신청이 시작되었습니다. 소규모 그룹 수업으로 진행되며 초·중등 학생을 대상으로 농구 기본기를 탄탄하게 다집니다. 처음 시작하는 분들도 환영합니다.",
  },
  {
    id: 4,
    title: "신규 입회생 무료 체험 프로그램",
    date: "2023-03-05",
    category: "체험수업",
    content:
      "처음 방문하시는 학생을 위한 무료 체험 프로그램을 운영합니다. 드리블, 패스, 기본 동작을 중심으로 진행되며, 개인별 수준과 편안함에 맞춰 지도합니다.",
  },
  {
    id: 5,
    title: "여름방학 기초 집중 프로그램",
    date: "2023-06-18",
    category: "프로그램",
    content:
      "여름방학 동안 기초 집중 훈련을 진행합니다. 볼 핸들링 반복 훈련, 풋워크 및 밸런스 운동, 슈팅 폼 교정을 통해 안정적이고 자신감 있는 기본기를 완성할 수 있도록 돕습니다.",
  },
  {
    id: 6,
    title: "수업 안전 수칙 및 운영 정책 안내",
    date: "2023-07-22",
    category: "운영정책",
    content:
      "모든 학생의 안전한 훈련 환경을 위해 수업은 지도자 감독 하에 진행됩니다. 매 수업 전 스트레칭과 준비운동은 필수이며, 운동화와 운동복 착용을 권장합니다. 학부모님께서는 지정된 관람석에서 수업을 참관하실 수 있습니다.",
  },
  {
    id: 7,
    title: "주간 수업 시간 일부 변경 안내",
    date: "2022-11-02",
    category: "일정변경",
    content:
      "체육관 사정으로 일부 평일 훈련 시간이 조정되었습니다. 주말 수업 일정은 기존과 동일하게 운영됩니다. 최신 일정은 일정표 페이지에서 확인하실 수 있습니다.",
  },
  {
    id: 8,
    title: "가을학기 기초반 신설",
    date: "2022-09-10",
    category: "모집",
    content:
      "저학년 학생을 위한 기초 훈련반이 새롭게 개설되었습니다. 자신감 형성, 기본적인 움직임 제어, 기초 볼 핸들링을 중심으로 진행됩니다.",
  },
  {
    id: 9,
    title: "안전 수칙 및 부상 예방 안내",
    date: "2022-07-18",
    category: "안내",
    content:
      "부상 예방을 위해 매 수업 전 준비운동과 스트레칭은 필수입니다. 물통을 꼭 지참하시고, 운동화를 착용해주시며, 훈련 중 불편함이 있을 경우 즉시 코치님께 알려주시기 바랍니다.",
  },
  {
    id: 10,
    title: "소규모 그룹 훈련 프로그램 시작",
    date: "2022-03-05",
    category: "프로그램",
    content:
      "기초 기술, 협응력, 그리고 팀워크를 중심으로 한 소규모 농구 훈련 프로그램을 시작하였습니다. 초보자 및 취미 수준의 학생들을 위한 수업입니다.",
  },
]

export default function AnnouncementsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center">
                <Megaphone className="h-12 w-12 text-secondary-foreground md:h-16 md:w-16" aria-hidden="true" />
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
                공지사항
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
                엘제임 농구교실의 최신 소식, 프로그램, 중요 공지를 확인하세요.
              </p>
            </div>
          </div>
        </section>

        {/* Announcements List */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4">
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
                          {new Date(announcement.date).toLocaleDateString("ko-KR", {
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
