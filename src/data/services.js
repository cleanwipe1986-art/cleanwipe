import {
  LayoutTemplate,
  Smartphone,
  Cloud,
  Palette,
  LineChart,
  ShieldCheck,
} from 'lucide-react'

export const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    summary: 'Interfaces engineered around how people actually think, tap, and scroll.',
    points: ['Product & brand design', 'Design systems', 'Prototyping & user testing'],
  },
  {
    icon: LayoutTemplate,
    title: 'Web Development',
    summary: 'Fast, accessible, fully responsive sites and web apps built to scale.',
    points: ['Marketing & e-commerce sites', 'Custom web applications', 'Headless CMS integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    summary: 'Native-feeling iOS and Android apps from a single, well-tested codebase.',
    points: ['React Native & Flutter', 'App Store & Play Store launch', 'Offline-first architecture'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    summary: 'Infrastructure that scales quietly in the background while you sleep.',
    points: ['AWS / GCP / Azure setup', 'CI/CD pipelines', 'Monitoring & cost optimization'],
  },
  {
    icon: LineChart,
    title: 'Digital Strategy',
    summary: 'Data-informed roadmaps that connect design decisions to business results.',
    points: ['Product discovery', 'Analytics & SEO', 'Growth experimentation'],
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    summary: 'Senior engineering guidance for teams making high-stakes technical bets.',
    points: ['Architecture reviews', 'Security audits', 'Technical due diligence'],
  },
]
