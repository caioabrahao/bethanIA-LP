import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Phone, Calendar, Heart, Download, ArrowRight, Star, Users, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/Header"
import { TrustedPartners } from "@/components/trusted-partners"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/Footer"
import { FeatureComparison } from "@/components/FeatureComparison"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      
      <Header />
      <div className="container mx-auto lg:w-3/4 px-4 py-24 md:px-6">
        {/* Hero Block */}
        <Card className="overflow-hidden border-none bg-white shadow-xl mb-8 rounded-3xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Sua Companheira <br />do Dia a Dia
                </h1>
                <p className="text-xl text-gray-600">
                  BethanIA ajuda você a se manter conectado, organizado e independente com um assistente de IA amigável
                  projetado especialmente para idosos.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full"
                    size="lg"
                  >
                    Começar
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full">
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] bg-emerald-100 rounded-l-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1664382950513-939431ef4e5c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2070&auto=format&fit=crop"
                  alt="Senior using a tablet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trusted Partners Marquee */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Nossos Parceiros</h2>
          <TrustedPartners />
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {["users", "satisfaction", "active-time"].map((id) => (
            <Card key={id} className="bg-white border-none shadow-lg rounded-2xl">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {id === "users"
                      ? "Usuários Ativos"
                      : id === "satisfaction"
                        ? "Taxa de Satisfação"
                        : "Tempo Ativo Diário"}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {id === "users" ? "10.000+" : id === "satisfaction" ? "98%" : "45 mins"}
                  </h3>
                </div>
                {id === "users" ? (
                  <Users className="h-8 w-8 text-emerald-600" />
                ) : id === "satisfaction" ? (
                  <Star className="h-8 w-8 text-emerald-600" />
                ) : (
                  <Clock className="h-8 w-8 text-emerald-600" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div id="features" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="bg-white border-none shadow-lg rounded-2xl row-span-2">
            <CardContent className="p-6 space-y-4">
              <div className="h-40 relative rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop"
                  alt="Interface de IA"
                  fill
                  className="object-cover"
                />
              </div>
              <Brain className="h-12 w-12 text-emerald-600" />
              <h3 className="text-xl font-bold">Lembra de Tudo</h3>
              <p className="text-gray-600">
                Nunca esqueça compromissos, medicamentos ou datas importantes. BethanIA mantém tudo organizado para você.
              </p>
              <Button variant="ghost" className="text-emerald-600 p-0 h-auto font-semibold hover:text-emerald-700">
                Saiba mais <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {["tech-help", "organization"].map((id) => (
            <Card key={id} className="bg-white border-none shadow-lg rounded-2xl">
              <CardContent className="p-6 space-y-4">
                {id === "tech-help" ? (
                  <Phone className="h-12 w-12 text-emerald-600" />
                ) : (
                  <Calendar className="h-12 w-12 text-emerald-600" />
                )}
                <h3 className="text-xl font-bold">
                  {id === "tech-help" ? "Ajuda Tecnológica Fácil" : "Organização Diária"}
                </h3>
                <p className="text-gray-600">
                  {id === "tech-help"
                    ? "Obtenha ajuda com seu smartphone, tablet ou computador. BethanIA explica a tecnologia de forma simples."
                    : "Fique no controle da sua agenda com lembretes gentis e assistência no planejamento diário."}
                </p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-none shadow-lg rounded-2xl md:col-span-2 lg:col-span-2">
            <CardContent className="p-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">BethanIA em qualquer lugar</h3>
                  <p className="text-emerald-50">
                    Leve sua assistente para qualquer lugar com o App BethanIA. Disponível para iOS e Android.
                  </p>
                  <Button variant="secondary" size="lg" className="rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    Baixe Agora
                  </Button>
                </div>
                <div className="relative h-[300px] lg:h-[400px]">
                  <Image
                    src="/app-mockup-2.png?q=80&w=2070&auto=format&fit=crop"
                    alt="Interface do App Mobile"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Section */}
        <div id="health" className="grid gap-4 md:grid-cols-2 mb-8">
          {["stay-active", "medication"].map((id) => (
            <Card key={id} className="bg-white border-none shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[200px] md:h-[300px]">
                  <Image
                    src={
                      id === "stay-active"
                        ? "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                        : "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                    }
                    alt={id === "stay-active" ? "Casal de idosos se exercitando" : "Gerenciamento de medicamentos"}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">
                    {id === "stay-active" ? "Mantenha-se Ativo e Saudável" : "Gerenciamento de Medicamentos"}
                  </h3>
                  <p className="text-gray-600">
                    {id === "stay-active"
                      ? "BethanIA fornece rotinas de exercícios personalizadas e dicas de saúde adaptadas às suas necessidades e habilidades."
                      : "Nunca perca uma dose com os lembretes inteligentes e o sistema de rastreamento de medicamentos da BethanIA."}
                  </p>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full">
                    {id === "stay-active" ? "Obter Dicas de Saúde" : "Saiba Mais"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div id="comparison" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How We Compare</h2>
          <Card className="bg-white border-none shadow-xl overflow-hidden rounded-3xl">
            <CardContent className="p-6">
              <FeatureComparison />
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">O Que Nossos Usuários Dizem</h2>
          <Testimonials />
        </div>

        {/* Startup Growth Section */}
        <div id="startup-growth" className="mb-8">
          <Card className="bg-white border-none shadow-xl overflow-hidden rounded-3xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Crescendo com Nossa Comunidade</h2>
                  <p className="text-xl text-gray-600">
                    BethanIA é uma startup em rápido crescimento profundamente conectada com comunidades de idosos. Estamos
                    constantemente evoluindo com base em feedbacks e necessidades reais.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-emerald-600" />
                      Encontros e workshops comunitários regulares
                    </li>
                    <li className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2 text-emerald-600" />
                      Canais de feedback direto com nossa equipe de desenvolvimento
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-emerald-600" />
                      Parcerias com instalações e organizações de cuidados para idosos
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full">
                    Junte-se à Nossa Jornada
                  </Button>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1627634771521-9754fe2bc49b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2070&auto=format&fit=crop"
                    alt="Engajamento da comunidade idosa"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Section */}
        <div id="community" className="mb-8">
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-none shadow-xl overflow-hidden rounded-3xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Junte-se à Nossa Comunidade Vibrante</h2>
                  <p className="text-xl">
                    Conecte-se com outros usuários da BethanIA, compartilhe experiências e aprenda novas maneiras de melhorar sua vida diária.
                  </p>
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-100 rounded-full" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Junte-se à Comunidade
                  </Button>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"
                    alt="Membros da comunidade idosa"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

