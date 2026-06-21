import { Analytics } from '@vercel/analytics/react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import LocationAndHours from "./components/LocationAndHours";
import WhatsAppButton from "./components/WhatsAppButton";
import { Instagram, MapPin, Phone, Clock, MessageSquare, ShieldCheck, CheckCircle } from "lucide-react";
import MamuteLogo from "./components/MamuteLogo";

export default function App() {
  const whatsappLink = "https://wa.me/551123642867?text=Ol%C3%A1%21+Gostaria+de+atendimento+para+materiais.";
  const instagramLink = "https://www.instagram.com/mamute_construcao/";
  const mapsLink = "https://share.google/WOuYJP5cDtY3ATcFh";

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-gray-900 flex flex-col justify-between selection:bg-mamute-accent selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Main content sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Brand Differentials (Diferenciais) */}
        <Features />

        {/* Product Categories (Categorias de Produtos) */}
        <Categories />

        {/* Google Reviews and social proof */}
        <Reviews />

        {/* Photo Gallery (Galeria de Fotos) */}
        <Gallery />

        {/* Map, address, payment methods, opening hours */}
        <LocationAndHours />
      </main>

      {/* 3. Highly polished branding Footer */}
      <footer className="bg-mamute-dark text-white pt-16 pb-8 border-t-2 border-mamute-accent/20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-[10%] w-[30%] h-[50%] bg-mamute-accent/5 blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo brand & Address tagline */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4">
            <MamuteLogo variant="horizontal" mode="on-dark" className="scale-95 origin-left" />
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              A loja de bairro mais completa da Vila Leopoldina. Resolva suas reformas e reparos rápidos com variedade, excelente atendimento e estacionamento gratuito no local.
            </p>
            {/* Social profiles */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 rounded-xl flex items-center justify-center text-gray-200 hover:text-white hover:scale-105 transition-all shadow-md group"
                title="Siga a Mamute no Instagram"
              >
                <Instagram size={18} className="group-hover:rotate-6 transition-transform" />
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-blue-600 rounded-xl flex items-center justify-center text-gray-200 hover:text-white hover:scale-105 transition-all shadow-md group"
                title="Veja nossa avaliação no Google Maps"
              >
                <svg className="w-4.5 h-4.5 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links & Products summary */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-display font-extrabold text-[#f9fafb] text-xs tracking-wider uppercase border-l-2 border-mamute-accent pl-2.5">
              Produtos & Serviços
            </h4>
            <ul className="space-y-2 mt-3 text-gray-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-mamute-accent rounded-full shrink-0" />
                <span>Tubos e conexões hidráulicas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-mamute-accent rounded-full shrink-0" />
                <span>Chuveiros e Resistências Lorenzetti</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-mamute-accent rounded-full shrink-0" />
                <span>Selantes, massas e tintas acrílicas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-mamute-accent rounded-full shrink-0" />
                <span>Ferramentas manuais e ferragens</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-mamute-accent rounded-full shrink-0" />
                <span>Areia, pedra e sacos de cimento</span>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Callouts */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-display font-extrabold text-[#f9fafb] text-xs tracking-wider uppercase border-l-2 border-mamute-accent pl-2.5">
              Orçamento no WhatsApp
            </h4>
            <p className="text-gray-400 leading-relaxed text-xs">
              Mande foto da sua peça quebrada, especificação do parafuso ou a lista completa de materiais que deseja cotar. Respondemos rápido de verdade!
            </p>
            <div className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-mamute-green hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wide px-4 py-2.5 rounded-lg shadow-md transition-colors"
              >
                <MessageSquare size={14} />
                <span>(11) 2364-2867</span>
              </a>
            </div>
          </div>

          {/* Address and quick schedules */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-display font-extrabold text-[#f9fafb] text-xs tracking-wider uppercase border-l-2 border-mamute-accent pl-2.5">
              Fale Conosco
            </h4>
            <div className="space-y-3.5 mt-3 text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-mamute-accent shrink-0 mt-0.5" />
                <span className="text-xs">
                  Rua Guaipá, 443 - Vila Leopoldina <br /> São Paulo - SP
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={18} className="text-mamute-accent shrink-0 mt-0.5" />
                <a href="tel:1123642867" className="text-xs hover:text-white transition-colors">
                  (11) 2364-2867
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={18} className="text-mamute-accent shrink-0 mt-0.5" />
                <span className="text-xs">
                  Seg - Sex: 8h - 17h30 <br /> Sábado: 8h - 13h
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center font-sans">
          <p className="text-xs text-gray-500 leading-relaxed">
            As marcas registradas exibidas ou listadas (ex. Lorenzetti, Quartzolit, Tigre, Amanco) pertencem aos seus respectivos titulares de propriedade intelectual e são referenciadas nesta página apenas para identificação do portfólio de comercialização e revenda de materiais da distribuidora.
          </p>
          <p className="text-[10px] text-gray-600 mt-4 uppercase tracking-[0.1em] font-semibold">
            Mamute Material de Construção • Vila Leopoldina • São Paulo / SP
          </p>
        </div>
      </footer>

      {/* 4. Active floating conversion CTA */}
      <WhatsAppButton />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
