import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

const scheduleByDay = {
  월요일: [
    {
      program: "초등부 (4~6학년)",
      time: "오후 3:00 - 4:30",
      location: "메인 체육관",
      ages: "초등 4~6학년",
    },
    {
      program: "중등부 (1~3학년)",
      time: "오후 4:30 - 6:00",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "고등부",
      time: "오후 6:00 - 7:30",
      location: "메인 체육관",
      ages: "고등학생",
    },
    {
      program: "휠체어 농구 수업 (무료)",
      time: "오후 7:30 - 9:00",
      location: "메인 체육관",
      ages: "전 연령",
    },
  ],
  화요일: [
    {
      program: "초등부 (4~6학년)",
      time: "오후 3:00 - 4:30",
      location: "메인 체육관",
      ages: "초등 4~6학년",
    },
    {
      program: "중등부 (1~3학년)",
      time: "오후 4:30 - 6:00",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "고등부",
      time: "오후 6:00 - 7:30",
      location: "메인 체육관",
      ages: "고등학생",
    },
    {
      program: "휠체어 농구 수업 (무료)",
      time: "오후 7:30 - 9:00",
      location: "메인 체육관",
      ages: "전 연령",
    },
  ],
  수요일: [
    {
      program: "초등부 (4~6학년)",
      time: "오후 3:00 - 4:30",
      location: "메인 체육관",
      ages: "초등 4~6학년",
    },
    {
      program: "중등부 (1~3학년)",
      time: "오후 4:30 - 6:00",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "고등부",
      time: "오후 6:00 - 7:30",
      location: "메인 체육관",
      ages: "고등학생",
    },
    {
      program: "휠체어 농구 수업 (무료)",
      time: "오후 7:30 - 9:00",
      location: "메인 체육관",
      ages: "전 연령",
    },
  ],
  목요일: [
    {
      program: "초등부 (4~6학년)",
      time: "오후 3:00 - 4:30",
      location: "메인 체육관",
      ages: "초등 4~6학년",
    },
    {
      program: "중등부 (1~3학년)",
      time: "오후 4:30 - 6:00",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "고등부",
      time: "오후 6:00 - 7:30",
      location: "메인 체육관",
      ages: "고등학생",
    },
    {
      program: "휠체어 농구 수업 (무료)",
      time: "오후 7:30 - 9:00",
      location: "메인 체육관",
      ages: "전 연령",
    },
  ],
  금요일: [
    {
      program: "초등부 (4~6학년)",
      time: "오후 3:00 - 4:30",
      location: "메인 체육관",
      ages: "초등 4~6학년",
    },
    {
      program: "중등부 (1~3학년)",
      time: "오후 4:30 - 6:00",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "고등부",
      time: "오후 6:00 - 7:30",
      location: "메인 체육관",
      ages: "고등학생",
    },
    {
      program: "휠체어 농구 수업 (무료)",
      time: "오후 7:30 - 9:00",
      location: "메인 체육관",
      ages: "전 연령",
    },
  ],
  토요일: [
    {
      program: "중등부 (1~3학년)",
      time: "오전 10:30 - 12:00",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "중등부 (1~3학년)",
      time: "오후 4:00 - 5:30",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "초등부 자유수업",
      time: "오후 5:30 - 7:00",
      location: "메인 체육관",
      ages: "초등학생",
    },
    {
      program: "초등부 (4~6학년)",
      time: "오후 7:00 - 8:30",
      location: "메인 체육관",
      ages: "초등 4~6학년",
    },
    {
      program: "중등부 자유수업",
      time: "오후 8:30 - 10:00",
      location: "메인 체육관",
      ages: "중학생",
    },
  ],
  일요일: [
    {
      program: "중등부 (1~3학년)",
      time: "오전 10:30 - 12:00",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "중등부 (1~3학년)",
      time: "오후 4:00 - 5:30",
      location: "메인 체육관",
      ages: "중등 1~3학년",
    },
    {
      program: "초등부 자유수업",
      time: "오후 5:30 - 7:00",
      location: "메인 체육관",
      ages: "초등학생",
    },
    {
      program: "초등부 (4~6학년)",
      time: "오후 7:00 - 8:30",
      location: "메인 체육관",
      ages: "초등 4~6학년",
    },
    {
      program: "중등부 자유수업",
      time: "오후 8:30 - 10:00",
      location: "메인 체육관",
      ages: "중학생",
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
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center">
                <Calendar className="h-12 w-12 text-secondary-foreground md:h-16 md:w-16" aria-hidden="true" />
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
                수업 일정
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
                주간 수업 일정을 확인하시고 우리 아이에게 가장 적합한 시간을 선택해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4">
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
                  <h2 className="text-xl font-semibold md:text-2xl">수업 안내사항</h2>
                  <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>수업 시작 10분 전까지 도착하여 체크인 및 준비운동을 진행해주세요.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>개인 물통과 실내 운동화를 꼭 지참해주시기 바랍니다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>체육관 사정으로 일정이 변경될 경우 이메일 및 공지사항 페이지를 통해 안내드립니다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>불가피한 결석의 경우 보강 수업이 가능하니 연락 주시기 바랍니다.</span>
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
