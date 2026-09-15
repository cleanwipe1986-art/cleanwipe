import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

const contactInfo = [
  { icon: Mail, label: 'hello@orbitmedia.io' },
  { icon: Phone, label: '+1 (555) 012-4820' },
  { icon: MapPin, label: 'San Francisco · Remote-friendly' },
]

const budgets = ['Under $10k', '$10k – $50k', '$50k – $150k', '$150k+']

const initialForm = { name: '', email: '', company: '', budget: budgets[0], message: '' }

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
      <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-space-950/70 to-space-950" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold text-white sm:text-5xl">
            Let's build <span className="text-gradient">something great</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-space-400">
            Tell us a bit about your project and one of our strategists will get back to you
            within one business day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-orbit-cyan">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm text-space-200">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="font-display text-sm font-semibold text-white">Office hours</p>
              <p className="mt-2 text-sm text-space-400">Monday – Friday, 9am – 6pm PT</p>
              <p className="mt-4 text-sm text-space-400">
                Prefer async? Email is monitored around the clock and we typically reply same day.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center">
                <CheckCircle2 size={40} className="text-orbit-cyan" />
                <h2 className="font-display mt-4 text-2xl font-semibold text-white">Message sent</h2>
                <p className="mt-2 max-w-sm text-sm text-space-400">
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
                className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-8"
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
                      placeholder="jane@company.com"
                      className={inputClasses}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Company">
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClasses}
                    />
                  </Field>
                  <Field label="Estimated budget">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {budgets.map((budget) => (
                        <option key={budget} value={budget} className="bg-space-900">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Project details">
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals..."
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
  'w-full rounded-xl border border-white/10 bg-space-950/60 px-4 py-3 text-sm text-white placeholder:text-space-400 outline-none transition-colors focus:border-orbit-violet/60'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-space-400">{label}</span>
      {children}
    </label>
  )
}
