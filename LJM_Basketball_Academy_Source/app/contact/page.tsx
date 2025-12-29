import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
                문의하기
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
                프로그램에 대해 궁금하신 점이나 등록 문의가 있으신가요? 언제든 연락 주세요!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">문의 남기기</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                  아래 양식을 작성해주시면 24시간 내에 답변드리겠습니다.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">연락처 안내</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    아래의 방법으로도 직접 연락하실 수 있습니다.
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="space-y-6 p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">전화번호</h3>
                        <a
                          href="tel:010-8895-0541"
                          className="mt-1 block text-base text-muted-foreground transition-colors hover:text-foreground"
                        >
                          010-8895-0541
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">이메일</h3>
                        <a
                          href="mailto:jm0541@naver.com"
                          className="mt-1 block text-base text-muted-foreground transition-colors hover:text-foreground"
                        >
                          jm0541@naver.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">위치</h3>
                        <address className="mt-1 text-base not-italic text-muted-foreground">
                          경기도 성남시
                          <br />
                          불정로 254
                        </address>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">운영 시간</h3>
                        <div className="mt-1 space-y-1 text-base text-muted-foreground">
                          <p>월요일 - 금요일: 오후 3시 - 9시</p>
                          <p>토요일 - 일요일: 오전 10:30 - 12시, 오후 4시 - 10시</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">방문 상담 환영합니다!</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      운영 시간 중 언제든 편하게 방문하셔서 시설을 둘러보시고, 코치님들과 만나보시며, 프로그램에 대해
                      자세히 알아보실 수 있습니다. 사전 예약 없이도 가능합니다!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
