import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'
import Eyebrow from '../components/ui/Eyebrow'
import SectionHeading from '../components/ui/SectionHeading'
import OrbitField from '../components/OrbitField'
import CourseCard from '../components/CourseCard'
import TestimonialCard from '../components/TestimonialCard'
import { courses } from '../data/courses'
import { testimonials } from '../data/testimonials'
import { process } from '../data/process'
import { values } from '../data/team'

const stats = [
  { value: '5,000+', label: 'Students Trained' },
  { value: '10', label: 'Courses Offered' },
  { value: '15+', label: 'Expert Trainers' },
  { value: '100%', label: 'Practical Training' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid px-6 pb-24 pt-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
        <OrbitField className="opacity-70" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <Eyebrow>
            <Sparkles size={12} /> Digital Skills Training Institute
          </Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-ink-900 sm:text-6xl">
            Learn skills that <span className="text-gradient">get you hired.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700/80">
            Orbit Media trains students in Digital Marketing, Web & E-commerce Development, Mobile
            App Development, AI Automation, and more — with hands-on projects and real placement
            support.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/courses">
              Explore Courses <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="ghost">
              Talk to an Advisor
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-ink-700/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular courses */}
      <section className="bg-brand-50/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What you'll learn"
              title="Courses built for real careers"
              description="From foundations to advanced tools, every course is taught by practitioners and built around live projects."
            />
            <Button to="/courses" variant="ghost" className="shrink-0">
              View All Courses <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why Orbit Media"
            title="Training built to actually get you working"
            description="No filler modules — just the skills, tools, and support employers and clients expect."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-ink-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-ink-900/10 bg-brand-50/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How it works"
            title="From enrollment to your first job"
            description="A simple, structured path that keeps you moving forward every week."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div key={item.step} className="relative flex flex-col gap-3">
                <span className="font-display text-4xl font-bold text-brand-600/15">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700/80">{item.description}</p>
                {index < process.length - 1 && (
                  <span className="absolute right-[-1rem] top-2 hidden h-px w-8 bg-ink-900/10 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Student voices" title="Trusted by students who leveled up" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-ink-900/10 bg-gradient-to-br from-brand-700 to-brand-500 px-8 py-16 text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-display mx-auto max-w-xl text-3xl font-semibold text-white sm:text-4xl">
              Ready to future-proof your career?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/85">
              New batches start every month. Talk to an advisor and find the right course for you.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                to="/contact"
                variant="ghost"
                className="!border-white/40 !bg-white !text-brand-700 hover:!bg-white/90"
              >
                Enroll Now <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
