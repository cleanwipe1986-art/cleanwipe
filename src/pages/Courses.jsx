import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Eyebrow from '../components/ui/Eyebrow'
import CourseCard from '../components/CourseCard'
import CourseCategoryCard from '../components/CourseCategoryCard'
import { courses } from '../data/courses'
import { courseCategories } from '../data/courseCategories'

const batchOptions = [
  {
    title: 'Online Live Classes',
    description: 'Attend from anywhere with live, interactive sessions and recorded backups.',
    features: ['Live trainer-led sessions', 'Class recordings included', 'Flexible weekday & weekend batches'],
  },
  {
    title: 'Classroom Training',
    description: 'In-person training with hands-on lab access and one-on-one mentoring.',
    features: ['On-campus lab access', 'Direct trainer mentoring', 'Peer learning & group projects'],
  },
  {
    title: 'Corporate Training',
    description: 'Customized training programs delivered on-site for your team.',
    features: ['Curriculum tailored to your team', 'Flexible scheduling', 'Certificates for all participants'],
  },
]

export default function Courses() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Courses</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
            Every skill you need, <span className="text-gradient">under one roof</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700/80">
            Digital Marketing, Web & E-commerce Development, Mobile App Development, AI Automation,
            and more — taught by practitioners, built around live projects.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Flagship programs" title="Our primary courses" align="left" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-brand-50/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Full curriculum"
            title="Explore courses by category"
            description="A closer look at everything covered inside each program, organized by specialty."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courseCategories.map((category) => (
              <CourseCategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Batch options"
            title="Learn the way that fits your schedule"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {batchOptions.map((option) => (
              <div
                key={option.title}
                className="flex flex-col rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-ink-900">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{option.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-ink-900/10 bg-brand-50 px-8 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Not sure which course is right for you?
          </h2>
          <p className="max-w-md text-ink-700/80">
            Book a free 30-minute counselling session and we'll help you pick the right path.
          </p>
          <Button to="/contact">
            Book a Free Session <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  )
}
