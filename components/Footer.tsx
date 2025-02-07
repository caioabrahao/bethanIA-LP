export const Footer = () => {
    return(
        <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <img src="/bethania-logo.svg" alt="BethanIA" className="h-6 mb-1" />
              <p className="text-sm text-gray-600">Sua Companheira do Dia a Dia</p>
            </div>
            <nav className="flex gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                Políticas de Privacidade
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                Termos de Serviço
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </footer>
    )
}