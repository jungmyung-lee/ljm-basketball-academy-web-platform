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
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
                Get In Touch
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
                Have questions about our programs? Want to register your child? We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Send Us a Message</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">Contact Information</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    Reach out to us directly through any of the methods below.
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="space-y-6 p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
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
                        <h3 className="text-lg font-semibold">Email</h3>
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
                        <h3 className="text-lg font-semibold">Location</h3>
                        <address className="mt-1 text-base not-italic text-muted-foreground">
                          254 Buljeong-ro
                          <br />
                          Seongnam-si, South Korea
                        </address>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Office Hours</h3>
                        <div className="mt-1 space-y-1 text-base text-muted-foreground">
                          <p>Monday - Friday: 3pm - 9pm</p>
                          <p>Saturday - Sunday: 10:30am - 12pm, 4pm - 10pm</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">Drop-In Visits Welcome!</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      Feel free to stop by during office hours to tour our facility, meet our coaches, and learn more
                      about our programs. No appointment necessary!
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
