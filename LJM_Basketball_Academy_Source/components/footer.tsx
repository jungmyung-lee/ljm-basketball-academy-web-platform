import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-lg font-bold">LJM Basketball Academy</span>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Building champions on and off the court since 2021.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-muted-foreground transition-colors hover:text-foreground">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground transition-colors hover:text-foreground">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>254 Buljeong-ro</li>
              <li>Seongnam-si, South Korea</li>
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
            <h3 className="text-lg font-semibold">Hours</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>Mon - Fri: 3pm - 9pm</li>
              <li>Sat - Sun: 10:30am - 12pm, 4pm - 10pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LJM Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
