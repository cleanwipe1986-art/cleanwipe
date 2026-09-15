import Eyebrow from '../components/ui/Eyebrow'
import SectionHeading from '../components/ui/SectionHeading'
import OrbitField from '../components/OrbitField'
import { team, values } from '../data/team'

const milestones = [
  { year: '2016', text: 'Orbit Media founded by a team of three in a shared workspace.' },
  { year: '2019', text: 'Opened a dedicated mobile practice after our first App Store launch.' },
  { year: '2022', text: 'Crossed 100 shipped products across fintech, health, and retail.' },
  { year: '2025', text: 'Grew to a 48-person studio serving clients across three continents.' },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-space-950/70 to-space-950" />
        <OrbitField className="opacity-50" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>About Orbit Media</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold text-white sm:text-5xl">
            A studio built around <span className="text-gradient">design and craft</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-space-400">
            We're a team of designers, engineers, and strategists who believe great software
            happens when those disciplines orbit each other instead of working in silos.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Started by builders who missed doing the work"
              description="Orbit Media began as a three-person team frustrated by agencies that treated design and engineering as separate phases. Nine years later, that founding idea — build with, not just for, our clients — still shapes every project."
            />
          </div>
          <div className="space-y-6 border-l border-white/10 pl-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <span className="absolute -left-[calc(2rem+3px)] top-1.5 h-2.5 w-2.5 rounded-full bg-orbit-cyan" />
                <p className="font-display text-sm font-semibold text-orbit-violet-light">{milestone.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-space-400">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-space-900/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What we believe" title="The values behind every project" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <h3 className="font-display text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-space-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the people behind Orbit Media"
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orbit-violet to-orbit-cyan font-display text-lg font-semibold text-white">
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-space-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
