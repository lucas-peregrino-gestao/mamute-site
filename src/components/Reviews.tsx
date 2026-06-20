import { Star, Quote, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      name: "Renato Albuquerque",
      role: "Cliente",
      rating: 5,
      text: "Atendimento excepcional! Precisei de um reparo de emergência com registro de banheiro e o atendente foi extremamente prestativo, me ajudando a encontrar exatamente a rosca certa. Além disso, o preço é muito justo e o estacionamento facilita demais na hora de parar.",
      date: "Há 1 mês",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Mariana Vasconcellos",
      role: "Cliente",
      rating: 5,
      text: "Além da loja ser bem completa, o atendimento é excelente. Eles buscam entender o que vc procura, e dão um jeito de conseguir se não tiver, só para te atender.",
      date: "Há 2 semanas",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Felipe G. Santos",
      role: "Cliente",
      rating: 5,
      text: "O pessoal do Mamute salva minhas obras aqui na região. O diferencial é que além do preço competitivo em materiais e reparos, eles respondem muito rápido pelo WhatsApp. Não perco tempo em fila.",
      date: "Há 3 semanas",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Maria Clara",
      role: "Cliente",
      rating: 5,
      text: "Depósito de materiais fácil e preço bom, encontrei todos os materiais de construção que precisava. Fácil acesso na Vila Leopoldina.",
      date: "Há 3 meses",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const googleStoreLink = "https://share.google/WOuYJP5cDtY3ATcFh";

  return (
    <section id="reviews" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with Google rating badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-mamute-accent bg-mamute-accent/10 px-3 py-1.5 rounded-full inline-block mb-3">
              Credibilidade Comprovada
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-mamute-dark tracking-tight">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-sans">
              Feedback real dos moradores da Vila Leopoldina e profissionais da construção que confiam no Mamute.
            </p>
          </div>

          {/* Large badge reflecting Google Store Metrics */}
          <a
            href={googleStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#f9fafb] p-4 rounded-2xl border border-gray-150 hover:border-mamute-amber hover:shadow-md transition-all shrink-0 cursor-pointer text-left"
          >
            {/* Google Logo / Icon block */}
            <div className="bg-white p-2.5 rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.62-.63-1.01-1.38-1.21-2.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-extrabold text-lg text-mamute-dark">5.0</span>
                <div className="flex text-mamute-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-sans text-gray-500 font-semibold flex items-center gap-1">
                Ver avaliações oficiais no Google <ExternalLink size={11} />
              </p>
            </div>
          </a>
        </div>

        {/* Reviews Horizontal/Bento Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f9fafb] border border-gray-100 p-6 sm:p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Quote icon watermark */}
              <div className="absolute right-6 top-6 text-gray-200">
                <Quote size={40} className="opacity-40" />
              </div>

              <div>
                {/* Score Stars */}
                <div className="flex text-mamute-amber mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Review Person Header */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60 mt-auto">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover shadow-sm bg-gray-200"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-mamute-dark">
                    {rev.name}
                  </h4>
                  <p className="font-sans text-xs text-mamute-accent font-semibold">
                    {rev.role} • <span className="text-gray-400 font-normal">{rev.date}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge with actual link */}
        <div className="mt-12 text-center bg-gray-50 p-6 rounded-2xl border border-gray-150 max-w-2xl mx-auto">
          <p className="text-sm font-sans text-gray-600">
            Agradecemos a todos os nossos clientes e amigos locais da Vila Leopoldina pela confiança constante que nos permite entregar o melhor serviço de bairro em São Paulo.
          </p>
          <a
            href={googleStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-mamute-accent hover:text-mamute-accent-hover transition-colors"
          >
            <span>Confira nossa página e fotos da loja no Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
