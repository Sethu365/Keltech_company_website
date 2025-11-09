import React, { useState } from 'react'
import Section from '../components/Section'
import { FadeSlide } from '../components/Motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function validate() {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill out all fields.')
      return false
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return false
    }
    setError('')
    return true
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <Section className="max-w-6xl mx-auto py-16 px-6">
      <FadeSlide>
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-2 text-gray-600">
            We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </header>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info + Dynamic Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="p-2 bg-gray-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </span>
                  123 Corporate Lane, Office 500, Banglore City, BC 12345
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-2 bg-gray-100 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </span>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-2 bg-gray-100 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </span>
                  info@companyname.com
                </li>
              </ul>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-xl shadow-md border border-gray-100">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1190138099724!2d-122.40136098468364!3d37.79361737975791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c7c33333%3A0x9bcd3a28bba8b2f0!2s123%20Corporate%20Ln%2C%20San%20Francisco%2C%20CA%2094121%2C%20USA!5e0!3m2!1sen!2sin!4v1708791644235!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
            <form onSubmit={onSubmit} className="space-y-5">
              {error && <div role="alert" className="text-sm text-red-600">{error}</div>}
              {sent && <div role="status" className="text-sm text-green-600">Message sent (UI only).</div>}

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full md:w-auto rounded-lg bg-blue-600 px-6 py-2.5 text-white font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </FadeSlide>
    </Section>
  )
}
