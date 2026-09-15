import Eyebrow from '../components/ui/Eyebrow'
import SectionHeading from '../components/ui/SectionHeading'
import OrbitField from '../components/OrbitField'
import { team, values } from '../data/team'

const milestones = [
  { year: '2016', text: 'Orbit Media founded by a team of three, teaching web design out of a shared workspace.' },
  { year: '2019', text: 'Expanded into Digital Marketing and Mobile App Development as demand grew.' },
  { year: '2022', text: 'Crossed 3,000 students trained across web, marketing, and design courses.' },
  { year: '2025', text: 'Added AI Automation & Tools training and crossed 5,000 students trained.' },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
        <OrbitField className="opacity-50" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>About Orbit Media</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
            An institute built around <span className="text-gradient">real skills</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700/80">
            We're a team of trainers and practitioners who believe the best way to learn digital
            skills is by building real things, with people who do this for a living.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Started by trainers who missed teaching the work, not just the theory"
              description="Orbit Media began as a three-person team frustrated by courses that stopped at slides and never got students building. Nine years later, that founding idea — teach with real projects, not just theory — still shapes every course."
            />
          </div>
          <div className="space-y-6 border-l border-ink-900/10 pl-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <span className="absolute -left-[calc(2rem+3px)] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-500" />
                <p className="font-display text-sm font-semibold text-brand-600">{milestone.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-700/80">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-brand-50/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What we believe" title="The values behind every course" align="center" />
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

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our trainers"
            title="Meet the people behind Orbit Media"
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-400 font-display text-lg font-semibold text-white">
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{member.name}</p>
                  <p className="text-xs text-ink-700/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
