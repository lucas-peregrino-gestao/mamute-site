import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessageSquare, Star, CheckCircle, ShieldCheck, Clock } from "lucide-react";
import MamuteLogo from "./MamuteLogo";

// Horário de funcionamento real da loja, sempre calculado no fuso de
// São Paulo — não depende do fuso do dispositivo de quem está acessando.
function isStoreOpenNow(): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const minutesNow = hour * 60 + minute;

  if (weekday === "Sun") return false; // Fechado no domingo

  const opensAt = 8 * 60; // 08:00
  const closesAt = weekday === "Sat" ? 13 * 60 : 17 * 60 + 30; // Sáb: 13h | Seg-Sex: 17h30

  return minutesNow >= opensAt && minutesNow < closesAt;
}

export default function Hero() {
  const whatsappLink = "https://wa.me/551123642867?text=Ol%C3%A1%21+Gostaria+de+saber+se+voc%C3%AAs+t%C3%AAm+um+item+em+estoque.";

  const [isStoreOpen, setIsStoreOpen] = useState(true);

  useEffect(() => {
    const updateStatus = () => setIsStoreOpen(isStoreOpenNow());
    updateStatus();
    // Reavalia a cada minuto, caso a pessoa fique com a página aberta
    // bem no horário em que a loja abre ou fecha.
    const interval = setInterval(updateStatus, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-20 text-slate-900 border-b border-slate-100">
      {/* Absolute Decorative elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-mamute-accent/5 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[55%] rounded-full bg-mamute-amber/5 blur-[100px]" />
      
      {/* Visual diagonal lines for architectural construction theme */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text content */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Trust Badge / Regional Anchor */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex self-start items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm"
          >
            <span className="flex items-center text-mamute-accent text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-current mr-1 text-mamute-amber" />
              5/5 estrelas no Google
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="text-slate-600 text-xs font-semibold">Vila Leopoldina - SP</span>
          </motion.div>

          {/* Core SEO-rich Impact Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-mamute-dark tracking-tight"
          >
            Tudo em Materiais de Construção, Reforma e{" "}
            <span className="text-mamute-accent relative inline-block underline decoration-orange-200 underline-offset-4">
              Reparos Rápidos
            </span>{" "}
            na Vila Leopoldina
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-normal"
          >
            Somos o depósito de materiais de construção mais completo da Vila Leopoldina. Da base ao acabamento, oferecemos tudo o que seu reparo ou reforma precisa, com marcas de alto padrão, atendimento ágil e estacionamento gratuito no local.
          </motion.p>

          {/* CTA & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-pulse inline-flex items-center justify-center space-x-3 bg-mamute-green hover:bg-emerald-600 active:scale-95 text-white font-sans font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-green-100 transition-all duration-200 group text-center"
            >
              <MessageSquare className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
              <span>Chamar no WhatsApp</span>
            </a>
            
            <a
              href="#location"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-100 border border-slate-200 active:scale-95 text-slate-800 font-sans font-semibold text-base px-6 py-4 rounded-xl shadow-sm transition-all duration-200 text-center"
            >
              <span>Ver Localização</span>
            </a>
          </motion.div>

          {/* Quick value indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 border-t border-slate-200 pt-6 mt-4"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-mamute-accent w-4.5 h-4.5 shrink-0" />
              <span className="text-sm font-sans text-slate-700 font-medium">Variedade Completa</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-mamute-accent w-4.5 h-4.5 shrink-0" />
              <span className="text-sm font-sans text-slate-700 font-medium">Marcas de Confiança</span>
            </div>
            <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
              <Clock className="text-mamute-accent w-4.5 h-4.5 shrink-0" />
              <span className="text-sm font-sans text-slate-700 font-medium">Atendimento Expresso</span>
            </div>
          </motion.div>
        </div>

        {/* Right column: Graphic visual showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          {/* Framed Graphic simulating Mamute's specialized setup */}
          <div className="relative mx-auto max-w-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white flex flex-col select-none">
            {/* Store Top bar decoration */}
            <div className="bg-slate-50 p-3.5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <span
                className={`flex items-center gap-1.5 text-[10px] font-mono tracking-widest font-bold uppercase transition-colors duration-300 ${
                  isStoreOpen ? "text-mamute-green" : "text-slate-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isStoreOpen ? "bg-mamute-green animate-pulse" : "bg-slate-300"
                  }`}
                />
                {isStoreOpen ? "Loja Aberta Agora" : "Loja Fechada Agora"}
              </span>
            </div>

            {/* Main Visual Image depicting high quality modern hardware store items / building theme */}
            <div className="relative h-64 sm:h-72 w-full">
              <img 
                src="/images/mamute_store_facade_1781975986919.jpg" 
                alt="Mamute Casa e Construção Vila Leopoldina"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Overlay Logo */}
              <div className="absolute bottom-4 left-4 flex items-center bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-100 shadow-lg">
                <MamuteLogo variant="horizontal" mode="on-white" size={35} className="scale-90" />
              </div>
            </div>

            {/* Local Features overlay card inside graphic */}
            <div className="bg-white p-6 space-y-4">
              <div className="text-xs font-sans text-slate-600 font-medium">
                Parcerias com as marcas líderes do mercado nacional para garantir o melhor resultado:
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-semibold bg-slate-50 border border-slate-100 py-1 px-2.5 rounded text-slate-700">
                  Astra / Krona / Tigre
                </span>
                <span className="text-[11px] font-semibold bg-slate-50 border border-slate-100 py-1 px-2.5 rounded text-slate-700">
                  Lorenzetti
                </span>
                <span className="text-[11px] font-semibold bg-slate-50 border border-slate-100 py-1 px-2.5 rounded text-slate-700">
                  Vedacit
                </span>
                <span className="text-[11px] font-semibold bg-slate-50 border border-slate-100 py-1 px-2.5 rounded text-slate-700">
                  Qualyvinil
                </span>
                <span className="text-[11px] font-semibold bg-slate-50 border border-slate-100 py-1 px-2.5 rounded text-slate-700">
                  Coral
                </span>
                <span className="text-[11px] font-semibold bg-slate-50 border border-slate-100 py-1 px-2.5 rounded text-slate-700">
                  Tramontina
                </span>
                <span className="text-[11px] font-semibold bg-slate-50 border border-slate-100 py-1 px-2.5 rounded text-slate-700">
                  MecTronic
                </span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center justify-between text-xs font-sans text-slate-600">
                <div>
                  <div className="font-bold text-slate-900">Rua Guaipá, 443</div>
                  <div className="text-slate-500">Estacionamento Grátis</div>
                </div>
                <div className="bg-mamute-accent text-white px-3 py-1.5 rounded-lg font-bold">
                  Conheça a loja!
                </div>
              </div>
            </div>
          </div>

          {/* Subtle glow behind the graphic */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-200 to-amber-200 opacity-30 blur-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
