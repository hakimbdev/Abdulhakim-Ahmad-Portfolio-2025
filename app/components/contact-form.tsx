"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { submitContactForm } from "../actions"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-8 shadow-lg">
      <form id="contact-form" action={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input id="name" name="name" required className="h-11" placeholder="Your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="h-11"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Subject
          </Label>
          <Input id="subject" name="subject" className="h-11" placeholder="What's this about?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            className="min-h-[120px] resize-none"
            placeholder="Tell me about your project, collaboration idea, or how I can help..."
          />
        </div>
        <Button
          type="submit"
          className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          disabled={pending}
        >
          {pending ? (
            "Sending..."
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
        {message && (
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 dark:text-green-200 text-center">{message}</p>
          </div>
        )}
      </form>
    </Card>
  )
}
