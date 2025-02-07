"use client"

import { useEffect, useState } from "react"
import { ToastProvider, ToastViewport, ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"


export function ToastPopup() {
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    toast({
      title: "Projeto Descontinuado!",
      description: "BethanIA é um projeto descontinuado e esse é um site Legado.",
      action: <ToastAction altText="Try again">Saiba Mais</ToastAction>,
      duration: 5000,
    })
  }, [toast])

  if (!mounted) return null

  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}

