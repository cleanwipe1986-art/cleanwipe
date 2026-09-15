import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'
import { courses } from '../data/courses'

const contactInfo = [
  { icon: Mail, label: 'hello@orbitmedia.io' },
  { icon: Phone, label: '+1 (555) 012-4820' },
  { icon: MapPin, label: 'San Francisco · Online & On-campus batches' },
]

const courseOptions = ['Not sure yet', ...courses.map((course) => course.title)]

const initialForm = { name: '', email: '', phone: '', course: courseOptions[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden bg-grid px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Contact & Enroll</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
            Let's find your <span className="text-gradient">right course</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700/80">
            Tell us a bit about yourself and one of our advisors will get back to you within one
            business day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-brand-600 shadow-sm">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm text-ink-700">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-sm">
              <p className="font-display text-sm font-semibold text-ink-900">Office hours</p>
              <p className="mt-2 text-sm text-ink-700/80">Monday – Saturday, 9am – 6pm</p>
              <p className="mt-4 text-sm text-ink-700/80">
                Prefer async? Email is monitored around the clock and we typically reply same day.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-ink-900/10 bg-white px-8 py-16 text-center shadow-sm">
                <CheckCircle2 size={40} className="text-brand-600" />
                <h2 className="font-display mt-4 text-2xl font-semibold text-ink-900">Message sent</h2>
                <p className="mt-2 max-w-sm text-sm text-ink-700/80">
                  Thanks, {form.name.split(' ')[0] || 'there'}! We've received your message and will
                  be in touch within one business day.
                </p>
                <Button
                  variant="ghost"
                  className="mt-6"
                  onClick={() => {
                    setForm(initialForm)
                    setSubmitted(false)
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-ink-900/10 bg-white p-8 shadow-sm"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Cooper"
                      className={inputClasses}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={inputClasses}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Phone number">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 012 4820"
                      className={inputClasses}
                    />
                  </Field>
                  <Field label="Course interest">
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {courseOptions.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your goals, prior experience, and preferred batch timing..."
                    className={`${inputClasses} resize-none`}
                  />
                </Field>

                <Button as="button" type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClasses =
  'w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 outline-none transition-colors focus:border-brand-500/60'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-700/60">{label}</span>
      {children}
    </label>
  )
}
