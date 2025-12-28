"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      studentAge: formData.get("student-age"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        ;(e.target as HTMLFormElement).reset()
      }, 3000)
    } catch (err) {
      console.error("[v0] Form submission error:", err)
      setError("Failed to send message. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <svg
              className="h-8 w-8 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold md:text-2xl">Thank You!</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            We've received your message and will get back to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">
              Parent/Guardian Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="text-base"
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jm0541@naver.com"
              className="text-base"
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">
              Phone Number
            </Label>
            <Input id="phone" name="phone" type="tel" placeholder="010-8895-0541" className="text-base" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="student-age" className="text-base">
              Student Age <span className="text-destructive">*</span>
            </Label>
            <Select name="student-age" required>
              <SelectTrigger id="student-age" className="text-base" aria-required="true">
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6-9">6-9 years old (Junior League)</SelectItem>
                <SelectItem value="10-13">10-13 years old (Development League)</SelectItem>
                <SelectItem value="14-17">14-17 years old (Elite League)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your inquiry, questions, or what you'd like to know about our programs..."
              className="min-h-[150px] text-base"
              aria-required="true"
            />
          </div>

          <Button type="submit" className="w-full text-base md:text-lg" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
