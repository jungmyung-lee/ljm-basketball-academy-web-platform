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

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                코트에서 아이들은
                <br />
                인생을 배웁니다
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/95 sm:text-xl md:text-2xl">
                젊은 선수들이 기술, 팀워크, 인성을 개발하는 지역사회 중심의 청소년 농구 프로그램에 참여하세요.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-base md:text-lg">
                  <Link href="/contact">지금 시작하기</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-base text-white hover:bg-white/20 hover:text-white md:text-lg"
                >
                  <Link href="/schedule">일정 보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                가치관
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                농구는 단순한 게임 이상입니다. 젊은이들이 성장하고 배우며 번창할 수 있는 플랫폼입니다. 우리 아카데미는
                스포츠와 삶 모두에서 탁월한 전인적 선수를 양성하는 데 전념하고 있습니다.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">기술 개발</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    기본 기술과 실전적인 농구 기술에 중점을 둔 전문가의 코칭
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">팀워크</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    팀 플레이를 통한 강력한 의사소통 및 협력 기술 구축
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">인성</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    모든 수업에서 존중, 규율, 스포츠맨십 함양
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">성취</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    농구 코트 안팎에서의 성장과 성공을 축하
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-accent/50 py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                프로그램
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                선수들이 각자에게 맞는 상황에서 시작하여 원하는 성취감을 얻을 수 있도록 설계된 연령별 프로그램
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:mt-16">
              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    초등부
                  </div>
                  <h3 className="text-2xl font-bold">초등 4학년–6학년</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    조정력, 팀워크, 게임에 대한 사랑을 개발하는 데 중점을 둔 농구 기초 구축
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• 평일 및 주말 세션</li>
                    <li>• 기본 기술 훈련</li>
                    <li>• 팀 플레이 입문</li>
                    <li>• 재미있는 학습 환경</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    중학부
                  </div>
                  <h3 className="text-2xl font-bold">중학교 1학년–3학년</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    체계적인 훈련, 팀 전략 및 경쟁적인 게임 기회를 통한 고급 기술 개발
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• 주간 다중 세션</li>
                    <li>• 기술 개발 중점</li>
                    <li>• 포지션 훈련</li>
                    <li>• 게임 전략</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    고등부
                  </div>
                  <h3 className="text-2xl font-bold">고등학교 1학년–3학년</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    경쟁적인 플레이, 전술 및 앞으로 나아가기 위해 준비된 수업
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• 집중 훈련 세션</li>
                    <li>• 고급 기술</li>
                    <li>• 경쟁적인 게임 플레이</li>
                    <li>• 리더십 개발</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1.5rem)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground">
                    전체 연령
                  </div>
                  <h3 className="text-2xl font-bold">휠체어 농구</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    모든 경험 수준의 선수에게 개방된 주간 휠체어 농구 세션
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    <li>• 주간 세션</li>
                    <li>• 커뮤니티 중심</li>
                    <li>• 모든 기술 수준 환영</li>
                    <li>• 무료 프로그램</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                우리의 농구교실
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                활동하고, 배우고, 성장하고, 함께 즐기는 아이들을 만나보세요.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b7.jpeg"
                  alt="코치와 함께 드리블 연습을 하는 젊은 농구 선수들"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b2.jpeg"
                  alt="불정로 254 엘제임 농구교실 시설"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b5.jpeg"
                  alt="농구 훈련 중 휴식을 취하는 학생들"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b6.jpeg"
                  alt="진행 중인 농구 연습 세션"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b8.jpeg"
                  alt="청소년 선수들과 함께 농구 드릴을 이끄는 코치"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src="/images/b4.jpeg"
                  alt="농구 코트에서 연습하는 학생들"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                참여할 준비가 되셨나요?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                농구를 통해 협동심을 기르고, 인생을 배울 수 있는 곳에서 시작하세요!
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="text-base md:text-lg">
                  <Link href="/contact">문의하기</Link>
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
