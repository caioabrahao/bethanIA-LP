import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Shaahad Alim",
    location: "Campinas - SP",
    image: "/photos/photo1.png?height=100&width=100",
    quote:
      '"BethanIA tem sido uma mudança de jogo para mim. Ela me ajuda a ficar conectado com minha família e gerenciar minhas tarefas diárias sem esforço."',
  },
  {
    name: "Eliana Silva",
    location: "Americana - SP",
    image: "/photos/photo2.png?height=100&width=100",
    quote:
      '"Eu amo como a BethanIA é paciente ao me ajudar com tecnologia. É como ter um especialista em tecnologia pessoal sempre disponível."',
  },
  {
    name: "Patricia Oliveira",
    location: "Belo Horizonte - MG",
    image: "/photos/photo3.jpg?height=100&width=100",
    quote:
      '"Graças à BethanIA, me sinto mais independente e no controle da minha saúde. Ela realmente melhorou minha qualidade de vida."',
  },
]

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-white border-none shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

