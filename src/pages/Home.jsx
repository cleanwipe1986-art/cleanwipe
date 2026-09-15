import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'
import Eyebrow from '../components/ui/Eyebrow'
import SectionHeading from '../components/ui/SectionHeading'
import OrbitField from '../components/OrbitField'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { testimonials } from '../data/testimonials'
import { process } from '../data/process'

const stats = [
  { value: '120+', label: 'Products launched' },
  { value: '48', label: 'Team members' },
  { value: '9', label: 'Years in business' },
  { value: '96%', label: 'Client retention' },
]

const clients = ['Nova', 'Pulse', 'Atlas', 'Lumen', 'Kestrel', 'Forge']

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid px-6 pb-24 pt-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-space-950/60 to-space-950" />
        <OrbitField className="opacity-80" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <Eyebrow>
            <Sparkles size={12} /> Design-led software studio
          </Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl">
            We build digital products <span className="text-gradient">worth using.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-space-400">
            Orbit Media is a full-service IT company crafting custom websites, mobile apps, and
            cloud platforms — with design and engineering working in orbit around each other.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact">
              Start a Project <ArrowRight size={16} />
            </Button>
            <Button to="/work" variant="ghost">
              See Our Work
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-3xl font-bold text-white sm:text-4xl">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-space-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Client strip */}
      <section className="border-y border-white/10 bg-space-900/60 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-lg font-semibold text-space-400/70 transition-colors hover:text-white"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Everything you need to launch and scale"
              description="From first sketch to production infrastructure, our team covers the full product lifecycle."
            />
            <Button to="/services" variant="ghost" className="shrink-0">
              All Services <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-space-900/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How we work"
            title="A process built for momentum"
            description="Tight feedback loops keep every project moving — no black-box handoffs, no surprises."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div key={item.step} className="relative flex flex-col gap-3">
                <span className="font-display text-4xl font-bold text-white/10">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-space-400">{item.description}</p>
                {index < process.length - 1 && (
                  <span className="absolute right-[-1rem] top-2 hidden h-px w-8 bg-white/10 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Products we're proud to have shipped"
              description="A few of the platforms and apps our team has designed and built end to end."
            />
            <Button to="/work" variant="ghost" className="shrink-0">
              View All Work <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/10 bg-space-900/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Client voices"
            title="Trusted by teams who ship fast"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-space-900 px-8 py-16 text-center">
          <OrbitField className="opacity-40" />
          <div className="relative">
            <h2 className="font-display mx-auto max-w-xl text-3xl font-semibold text-white sm:text-4xl">
              Have a project in mind? Let's put it in orbit.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-space-400">
              Tell us about your idea and we'll get back to you within one business day.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact">
                Get in Touch <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
