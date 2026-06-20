import { useState, useEffect } from "react";
import { MessageSquare, X, Smartphone } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds for better engagement
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = "https://wa.me/551123642867?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+atendimento+sobre+materiais+para+reparo.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Friendly Conversational Speech Bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-[280px] bg-white text-mamute-dark p-4 rounded-2xl shadow-2xl border border-gray-150 relative animate-bounce-short">
          {/* Close button */}
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none p-0.5"
            aria-label="Fecar ajuda"
          >
            <X size={14} />
          </button>
          
          <div className="flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-mamute-green self-center animate-ping mt-1 shrink-0" />
            <div>
              <p className="text-xs font-bold text-mamute-dark leading-none">
                Mamute Consultas
              </p>
              <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                Olá! Quer fazer um orçamento na <strong>Mamute - Vila Leopoldina</strong>? Fale com a gente!
              </p>
            </div>
          </div>
          
          <div className="mt-2.5 flex justify-end">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowTooltip(false)}
              className="text-[10px] sm:text-xs font-bold bg-mamute-green text-white py-1 px-3 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Iniciar Chat
            </a>
          </div>

          {/* Chat Bubble Arrow pin */}
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-gray-150 transform rotate-45" />
        </div>
      )}

      {/* Floating Action Circle Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-mamute-green hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        title="Chamar no WhatsApp do Mamute"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
}
