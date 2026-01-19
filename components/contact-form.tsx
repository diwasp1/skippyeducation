"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select name="service">
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="education-counseling">Education Counseling</SelectItem>
            <SelectItem value="university-admissions">University Admissions</SelectItem>
            <SelectItem value="visa-application">Visa Application</SelectItem>
            <SelectItem value="scholarship-guidance">Scholarship Guidance</SelectItem>
            <SelectItem value="pre-departure-briefing">Pre-Departure Briefing</SelectItem>
            <SelectItem value="accommodation">Accommodation Assistance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <div className="space-y-3 max-w-xs mx-auto">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center items-center rounded-lg bg-secondary text-white px-6 py-3 text-sm font-medium hover:bg-secondary/90 transition-colors w-full disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <button
          type="reset"
          className="inline-flex justify-center items-center rounded-lg bg-gray-200 text-gray-800 px-6 py-3 text-sm font-medium hover:bg-gray-300 transition-colors w-full"
        >
          Cancel
        </button>
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-lg bg-white text-gray-800 border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors w-full"
          onClick={() =>
            toast({ title: "Help", description: "Need assistance? Contact us at info@skippyeducation.com" })
          }
        >
          Help
        </button>
      </div>
    </form>
  )
}
