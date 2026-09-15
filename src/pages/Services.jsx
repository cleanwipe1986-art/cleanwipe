import { ArrowRight, Check } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Eyebrow from '../components/ui/Eyebrow'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const engagementModels = [
  {
    title: 'Fixed-Scope Project',
    description: 'A clearly defined deliverable, timeline, and budget — ideal for a single launch.',
    features: ['Detailed proposal & timeline', 'Weekly progress demos', 'Fixed price, no surprises'],
  },
  {
    title: 'Dedicated Team',
    description: 'An embedded squad of designers and engineers working solely on your roadmap.',
    features: ['Full-time senior team', 'Direct Slack & standups', 'Scale up or down monthly'],
  },
  {
    title: 'Retainer & Support',
    description: 'Ongoing design and engineering support to keep shipping after launch.',
    features: ['Monthly hour allotment', 'Priority response time', 'Roadmap planning included'],
  },
]

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-space-950/70 to-space-950" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold text-white sm:text-5xl">
            One studio, <span className="text-gradient">every discipline</span> you need
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-space-400">
            Design, engineering, and infrastructure under one roof — so nothing gets lost in
            translation between teams.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-space-900/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Engagement models"
            title="Work with us the way that fits your team"
            description="Whether you need a single sprint or a long-term partner, we shape the engagement around your goals."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7"
              >
                <h3 className="font-display text-lg font-semibold text-white">{model.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-space-400">{model.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-space-200">
                      <Check size={16} className="mt-0.5 shrink-0 text-orbit-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-space-900 px-8 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="max-w-md text-space-400">
            Book a free 30-minute consultation and we'll help you map out the right approach.
          </p>
          <Button to="/contact">
            Book a Consultation <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  )
}
