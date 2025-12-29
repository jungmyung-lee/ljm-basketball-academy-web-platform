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
      setError("메시지 전송에 실패했습니다. 다시 시도하시거나 직접 연락 주시기 바랍니다.")
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
          <h3 className="text-xl font-semibold md:text-2xl">감사합니다!</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            문의를 접수했습니다. 24시간 내에 답변드리겠습니다.
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
              학부모/보호자 성함 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="성함을 입력해주세요"
              className="text-base"
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              이메일 주소 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              className="text-base"
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">
              연락처
            </Label>
            <Input id="phone" name="phone" type="tel" placeholder="010-0000-0000" className="text-base" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="student-age" className="text-base">
              학생 나이 <span className="text-destructive">*</span>
            </Label>
            <Select name="student-age" required>
              <SelectTrigger id="student-age" className="text-base" aria-required="true">
                <SelectValue placeholder="연령대를 선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wheelchair">휠체어 농구</SelectItem>
                <SelectItem value="elementary-free">초등부(무료)</SelectItem>
                <SelectItem value="middle-free">중등부(무료)</SelectItem>
                <SelectItem value="elementary">초등부</SelectItem>
                <SelectItem value="middle">중등부</SelectItem>
                <SelectItem value="high">고등부</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base">
              문의 내용 <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="궁금하신 점이나 프로그램에 대해 알고 싶으신 내용을 자유롭게 작성해주세요..."
              className="min-h-[150px] text-base"
              aria-required="true"
            />
          </div>

          <Button type="submit" className="w-full text-base md:text-lg" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "전송 중..." : "문의하기"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
