import Image from "next/image"

const partners = [
  { name: "PUCCAMP", logo: "/partners/puccamp.png?height=60&width=120" },
  { name: "Venture Hub", logo: "/partners/venture-hub.png?height=60&width=120" },
  { name: "Mescla Coworking", logo: "/partners/mescla2.png?height=60&width=120" },
  // { name: "Meals on Wheels", logo: "/placeholder.svg?height=60&width=120" },
  // { name: "Senior Living", logo: "/placeholder.svg?height=60&width=120" },
]

export function TrustedPartners() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-24 h-full left-0 top-0 z-10 bg-gradient-to-r from-emerald-50 to-transparent"></div>
      <div className="absolute w-24 h-full right-0 top-0 z-10 bg-gradient-to-l from-teal-50 to-transparent"></div>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {partners.concat(partners).concat(partners).map((partner, index) => (
          <div key={index} className="flex items-center justify-center w-[200px] mx-4 shrink-0">
            <Image src={partner.logo || "/placeholder.svg"} 
            alt={partner.name} 
            width={120} 
            height={60}
            className="grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

