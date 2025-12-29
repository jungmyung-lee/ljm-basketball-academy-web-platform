import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <span className="text-lg font-bold">엘제임 농구교실</span>
            <p className="text-base leading-relaxed text-muted-foreground">
              2021년부터 농구 수업을 진행하고 있습니다. 항상 최선을 다하겠습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">바로가기</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-muted-foreground transition-colors hover:text-foreground">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground transition-colors hover:text-foreground">
                  수업일정
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">연락처</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>경기도 성남시 불정로 254</li>
              <li>
                <a href="tel:010-8895-0541" className="transition-colors hover:text-foreground">
                  010-8895-0541
                </a>
              </li>
              <li>
                <a href="mailto:jm0541@naver.com" className="transition-colors hover:text-foreground">
                  jm0541@naver.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">운영시간</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>월 - 금: 오후 3시 - 9시</li>
              <li>토 - 일: 오전 10시 30분 - 오후 12시, 오후 4시 - 10시</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-base text-muted-foreground">
          <p>&copy; 2025 엘제임 농구교실. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
