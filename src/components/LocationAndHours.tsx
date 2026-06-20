import { MapPin, Clock, Phone, CreditCard, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function LocationAndHours() {
  const mapUrl = 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122176211846!2d-46.72972412497645!3d-23.528145260421876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8989a3df7a1%3A0x6bba46ee6c2d1b8c!2sRua%20Guaip%C3%A1%2C%20443%20-%20Vila%20Leopoldina%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1718879500000!5m2!1spt-BR!2sbr";
  
  const directionsUrl = "https://maps.google.com/?q=Rua+Guaipá,+443+-+Vila+Leopoldina,+São+Paulo+-+SP";

  return (
    <section id="location" className="py-16 bg-[#f9fafb] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-mamute-accent bg-mamute-accent/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Informações Práticas
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-mamute-dark tracking-tight">
            Venha Nos Visitar ou Fale Conosco
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-sans">
            Localização estratégica na Vila Leopoldina com estacionamento seguro na porta para facilitar seu dia a dia.
          </p>
          <div className="h-1 bg-mamute-accent w-24 mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid: Map vs. Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Essential Store Contacts, Payments & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mamute-accent/10 rounded-xl text-mamute-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 font-sans">
                  <h4 className="font-display font-extrabold text-gray-900 text-sm tracking-wide uppercase">
                    Endereço Completo
                  </h4>
                  <p className="text-base text-gray-700 font-semibold leading-relaxed">
                    Rua Guaipá, 443
                  </p>
                  <p className="text-sm text-gray-500">
                    Vila Leopoldina, São Paulo - SP, CEP 05089-001
                  </p>
                  <a 
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-mamute-accent hover:text-mamute-accent-hover transition-colors pt-1"
                  >
                    <span>Como chegar pelo Waze ou Maps</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mamute-accent/10 rounded-xl text-mamute-accent shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1 w-full font-sans">
                  <h4 className="font-display font-extrabold text-gray-900 text-sm tracking-wide uppercase mb-2">
                    Horário de Funcionamento
                  </h4>
                  <div className="flex justify-between text-sm py-1 border-b border-gray-100/60 font-medium">
                    <span className="text-gray-600">Segunda a Sexta</span>
                    <span className="text-gray-900 font-semibold">08:00h às 17:30h</span>
                  </div>
                  <div className="flex justify-between text-sm py-1 border-b border-gray-100/60 font-medium">
                    <span className="text-gray-600">Sábado</span>
                    <span className="text-gray-900 font-semibold">08:00h às 13:00h</span>
                  </div>
                  <div className="flex justify-between text-sm py-1 text-gray-400 font-medium">
                    <span>Domingo e Feriados</span>
                    <span className="font-semibold text-red-500 bg-red-50 rounded px-1.5 py-0.5 text-[11px]">Fechado</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payments Accepted Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm font-sans space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mamute-accent/10 rounded-xl text-mamute-accent shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-extrabold text-gray-900 text-sm tracking-wide uppercase">
                    Formas de Pagamento
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Facilidade total para o seu bolso na hora da compra de materiais:
                  </p>
                </div>
              </div>

              {/* Badges list */}
              <div className="grid grid-cols-2 gap-2 pt-1 font-sans">
                <div className="bg-[#f0fdf4] border border-green-100 p-2.5 rounded-xl flex items-center gap-2">
                  <div className="bg-mamute-green text-white p-1 rounded-md text-[10px] font-bold">PIX</div>
                  <span className="text-xs font-bold text-gray-700">Pix Instantâneo</span>
                </div>
                <div className="bg-[#f8fafc] border border-gray-200 p-2.5 rounded-xl flex items-center gap-2">
                  <CreditCard size={15} className="text-blue-600" />
                  <span className="text-xs font-bold text-gray-700">Crédito</span>
                </div>
                <div className="bg-[#f8fafc] border border-gray-200 p-2.5 rounded-xl flex items-center gap-2">
                  <CreditCard size={15} className="text-indigo-600" />
                  <span className="text-xs font-bold text-gray-700">Débito</span>
                </div>
                <div className="bg-[#fffbeb] border border-amber-100 p-2.5 rounded-xl flex items-center gap-2">
                  <div className="text-[10px] font-bold bg-amber-500 text-white rounded p-0.5">$</div>
                  <span className="text-xs font-bold text-gray-700">Dinheiro</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Map container */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="w-full h-full min-h-[350px] lg:min-h-0 bg-white rounded-3xl overflow-hidden shadow-md border border-gray-150 relative flex flex-col group">
              {/* Dynamic Map Header bar */}
              <div className="bg-white p-4 border-b border-gray-150 flex items-center justify-between font-sans shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-mamute-green animate-ping" />
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Localização em Tempo Real (Rua Guaipá)
                  </span>
                </div>
                <a 
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mamute-accent text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-mamute-accent-hover transition-colors"
                >
                  <span>Rotas</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="grow relative">
                <iframe
                  title="Mapa de Localização - Mamute Material de Construção"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        {/* Brand visual summary row */}
        <div className="mt-12 pt-10 border-t border-gray-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-mamute-dark rounded-xl flex items-center justify-center text-white font-extrabold font-display text-sm">
              M
            </div>
            <div className="font-sans">
              <p className="font-bold text-sm text-mamute-dark">Mamute Material de Construção Ltda.</p>
              <p className="text-xs text-gray-500">Desde sua fundação, servindo a Vila Leopoldina e imediações.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500 font-medium font-sans">
            <span>© 2026 Mamute Construção. Todos os direitos reservados.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
