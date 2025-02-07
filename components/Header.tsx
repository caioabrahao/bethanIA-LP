import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            <img src="/bethania-logo.svg" alt="BethanIA" className="h-6" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="text-gray-600 hover:text-emerald-700">
              Funcionalidades
            </Link>
            <Link href="#health" className="text-gray-600 hover:text-emerald-700">
              Saúde
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-emerald-700">
              Testemunhas
            </Link>
            <Link href="#community" className="text-gray-600 hover:text-emerald-700">
              Preços
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full font-semibold">Saiba Mais</Button>
        </div>
      </div>
    </header>
  )
}

