import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-gradient text-7xl font-bold">404</span>
      <h1 className="font-display mt-4 text-2xl font-semibold text-white">Lost in orbit</h1>
      <p className="mt-2 max-w-sm text-sm text-space-400">
        The page you're looking for has drifted out of range. Let's get you back on course.
      </p>
      <Button to="/" className="mt-8">
        <ArrowLeft size={16} /> Back to Home
      </Button>
    </section>
  )
}
