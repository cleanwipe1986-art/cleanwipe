import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import Eyebrow from '../components/ui/Eyebrow'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-space-950/70 to-space-950" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Our Work</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-bold text-white sm:text-5xl">
            Products that moved the <span className="text-gradient">needle</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-space-400">
            A selection of the web apps, mobile products, and platforms we've designed and shipped
            for clients across fintech, health, logistics, and retail.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-space-900 px-8 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Your product could be next.
          </h2>
          <p className="max-w-md text-space-400">
            Tell us where you want to go and we'll help you figure out how to get there.
          </p>
          <Button to="/contact">
            Start a Project <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  )
}
