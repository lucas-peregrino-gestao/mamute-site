import { useState, useEffect } from "react";
import { MessageSquare, Phone, MapPin, Clock, Menu, X } from "lucide-react";
import MamuteLogo from "./MamuteLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const whatsappLink = "https://wa.me/551123642867?text=Ol%C3%A1%21+Gostaria+de+saber+se+voc%C3%AAs+t%C3%AAm+um+item+em+estoque.";

  return (
    <>
      {/* Top Banner with Quick info */}
      <div className="bg-mamute-dark text-gray-300 text-xs py-2 px-4 border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <MapPin size={13} className="text-mamute-accent mr-1.5" />
              Rua Guaipá, 443 - Vila Leopoldina
            </span>
            <span className="flex items-center">
              <Clock size={13} className="text-mamute-accent mr-1.5" />
              Seg - Sex: 8h às 17h30 | Sáb: 8h às 13h
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:1123642867" className="flex items-center hover:text-white transition-colors duration-200">
              <Phone size={13} className="text-mamute-accent mr-1.5" />
              (11) 2364-2867
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        id="app-header"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-mamute-dark"
            : "bg-white py-4 text-mamute-dark border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="flex items-center cursor-pointer group"
          >
            <MamuteLogo variant="horizontal" mode="light" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollTo("differentials")}
              className="font-sans font-medium text-sm text-gray-600 hover:text-mamute-accent transition-colors duration-200 cursor-pointer"
            >
              Diferenciais
            </button>
            <button
              onClick={() => handleScrollTo("categories")}
              className="font-sans font-medium text-sm text-gray-600 hover:text-mamute-accent transition-colors duration-200 cursor-pointer"
            >
              Categorias
            </button>
            <button
              onClick={() => handleScrollTo("reviews")}
              className="font-sans font-medium text-sm text-gray-600 hover:text-mamute-accent transition-colors duration-200 cursor-pointer"
            >
              Avaliações
            </button>
            <button
              onClick={() => handleScrollTo("gallery")}
              className="font-sans font-medium text-sm text-gray-600 hover:text-mamute-accent transition-colors duration-200 cursor-pointer"
            >
              Loja
            </button>
            <button
              onClick={() => handleScrollTo("location")}
              className="font-sans font-medium text-sm text-gray-600 hover:text-mamute-accent transition-colors duration-200 cursor-pointer"
            >
              Onde Estamos
            </button>
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:1123642867"
              className="font-sans font-semibold text-sm text-gray-700 hover:text-mamute-accent px-3 py-2 transition-colors duration-200"
            >
              (11) 2364-2867
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold text-xs uppercase tracking-wider bg-mamute-green hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <MessageSquare size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-mamute-accent focus:outline-none p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 shadow-inner space-y-3">
            <button
              onClick={() => handleScrollTo("differentials")}
              className="block w-full text-left font-sans font-medium text-sm py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-mamute-accent transition-all cursor-pointer"
            >
              Diferenciais
            </button>
            <button
              onClick={() => handleScrollTo("categories")}
              className="block w-full text-left font-sans font-medium text-sm py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-mamute-accent transition-all cursor-pointer"
            >
              Categorias
            </button>
            <button
              onClick={() => handleScrollTo("reviews")}
              className="block w-full text-left font-sans font-medium text-sm py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-mamute-accent transition-all cursor-pointer"
            >
              Avaliações
            </button>
            <button
              onClick={() => handleScrollTo("gallery")}
              className="block w-full text-left font-sans font-medium text-sm py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-mamute-accent transition-all cursor-pointer"
            >
              Loja
            </button>
            <button
              onClick={() => handleScrollTo("location")}
              className="block w-full text-left font-sans font-medium text-sm py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-mamute-accent transition-all cursor-pointer"
            >
              Onde Estamos
            </button>
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:1123642867"
                className="w-full text-center py-2 px-3 sm:py-2.5 text-sm font-semibold border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={15} className="text-mamute-accent" />
                Ligar: (11) 2364-2867
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 px-3 sm:py-2.5 text-sm font-bold bg-mamute-green text-white rounded-lg shadow hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={15} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
