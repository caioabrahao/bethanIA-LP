import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"
import Image from 'next/image';

const features = [
    { name: "Interação por Voz", bethanIA: true, elliQ: true },
    { name: "Lembretes de Medicação", bethanIA: true, elliQ: true },
    { name: "Check-ins Diários", bethanIA: true, elliQ: true },
    { name: "Conexão com a Família", bethanIA: true, elliQ: true },
    { name: "Dicas de Saúde Personalizadas", bethanIA: true, elliQ: false },
    { name: "Assistência Técnica", bethanIA: true, elliQ: false },
    { name: "Personalização da Personalidade da IA", bethanIA: true, elliQ: false },
    { name: "Suporte Multilíngue", bethanIA: true, elliQ: false },
    { name: "Integração com Dispositivos Smart Home", bethanIA: true, elliQ: true },
    { name: "Assistência de Emergência 24/7", bethanIA: true, elliQ: true },
]

export function FeatureComparison() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50%]">Funcionalidade</TableHead>
          <TableHead className="text-center"><div className="flex justify-center items-center"><img src="/bethania-logo.svg" alt="BethanIA" className="h-4" /></div></TableHead>
          <TableHead className="text-center"><div className="flex justify-center items-center"><img src="https://www.theseniorlist.com/app/uploads/2022/10/elliq-logo.jpg" alt="BethanIA" className="h-4 object-contain" /></div></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.name}>
            <TableCell className="font-medium">{feature.name}</TableCell>
            <TableCell className="text-center">
              {feature.bethanIA ? (
                <Check className="inline-block text-green-500" />
              ) : (
                <X className="inline-block text-red-500" />
              )}
            </TableCell>
            <TableCell className="text-center">
              {feature.elliQ ? (
                <Check className="inline-block text-green-500" />
              ) : (
                <X className="inline-block text-red-500" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

