import { motion } from "motion/react";
import { Zap, HelpCircle, Car, CheckCircle } from "lucide-react";

export default function Features() {
  const differentials = [
    {
      icon: <Zap className="w-8 h-8 text-mamute-accent" />,
      title: "1. Compra Rápida e Sem Filas",
      description: "Sabemos que tempo é dinheiro na sua obra ou reparo. Nosso atendimento é focado em agilidade, garantindo que você compre rapidamente e retire seus itens sem burocracia ou demoras desnecessárias.",
      phrase: "Chega de esperar em longas filas de home centers!"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-mamute-accent fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "2. Variedade Surpreendente",
      description: "Um mix surpreendente de produtos para sua manutenção, reforma ou acabamento. De miudezas como parafusos avulsos e veda-rosca a grandes lotes de cimento, tintas e fiação elétrica. Você encontra de tudo.",
      phrase: "O mix mais forte da Vila Leopoldina."
    },
    {
      icon: <Car className="w-8 h-8 text-mamute-accent" />,
      title: "3. Estacionamento Gratuito",
      description: "Nada de ficar dando voltas na quadra ou gastar com estacionamento privado. A Mamute oferece estacionamento próprio, exclusivo e gratuito no local para que você pare com facilidade e segurança.",
      phrase: "Pare na porta, carregue e siga viagem!"
    }
  ];

  return (
    <section id="differentials" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.15em] text-mamute-accent bg-mamute-accent/10 px-3 py-1.5 rounded-full inline-block mb-3"
          >
            Por Que Escolher a Mamute?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-mamute-dark tracking-tight"
          >
            Todo o Suporte para Sua Casa ou Obra de Forma Prática, Rápida e Confiável
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-mamute-accent w-24 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-[#f9fafb] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-mamute-accent/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 transition-all duration-350 group-hover:bg-mamute-accent group-hover:text-white transform group-hover:-translate-y-1">
                  <div className="transition-colors duration-300 group-hover:text-white">
                    {diff.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-mamute-dark mb-3.5 group-hover:text-mamute-accent transition-colors">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                  {diff.description}
                </p>
              </div>

              {/* Bottom tag phrase */}
              <div className="mt-4 pt-4 border-t border-gray-200/60 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-mamute-accent shrink-0" />
                <span className="text-xs font-semibold text-gray-700 font-sans">
                  {diff.phrase}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic visual hook to build trust */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-mamute-dark text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg"
        >
          <div className="absolute top-0 right-[-10%] w-[40%] h-[120%] bg-mamute-accent/15 rotate-12 blur-xl" />
          
          <div className="space-y-2 relative z-10 text-center sm:text-left">
            <h4 className="font-display font-bold text-base sm:text-lg">
              Faltou material bem na metade do trabalho?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-xl">
              Não fique esperando semanas. Dê uma passada rápida na Mamute da Rua Guaipá ou nos envie uma mensagem. Seus materiais podem ser separados na hora para retirada rápida!
            </p>
          </div>

          <a
            href="https://wa.me/551123642867?text=Oi%21+Preciso+saber+se+voc%C3%AAs+t%C3%AAm+materiais+para+retirar+agora."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 bg-mamute-accent hover:bg-mamute-accent-hover text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl whitespace-nowrap active:scale-95 transition-all shadow-md shrink-0"
          >
            Consultar Estoque no WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
